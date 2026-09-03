<?php
/*
Plugin Name: TLG Core Functionality
Description: Registers Custom Post Types, REST API configurations, Options Pages, and ACF field schemas for the Headless Next.js Frontend.
Author: Antigravity
Version: 1.3
*/

// 1. Register Custom Post Types (headless-only) with internal prefixes and proper rest_base
function tlg_register_custom_post_types() {
    $post_types = [
        'tlg_leadership' => [
            'rest_base' => 'leadership',
            'plural'    => 'Leadership Profiles',
            'singular'  => 'Leadership Profile',
            'icon'      => 'dashicons-groups',
            'supports'  => ['title', 'thumbnail'],
        ],
        'tlg_careers' => [
            'rest_base' => 'careers',
            'plural'    => 'Careers',
            'singular'  => 'Career',
            'icon'      => 'dashicons-portfolio',
            'supports'  => ['title', 'editor'],
        ],
        'tlg_services' => [
            'rest_base' => 'services',
            'plural'    => 'Services',
            'singular'  => 'Service',
            'icon'      => 'dashicons-clipboard',
            'supports'  => ['title', 'editor', 'thumbnail'],
        ],
        'tlg_faqs' => [
            'rest_base' => 'faqs',
            'plural'    => 'FAQs',
            'singular'  => 'FAQ',
            'icon'      => 'dashicons-editor-help',
            'supports'  => ['title'],
        ],
    ];

    foreach ($post_types as $type => $cfg) {
        register_post_type($type, [
            'labels' => [
                'name'          => $cfg['plural'],
                'singular_name' => $cfg['singular'],
                'add_new_item'  => 'Add New ' . $cfg['singular'],
            ],
            // Headless‑only configuration
            'public'              => false,
            'show_ui'             => true,
            'show_in_menu'        => true,
            'show_in_rest'        => true,
            'rest_base'           => $cfg['rest_base'],
            'publicly_queryable'  => false,
            'exclude_from_search' => true,
            'show_in_nav_menus'   => false,
            'has_archive'         => false,
            'rewrite'             => false,
            'supports'            => $cfg['supports'],
            'menu_icon'           => $cfg['icon'],
        ]);
    }
}
add_action('init', 'tlg_register_custom_post_types');

// 2. Register Global Settings Options Page (requires ACF PRO)
function tlg_register_options_page() {
    if (function_exists('acf_add_options_page')) {
        acf_add_options_page([
            'page_title' => 'TLG Global Settings',
            'menu_title' => 'Global Settings',
            'menu_slug'  => 'tlg-global-settings',
            'capability' => 'manage_options',
            'redirect'   => false,
        ]);
    }
}
add_action('acf/init', 'tlg_register_options_page');

// 3. Register Global Settings REST endpoint
function tlg_register_settings_endpoint() {
    register_rest_route('tlg/v1', '/settings', [
        'methods'  => 'GET',
        'callback' => 'tlg_get_global_settings',
        'permission_callback' => '__return_true',
    ]);
}
add_action('rest_api_init', 'tlg_register_settings_endpoint');

function tlg_get_global_settings() {
    // Fail fast if ACF PRO is unavailable
    if (!function_exists('get_field')) {
        return new WP_Error('acf_missing', 'ACF PRO is not installed or active.', ['status' => 503]);
    }

    // Normalise the OG image to a URL string
    $og_image = get_field('seo_og_image', 'option');
    $og_url = '';
    if (is_array($og_image) && isset($og_image['url'])) {
        $og_url = $og_image['url'];
    } elseif (is_numeric($og_image)) {
        $og_url = wp_get_attachment_url($og_image) ?: '';
    } elseif (is_string($og_image)) {
        $og_url = $og_image;
    }

    // Sanitize and return the public fields
    return [
        'company_name'    => sanitize_text_field(get_field('company_name', 'option') ?: ''),
        'general_email'   => sanitize_email(get_field('general_email', 'option') ?: ''),
        'primary_phone'   => sanitize_text_field(get_field('primary_phone', 'option') ?: ''),
        'whatsapp'        => sanitize_text_field(get_field('whatsapp', 'option') ?: ''),
        'address'         => sanitize_textarea_field(get_field('address', 'option') ?: ''),
        'copyright_text'  => sanitize_text_field(get_field('copyright_text', 'option') ?: ''),
        'facebook'        => esc_url_raw(get_field('facebook', 'option') ?: ''),
        'linkedin'        => esc_url_raw(get_field('linkedin', 'option') ?: ''),
        'instagram'       => esc_url_raw(get_field('instagram', 'option') ?: ''),
        'seo_description' => sanitize_textarea_field(get_field('seo_description', 'option') ?: ''),
        'seo_og_image'    => esc_url_raw($og_url),
    ];
}

