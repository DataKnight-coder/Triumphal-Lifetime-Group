<?php

if (!defined('ABSPATH')) {
    exit;
}

function tlg_global_setting_fields() {
    return [
        'company_name' => ['Company name', 'text', 'The public company name used throughout the website.'],
        'general_email' => ['General email', 'email', 'The main public contact email address.'],
        'primary_phone' => ['Primary phone', 'text', 'Include the international dialling code.'],
        'whatsapp' => ['WhatsApp', 'text', 'Use an international number without a wa.me URL.'],
        'address' => ['Address', 'textarea', 'Leave blank until a verified public office address is available.'],
        'facebook' => ['Facebook URL', 'url', 'Full public profile URL.'],
        'linkedin' => ['LinkedIn URL', 'url', 'Full public profile URL.'],
        'instagram' => ['Instagram URL', 'url', 'Full public profile URL.'],
        'copyright_text' => ['Copyright text', 'text', 'Text displayed after the company name and year.'],
        'seo_description' => ['SEO description', 'textarea', 'Default search and social description.'],
        'seo_og_image' => ['Default social image URL', 'url', 'Choose an image from Media and paste its URL, or leave blank.'],
    ];
}

function tlg_verified_setting_defaults() {
    return [
        'company_name' => 'Triumphal Lifetime Group',
        'general_email' => 'info@triumphallifetimegroup.com',
        'primary_phone' => '+1 647 774 0409',
        'whatsapp' => '+2349117777759',
        'address' => '',
        'facebook' => 'https://www.facebook.com/triuphalifetimeagency.hr',
        'linkedin' => 'https://www.linkedin.com/company/triumphal-lifetime/',
        'instagram' => 'https://www.instagram.com/triumphallifetimehr/',
        'copyright_text' => 'All rights reserved.',
        'seo_description' => 'A diversified business network providing structural, operational, and strategic support across multiple high-impact sectors globally.',
        'seo_og_image' => '',
    ];
}

function tlg_get_global_settings() {
    $saved = get_option('tlg_global_settings', []);
    return array_merge(tlg_verified_setting_defaults(), is_array($saved) ? $saved : []);
}

function tlg_sanitize_global_settings($input) {
    $input = is_array($input) ? $input : [];
    $clean = [];

    foreach (tlg_global_setting_fields() as $key => $definition) {
        $value = isset($input[$key]) ? wp_unslash($input[$key]) : '';
        $type = $definition[1];

        if ($type === 'email') {
            $clean[$key] = sanitize_email($value);
        } elseif ($type === 'url') {
            $clean[$key] = esc_url_raw($value, ['http', 'https']);
        } elseif ($type === 'textarea') {
            $clean[$key] = sanitize_textarea_field($value);
        } else {
            $clean[$key] = sanitize_text_field($value);
        }
    }

    return $clean;
}

function tlg_sanitize_build_hook($value) {
    $url = esc_url_raw(wp_unslash($value), ['https']);
    return $url && wp_http_validate_url($url) ? $url : '';
}

function tlg_form_setting_defaults() {
    return [
        'destination_email' => '',
        'turnstile_site_key' => '',
        'turnstile_secret' => '',
        'allowed_origin' => 'https://triumphallifetimegroup.com',
        'retention_days' => 90,
    ];
}

function tlg_get_form_settings() {
    $saved = get_option('tlg_form_settings', []);
    return array_merge(tlg_form_setting_defaults(), is_array($saved) ? $saved : []);
}

function tlg_sanitize_form_settings($input) {
    $input = is_array($input) ? $input : [];
    $existing = tlg_get_form_settings();
    $secret = isset($input['turnstile_secret']) ? sanitize_text_field(wp_unslash($input['turnstile_secret'])) : '';
    $retention_days = isset($input['retention_days']) ? absint($input['retention_days']) : 90;

    return [
        'destination_email' => sanitize_email(wp_unslash($input['destination_email'] ?? '')),
        'turnstile_site_key' => sanitize_text_field(wp_unslash($input['turnstile_site_key'] ?? '')),
        'turnstile_secret' => $secret !== '' ? $secret : $existing['turnstile_secret'],
        'allowed_origin' => esc_url_raw(wp_unslash($input['allowed_origin'] ?? ''), ['https']),
        'retention_days' => min(365, max(30, $retention_days)),
    ];
}

function tlg_register_settings() {
    register_setting('tlg_global_settings_group', 'tlg_global_settings', [
        'type' => 'array',
        'sanitize_callback' => 'tlg_sanitize_global_settings',
        'default' => tlg_verified_setting_defaults(),
        'show_in_rest' => false,
    ]);

    register_setting('tlg_publishing_group', 'tlg_netlify_build_hook', [
        'type' => 'string',
        'sanitize_callback' => 'tlg_sanitize_build_hook',
        'default' => '',
        'show_in_rest' => false,
    ]);

    register_setting('tlg_forms_group', 'tlg_form_settings', [
        'type' => 'array',
        'sanitize_callback' => 'tlg_sanitize_form_settings',
        'default' => tlg_form_setting_defaults(),
        'show_in_rest' => false,
    ]);
}

