<?php
/**
 * Plugin Name: TLG Headless CMS
 * Description: Native WordPress content types, admin fields, REST API, and Netlify publishing for Triumphal Lifetime Group.
 * Version: 2.0.0
 * Author: Triumphal Lifetime Group
 */

if (!defined('ABSPATH')) {
    exit;
}

define('TLG_CMS_VERSION', '2.0.0');
define('TLG_CMS_PATH', __DIR__ . '/tlg-core');

require_once TLG_CMS_PATH . '/content-types.php';
require_once TLG_CMS_PATH . '/settings.php';
require_once TLG_CMS_PATH . '/rest-api.php';
require_once TLG_CMS_PATH . '/admin.php';
require_once TLG_CMS_PATH . '/publishing.php';

add_action('init', 'tlg_register_content_types');
add_action('init', 'tlg_register_content_meta');
add_action('admin_menu', 'tlg_register_admin_menu');
add_action('admin_init', 'tlg_register_settings');
add_action('rest_api_init', 'tlg_register_rest_routes');
