<?php

if (!defined('ABSPATH')) {
    exit;
}

function tlg_content_type_definitions() {
    return [
        'tlg_leadership' => ['Leadership', 'Leader', 'leadership', 'dashicons-groups', ['title', 'editor', 'thumbnail', 'custom-fields']],
        'tlg_services'   => ['Services', 'Service', 'services', 'dashicons-clipboard', ['title', 'editor', 'excerpt', 'thumbnail', 'custom-fields']],
        'tlg_careers'    => ['Careers', 'Career', 'careers', 'dashicons-portfolio', ['title', 'editor', 'custom-fields']],
        'tlg_faqs'       => ['FAQs', 'FAQ', 'faqs', 'dashicons-editor-help', ['title', 'editor', 'custom-fields']],
        'tlg_insights'   => ['Insights', 'Insight', 'insights', 'dashicons-welcome-write-blog', ['title', 'editor', 'excerpt', 'author', 'thumbnail', 'custom-fields']],
    ];
}

function tlg_register_content_types() {
    foreach (tlg_content_type_definitions() as $post_type => $definition) {
        [$plural, $singular, $rest_base, $icon, $supports] = $definition;
        register_post_type($post_type, [
            'labels' => [
                'name' => $plural,
                'singular_name' => $singular,
                'add_new_item' => 'Add New ' . $singular,
                'edit_item' => 'Edit ' . $singular,
                'search_items' => 'Search ' . $plural,
                'not_found' => 'No ' . strtolower($plural) . ' found.',
            ],
            'public' => false,
            'show_ui' => true,
            'show_in_menu' => 'tlg-dashboard',
            'show_in_rest' => true,
            'rest_base' => $rest_base,
            'publicly_queryable' => false,
            'exclude_from_search' => true,
            'show_in_nav_menus' => false,
            'has_archive' => false,
            'rewrite' => false,
            'supports' => $supports,
            'menu_icon' => $icon,
            'map_meta_cap' => true,
            'capability_type' => 'post',
        ]);
    }
}

function tlg_meta_definitions() {
    return [
        'tlg_leadership' => [
            'job_title' => ['string', 'sanitize_text_field'],
            'department' => ['string', 'sanitize_text_field'],
            'email' => ['string', 'sanitize_email'],
            'linkedin' => ['string', 'esc_url_raw'],
            'display_order' => ['integer', 'absint'],
            'status' => ['string', 'tlg_sanitize_active_status'],
        ],
        'tlg_services' => [
            'short_description' => ['string', 'sanitize_textarea_field'],
            'key_benefits' => ['string', 'sanitize_textarea_field'],
            'cta_text' => ['string', 'sanitize_text_field'],
            'cta_url' => ['string', 'esc_url_raw'],
            'display_order' => ['integer', 'absint'],
            'division' => ['string', 'sanitize_key'],
            'status' => ['string', 'tlg_sanitize_active_status'],
            'location_text' => ['string', 'sanitize_text_field'],
            'entity_text' => ['string', 'sanitize_textarea_field'],
            'contact_text' => ['string', 'sanitize_text_field'],
        ],
        'tlg_careers' => [
            'department' => ['string', 'sanitize_text_field'],
            'location' => ['string', 'sanitize_text_field'],
            'employment_type' => ['string', 'sanitize_text_field'],
            'application_url' => ['string', 'esc_url_raw'],
            'job_status' => ['string', 'tlg_sanitize_job_status'],
            'closing_date' => ['string', 'tlg_sanitize_date'],
            'display_order' => ['integer', 'absint'],
        ],
        'tlg_faqs' => [
            'division' => ['string', 'tlg_sanitize_division'],
            'display_order' => ['integer', 'absint'],
            'status' => ['string', 'tlg_sanitize_active_status'],
        ],
        'tlg_insights' => [
            'category' => ['string', 'sanitize_text_field'],
            'author_name' => ['string', 'sanitize_text_field'],
            'seo_title' => ['string', 'sanitize_text_field'],
            'seo_description' => ['string', 'sanitize_textarea_field'],
            'display_order' => ['integer', 'absint'],
        ],
    ];
}

function tlg_register_content_meta() {
    foreach (tlg_meta_definitions() as $post_type => $fields) {
        foreach ($fields as $key => $definition) {
            [$type, $sanitize_callback] = $definition;
            register_post_meta($post_type, '_tlg_' . $key, [
                'type' => $type,
                'single' => true,
                'default' => $type === 'integer' ? 0 : '',
                'sanitize_callback' => $sanitize_callback,
                'auth_callback' => function ($allowed, $meta_key, $post_id) {
                    return (bool) $post_id && current_user_can('edit_post', $post_id);
                },
                'show_in_rest' => true,
            ]);
        }
    }
}

function tlg_allowed_divisions() {
    return ['digital-learning', 'education', 'global-mobility', 'hr-consulting', 'real-estate', 'technology', 'global'];
}

function tlg_sanitize_division($value) {
    $value = sanitize_key($value);
    return in_array($value, tlg_allowed_divisions(), true) ? $value : '';
}

function tlg_sanitize_active_status($value) {
    return in_array($value, ['active', 'inactive'], true) ? $value : 'inactive';
}

function tlg_sanitize_job_status($value) {
    return in_array($value, ['open', 'closed'], true) ? $value : 'closed';
}

function tlg_sanitize_date($value) {
    $value = sanitize_text_field($value);
    return preg_match('/^\d{4}-\d{2}-\d{2}$/', $value) ? $value : '';
}
