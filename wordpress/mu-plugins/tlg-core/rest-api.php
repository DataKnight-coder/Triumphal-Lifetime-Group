<?php

if (!defined('ABSPATH')) {
    exit;
}

function tlg_register_rest_routes() {
    $routes = [
        '/settings' => 'tlg_rest_settings',
        '/leadership' => 'tlg_rest_leadership',
        '/services' => 'tlg_rest_services',
        '/careers' => 'tlg_rest_careers',
        '/faqs' => 'tlg_rest_faqs',
        '/insights' => 'tlg_rest_insights',
        '/pages' => 'tlg_rest_page',
        '/locations' => 'tlg_rest_locations',
        '/foundation' => 'tlg_rest_foundation',
    ];

    foreach ($routes as $route => $callback) {
        $args = [
            'methods' => WP_REST_Server::READABLE,
            'callback' => $callback,
            'permission_callback' => '__return_true',
        ];

        if ($route === '/faqs') {
            $args['args'] = [
                'division' => [
                    'required' => true,
                    'sanitize_callback' => 'tlg_sanitize_division',
                    'validate_callback' => function ($value) {
                        return in_array(sanitize_key($value), array_diff(tlg_allowed_divisions(), ['global']), true);
                    },
                ],
            ];
        } elseif ($route === '/pages') {
            $args['args'] = [
                'key' => [
                    'required' => true,
                    'sanitize_callback' => 'tlg_sanitize_page_key',
                    'validate_callback' => function ($value) {
                        return in_array(sanitize_key($value), tlg_page_keys(), true);
                    },
                ],
            ];
        }

        register_rest_route('tlg/v1', $route, $args);
    }
}

function tlg_rest_settings() {
    $settings = tlg_get_global_settings();
    $form_settings = function_exists('tlg_get_form_settings') ? tlg_get_form_settings() : [];
    $settings['turnstile_site_key'] = $form_settings['turnstile_site_key'] ?? '';
    return rest_ensure_response($settings);
}

function tlg_query_content($post_type, $meta_query = []) {
    return get_posts([
        'post_type' => $post_type,
        'post_status' => 'publish',
        'numberposts' => -1,
        'meta_query' => $meta_query,
        'meta_key' => '_tlg_display_order',
        'orderby' => ['meta_value_num' => 'ASC', 'title' => 'ASC', 'ID' => 'ASC'],
        'order' => 'ASC',
        'suppress_filters' => false,
    ]);
}

function tlg_post_body($post) {
    return wp_kses_post(apply_filters('the_content', $post->post_content));
}

function tlg_post_image($post_id) {
    $url = get_the_post_thumbnail_url($post_id, 'full');
    return $url ? esc_url_raw($url) : null;
}

function tlg_meta($post_id, $key) {
    return get_post_meta($post_id, '_tlg_' . $key, true);
}

function tlg_meta_lines($post_id, $key) {
    $lines = preg_split('/\r\n|\r|\n/', (string) tlg_meta($post_id, $key));
    return array_values(array_filter(array_map('sanitize_text_field', $lines)));
}

function tlg_rest_leadership() {
    $posts = tlg_query_content('tlg_leadership', [[
        'key' => '_tlg_status',
        'value' => 'active',
    ]]);

    return rest_ensure_response(array_map(function ($post) {
        return [
            'name' => get_the_title($post),
            'slug' => $post->post_name,
            'jobTitle' => tlg_meta($post->ID, 'job_title'),
            'department' => tlg_meta($post->ID, 'department'),
            'leadershipGroup' => tlg_meta($post->ID, 'leadership_group'),
            'coreExpertise' => tlg_meta_lines($post->ID, 'core_expertise'),
            'qualifications' => tlg_meta_lines($post->ID, 'qualifications'),
            'biography' => tlg_post_body($post),
            'email' => tlg_meta($post->ID, 'email'),
            'linkedin' => tlg_meta($post->ID, 'linkedin'),
            'photo' => tlg_post_image($post->ID),
            'order' => (int) tlg_meta($post->ID, 'display_order'),
        ];
    }, $posts));
}

