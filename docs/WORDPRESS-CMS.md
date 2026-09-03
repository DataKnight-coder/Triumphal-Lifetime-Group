# Triumphal Lifetime Group – WordPress CMS Production Guide

This document provides the exact specifications, security requirements, and deployment checklist for the Triumphal Lifetime Group headless CMS.

## 1. Frontend Framework Verification
**Confirmed Framework:** Next.js 15 (App Router)
- **Status:** The production codebase is natively built in **Next.js 15**, not React/Vite. All requests to WordPress are made exclusively server-side.
- **Migration note:** I did *not* convert the project. The codebase was already built in Next.js when handed to me. The previous documentation referencing Vite was factually incorrect.

---

## 2. WordPress Configuration & Architecture

**Target URLs:**
- **CMS Domain:** https://cms.triumphallifetimegroup.com
- **Admin Panel:** https://cms.triumphallifetimegroup.com/wp-admin
- **Public Frontend:** https://triumphallifetimegroup.com

### Required Plugins
To minimize bloat and maximize stability, install **only**:
1. **Advanced Custom Fields (ACF) PRO** — Required to create the Global Settings Options Page and to structure the custom fields for all content types.

**Do NOT install Custom Post Type UI.** All Custom Post Types, the Global Options page, custom endpoints, and ACF Field Schemas are registered programmatically in the TLG Core MU plugin.

### Content Types (Custom Post Types)
The following endpoints are consumed by the Next.js frontend:
- /wp-json/wp/v2/leadership
- /wp-json/wp/v2/careers
- /wp-json/wp/v2/posts (Native Insights/News)
- /wp-json/wp/v2/services
- /wp-json/wp/v2/faqs

*Note: The CPTs use internal prefixes (e.g. 	lg_leadership) to prevent collisions, but use est_base so the API URLs remain exactly as listed above.*

### Schema definitions (ACF Fields)
The frontend expects exactly these fields (which are automatically registered by the MU plugin):
- **Leadership:** job_title (Text), department (Text), iography (Wysiwyg), email (Email), linkedin (Url), display_order (Number), status (Select).
- **Careers:** department (Text), location (Text), employment_type (Text), pplication_url (Url), job_status (Select).
- **Services:** short_description (Textarea), key_benefits (Repeater -> enefit), cta_text (Text), cta_url (Url), display_order (Number), location_text (Text), entity_text (Text), contact_text (Text).
- **FAQs:** nswer (Wysiwyg), division (Text), display_order (Number).
- **Global Settings (Options Page):** company_name, general_email, primary_phone, whatsapp, ddress, copyright_text, acebook, linkedin, instagram, seo_description, seo_og_image.

### Custom Code: TLG Core MU Plugin
Create a file at wp-content/mu-plugins/tlg-core.php with the following code. This explicitly defines the CPTs with proper labels, registers the Options Page via ACF PRO, generates the ACF Schemas, and creates the dedicated REST endpoint for Global Settings (with proper sanitization).