// 4. Register ACF field groups programmatically
function tlg_register_acf_field_groups() {
    if (!function_exists('acf_add_local_field_group')) return;

    // Global Settings group
    acf_add_local_field_group([
        'key' => 'group_global_settings',
        'title' => 'Global Settings',
        'fields' => [
            ['key' => 'field_company_name', 'label' => 'Company Name', 'name' => 'company_name', 'type' => 'text'],
            ['key' => 'field_general_email', 'label' => 'General Email', 'name' => 'general_email', 'type' => 'email'],
            ['key' => 'field_primary_phone', 'label' => 'Primary Phone', 'name' => 'primary_phone', 'type' => 'text'],
            ['key' => 'field_whatsapp', 'label' => 'WhatsApp Number', 'name' => 'whatsapp', 'type' => 'text'],
            ['key' => 'field_address', 'label' => 'Address', 'name' => 'address', 'type' => 'textarea'],
            ['key' => 'field_copyright_text', 'label' => 'Copyright Text', 'name' => 'copyright_text', 'type' => 'text'],
            ['key' => 'field_facebook', 'label' => 'Facebook URL', 'name' => 'facebook', 'type' => 'url'],
            ['key' => 'field_linkedin', 'label' => 'LinkedIn URL', 'name' => 'linkedin', 'type' => 'url'],
            ['key' => 'field_instagram', 'label' => 'Instagram URL', 'name' => 'instagram', 'type' => 'url'],
            ['key' => 'field_seo_description', 'label' => 'Default SEO Description', 'name' => 'seo_description', 'type' => 'textarea'],
            ['key' => 'field_seo_og_image', 'label' => 'Default SEO OG Image', 'name' => 'seo_og_image', 'type' => 'image', 'return_format' => 'url'],
        ],
        'location' => [[['param' => 'options_page', 'operator' => '==', 'value' => 'tlg-global-settings']]],
        'show_in_rest' => true,
    ]);

    // Leadership group
    acf_add_local_field_group([
        'key' => 'group_leadership',
        'title' => 'Leadership Details',
        'fields' => [
            ['key' => 'field_job_title', 'label' => 'Job Title', 'name' => 'job_title', 'type' => 'text'],
            ['key' => 'field_department', 'label' => 'Department', 'name' => 'department', 'type' => 'text'],
            ['key' => 'field_biography', 'label' => 'Biography', 'name' => 'biography', 'type' => 'wysiwyg'],
            ['key' => 'field_email', 'label' => 'Email', 'name' => 'email', 'type' => 'email'],
            ['key' => 'field_linkedin_profile', 'label' => 'LinkedIn', 'name' => 'linkedin', 'type' => 'url'],
            ['key' => 'field_display_order', 'label' => 'Display Order', 'name' => 'display_order', 'type' => 'number'],
            ['key' => 'field_status', 'label' => 'Status', 'name' => 'status', 'type' => 'select', 'choices' => ['Active' => 'Active', 'Inactive' => 'Inactive']],
        ],
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'tlg_leadership']]],
        'show_in_rest' => true,
    ]);

    // Careers group
    acf_add_local_field_group([
        'key' => 'group_careers',
        'title' => 'Career Details',
        'fields' => [
            ['key' => 'field_career_dept', 'label' => 'Department', 'name' => 'department', 'type' => 'text'],
            ['key' => 'field_career_loc', 'label' => 'Location', 'name' => 'location', 'type' => 'text'],
            ['key' => 'field_career_type', 'label' => 'Employment Type', 'name' => 'employment_type', 'type' => 'text'],
            ['key' => 'field_career_url', 'label' => 'Application URL', 'name' => 'application_url', 'type' => 'url'],
            ['key' => 'field_career_status', 'label' => 'Job Status', 'name' => 'job_status', 'type' => 'select', 'choices' => ['Open' => 'Open', 'Closed' => 'Closed']],
        ],
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'tlg_careers']]],
        'show_in_rest' => true,
    ]);

    // Services group
    acf_add_local_field_group([
        'key' => 'group_services',
        'title' => 'Service Details',
        'fields' => [
            ['key' => 'field_svc_desc', 'label' => 'Short Description', 'name' => 'short_description', 'type' => 'textarea'],
            ['key' => 'field_svc_benefits', 'label' => 'Key Benefits', 'name' => 'key_benefits', 'type' => 'repeater', 'sub_fields' => [
                ['key' => 'field_svc_benefit_text', 'label' => 'Benefit', 'name' => 'benefit', 'type' => 'text'],
            ]],
            ['key' => 'field_svc_cta', 'label' => 'CTA Text', 'name' => 'cta_text', 'type' => 'text'],
            ['key' => 'field_svc_cta_url', 'label' => 'CTA URL', 'name' => 'cta_url', 'type' => 'url'],
            ['key' => 'field_svc_order', 'label' => 'Display Order', 'name' => 'display_order', 'type' => 'number'],
            ['key' => 'field_svc_loc', 'label' => 'Location Text', 'name' => 'location_text', 'type' => 'text'],
            ['key' => 'field_svc_ent', 'label' => 'Entity Text', 'name' => 'entity_text', 'type' => 'text'],
            ['key' => 'field_svc_cont', 'label' => 'Contact Text', 'name' => 'contact_text', 'type' => 'text'],
        ],
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'tlg_services']]],
        'show_in_rest' => true,
    ]);

    // FAQs group
    acf_add_local_field_group([
        'key' => 'group_faqs',
        'title' => 'FAQ Details',
        'fields' => [
            ['key' => 'field_faq_answer', 'label' => 'Answer', 'name' => 'answer', 'type' => 'wysiwyg'],
            ['key' => 'field_faq_div', 'label' => 'Division', 'name' => 'division', 'type' => 'text'],
            ['key' => 'field_faq_order', 'label' => 'Display Order', 'name' => 'display_order', 'type' => 'number'],
        ],
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'tlg_faqs']]],
        'show_in_rest' => true,
    ]);
}
add_action('acf/init', 'tlg_register_acf_field_groups');
?>