function tlg_rest_services() {
    $posts = tlg_query_content('tlg_services', [[
        'key' => '_tlg_status',
        'value' => 'active',
    ]]);

    return rest_ensure_response(array_map(function ($post) {
        $benefits = preg_split('/\r\n|\r|\n/', (string) tlg_meta($post->ID, 'key_benefits'));
        return [
            'title' => get_the_title($post),
            'slug' => $post->post_name,
            'shortDescription' => tlg_meta($post->ID, 'short_description'),
            'description' => tlg_post_body($post),
            'image' => tlg_post_image($post->ID),
            'keyBenefits' => array_values(array_filter(array_map('sanitize_text_field', $benefits))),
            'ctaText' => tlg_meta($post->ID, 'cta_text'),
            'ctaUrl' => tlg_meta($post->ID, 'cta_url'),
            'order' => (int) tlg_meta($post->ID, 'display_order'),
            'division' => tlg_meta($post->ID, 'division'),
            'locationText' => tlg_meta($post->ID, 'location_text'),
            'entityText' => tlg_meta($post->ID, 'entity_text'),
            'contactText' => tlg_meta($post->ID, 'contact_text'),
        ];
    }, $posts));
}

function tlg_rest_careers() {
    $posts = tlg_query_content('tlg_careers', [[
        'key' => '_tlg_job_status',
        'value' => 'open',
    ]]);

    return rest_ensure_response(array_map(function ($post) {
        return [
            'title' => get_the_title($post),
            'slug' => $post->post_name,
            'department' => tlg_meta($post->ID, 'department'),
            'location' => tlg_meta($post->ID, 'location'),
            'employmentType' => tlg_meta($post->ID, 'employment_type'),
            'description' => tlg_post_body($post),
            'applicationUrl' => tlg_meta($post->ID, 'application_url'),
            'status' => 'open',
            'closingDate' => tlg_meta($post->ID, 'closing_date') ?: null,
            'order' => (int) tlg_meta($post->ID, 'display_order'),
        ];
    }, $posts));
}

function tlg_rest_faqs($request) {
    $division = $request->get_param('division');
    if (!$division || !in_array($division, array_diff(tlg_allowed_divisions(), ['global']), true)) {
        return new WP_Error('tlg_invalid_division', 'A valid non-global division is required.', ['status' => 400]);
    }

    $posts = tlg_query_content('tlg_faqs', [
        'relation' => 'AND',
        ['key' => '_tlg_status', 'value' => 'active'],
        ['key' => '_tlg_division', 'value' => [$division, 'global'], 'compare' => 'IN'],
    ]);

    return rest_ensure_response(array_map(function ($post) {
        return [
            'question' => get_the_title($post),
            'answer' => tlg_post_body($post),
            'division' => tlg_meta($post->ID, 'division'),
            'order' => (int) tlg_meta($post->ID, 'display_order'),
            'slug' => $post->post_name,
        ];
    }, $posts));
}

