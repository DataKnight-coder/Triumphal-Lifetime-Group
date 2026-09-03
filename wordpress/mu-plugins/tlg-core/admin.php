<?php

if (!defined('ABSPATH')) {
    exit;
}

function tlg_admin_field_definitions() {
    return [
        'tlg_leadership' => [
            'job_title' => ['Job title', 'text', 'Public role or position.'],
            'department' => ['Department', 'text', 'Optional business division or department.'],
            'email' => ['Email', 'email', 'Optional public email address.'],
            'linkedin' => ['LinkedIn URL', 'url', 'Optional full profile URL.'],
            'display_order' => ['Display order', 'number', 'Lower numbers appear first.'],
            'status' => ['Status', 'select', 'Only Active leaders appear publicly.', ['active' => 'Active', 'inactive' => 'Inactive']],
        ],
        'tlg_services' => [
            'short_description' => ['Short description', 'textarea', 'Concise summary used on the companies page.'],
            'key_benefits' => ['Key benefits', 'textarea', 'Enter one benefit per line.'],
            'cta_text' => ['CTA text', 'text', 'Button label.'],
            'cta_url' => ['CTA URL', 'url', 'Full URL or site-relative path.'],
            'display_order' => ['Display order', 'number', 'Lower numbers appear first.'],
            'division' => ['Division slug', 'text', 'Stable lowercase division identifier.'],
            'status' => ['Status', 'select', 'Only Active services appear publicly.', ['active' => 'Active', 'inactive' => 'Inactive']],
            'location_text' => ['Location text', 'text', 'Optional location label.'],
            'entity_text' => ['Entity text', 'textarea', 'Optional legal or operating entity text.'],
            'contact_text' => ['Contact text', 'text', 'Optional service-specific contact label.'],
        ],
        'tlg_careers' => [
            'department' => ['Department', 'text', 'Hiring department.'],
            'location' => ['Location', 'text', 'Office, region, or Remote.'],
            'employment_type' => ['Employment type', 'text', 'For example Full-time or Contract.'],
            'application_url' => ['Application URL', 'url', 'Where candidates should apply.'],
            'job_status' => ['Job status', 'select', 'Only Open vacancies appear publicly.', ['open' => 'Open', 'closed' => 'Closed']],
            'closing_date' => ['Closing date', 'date', 'Optional application deadline.'],
            'display_order' => ['Display order', 'number', 'Lower numbers appear first.'],
        ],
        'tlg_faqs' => [
            'division' => ['Division', 'select', 'Choose the relevant solution, or Global for every solution.', [
                'digital-learning' => 'Digital Learning',
                'education' => 'Education',
                'global-mobility' => 'Global Mobility',
                'hr-consulting' => 'HR Consulting',
                'real-estate' => 'Real Estate',
                'technology' => 'Technology',
                'global' => 'Global',
            ]],
            'display_order' => ['Display order', 'number', 'Lower numbers appear first.'],
            'status' => ['Status', 'select', 'Only Active FAQs appear publicly.', ['active' => 'Active', 'inactive' => 'Inactive']],
        ],
        'tlg_insights' => [
            'category' => ['Category', 'text', 'Public article category.'],
            'author_name' => ['Author display name', 'text', 'Public byline; this may be a team or editorial desk.'],
            'seo_title' => ['SEO title', 'text', 'Optional search title override.'],
            'seo_description' => ['SEO description', 'textarea', 'Optional search description override.'],
            'display_order' => ['Display order', 'number', 'Lower numbers appear first on the Insights page.'],
        ],
    ];
}

function tlg_register_admin_menu() {
    add_menu_page(
        'TLG Dashboard',
        'TLG CMS',
        'edit_posts',
        'tlg-dashboard',
        'tlg_render_dashboard',
        'dashicons-admin-site-alt3',
        3
    );

    add_submenu_page('tlg-dashboard', 'TLG Dashboard', 'Dashboard', 'edit_posts', 'tlg-dashboard', 'tlg_render_dashboard');
    add_submenu_page('tlg-dashboard', 'Global Settings', 'Global Settings', 'manage_options', 'tlg-global-settings', 'tlg_render_global_settings_page');
    add_submenu_page('tlg-dashboard', 'Publishing', 'Publishing', 'manage_options', 'tlg-publishing', 'tlg_render_publishing_page');
}