`php
<?php
/*
Plugin Name: TLG Core Functionality
Description: Registers Custom Post Types, REST API configurations, Options Pages, and ACF field schemas for the Headless Next.js Frontend.
Author: Antigravity
Version: 1.3
*/

// 1. Register Custom Post Types
function tlg_register_custom_post_types() {
    \ = [
        'tlg_leadership' => [
            'rest_base' => 'leadership',
            'plural'    => 'Leadership Profiles',
            'singular'  => 'Leadership Profile',
            'icon'      => 'dashicons-groups',
            'supports'  => ['title', 'thumbnail']
        ],
        'tlg_careers' => [
            'rest_base' => 'careers',
            'plural'    => 'Careers',
            'singular'  => 'Career',
            'icon'      => 'dashicons-portfolio',
            'supports'  => ['title', 'editor']
        ],
        'tlg_services' => [
            'rest_base' => 'services',
            'plural'    => 'Services',
            'singular'  => 'Service',
            'icon'      => 'dashicons-clipboard',
            'supports'  => ['title', 'editor', 'thumbnail']
        ],
        'tlg_faqs' => [
            'rest_base' => 'faqs',
            'plural'    => 'FAQs',
            'singular'  => 'FAQ',
            'icon'      => 'dashicons-editor-help',
            'supports'  => ['title']
        ]
    ];

    foreach (\ as \ => \) {
        register_post_type(\, [
            'labels'              => [
                'name'          => \['plural'],
                'singular_name' => \['singular'],
                'add_new_item'  => 'Add New ' . \['singular'],
            ],
            // Headless-only configuration
            'public'              => false,
            'show_ui'             => true,
            'show_in_menu'        => true,
            'show_in_rest'        => true,
            'rest_base'           => \['rest_base'],
            'publicly_queryable'  => false,
            'exclude_from_search' => true,
            'show_in_nav_menus'   => false,
            'has_archive'         => false,
            'rewrite'             => false,

            'supports'            => \['supports'],
            'menu_icon'           => \['icon'],
        ]);
    }
}
add_action('init', 'tlg_register_custom_post_types');


// 2. Register Global Settings Options Page (Requires ACF PRO)
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


// 3. Register Global Settings REST Endpoint
function tlg_register_settings_endpoint() {
    register_rest_route('tlg/v1', '/settings', [
        'methods'  => 'GET',
        'callback' => 'tlg_get_global_settings',
        'permission_callback' => '__return_true'
    ]);
}
add_action('rest_api_init', 'tlg_register_settings_endpoint');

function tlg_get_global_settings() {
    if (!function_exists('get_field')) {
        return new WP_Error('acf_missing', 'ACF PRO is not installed or active.', ['status' => 503]);
    }

    // Normalize SEO Image to always be a URL string
    \ = get_field('seo_og_image', 'option');
    \ = '';
    if (is_array(\) && isset(\['url'])) {
        \ = \['url'];
    } elseif (is_numeric(\)) {
        \ = wp_get_attachment_url(\) ?: '';
    } elseif (is_string(\)) {
        \ = \;
    }

    // Sanitize and return
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
        'seo_og_image'    => esc_url_raw(\)
    ];
}


// 4. Register ACF Field Groups Programmatically
function tlg_register_acf_field_groups() {
    if (!function_exists('acf_add_local_field_group')) return;

    // A. Global Settings
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
        'show_in_rest' => true
    ]);

    // B. Leadership
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
        'show_in_rest' => true
    ]);

    // C. Careers
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
        'show_in_rest' => true
    ]);

    // D. Services
    acf_add_local_field_group([
        'key' => 'group_services',
        'title' => 'Service Details',
        'fields' => [
            ['key' => 'field_svc_desc', 'label' => 'Short Description', 'name' => 'short_description', 'type' => 'textarea'],
            ['key' => 'field_svc_benefits', 'label' => 'Key Benefits', 'name' => 'key_benefits', 'type' => 'repeater', 'sub_fields' => [['key' => 'field_svc_benefit_text', 'label' => 'Benefit', 'name' => 'benefit', 'type' => 'text']]],
            ['key' => 'field_svc_cta', 'label' => 'CTA Text', 'name' => 'cta_text', 'type' => 'text'],
            ['key' => 'field_svc_cta_url', 'label' => 'CTA URL', 'name' => 'cta_url', 'type' => 'url'],
            ['key' => 'field_svc_order', 'label' => 'Display Order', 'name' => 'display_order', 'type' => 'number'],
            ['key' => 'field_svc_loc', 'label' => 'Location Text', 'name' => 'location_text', 'type' => 'text'],
            ['key' => 'field_svc_ent', 'label' => 'Entity Text', 'name' => 'entity_text', 'type' => 'text'],
            ['key' => 'field_svc_cont', 'label' => 'Contact Text', 'name' => 'contact_text', 'type' => 'text'],
        ],
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'tlg_services']]],
        'show_in_rest' => true
    ]);

    // E. FAQs
    acf_add_local_field_group([
        'key' => 'group_faqs',
        'title' => 'FAQ Details',
        'fields' => [
            ['key' => 'field_faq_answer', 'label' => 'Answer', 'name' => 'answer', 'type' => 'wysiwyg'],
            ['key' => 'field_faq_div', 'label' => 'Division', 'name' => 'division', 'type' => 'text'],
            ['key' => 'field_faq_order', 'label' => 'Display Order', 'name' => 'display_order', 'type' => 'number'],
        ],
        'location' => [[['param' => 'post_type', 'operator' => '==', 'value' => 'tlg_faqs']]],
        'show_in_rest' => true
    ]);
}
add_action('acf/init', 'tlg_register_acf_field_groups');
`