function tlg_rest_insights() {
    $posts = tlg_query_content('tlg_insights');

    return rest_ensure_response(array_map(function ($post) {
        return [
            'title' => get_the_title($post),
            'slug' => $post->post_name,
            'excerpt' => wp_kses_post(get_the_excerpt($post)),
            'author' => tlg_meta($post->ID, 'author_name') ?: get_the_author_meta('display_name', $post->post_author),
            'reviewer' => tlg_meta($post->ID, 'reviewer_name'),
            'publishedAt' => get_the_date(DATE_ATOM, $post),
            'lastReviewedAt' => tlg_meta($post->ID, 'last_reviewed') ?: null,
            'image' => tlg_post_image($post->ID),
            'category' => tlg_meta($post->ID, 'category'),
            'sources' => array_values(array_filter(array_map(function ($line) {
                $parts = array_map('trim', explode('|', $line, 2));
                $url = isset($parts[1]) ? esc_url_raw($parts[1], ['https']) : '';
                return $parts[0] && $url ? ['name' => sanitize_text_field($parts[0]), 'url' => $url] : null;
            }, tlg_meta_lines($post->ID, 'sources')))),
            'relatedDivision' => tlg_meta($post->ID, 'related_division'),
            'seoTitle' => tlg_meta($post->ID, 'seo_title'),
            'seoDescription' => tlg_meta($post->ID, 'seo_description'),
            'body' => tlg_post_body($post),
            'order' => (int) tlg_meta($post->ID, 'display_order'),
        ];
    }, $posts));
}

function tlg_rest_page($request) {
    $key = tlg_sanitize_page_key($request->get_param('key'));
    $posts = get_posts([
        'post_type' => 'tlg_pages',
        'post_status' => 'publish',
        'numberposts' => 1,
        'meta_query' => [
            'relation' => 'AND',
            ['key' => '_tlg_page_key', 'value' => $key],
            ['key' => '_tlg_status', 'value' => 'active'],
        ],
        'orderby' => ['ID' => 'ASC'],
        'suppress_filters' => false,
    ]);

    if (!$posts) {
        return new WP_Error('tlg_page_not_found', 'The requested page content is not published.', ['status' => 404]);
    }

    $post = $posts[0];
    $fields = [];
    foreach (array_keys(tlg_meta_definitions()['tlg_pages']) as $field) {
        if (!in_array($field, ['page_key', 'status', 'display_order'], true)) {
            $fields[$field] = tlg_meta($post->ID, $field);
        }
    }

    return rest_ensure_response([
        'key' => $key,
        'title' => get_the_title($post),
        'body' => tlg_post_body($post),
        'heroImage' => tlg_post_image($post->ID),
        'fields' => $fields,
        'modifiedAt' => get_post_modified_time(DATE_ATOM, true, $post),
    ]);
}

function tlg_rest_locations() {
    $posts = tlg_query_content('tlg_locations', [[
        'key' => '_tlg_status',
        'value' => 'active',
    ]]);

    return rest_ensure_response(array_map(function ($post) {
        return [
            'name' => get_the_title($post),
            'slug' => $post->post_name,
            'description' => tlg_post_body($post),
            'country' => tlg_meta($post->ID, 'country'),
            'city' => tlg_meta($post->ID, 'city'),
            'publicLabel' => tlg_meta($post->ID, 'public_label'),
            'address' => tlg_meta($post->ID, 'address'),
            'clientFacing' => tlg_meta($post->ID, 'client_facing') === 'yes',
            'operationalStatus' => tlg_meta($post->ID, 'operational_status'),
            'services' => tlg_meta_lines($post->ID, 'services_available'),
            'email' => tlg_meta($post->ID, 'public_email'),
            'phone' => tlg_meta($post->ID, 'public_phone'),
            'image' => tlg_post_image($post->ID),
            'order' => (int) tlg_meta($post->ID, 'display_order'),
        ];
    }, $posts));
}

function tlg_rest_foundation() {
    $posts = tlg_query_content('tlg_foundation', [[
        'key' => '_tlg_status',
        'value' => 'active',
    ]]);

    return rest_ensure_response(array_map(function ($post) {
        return [
            'title' => get_the_title($post),
            'slug' => $post->post_name,
            'description' => tlg_post_body($post),
            'type' => tlg_meta($post->ID, 'item_type'),
            'location' => tlg_meta($post->ID, 'location'),
            'year' => (int) tlg_meta($post->ID, 'year'),
            'image' => tlg_post_image($post->ID),
            'order' => (int) tlg_meta($post->ID, 'display_order'),
        ];
    }, $posts));
}
