<?php

if (!defined('ABSPATH')) {
    exit;
}

function tlg_admin_field_definitions() {
    return [
        'tlg_leadership' => [
            'job_title' => ['Job title', 'text', 'Public role or position.'],
            'department' => ['Department', 'text', 'Optional business division or department.'],
            'leadership_group' => ['Leadership group', 'select', 'Choose where this profile appears.', ['executive' => 'Executive Leadership', 'division-head' => 'Directors / Division Heads']],
            'core_expertise' => ['Core expertise', 'textarea', 'Enter one verified area of expertise per line.'],
            'qualifications' => ['Verified qualifications', 'textarea', 'Enter one verified qualification per line. Leave blank if documentary confirmation is unavailable.'],
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
            'reviewer_name' => ['Reviewer', 'text', 'Optional named reviewer for high-trust content.'],
            'last_reviewed' => ['Last reviewed', 'date', 'Date on which sources and claims were last checked.'],
            'sources' => ['Sources', 'textarea', 'One source per line as Source name | https://source.example/page. Use current authoritative sources.'],
            'related_division' => ['Related division', 'select', 'Optional division used for related navigation.', array_combine(array_merge([''], tlg_allowed_divisions()), array_merge(['None'], array_map(function ($division) { return ucwords(str_replace('-', ' ', $division)); }, tlg_allowed_divisions())))],
            'seo_title' => ['SEO title', 'text', 'Optional search title override.'],
            'seo_description' => ['SEO description', 'textarea', 'Optional search description override.'],
            'display_order' => ['Display order', 'number', 'Lower numbers appear first on the Insights page.'],
        ],
        'tlg_pages' => [
            'page_key' => ['Page template', 'select', 'Select the fixed website layout this record controls.', array_combine(tlg_page_keys(), array_map(function ($key) { return ucwords(str_replace('-', ' ', $key)); }, tlg_page_keys()))],
            'hero_eyebrow' => ['Hero eyebrow', 'text', 'Short label displayed above the main heading.'],
            'hero_title' => ['Hero title', 'text', 'The page H1.'],
            'hero_description' => ['Hero description', 'textarea', 'Concise opening statement.'],
            'hero_image_alt' => ['Hero image alt text', 'text', 'Describe the featured image for visitors using assistive technology.'],
            'intro_heading' => ['Introduction heading', 'text', 'First section heading.'],
            'intro_body' => ['Introduction body', 'textarea', 'Approved introductory copy. Basic safe HTML is supported.'],
            'services_heading' => ['Services heading', 'text', 'Heading for services or programmes.'],
            'services_intro' => ['Services introduction', 'textarea', 'Optional supporting copy.'],
            'services_items' => ['Services / programme items', 'repeater', 'Add items.', ['Heading', 'Description']],
            'audience_heading' => ['Who we help heading', 'text', 'Audience section heading.'],
            'audience_body' => ['Who we help body', 'textarea', 'Audience positioning statement.'],
            'audience_items' => ['Who we help items', 'repeater', 'Add audiences.', ['Heading', 'Description']],
            'positioning_heading' => ['Positioning heading', 'text', 'Outcome or positioning section heading.'],
            'positioning_body' => ['Positioning body', 'textarea', 'Approved positioning copy. Basic safe HTML is supported.'],
            'process_heading' => ['Process heading', 'text', 'Heading for the process or journey.'],
            'process_items' => ['Process steps', 'repeater', 'Add process steps.', ['Step title', 'Description']],
            'benefits_heading' => ['Benefits heading', 'text', 'Heading for benefits or deliverables.'],
            'benefits_body' => ['Benefits introduction', 'textarea', 'Optional supporting copy.'],
            'benefits_items' => ['Benefit items', 'repeater', 'Add benefits.', ['Heading', 'Description']],
            'future_heading' => ['Future projects heading', 'text', 'Heading for proposed, not completed, work.'],
            'future_body' => ['Future projects body', 'textarea', 'Clearly label proposed activities as future plans.'],
            'future_items' => ['Future project items', 'repeater', 'Add future items.', ['Heading', 'Description']],
            'cta_heading' => ['CTA heading', 'text', 'Primary call-to-action heading.'],
            'cta_body' => ['CTA body', 'textarea', 'Short supporting text.'],
            'cta_text' => ['Primary button label', 'text', 'Visible action label.'],
            'cta_url' => ['Primary button URL', 'text', 'Use a site-relative path or approved HTTPS URL.'],
            'secondary_cta_text' => ['Secondary button label', 'text', 'Optional secondary action.'],
            'secondary_cta_url' => ['Secondary button URL', 'text', 'Use a site-relative path or approved HTTPS URL.'],
            'disclaimer_heading' => ['Disclaimer heading', 'text', 'Required compliance heading where applicable.'],
            'disclaimer_body' => ['Disclaimer body', 'textarea', 'Approved no-guarantee or regulatory wording.'],
            'navigation_items' => ['Primary navigation', 'repeater', 'Add navigation links.', ['Label', '/path']],
            'division_items' => ['Division navigation', 'repeater', 'Add division links.', ['Label', '/path', '/image.jpg']],
            'footer_divisions' => ['Footer: Divisions', 'repeater', 'Add links.', ['Label', '/path']],
            'footer_company' => ['Footer: Company', 'repeater', 'Add links.', ['Label', '/path']],
            'footer_resources' => ['Footer: Resources', 'repeater', 'Add links.', ['Label', '/path']],
            'last_updated' => ['Last updated label', 'text', 'Public date label for policy pages.'],
            'seo_title' => ['SEO title', 'text', 'Unique page title for search and sharing.'],
            'seo_description' => ['SEO description', 'textarea', 'Unique page description.'],
            'seo_og_image' => ['Social image URL', 'url', 'Optional 1200×630 approved public image.'],
            'display_order' => ['Display order', 'number', 'Stable ordering for fixed page records.'],
            'status' => ['Status', 'select', 'Only Active page records are public.', ['active' => 'Active', 'inactive' => 'Inactive']],
        ],
        'tlg_locations' => [
            'country' => ['Country', 'text', 'Verified country name.'],
            'city' => ['City', 'text', 'Verified city; leave blank when not confirmed.'],
            'public_label' => ['Public label', 'select', 'Use only the label supported by evidence.', ['Headquarters' => 'Headquarters', 'Physical Office' => 'Physical Office', 'Registered Office' => 'Registered Office', 'Operating Office' => 'Operating Office', 'Regional Contact' => 'Regional Contact', 'Operations' => 'Operations', 'Market Served' => 'Market Served']],
            'address' => ['Public address', 'textarea', 'Publish only an approved client-facing address.'],
            'client_facing' => ['Client-facing?', 'select', 'Can clients physically attend?', ['no' => 'No / unconfirmed', 'yes' => 'Yes']],
            'operational_status' => ['Operational status', 'select', 'Current verified status.', ['unconfirmed' => 'Unconfirmed', 'active' => 'Active', 'remote' => 'Remote support', 'planned' => 'Planned (not public operations)']],
            'services_available' => ['Services available', 'textarea', 'One verified service per line.'],
            'public_email' => ['Public email', 'email', 'Optional approved location contact.'],
            'public_phone' => ['Public phone', 'text', 'Optional approved location contact.'],
            'display_order' => ['Display order', 'number', 'Lower numbers appear first.'],
            'status' => ['Publishing status', 'select', 'Only Active locations appear publicly.', ['active' => 'Active', 'inactive' => 'Inactive']],
        ],
        'tlg_foundation' => [
            'item_type' => ['Content type', 'select', 'Keep completed impact separate from programmes and future projects.', ['programme' => 'Programme', 'impact' => 'Completed impact', 'future' => 'Future project']],
            'location' => ['Location', 'text', 'Required for completed impact; must be verified.'],
            'year' => ['Year', 'number', 'Required for completed impact; must be verified.'],
            'display_order' => ['Display order', 'number', 'Lower numbers appear first.'],
            'status' => ['Publishing status', 'select', 'Only Active, verified items appear publicly.', ['active' => 'Active', 'inactive' => 'Inactive']],
        ],
    ];
}

