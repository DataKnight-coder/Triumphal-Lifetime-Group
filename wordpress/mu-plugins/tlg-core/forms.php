<?php

if (!defined('ABSPATH')) {
    exit;
}

function tlg_enquiry_services() {
    return [
        'HR & Business Consulting', 'Real Estate Advisory', 'Global Education Advisory',
        'Global Mobility Services', 'Information Technology', 'Digital Products & E-commerce',
        'Charity Foundation', 'General Enquiry',
    ];
}

function tlg_text_length($value) {
    return function_exists('mb_strlen') ? mb_strlen($value) : strlen($value);
}

function tlg_register_form_routes() {
    register_rest_route('tlg/v1', '/enquiries', [
        'methods' => WP_REST_Server::CREATABLE,
        'callback' => 'tlg_rest_submit_enquiry',
        'permission_callback' => '__return_true',
    ]);
}

function tlg_form_error($code, $message, $status) {
    return new WP_Error($code, $message, ['status' => $status]);
}

function tlg_verify_turnstile($token, $remote_ip, $secret) {
    $response = wp_safe_remote_post('https://challenges.cloudflare.com/turnstile/v0/siteverify', [
        'timeout' => 10,
        'redirection' => 0,
        'body' => [
            'secret' => $secret,
            'response' => $token,
            'remoteip' => $remote_ip,
        ],
    ]);

    if (is_wp_error($response)) {
        return false;
    }

    $body = json_decode(wp_remote_retrieve_body($response), true);
    return is_array($body) && !empty($body['success']);
}

function tlg_enquiry_rate_limit_key($remote_ip, $email) {
    return 'tlg_enquiry_' . hash_hmac('sha256', strtolower($email) . '|' . $remote_ip, wp_salt('nonce'));
}

function tlg_record_consent_audit($reference, $email, $service, $remote_ip, $retention_days) {
    $now = time();
    $cutoff = $now - (DAY_IN_SECONDS * absint($retention_days));
    $records = get_option('tlg_enquiry_consent_audit', []);
    $records = is_array($records) ? array_values(array_filter($records, function ($record) use ($cutoff) {
        return isset($record['timestamp']) && (int) $record['timestamp'] >= $cutoff;
    })) : [];

    $records[] = [
        'reference' => sanitize_text_field($reference),
        'timestamp' => $now,
        'consent' => true,
        'service' => sanitize_text_field($service),
        'email_hash' => hash_hmac('sha256', strtolower($email), wp_salt('auth')),
        'ip_hash' => hash_hmac('sha256', $remote_ip, wp_salt('auth')),
    ];

    update_option('tlg_enquiry_consent_audit', array_slice($records, -250), false);
}

function tlg_rest_submit_enquiry($request) {
    $settings = tlg_get_form_settings();
    if (empty($settings['destination_email']) || empty($settings['turnstile_secret'])) {
        return tlg_form_error('tlg_form_not_configured', 'The enquiry service is temporarily unavailable.', 503);
    }

    $origin = esc_url_raw($request->get_header('origin'), ['https']);
    if (!$origin || untrailingslashit($origin) !== untrailingslashit($settings['allowed_origin'])) {
        return tlg_form_error('tlg_origin_rejected', 'This submission origin is not permitted.', 403);
    }

    $data = $request->get_json_params();
    $data = is_array($data) ? $data : [];
    if (!empty($data['company_website'])) {
        return tlg_form_error('tlg_spam_rejected', 'The submission could not be accepted.', 400);
    }

    $name = sanitize_text_field($data['name'] ?? '');
    $email = sanitize_email($data['email'] ?? '');
    $phone = sanitize_text_field($data['phone'] ?? '');
    $country = sanitize_text_field($data['country'] ?? '');
    $service = sanitize_text_field($data['service'] ?? '');
    $message = sanitize_textarea_field($data['message'] ?? '');
    $form_type = in_array($data['formType'] ?? '', ['contact', 'consultation'], true) ? $data['formType'] : 'contact';
    $consent = filter_var($data['consent'] ?? false, FILTER_VALIDATE_BOOLEAN);
    $turnstile_token = sanitize_text_field($data['turnstile_token'] ?? ($data['turnstileToken'] ?? ''));

    if (tlg_text_length($name) < 2 || tlg_text_length($name) > 120 || !is_email($email)) {
        return tlg_form_error('tlg_invalid_identity', 'Enter a valid name and email address.', 422);
    }
    if (($phone && (tlg_text_length($phone) < 7 || tlg_text_length($phone) > 50)) || tlg_text_length($country) < 2 || tlg_text_length($country) > 100) {
        return tlg_form_error('tlg_invalid_contact', 'Enter a valid phone number and country.', 422);
    }
    if (!in_array($service, tlg_enquiry_services(), true) || tlg_text_length($message) < 10 || tlg_text_length($message) > 3000) {
        return tlg_form_error('tlg_invalid_enquiry', 'Choose a valid service and provide a message between 10 and 5,000 characters.', 422);
    }
    if (!$consent) {
        return tlg_form_error('tlg_consent_required', 'Privacy consent is required.', 422);
    }

    $remote_ip = sanitize_text_field($_SERVER['REMOTE_ADDR'] ?? 'unknown');
    $rate_key = tlg_enquiry_rate_limit_key($remote_ip, $email);
    $attempts = (int) get_transient($rate_key);
    if ($attempts >= 5) {
        return tlg_form_error('tlg_rate_limited', 'Too many submissions. Please wait before trying again.', 429);
    }
    set_transient($rate_key, $attempts + 1, 15 * MINUTE_IN_SECONDS);

    if (!$turnstile_token || !tlg_verify_turnstile($turnstile_token, $remote_ip, $settings['turnstile_secret'])) {
        return tlg_form_error('tlg_turnstile_failed', 'Security verification failed. Please try again.', 422);
    }

    $reference = 'TLG-' . gmdate('Ymd') . '-' . strtoupper(wp_generate_password(8, false, false));
    $subject = sprintf('[%s] %s enquiry: %s', $reference, ucfirst($form_type), $service);
    $body = implode("\n", [
        'Reference: ' . $reference,
        'Form: ' . ucfirst($form_type),
        'Name: ' . $name,
        'Email: ' . $email,
        'Phone / WhatsApp: ' . $phone,
        'Country: ' . $country,
        'Service: ' . $service,
        'Privacy consent: Yes',
        'Submitted (UTC): ' . gmdate('c'),
        '',
        'Message:',
        $message,
    ]);
    $headers = ['Reply-To: ' . $name . ' <' . $email . '>'];

    if (!wp_mail($settings['destination_email'], $subject, $body, $headers)) {
        return tlg_form_error('tlg_delivery_failed', 'Your enquiry could not be delivered. Please use the published email or phone contact.', 502);
    }

    tlg_record_consent_audit($reference, $email, $service, $remote_ip, $settings['retention_days']);
    return new WP_REST_Response(['success' => true, 'reference' => $reference, 'message' => 'Your enquiry has been sent.'], 201);
}

add_action('rest_api_init', 'tlg_register_form_routes');
