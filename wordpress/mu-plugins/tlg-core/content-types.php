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
        'tlg_pages'      => ['Page Content', 'Fixed Page', 'site-pages', 'dashicons-admin-page', ['title', 'editor', 'thumbnail', 'custom-fields']],
        'tlg_locations'  => ['Locations', 'Location', 'locations', 'dashicons-location-alt', ['title', 'editor', 'thumbnail', 'custom-fields']],
        'tlg_foundation' => ['Foundation Content', 'Foundation Item', 'foundation', 'dashicons-heart', ['title', 'editor', 'thumbnail', 'custom-fields']],
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
            'leadership_group' => ['string', 'tlg_sanitize_leadership_group'],
            'core_expertise' => ['string', 'sanitize_textarea_field'],
            'qualifications' => ['string', 'sanitize_textarea_field'],
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
            'reviewer_name' => ['string', 'sanitize_text_field'],
            'last_reviewed' => ['string', 'tlg_sanitize_date'],
            'sources' => ['string', 'sanitize_textarea_field'],
            'related_division' => ['string', 'tlg_sanitize_optional_division'],
            'seo_title' => ['string', 'sanitize_text_field'],
            'seo_description' => ['string', 'sanitize_textarea_field'],
            'display_order' => ['integer', 'absint'],
        ],
        'tlg_pages' => [
            'page_key' => ['string', 'tlg_sanitize_page_key'],
            'hero_eyebrow' => ['string', 'sanitize_text_field'],
            'hero_title' => ['string', 'sanitize_text_field'],
            'hero_description' => ['string', 'sanitize_textarea_field'],
            'hero_image_alt' => ['string', 'sanitize_text_field'],
            'intro_heading' => ['string', 'sanitize_text_field'],
            'intro_body' => ['string', 'wp_kses_post'],
            'services_heading' => ['string', 'sanitize_text_field'],
            'services_intro' => ['string', 'sanitize_textarea_field'],
            'services_items' => ['string', 'sanitize_textarea_field'],
            'audience_heading' => ['string', 'sanitize_text_field'],
            'audience_body' => ['string', 'sanitize_textarea_field'],
            'audience_items' => ['string', 'sanitize_textarea_field'],
            'positioning_heading' => ['string', 'sanitize_text_field'],
            'positioning_body' => ['string', 'wp_kses_post'],
            'process_heading' => ['string', 'sanitize_text_field'],
            'process_items' => ['string', 'sanitize_textarea_field'],
            'benefits_heading' => ['string', 'sanitize_text_field'],
            'benefits_body' => ['string', 'sanitize_textarea_field'],
            'benefits_items' => ['string', 'sanitize_textarea_field'],
            'future_heading' => ['string', 'sanitize_text_field'],
            'future_body' => ['string', 'sanitize_textarea_field'],
            'future_items' => ['string', 'sanitize_textarea_field'],
            'cta_heading' => ['string', 'sanitize_text_field'],
            'cta_body' => ['string', 'sanitize_textarea_field'],
            'cta_text' => ['string', 'sanitize_text_field'],
            'cta_url' => ['string', 'tlg_sanitize_public_url'],
            'secondary_cta_text' => ['string', 'sanitize_text_field'],
            'secondary_cta_url' => ['string', 'tlg_sanitize_public_url'],
            'disclaimer_heading' => ['string', 'sanitize_text_field'],
            'disclaimer_body' => ['string', 'sanitize_textarea_field'],
            'navigation_items' => ['string', 'sanitize_textarea_field'],
            'division_items' => ['string', 'sanitize_textarea_field'],
            'footer_divisions' => ['string', 'sanitize_textarea_field'],
            'footer_company' => ['string', 'sanitize_textarea_field'],
            'footer_resources' => ['string', 'sanitize_textarea_field'],
            'last_updated' => ['string', 'sanitize_text_field'],
            'seo_title' => ['string', 'sanitize_text_field'],
            'seo_description' => ['string', 'sanitize_textarea_field'],
            'seo_og_image' => ['string', 'esc_url_raw'],
            'display_order' => ['integer', 'absint'],
            'status' => ['string', 'tlg_sanitize_active_status'],
        ],
        'tlg_locations' => [
            'country' => ['string', 'sanitize_text_field'],
            'city' => ['string', 'sanitize_text_field'],
            'public_label' => ['string', 'tlg_sanitize_location_label'],
            'address' => ['string', 'sanitize_textarea_field'],
            'client_facing' => ['string', 'tlg_sanitize_yes_no'],
            'operational_status' => ['string', 'tlg_sanitize_location_status'],
            'services_available' => ['string', 'sanitize_textarea_field'],
            'public_email' => ['string', 'sanitize_email'],
            'public_phone' => ['string', 'sanitize_text_field'],
            'display_order' => ['integer', 'absint'],
            'status' => ['string', 'tlg_sanitize_active_status'],
        ],
        'tlg_foundation' => [
            'item_type' => ['string', 'tlg_sanitize_foundation_item_type'],
            'location' => ['string', 'sanitize_text_field'],
            'year' => ['integer', 'absint'],
            'display_order' => ['integer', 'absint'],
            'status' => ['string', 'tlg_sanitize_active_status'],
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

function tlg_page_keys() {
    return [
        'home', 'about', 'our-story', 'companies', 'hr-consulting', 'real-estate',
        'education', 'global-mobility', 'technology', 'digital-products', 'foundation',
        'global-presence', 'leadership', 'careers', 'contact', 'insights', 'partners',
        'privacy', 'terms', 'disclaimer', 'cookies', 'accessibility', 'refund-policy',
        'site-navigation', 'site-footer',
    ];
}

function tlg_sanitize_page_key($value) {
    $value = sanitize_key($value);
    return in_array($value, tlg_page_keys(), true) ? $value : '';
}

function tlg_sanitize_division($value) {
    $value = sanitize_key($value);
    return in_array($value, tlg_allowed_divisions(), true) ? $value : '';
}

function tlg_sanitize_optional_division($value) {
    $value = sanitize_key($value);
    return $value === '' ? '' : tlg_sanitize_division($value);
}

function tlg_sanitize_leadership_group($value) {
    return in_array($value, ['executive', 'division-head'], true) ? $value : 'division-head';
}

function tlg_sanitize_public_url($value) {
    $value = trim((string) $value);
    if (str_starts_with($value, '/') && !str_starts_with($value, '//')) {
        return sanitize_text_field($value);
    }
    return esc_url_raw($value, ['https']);
}

function tlg_sanitize_location_label($value) {
    $allowed = ['Headquarters', 'Physical Office', 'Registered Office', 'Operating Office', 'Regional Contact', 'Operations', 'Market Served'];
    $value = sanitize_text_field($value);
    return in_array($value, $allowed, true) ? $value : '';
}

function tlg_sanitize_yes_no($value) {
    return $value === 'yes' ? 'yes' : 'no';
}

function tlg_sanitize_location_status($value) {
    return in_array($value, ['active', 'remote', 'planned', 'unconfirmed'], true) ? $value : 'unconfirmed';
}

function tlg_sanitize_foundation_item_type($value) {
    return in_array($value, ['programme', 'impact', 'future'], true) ? $value : 'programme';
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