function tlg_render_global_settings_page() {
    if (!current_user_can('manage_options')) {
        return;
    }

    $settings = tlg_get_global_settings();
    ?>
    <div class="wrap">
        <h1>TLG Global Settings</h1>
        <p>These verified values power the public website. Empty fields remain empty on the frontend.</p>
        <form method="post" action="options.php">
            <?php settings_fields('tlg_global_settings_group'); ?>
            <table class="form-table" role="presentation">
                <?php foreach (tlg_global_setting_fields() as $key => $definition) : ?>
                    <?php [$label, $type, $description] = $definition; ?>
                    <tr>
                        <th scope="row"><label for="tlg-<?php echo esc_attr($key); ?>"><?php echo esc_html($label); ?></label></th>
                        <td>
                            <?php if ($type === 'textarea') : ?>
                                <textarea class="large-text" rows="4" id="tlg-<?php echo esc_attr($key); ?>" name="tlg_global_settings[<?php echo esc_attr($key); ?>]"><?php echo esc_textarea($settings[$key]); ?></textarea>
                            <?php else : ?>
                                <input class="regular-text" type="<?php echo esc_attr($type); ?>" id="tlg-<?php echo esc_attr($key); ?>" name="tlg_global_settings[<?php echo esc_attr($key); ?>]" value="<?php echo esc_attr($settings[$key]); ?>">
                            <?php endif; ?>
                            <p class="description"><?php echo esc_html($description); ?></p>
                        </td>
                    </tr>
                <?php endforeach; ?>
            </table>
            <?php submit_button('Save Global Settings'); ?>
        </form>
    </div>
    <?php
}

function tlg_render_publishing_page() {
    if (!current_user_can('manage_options')) {
        return;
    }
    ?>
    <div class="wrap">
        <h1>TLG Publishing</h1>
        <p>Enter the private Netlify build hook for the production frontend. This value is stored in WordPress and is never returned by the TLG REST API.</p>
        <form method="post" action="options.php">
            <?php settings_fields('tlg_publishing_group'); ?>
            <table class="form-table" role="presentation">
                <tr>
                    <th scope="row"><label for="tlg-netlify-build-hook">Netlify build hook</label></th>
                    <td>
                        <input class="large-text" type="url" id="tlg-netlify-build-hook" name="tlg_netlify_build_hook" value="<?php echo esc_attr(get_option('tlg_netlify_build_hook', '')); ?>" autocomplete="off">
                        <p class="description">HTTPS only. Saving content queues one build after a short debounce window.</p>
                    </td>
                </tr>
            </table>
            <?php submit_button('Save Publishing Settings'); ?>
        </form>
    </div>
    <?php
}

function tlg_render_forms_page() {
    if (!current_user_can('manage_options')) {
        return;
    }

    $settings = tlg_get_form_settings();
    $secret_configured = !empty($settings['turnstile_secret']);
    ?>
    <div class="wrap">
        <h1>TLG Enquiry Forms</h1>
        <p>Configure the business-controlled destination and Cloudflare Turnstile keys. The secret is stored only in WordPress and is never returned by REST.</p>
        <form method="post" action="options.php">
            <?php settings_fields('tlg_forms_group'); ?>
            <table class="form-table" role="presentation">
                <tr>
                    <th scope="row"><label for="tlg-form-destination">Destination email</label></th>
                    <td><input class="regular-text" type="email" id="tlg-form-destination" name="tlg_form_settings[destination_email]" value="<?php echo esc_attr($settings['destination_email']); ?>" required></td>
                </tr>
                <tr>
                    <th scope="row"><label for="tlg-turnstile-site-key">Turnstile site key</label></th>
                    <td><input class="regular-text" type="text" id="tlg-turnstile-site-key" name="tlg_form_settings[turnstile_site_key]" value="<?php echo esc_attr($settings['turnstile_site_key']); ?>" autocomplete="off"></td>
                </tr>
                <tr>
                    <th scope="row"><label for="tlg-turnstile-secret">Turnstile secret</label></th>
                    <td>
                        <input class="regular-text" type="password" id="tlg-turnstile-secret" name="tlg_form_settings[turnstile_secret]" value="" autocomplete="new-password" placeholder="<?php echo $secret_configured ? esc_attr('Configured; leave blank to keep') : esc_attr('Not configured'); ?>">
                        <p class="description">The existing secret is never rendered back into this page.</p>
                    </td>
                </tr>
                <tr>
                    <th scope="row"><label for="tlg-form-origin">Allowed public origin</label></th>
                    <td><input class="regular-text" type="url" id="tlg-form-origin" name="tlg_form_settings[allowed_origin]" value="<?php echo esc_attr($settings['allowed_origin']); ?>" required></td>
                </tr>
                <tr>
                    <th scope="row"><label for="tlg-form-retention">Consent audit retention</label></th>
                    <td><input class="small-text" type="number" min="30" max="365" id="tlg-form-retention" name="tlg_form_settings[retention_days]" value="<?php echo esc_attr((string) $settings['retention_days']); ?>"> days</td>
                </tr>
            </table>
            <?php submit_button('Save Form Settings'); ?>
        </form>
    </div>
    <?php
}