function tlg_render_dashboard() {
    if (!current_user_can('edit_posts')) {
        return;
    }

    $labels = [
        'tlg_leadership' => 'Leadership',
        'tlg_services' => 'Services',
        'tlg_careers' => 'Careers',
        'tlg_faqs' => 'FAQs',
        'tlg_insights' => 'Insights',
    ];
    ?>
    <div class="wrap">
        <h1>TLG Content Dashboard</h1>
        <p>Manage the content published to the Triumphal Lifetime Group website.</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;max-width:1000px;margin-top:24px">
            <?php foreach ($labels as $post_type => $label) : ?>
                <?php $counts = wp_count_posts($post_type); ?>
                <a href="<?php echo esc_url(admin_url('edit.php?post_type=' . $post_type)); ?>" style="display:block;background:#fff;border:1px solid #dcdcde;padding:20px;text-decoration:none">
                    <strong style="display:block;font-size:18px;color:#1d2327"><?php echo esc_html($label); ?></strong>
                    <span><?php echo esc_html((string) ($counts->publish ?? 0)); ?> published</span>
                </a>
            <?php endforeach; ?>
        </div>
        <?php if (current_user_can('manage_options')) : ?>
            <p style="margin-top:24px"><a class="button button-primary" href="<?php echo esc_url(admin_url('admin.php?page=tlg-global-settings')); ?>">Edit Global Settings</a></p>
        <?php endif; ?>
    </div>
    <?php
}

function tlg_add_meta_boxes() {
    foreach (tlg_admin_field_definitions() as $post_type => $fields) {
        add_meta_box('tlg-content-fields', 'TLG Content Details', 'tlg_render_meta_box', $post_type, 'normal', 'high', ['fields' => $fields]);
    }
}

function tlg_remove_native_custom_fields_boxes() {
    foreach (array_keys(tlg_content_type_definitions()) as $post_type) {
        remove_meta_box('postcustom', $post_type, 'normal');
    }
}

function tlg_render_meta_box($post, $box) {
    wp_nonce_field('tlg_save_content_fields', 'tlg_content_fields_nonce');
    $fields = $box['args']['fields'];
    ?>
    <table class="form-table" role="presentation">
        <?php foreach ($fields as $key => $definition) : ?>
            <?php
            [$label, $type, $description] = $definition;
            $value = get_post_meta($post->ID, '_tlg_' . $key, true);
            $options = $definition[3] ?? [];
            ?>
            <tr>
                <th scope="row"><label for="tlg-<?php echo esc_attr($key); ?>"><?php echo esc_html($label); ?></label></th>
                <td>
                    <?php if ($type === 'textarea') : ?>
                        <textarea class="large-text" rows="4" id="tlg-<?php echo esc_attr($key); ?>" name="tlg_meta[<?php echo esc_attr($key); ?>]"><?php echo esc_textarea($value); ?></textarea>
                    <?php elseif ($type === 'select') : ?>
                        <select id="tlg-<?php echo esc_attr($key); ?>" name="tlg_meta[<?php echo esc_attr($key); ?>]">
                            <?php foreach ($options as $option_value => $option_label) : ?>
                                <option value="<?php echo esc_attr($option_value); ?>" <?php selected($value, $option_value); ?>><?php echo esc_html($option_label); ?></option>
                            <?php endforeach; ?>
                        </select>
                    <?php else : ?>
                        <input class="regular-text" type="<?php echo esc_attr($type); ?>" id="tlg-<?php echo esc_attr($key); ?>" name="tlg_meta[<?php echo esc_attr($key); ?>]" value="<?php echo esc_attr($value); ?>"<?php echo $type === 'number' ? ' min="0" step="1"' : ''; ?>>
                    <?php endif; ?>
                    <p class="description"><?php echo esc_html($description); ?></p>
                </td>
            </tr>
        <?php endforeach; ?>
    </table>
    <?php
}

function tlg_save_content_fields($post_id, $post) {
    if (!isset($_POST['tlg_content_fields_nonce']) || !wp_verify_nonce(sanitize_text_field(wp_unslash($_POST['tlg_content_fields_nonce'])), 'tlg_save_content_fields')) {
        return;
    }

    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    if (wp_is_post_revision($post_id) || !current_user_can('edit_post', $post_id)) {
        return;
    }

    $all_fields = tlg_admin_field_definitions();
    if (!isset($all_fields[$post->post_type])) {
        return;
    }

    $submitted = isset($_POST['tlg_meta']) && is_array($_POST['tlg_meta']) ? wp_unslash($_POST['tlg_meta']) : [];
    $meta_definitions = tlg_meta_definitions()[$post->post_type];

    foreach ($all_fields[$post->post_type] as $key => $definition) {
        $raw_value = isset($submitted[$key]) ? $submitted[$key] : '';
        $sanitize_callback = $meta_definitions[$key][1];
        update_post_meta($post_id, '_tlg_' . $key, call_user_func($sanitize_callback, $raw_value));
    }
}

