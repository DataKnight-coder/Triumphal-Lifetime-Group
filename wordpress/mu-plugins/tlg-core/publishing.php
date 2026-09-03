<?php

if (!defined('ABSPATH')) {
    exit;
}

function tlg_publishable_post_types() {
    return ['tlg_leadership', 'tlg_services', 'tlg_careers', 'tlg_faqs', 'tlg_insights'];
}

function tlg_queue_netlify_build() {
    if (!get_option('tlg_netlify_build_hook', '')) {
        return;
    }

    if (!wp_next_scheduled('tlg_run_netlify_build')) {
        wp_schedule_single_event(time() + 60, 'tlg_run_netlify_build');
    }
}

function tlg_queue_build_after_save($post_id, $post) {
    if (wp_is_post_autosave($post_id) || wp_is_post_revision($post_id)) {
        return;
    }

    if (!in_array($post->post_type, tlg_publishable_post_types(), true)) {
        return;
    }

    if (in_array($post->post_status, ['publish', 'trash'], true)) {
        tlg_queue_netlify_build();
    }
}

function tlg_queue_build_before_delete($post_id) {
    $post = get_post($post_id);
    if ($post && in_array($post->post_type, tlg_publishable_post_types(), true)) {
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

add_action('save_post', 'tlg_queue_build_after_save', 100, 2);
add_action('before_delete_post', 'tlg_queue_build_before_delete');
add_action('update_option_tlg_global_settings', 'tlg_queue_netlify_build');
add_action('tlg_run_netlify_build', 'tlg_run_netlify_build');
