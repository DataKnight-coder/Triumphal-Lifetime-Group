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
        }

        register_rest_route('tlg/v1', $route, $args);
    }
}

function tlg_rest_settings() {
    return rest_ensure_response(tlg_get_global_settings());
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
            'publishedAt' => get_the_date(DATE_ATOM, $post),
            'image' => tlg_post_image($post->ID),
            'category' => tlg_meta($post->ID, 'category'),
            'seoTitle' => tlg_meta($post->ID, 'seo_title'),
            'seoDescription' => tlg_meta($post->ID, 'seo_description'),
            'body' => tlg_post_body($post),
            'order' => (int) tlg_meta($post->ID, 'display_order'),
        ];
    }, $posts));
}