function tlg_admin_columns($columns) {
    $post_type = get_current_screen()->post_type ?? '';
    $new_columns = [];

    foreach ($columns as $key => $label) {
        $new_columns[$key] = $label;
        if ($key === 'title') {
            if ($post_type === 'tlg_faqs') {
                $new_columns['tlg_division'] = 'Division';
            }
            if ($post_type !== 'tlg_insights') {
                $new_columns['tlg_status'] = 'Status';
            }
            $new_columns['tlg_order'] = 'Order';
        }
    }

    return $new_columns;
}

function tlg_admin_column_value($column, $post_id) {
    if ($column === 'tlg_order') {
        echo esc_html((string) ((int) tlg_meta($post_id, 'display_order')));
    } elseif ($column === 'tlg_division') {
        echo esc_html(tlg_meta($post_id, 'division'));
    } elseif ($column === 'tlg_status') {
        $post_type = get_post_type($post_id);
        $key = $post_type === 'tlg_careers' ? 'job_status' : 'status';
        echo esc_html(ucfirst((string) tlg_meta($post_id, $key)));
    }
}

function tlg_sortable_admin_columns($columns) {
    $columns['tlg_order'] = 'tlg_order';
    return $columns;
}

function tlg_apply_admin_ordering($query) {
    if (!is_admin() || !$query->is_main_query() || $query->get('orderby') !== 'tlg_order') {
        return;
    }

    $query->set('meta_key', '_tlg_display_order');
    $query->set('orderby', 'meta_value_num');
}

function tlg_faq_division_filter($post_type) {
    if ($post_type !== 'tlg_faqs') {
        return;
    }

    $selected = isset($_GET['tlg_division']) ? tlg_sanitize_division(wp_unslash($_GET['tlg_division'])) : '';
    ?>
    <select name="tlg_division">
        <option value="">All divisions</option>
        <?php foreach (tlg_allowed_divisions() as $division) : ?>
            <option value="<?php echo esc_attr($division); ?>" <?php selected($selected, $division); ?>><?php echo esc_html(ucwords(str_replace('-', ' ', $division))); ?></option>
        <?php endforeach; ?>
    </select>
    <?php
}

function tlg_apply_faq_division_filter($query) {
    if (!is_admin() || !$query->is_main_query() || $query->get('post_type') !== 'tlg_faqs') {
        return;
    }

    $division = isset($_GET['tlg_division']) ? tlg_sanitize_division(wp_unslash($_GET['tlg_division'])) : '';
    if ($division) {
        $query->set('meta_key', '_tlg_division');
        $query->set('meta_value', $division);
    }
}

function tlg_content_title_placeholder($title, $post) {
    $labels = [
        'tlg_leadership' => 'Leader name',
        'tlg_services' => 'Service name',
        'tlg_careers' => 'Job title',
        'tlg_faqs' => 'FAQ question',
        'tlg_insights' => 'Insight title',
    ];
    return $labels[$post->post_type] ?? $title;
}

function tlg_simplify_admin_menu() {
    remove_menu_page('edit.php');
    remove_menu_page('edit-comments.php');
}

function tlg_enable_featured_images() {
    add_theme_support('post-thumbnails', ['tlg_leadership', 'tlg_services', 'tlg_insights']);
}

add_action('after_setup_theme', 'tlg_enable_featured_images');
add_action('add_meta_boxes', 'tlg_add_meta_boxes');
add_action('add_meta_boxes', 'tlg_remove_native_custom_fields_boxes', 20);
add_action('save_post', 'tlg_save_content_fields', 10, 2);
add_action('pre_get_posts', 'tlg_apply_admin_ordering');
add_action('pre_get_posts', 'tlg_apply_faq_division_filter');
add_action('restrict_manage_posts', 'tlg_faq_division_filter');
add_action('admin_menu', 'tlg_simplify_admin_menu', 999);
add_filter('enter_title_here', 'tlg_content_title_placeholder', 10, 2);

foreach (array_keys(tlg_content_type_definitions()) as $tlg_post_type) {
    add_filter("manage_{$tlg_post_type}_posts_columns", 'tlg_admin_columns');
    add_action("manage_{$tlg_post_type}_posts_custom_column", 'tlg_admin_column_value', 10, 2);
    add_filter("manage_edit-{$tlg_post_type}_sortable_columns", 'tlg_sortable_admin_columns');
}
