<?php

if (!defined('ABSPATH')) {
    exit;
}

function tlg_disclaimer_plain_text($html) {
    $with_spaces = preg_replace('/<[^>]+>/', ' ', (string) $html);
    if ($with_spaces === null) {
        return null;
    }
    return preg_replace('/\s+/u', ' ', html_entity_decode(wp_strip_all_tags($with_spaces), ENT_QUOTES | ENT_HTML5, 'UTF-8'));
}

/** Move legacy disclaimer callout copy into the page editor before retiring it. */
function tlg_upgrade_disclaimer_content() {
    if (get_option('tlg_disclaimer_content_upgrade_v1', false)) {
        return;
    }
    $lock_name = 'tlg_disclaimer_content_upgrade_v1_lock';
    if (!add_option($lock_name, time(), '', 'no')) {
        return;
    }

    try {
        if (get_option('tlg_disclaimer_content_upgrade_v1', false)) {
            return;
        }

        $posts = get_posts([
            'post_type' => 'tlg_pages',
            'post_status' => ['publish', 'draft', 'private'],
            'numberposts' => -1,
            'meta_key' => '_tlg_page_key',
            'meta_value' => 'disclaimer',
            'suppress_filters' => false,
        ]);

        $all_upgraded = true;
        foreach ($posts as $post) {
            $heading = trim((string) get_post_meta($post->ID, '_tlg_disclaimer_heading', true));
            $body = trim((string) get_post_meta($post->ID, '_tlg_disclaimer_body', true));
            if ($heading === '' && $body === '') {
                continue;
            }

            $obsolete_heading = 'Legal Review';
            $obsolete_body = 'Final wording remains subject to review by a qualified legal professional.';
            $content = $post->post_content;
            $existing_text = tlg_disclaimer_plain_text($content);
            $legacy_text = tlg_disclaimer_plain_text($body);
            if ($existing_text === null || $legacy_text === null) {
                error_log('TLG disclaimer upgrade could not normalise post ' . $post->ID . '.');
                $all_upgraded = false;
                continue;
            }
            $body_is_duplicate = $body !== '' && stripos($existing_text, $legacy_text) !== false;
            $heading_is_duplicate = $heading !== '' && stripos($existing_text, $heading) !== false;
            $heading_is_obsolete = strcasecmp($heading, $obsolete_heading) === 0;
            $body_is_obsolete = strcasecmp($legacy_text, $obsolete_body) === 0;

            if (($body_is_obsolete && $heading !== '' && !$heading_is_obsolete)
                || ($body !== '' && !$body_is_obsolete && !$body_is_duplicate && $heading !== '' && !$heading_is_obsolete && $heading_is_duplicate)
                || ($body_is_duplicate && $heading !== '' && !$heading_is_obsolete && !$heading_is_duplicate)) {
                error_log('TLG disclaimer upgrade needs manual review for post ' . $post->ID . '.');
                $all_upgraded = false;
                continue;
            }

            if (($body !== '' && !$body_is_obsolete && !$body_is_duplicate)
                || ($body === '' && $heading !== '' && !$heading_is_obsolete && !$heading_is_duplicate)) {
                $section = $heading !== '' && !$heading_is_obsolete
                    ? '<h2>' . esc_html($heading) . '</h2>'
                    : '';
                $section .= wpautop(esc_html($body));
                $updated = wp_update_post([
                    'ID' => $post->ID,
                    'post_content' => trim($content . "\n" . $section),
                ], true);
                if (is_wp_error($updated)) {
                    error_log('TLG disclaimer upgrade failed for post ' . $post->ID . ': ' . $updated->get_error_message());
                    $all_upgraded = false;
                    continue;
                }
                $saved_post = get_post($post->ID);
                $saved_text = $saved_post ? tlg_disclaimer_plain_text($saved_post->post_content) : null;
                $expected_text = $body !== '' ? $legacy_text : $heading;
                if ($saved_text === null || stripos($saved_text, $expected_text) === false) {
                    error_log('TLG disclaimer upgrade could not verify editor content for post ' . $post->ID . '.');
                    $all_upgraded = false;
                    continue;
                }
            }

            update_post_meta($post->ID, '_tlg_disclaimer_heading', '');
            update_post_meta($post->ID, '_tlg_disclaimer_body', '');
            if (get_post_meta($post->ID, '_tlg_disclaimer_heading', true) !== ''
                || get_post_meta($post->ID, '_tlg_disclaimer_body', true) !== '') {
                error_log('TLG disclaimer upgrade could not clear legacy fields for post ' . $post->ID . '.');
                $all_upgraded = false;
            }
        }

        if ($posts && $all_upgraded) {
            update_option('tlg_disclaimer_content_upgrade_v1', true, false);
        }
    } finally {
        delete_option($lock_name);
    }
}
