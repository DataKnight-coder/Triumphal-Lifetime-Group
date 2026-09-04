<?php

if (!defined('ABSPATH')) {
    exit;
}

function tlg_publishable_post_types() {
    return [
        'tlg_leadership', 'tlg_services', 'tlg_careers', 'tlg_faqs', 'tlg_insights',
        'tlg_pages', 'tlg_locations', 'tlg_foundation',
    ];
}

function tlg_is_publishable_post_type($post_type) {
    return in_array($post_type, tlg_publishable_post_types(), true);
}

function tlg_has_public_visibility($post) {
    if (!$post || !tlg_is_publishable_post_type($post->post_type)) {
        return false;
    }

    if ($post->post_type === 'tlg_careers') {
        return get_post_meta($post->ID, '_tlg_job_status', true) === 'open';
    }

    if ($post->post_type === 'tlg_insights') {
        return true;
    }

    return get_post_meta($post->ID, '_tlg_status', true) === 'active';
}

function tlg_is_publicly_visible($post) {
    return $post && $post->post_status === 'publish' && tlg_has_public_visibility($post);
}

function tlg_queue_netlify_build() {
    if (!get_option('tlg_netlify_build_hook', '')) {
        return;
    }

    if (!wp_next_scheduled('tlg_run_netlify_build')) {
        wp_schedule_single_event(time() + 60, 'tlg_run_netlify_build');
    }
}

function tlg_queue_build_after_status_transition($new_status, $old_status, $post) {
    if (
        $new_status === $old_status
        || wp_is_post_autosave($post->ID)
        || wp_is_post_revision($post->ID)
        || !tlg_is_publishable_post_type($post->post_type)
    ) {
        return;
    }

    if (($new_status === 'publish' || $old_status === 'publish') && tlg_has_public_visibility($post)) {
        tlg_queue_netlify_build();
    }
}

function tlg_queue_build_after_post_update($post_id, $post_after, $post_before) {
    if (wp_is_post_autosave($post_id) || wp_is_post_revision($post_id) || !tlg_is_publicly_visible($post_after)) {
        return;
    }

    $public_fields = ['post_title', 'post_name', 'post_content', 'post_excerpt', 'post_date', 'post_date_gmt'];
    foreach ($public_fields as $field) {
        if ($post_after->$field !== $post_before->$field) {
            tlg_queue_netlify_build();
            return;
        }
    }
}

function tlg_public_meta_keys($post_type) {
    $definitions = tlg_meta_definitions();
    if (!isset($definitions[$post_type])) {
        return [];
    }

    return array_map(function ($key) {
        return '_tlg_' . $key;
    }, array_keys($definitions[$post_type]));
}

function tlg_visibility_meta_key($post_type) {
    if ($post_type === 'tlg_careers') {
        return '_tlg_job_status';
    }

    return $post_type === 'tlg_insights' ? '' : '_tlg_status';
}

function tlg_queue_build_after_post_meta_change($meta_id, $post_id, $meta_key, $meta_value) {
    $post = get_post($post_id);
    if (!$post || $post->post_status !== 'publish' || !tlg_is_publishable_post_type($post->post_type)) {
        return;
    }

    $is_featured_image = $meta_key === '_thumbnail_id';
    $is_visibility_change = $meta_key === tlg_visibility_meta_key($post->post_type);
    $is_public_field = in_array($meta_key, tlg_public_meta_keys($post->post_type), true);

    if ($is_visibility_change || (($is_featured_image || $is_public_field) && tlg_has_public_visibility($post))) {
        tlg_queue_netlify_build();
    }
}

function tlg_attachment_affects_public_content($attachment_id) {
    $post_ids = get_posts([
        'post_type' => tlg_publishable_post_types(),
        'post_status' => 'publish',
        'numberposts' => -1,
        'fields' => 'ids',
        'meta_key' => '_thumbnail_id',
        'meta_value' => (string) $attachment_id,
        'suppress_filters' => false,
    ]);

    foreach ($post_ids as $post_id) {
        if (tlg_is_publicly_visible(get_post($post_id))) {
            return true;
        }
    }

    $attachment_url = wp_get_attachment_url($attachment_id);
    $settings = tlg_get_global_settings();
    return $attachment_url && !empty($settings['seo_og_image']) && $settings['seo_og_image'] === $attachment_url;
}

function tlg_queue_build_after_attachment_meta_change($meta_id, $post_id, $meta_key, $meta_value) {
    if (
        get_post_type($post_id) === 'attachment'
        && in_array($meta_key, ['_wp_attached_file', '_wp_attachment_metadata'], true)
        && tlg_attachment_affects_public_content($post_id)
    ) {
        tlg_queue_netlify_build();
    }
}

function tlg_queue_build_before_attachment_meta_change($check, $post_id, $meta_key) {
    if (
        get_post_type($post_id) === 'attachment'
        && in_array($meta_key, ['_wp_attached_file', '_wp_attachment_metadata'], true)
        && tlg_attachment_affects_public_content($post_id)
    ) {
        tlg_queue_netlify_build();
    }

    return $check;
}

function tlg_queue_build_before_delete($post_id) {
    $post = get_post($post_id);
    if (tlg_is_publicly_visible($post)) {
        tlg_queue_netlify_build();
        return;
    }

    if ($post && $post->post_type === 'attachment' && tlg_attachment_affects_public_content($post_id)) {
        tlg_queue_netlify_build();
    }
}

function tlg_run_netlify_build() {
    $hook = get_option('tlg_netlify_build_hook', '');
    if (!$hook || !wp_http_validate_url($hook)) {
        return;
    }

    wp_safe_remote_post($hook, [
        'timeout' => 10,
        'blocking' => false,
        'redirection' => 0,
        'headers' => ['Content-Type' => 'application/json'],
        'body' => wp_json_encode(['source' => 'tlg-wordpress']),
    ]);
}

function tlg_queue_build_after_form_settings_update($old_value, $new_value) {
    $old_key = is_array($old_value) ? ($old_value['turnstile_site_key'] ?? '') : '';
    $new_key = is_array($new_value) ? ($new_value['turnstile_site_key'] ?? '') : '';
    if ($old_key !== $new_key) {
        tlg_queue_netlify_build();
    }
}

add_action('transition_post_status', 'tlg_queue_build_after_status_transition', 10, 3);
add_action('post_updated', 'tlg_queue_build_after_post_update', 10, 3);
add_action('before_delete_post', 'tlg_queue_build_before_delete');

foreach (['added_post_meta', 'updated_post_meta', 'deleted_post_meta'] as $tlg_meta_hook) {
    add_action($tlg_meta_hook, 'tlg_queue_build_after_post_meta_change', 10, 4);
    add_action($tlg_meta_hook, 'tlg_queue_build_after_attachment_meta_change', 10, 4);
}

add_filter('update_post_metadata', 'tlg_queue_build_before_attachment_meta_change', 10, 3);
add_filter('delete_post_metadata', 'tlg_queue_build_before_attachment_meta_change', 10, 3);

add_action('add_option_tlg_global_settings', 'tlg_queue_netlify_build');
add_action('update_option_tlg_global_settings', 'tlg_queue_netlify_build');
add_action('delete_option_tlg_global_settings', 'tlg_queue_netlify_build');
add_action('add_option_tlg_form_settings', 'tlg_queue_netlify_build');
add_action('update_option_tlg_form_settings', 'tlg_queue_build_after_form_settings_update', 10, 2);
add_action('delete_option_tlg_form_settings', 'tlg_queue_netlify_build');
add_action('tlg_run_netlify_build', 'tlg_run_netlify_build');