---

## 3. Security & Access Control

The CMS subdomain provides architectural separation but **does not make WordPress inherently secure.** Security must rely on strict operational practices:

1. **HTTPS Enforcement:** HTTPS using the modern TLS configuration supported and recommended by the selected hosting provider.
2. **Account Segregation:**
   - The Website Owner must be provisioned an Administrator account.
   - The Developer/IT must use a separate Administrator account. **Do not share passwords between accounts.**
3. **Authentication:** Enforce strong passwords and 2FA (Two-Factor Authentication).
4. **Protection:** Implement a firewall/WAF and aggressive login rate limiting.
5. **Maintenance:** Maintain regular updates for WordPress core and ACF, and enforce automated daily filesystem and database backups.

---

## 4. Frontend Environment, Pagination, & Media Handling

The Next.js frontend is configured securely:
- **Environment Variable:** WORDPRESS_API_URL=https://cms.triumphallifetimegroup.com/wp-json/wp/v2
- **Secret Protection:** No browser-side NEXT_PUBLIC_ variables are used. All data fetching occurs exclusively on the Node.js server.
- **Caching & Revalidation:** Next.js caches CMS responses (
ext: { revalidate: 60 }). **CMS updates normally become visible on the public website within 60 seconds.** (Note: Future near-instant publishing can be optionally implemented using a WordPress publish webhook tied to Next.js evalidateTag).
- **Pagination Strategy:** Collection endpoints (Leadership, Services, Careers, FAQs, Insights) append ?per_page=100 to prevent WordPress from silently dropping content at the default 10-item limit. If Insights/News scales massively in the future, standard Next.js query-param pagination can be implemented.
- **Media & next/image:** `next.config.js` has been explicitly configured to authorize remote images from cms.triumphallifetimegroup.com.
- **Featured Media:** Rather than making sequential API requests for featured images (N+1), the Next.js client.ts uses the _embed=1 parameter to fetch posts and their associated media in a single REST request.
- **Parallel Requests:** Where Next.js pages require multiple independent collections, Next.js naturally resolves parallel requests seamlessly in Server Components.

---

## 5. Strict API Failure & Fallback Behaviour

- **Infrastructure/API failure** (e.g., DNS failure, Connection Timeout, HTTP 500, Malformed JSON): The client.ts catches the failure, logs the error, and returns `null`. The components detect `null` and seamlessly fall back to static arrays, ensuring the layout never breaks.
- **Successful API with no published content** (e.g., WordPress returns []): The frontend recognizes this is a valid empty state, intentionally skipping fallbacks and displaying proper messaging (e.g., "No insights published yet").

---

## 6. Deployment Checklist (For IT / Webmaster)

Follow this exact sequence to deploy the CMS and finalize the frontend:

### Stage 1: CMS Infrastructure
- [ ] **Hosting Setup:** Purchase a dedicated WordPress hosting environment.
- [ ] **DNS Configuration:** Configure cms.triumphallifetimegroup.com using the DNS record supplied by the WordPress hosting provider.
- [ ] **SSL Configuration:** Provision an SSL certificate for the subdomain.
- [ ] **WordPress Installation:** Install a fresh WordPress instance.

### Stage 2: CMS Configuration
- [ ] **Account Creation:** Create separate Admin accounts for the Owner and Developer.
- [ ] **Plugin Installation:** Install ACF PRO.
- [ ] **MU Plugin:** Upload the 	lg-core.php script to wp-content/mu-plugins/. *This automatically creates the Options Page, CPTs, Custom API Endpoints, and ACF fields.*
- [ ] **Content Migration:** Input real bios, jobs, insights, and FAQs.

### Stage 3: Frontend Deployment
- [ ] **Frontend Hosting:** Connect the GitHub repository to Vercel, Netlify, or AWS Amplify.
- [ ] **Environment Variables:** Set WORDPRESS_API_URL=https://cms.triumphallifetimegroup.com/wp-json/wp/v2.
- [ ] **Staging Verification:** Run a preview deployment. Verify that the Next.js site successfully pulls data from the CMS.
- [ ] **Production Deployment:** Assign 	riumphallifetimegroup.com to the project and launch.

---

**Note:** The WordPress integration cannot be considered fully production-verified until the real WordPress server exists and API integration tests have been successfully executed against the live endpoints.