function tlg_admin_field_sections() {
    return [
        'tlg_leadership' => [
            'Profile Details' => ['job_title', 'department', 'leadership_group', 'core_expertise', 'qualifications'],
            'Public Contact' => ['email', 'linkedin'],
            'Publishing' => ['display_order', 'status'],
        ],
        'tlg_services' => [
            'Page Content' => ['short_description', 'key_benefits', 'division', 'location_text', 'entity_text', 'contact_text'],
            'CTA' => ['cta_text', 'cta_url'],
            'Publishing' => ['display_order', 'status'],
        ],
        'tlg_careers' => [
            'Role Details' => ['department', 'location', 'employment_type', 'closing_date'],
            'Application' => ['application_url'],
            'Publishing' => ['job_status', 'display_order'],
        ],
        'tlg_insights' => [
            'Article Content' => [],
            'Featured Image' => [],
            'Article Details' => ['category', 'author_name', 'related_division'],
            'Sources & Review' => ['reviewer_name', 'last_reviewed', 'sources'],
            'SEO' => ['seo_title', 'seo_description'],
            'Publishing' => ['display_order'],
        ],
        'tlg_pages' => [
            'Page Content' => ['page_key', 'hero_eyebrow', 'hero_title', 'hero_description', 'intro_heading', 'intro_body'],
            'Page Sections' => ['services_heading', 'services_intro', 'services_items', 'audience_heading', 'audience_body', 'audience_items', 'positioning_heading', 'positioning_body', 'process_heading', 'process_items', 'benefits_heading', 'benefits_body', 'benefits_items', 'future_heading', 'future_body', 'future_items'],
            'Images' => ['hero_image_alt'],
            'CTA' => ['cta_heading', 'cta_body', 'cta_text', 'cta_url', 'secondary_cta_text', 'secondary_cta_url'],
            'Compliance / Disclaimer' => ['disclaimer_heading', 'disclaimer_body', 'last_updated'],
            'Navigation / Footer' => ['navigation_items', 'division_items', 'footer_divisions', 'footer_company', 'footer_resources'],
            'SEO' => ['seo_title', 'seo_description', 'seo_og_image'],
            'Publishing' => ['display_order', 'status'],
        ],
        'tlg_locations' => [
            'Location Details' => ['country', 'city', 'public_label', 'address', 'client_facing', 'operational_status', 'services_available'],
            'Public Contact' => ['public_email', 'public_phone'],
            'Publishing' => ['display_order', 'status'],
        ],
        'tlg_foundation' => [
            'Item Details' => ['item_type', 'location', 'year'],
            'Images' => [],
            'Publishing' => ['display_order', 'status'],
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
    add_submenu_page('tlg-dashboard', 'Enquiry Forms', 'Enquiry Forms', 'manage_options', 'tlg-forms', 'tlg_render_forms_page');
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
        'tlg_pages' => 'Page Content',
        'tlg_locations' => 'Locations',
        'tlg_foundation' => 'Foundation Content',
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
    $sections = tlg_admin_field_sections();
    foreach (tlg_admin_field_definitions() as $post_type => $fields) {
        if (!isset($sections[$post_type])) {
            add_meta_box('tlg-content-fields', 'TLG Content Details', 'tlg_render_meta_box', $post_type, 'normal', 'high', ['fields' => $fields]);
            continue;
        }

        foreach ($sections[$post_type] as $section => $field_keys) {
            $section_fields = array_intersect_key($fields, array_flip($field_keys));
            if (!$section_fields && !in_array($section, ['Images', 'Article Content', 'Featured Image'], true)) {
                continue;
            }
            if (in_array($section, ['Images', 'Article Content', 'Featured Image'], true)) {
                $section_fields = $section_fields ?: [];
            }
            add_meta_box(
                'tlg-' . sanitize_key($section),
                $section,
                'tlg_render_meta_box',
                $post_type,
                'normal',
                $section === 'Page Content' || $section === 'Article Details' ? 'high' : 'default',
                ['fields' => $section_fields]
            );
        }
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
    if (!$fields) {
        if ($box['id'] === 'tlg-articlecontent') {
            echo '<p>Use the main content editor above for the complete reviewed article body.</p>';
        } else {
            echo '<p>Use the Featured image panel to choose the approved public image. Add descriptive alternative text in the Media Library.</p>';
        }
        return;
    }
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
                    <?php elseif ($type === 'repeater') : ?>
                        <?php
                        $columns = $options;
                        $rows = array_filter(array_map('trim', explode("\n", $value)));
                        ?>
                        <div class="tlg-repeater" data-columns="<?php echo esc_attr(json_encode($columns)); ?>">
                            <div class="tlg-repeater-rows">
                                <?php foreach ($rows as $row) : 
                                    $parts = array_pad(array_map('trim', explode('|', $row)), count($columns), '');
                                ?>
                                    <div class="tlg-repeater-row" style="display:flex; gap:10px; margin-bottom:10px;">
                                        <?php foreach ($columns as $index => $col) : ?>
                                            <input type="text" class="regular-text" placeholder="<?php echo esc_attr($col); ?>" value="<?php echo esc_attr(trim($parts[$index])); ?>">
                                        <?php endforeach; ?>
                                        <button type="button" class="button remove-row">Remove</button>
                                    </div>
                                <?php endforeach; ?>
                            </div>
                            <button type="button" class="button add-row">Add Row</button>
                            <textarea class="tlg-repeater-store" style="display:none;" id="tlg-<?php echo esc_attr($key); ?>" name="tlg_meta[<?php echo esc_attr($key); ?>]"><?php echo esc_textarea($value); ?></textarea>
                        </div>
                        <script>
                        if (!window.tlgRepeaterInit) {
                            window.tlgRepeaterInit = true;
                            document.addEventListener('click', function(e) {
                                if (e.target.classList.contains('add-row')) {
                                    var repeater = e.target.closest('.tlg-repeater');
                                    var cols = JSON.parse(repeater.getAttribute('data-columns'));
                                    var row = document.createElement('div');
                                    row.className = 'tlg-repeater-row';
                                    row.style.display = 'flex';
                                    row.style.gap = '10px';
                                    row.style.marginBottom = '10px';
                                    var html = '';
                                    cols.forEach(function(col) {
                                        html += '<input type="text" class="regular-text" placeholder="' + col + '" value="">';
                                    });
                                    html += '<button type="button" class="button remove-row">Remove</button>';
                                    row.innerHTML = html;
                                    repeater.querySelector('.tlg-repeater-rows').appendChild(row);
                                    updateStore(repeater);
                                }
                                if (e.target.classList.contains('remove-row')) {
                                    var repeater = e.target.closest('.tlg-repeater');
                                    e.target.closest('.tlg-repeater-row').remove();
                                    updateStore(repeater);
                                }
                            });
                            document.addEventListener('input', function(e) {
                                if (e.target.closest('.tlg-repeater-row')) {
                                    updateStore(e.target.closest('.tlg-repeater'));
                                }
                            });
                            function updateStore(repeater) {
                                var rows = repeater.querySelectorAll('.tlg-repeater-row');
                                var val = [];
                                rows.forEach(function(row) {
                                    var inputs = row.querySelectorAll('input');
                                    var parts = [];
                                    inputs.forEach(function(input) { parts.push(input.value.replace(/\|/g, '')); });
                                    // only push if not completely empty
                                    if (parts.join('').trim() !== '') {
                                        val.push(parts.join(' | '));
                                    }
                                });
                                repeater.querySelector('.tlg-repeater-store').value = val.join('\n');
                            }
                        }
                        </script>
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
        'tlg_pages' => 'Page name',
        'tlg_locations' => 'Location name',
        'tlg_foundation' => 'Programme, impact or project name',
    ];
    return $labels[$post->post_type] ?? $title;
}

function tlg_simplify_admin_menu() {
    remove_menu_page('edit.php');
    remove_menu_page('edit-comments.php');
}

function tlg_enable_featured_images() {
    add_theme_support('post-thumbnails', ['tlg_leadership', 'tlg_services', 'tlg_insights', 'tlg_pages', 'tlg_locations', 'tlg_foundation']);
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
