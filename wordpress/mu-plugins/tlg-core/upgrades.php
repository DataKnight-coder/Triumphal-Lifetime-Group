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

function tlg_upgrade_write_meta($post_id, $key, $value, &$ok) {
    update_post_meta($post_id, $key, $value);
    if ((string) get_post_meta($post_id, $key, true) !== (string) $value) {
        $ok = false;
        error_log('TLG approved-content upgrade could not save ' . $key . ' for post ' . $post_id . '.');
    }
}

/** Change a field only while it still contains the known legacy value. */
function tlg_upgrade_meta_if_legacy($post_id, $key, $legacy, $approved, &$ok) {
    $current = (string) get_post_meta($post_id, $key, true);
    if ($current === (string) $approved || $current !== (string) $legacy) {
        return;
    }
    tlg_upgrade_write_meta($post_id, $key, $approved, $ok);
}

function tlg_upgrade_unique_page($page_key, &$ok) {
    $posts = get_posts([
        'post_type' => 'tlg_pages',
        'post_status' => ['publish', 'draft', 'private'],
        'numberposts' => 2,
        'meta_key' => '_tlg_page_key',
        'meta_value' => $page_key,
        'suppress_filters' => false,
    ]);
    if (count($posts) > 1) {
        $ok = false;
        error_log('TLG approved-content upgrade found duplicate page key ' . $page_key . '.');
        return null;
    }
    return $posts[0] ?? null;
}

function tlg_upgrade_create_post($post_type, $slug, $title, $content, $meta, &$ok) {
    $existing = get_page_by_path($slug, OBJECT, $post_type);
    if ($existing) {
        return $existing->ID;
    }
    $post_id = wp_insert_post([
        'post_type' => $post_type,
        'post_status' => 'publish',
        'post_name' => $slug,
        'post_title' => $title,
        'post_content' => $content,
    ], true);
    if (is_wp_error($post_id)) {
        $ok = false;
        error_log('TLG approved-content upgrade could not create ' . $slug . ': ' . $post_id->get_error_message());
        return 0;
    }
    foreach ($meta as $key => $value) {
        tlg_upgrade_write_meta($post_id, $key, $value, $ok);
    }
    return $post_id;
}

/** Apply the approved September 2026 copy and seventh-division corrections once. */
function tlg_upgrade_approved_site_content() {
    $marker = 'tlg_approved_site_content_upgrade_v1';
    $lock = $marker . '_lock';
    if (get_option($marker, false) || !add_option($lock, time(), '', 'no')) {
        return;
    }

    $ok = true;
    try {
        if (get_option($marker, false)) {
            return;
        }

        $page_changes = [
            'home' => [
                '_tlg_hero_description' => ['Six specialist service divisions and a Charity Foundation, working together to provide professional guidance, practical support and responsible community impact.', 'Seven specialist service divisions and a Charity Foundation, working together to provide professional guidance, practical support and responsible community impact.'],
                '_tlg_intro_body' => ['We bring together HR and business consulting, education advisory, global mobility support, real estate advisory, information technology, and digital products, alongside our humanitarian Foundation.', 'We bring together HR and business consulting, career services, education advisory, global mobility support, real estate, information technology and digital products, alongside our humanitarian Foundation.'],
                '_tlg_process_items' => ["Consult | We take time to understand your needs, goals, and challenges.\nImplement | We develop and coordinate practical solutions tailored to your requirements.\nSupport | We provide ongoing guidance to help you achieve sustainable results.", "Consult | We take time to understand your needs, goals and challenges.\nImplement | We develop and coordinate practical solutions tailored to your requirements.\nSupport | We provide ongoing guidance to help you achieve sustainable results."],
            ],
            'about' => [
                '_tlg_hero_description' => ['Triumphal Lifetime Group brings together six specialist service divisions and a Charity Foundation.', 'Triumphal Lifetime Group brings together seven specialist service divisions and a Charity Foundation.'],
                '_tlg_intro_heading' => ['Six Divisions. One Shared Purpose.', 'Seven Divisions. One Shared Purpose.'],
                '_tlg_services_items' => ["HR & Business Consulting | Practical people, workplace and business support.\nGlobal Education Advisory | Guidance for study planning and applications.\nGlobal Mobility Services | Visa application guidance and administrative coordination.\nReal Estate | Advisory, sourcing and transaction support.\nInformation Technology | Practical technology and digital business support.\nDigital Products & E-commerce | Digital resources currently in development.\nCharity Foundation | Humanitarian and community-development initiatives.", "HR & Business Consulting | Practical people, workplace and business support.\nCareer Services | CV, résumé, LinkedIn, interview and job-search support.\nGlobal Education Advisory | Guidance for study planning and applications.\nGlobal Mobility Services | Visa application guidance and administrative coordination.\nReal Estate | Advisory, sourcing and transaction support.\nInformation Technology | Practical technology and digital business support.\nDigital Products & E-commerce | Digital resources currently in development.\nCharity Foundation | Humanitarian and community-development initiatives."],
            ],
            'companies' => [
                '_tlg_hero_title' => ['Specialist expertise across six service divisions.', 'Specialist expertise across seven service divisions.'],
                '_tlg_seo_description' => ['Explore HR, education, mobility, real estate, technology and digital product services.', 'Explore HR, career, education, mobility, real estate, technology and digital product services.'],
            ],
            'real-estate' => [
                '_tlg_hero_description' => ['We provide real estate advisory and brokerage support to help clients make informed property decisions.', 'We provide real estate advisory and transaction coordination, with regulated or licensed brokerage activities delivered through appropriately licensed real estate professionals.'],
                '_tlg_services_items' => ["Property advisory | Guidance based on your stated objectives and circumstances.\nProperty sourcing | Support identifying options that match an agreed brief.\nBuying and selling support | Coordination through property transaction stages.\nRental property support | Assistance for clients considering rental options.\nProperty investment guidance | General information and decision support without guaranteed outcomes.\nClient coordination | Communication with relevant parties throughout the property journey.", "Property advisory | Guidance based on your stated objectives and circumstances.\nProperty sourcing | Support identifying options that match an agreed brief.\nBuying and selling support | Coordination through property transaction stages.\nHoliday-home or short-let support | Assistance for clients considering rental options.\nProperty investment guidance | General information and decision support without guaranteed outcomes.\nClient coordination | Communication with relevant parties throughout the property journey."],
                '_tlg_disclaimer_body' => ['Property values, rental income, and investment returns are not guaranteed and may rise or fall. Clients should conduct appropriate due diligence before making property investment decisions.', 'Property values, rental income and investment returns are not guaranteed and may rise or fall. Clients should conduct appropriate due diligence. Regulated or licensed brokerage activities are delivered through appropriately licensed real estate professionals.'],
            ],
            'education' => [
                '_tlg_services_items' => ["Student profile assessment | Review of academic background, interests and goals.\nUniversity and programme research | Support identifying suitable institutions and courses.\nApplication support | Guidance preparing and organising applications.\nDocumentation guidance | Practical review of required supporting documents.\nAdmission follow-up | Administrative support following submitted applications.\nStudent visa guidance | General application and documentation support after an offer is received.", "Student profile assessment | Review of academic background, interests and goals.\nUniversity and programme research | Support in identifying suitable institutions and programmes.\nApplication support | Guidance on preparing and organising applications.\nDocumentation guidance | Practical review of required supporting documents.\nAdmission follow-up | Administrative support following submitted applications.\nStudent visa guidance | General application and documentation support after an offer is received."],
            ],
            'global-mobility' => [
                '_tlg_services_items' => ["Application guidance | General support understanding application stages and requirements.\nDocument preparation support | Help organising information and documentation.\nApplication coordination | Administrative support tracking agreed steps.\nRelocation guidance | General practical information for planning a move.\nClient follow-up | Clear communication and progress follow-up.\nGeneral mobility support | Practical administrative assistance based on the client's circumstances.", "Application guidance | General support in understanding application stages and requirements.\nDocument preparation support | Help organising information and documentation.\nApplication coordination | Administrative support tracking agreed steps.\nRelocation guidance | General practical information for planning a move.\nClient follow-up | Clear communication and progress follow-up.\nGeneral mobility support | Practical administrative assistance based on the client's circumstances."],
                '_tlg_disclaimer_body' => ['All visa and immigration decisions are made solely by the relevant government and immigration authorities. Triumphal Lifetime Group does not guarantee visa approval.', 'All visa and immigration decisions are made solely by the relevant government and immigration authorities. Triumphal Lifetime Group does not guarantee visa approval. We provide general administrative and documentation support. Regulated immigration advice is provided only by appropriately authorised professionals.'],
            ],
            'digital-products' => [
                '_tlg_disclaimer_body' => ['Products, prices, payment, delivery and refund terms will not be published until the client confirms final products and the deferred store phase is approved.', 'Product details, pricing, payment options, delivery information and applicable refund terms will be published before the official launch.'],
                '_tlg_secondary_cta_text' => ['', 'Visit Triumphal Lifetime Store'],
            ],
            'leadership' => [
                '_tlg_hero_description' => ['Profiles are published with client-approved titles, biographies, qualifications and portraits.', 'Leadership profiles include approved titles, biographies, qualifications and portraits.'],
            ],
            'careers' => [
                '_tlg_cta_body' => ['A dedicated recruitment form will be enabled after the client confirms recruitment authority, retention rules and the approved CV destination.', 'There are currently no open positions. Please follow our official platforms for future career opportunities.'],
            ],
            'contact' => [
                '_tlg_intro_body' => ['Complete the secure form and submit it only after reviewing the Privacy Policy.', 'Complete the secure form and submit it only after reviewing the Privacy Policy. We aim to respond to enquiries within 1–2 business days.'],
            ],
            'partners' => [
                '_tlg_status' => ['active', 'inactive'],
            ],
            'site-navigation' => [
                '_tlg_navigation_items' => ["Home | /\nAbout | /about\nOur Divisions | /companies\nLeadership | /leadership\nInsights | /insights\nFoundation | /charity-foundation\nContact | /contact", "Home | /\nAbout | /about\nOur Divisions | /companies\nLeadership | /leadership\nFoundation | /charity-foundation\nInsights | /insights\nContact | /contact"],
                '_tlg_division_items' => ["HR & Business Consulting | /hr-business-consulting | /visuals/hr.jpg\nGlobal Education Advisory | /global-education-advisory | /visuals/education.jpg\nGlobal Mobility Services | /global-mobility-visa-services | /visuals/global-mobility.jpg\nReal Estate | /real-estate-advisory | /visuals/real-estate.jpg\nInformation Technology | /it-solutions | /visuals/technology.jpg\nDigital Products & E-commerce | /digital-products-ecommerce | /visuals/digital-learning.jpg", "HR & Business Consulting | /hr-business-consulting | /visuals/hr.jpg\nCareer Services | /career-services | /visuals/edu-career.jpg\nGlobal Education Advisory | /global-education-advisory | /visuals/education.jpg\nGlobal Mobility Services | /global-mobility-visa-services | /visuals/global-mobility.jpg\nReal Estate | /real-estate-advisory | /visuals/real-estate.jpg\nInformation Technology | /it-solutions | /visuals/technology.jpg\nDigital Products & E-commerce | /digital-products-ecommerce | /visuals/digital-learning.jpg"],
            ],
            'site-footer' => [
                '_tlg_intro_body' => ['Practical professional support across six specialist divisions, alongside responsible community impact through our Charity Foundation.', 'Practical professional support across seven specialist divisions, alongside responsible community impact through our Charity Foundation.'],
                '_tlg_footer_divisions' => ["HR & Business Consulting | /hr-business-consulting\nGlobal Education Advisory | /global-education-advisory\nGlobal Mobility Services | /global-mobility-visa-services\nReal Estate | /real-estate-advisory\nInformation Technology | /it-solutions\nDigital Products & E-commerce | /digital-products-ecommerce", "HR & Business Consulting | /hr-business-consulting\nCareer Services | /career-services\nGlobal Education Advisory | /global-education-advisory\nGlobal Mobility Services | /global-mobility-visa-services\nReal Estate | /real-estate-advisory\nInformation Technology | /it-solutions\nDigital Products & E-commerce | /digital-products-ecommerce"],
            ],
        ];

        foreach ($page_changes as $page_key => $changes) {
            $post = tlg_upgrade_unique_page($page_key, $ok);
            if (!$post) {
                continue;
            }
            foreach ($changes as $meta_key => $values) {
                tlg_upgrade_meta_if_legacy($post->ID, $meta_key, $values[0], $values[1], $ok);
            }
        }

        $career_page = tlg_upgrade_unique_page('career-services', $ok);
        if (!$career_page) {
            tlg_upgrade_create_post('tlg_pages', 'career-services', 'Career Services', '', [
                '_tlg_page_key' => 'career-services',
                '_tlg_hero_eyebrow' => 'Career Services',
                '_tlg_hero_title' => 'Present your experience with clarity.',
                '_tlg_hero_description' => 'Professional CV, résumé, LinkedIn, interview and job-search support for local and international opportunities.',
                '_tlg_hero_image_alt' => 'Professional receiving career coaching',
                '_tlg_intro_heading' => 'Practical Support for Your Next Career Move',
                '_tlg_intro_body' => 'We help professionals present their experience clearly, prepare for interviews and approach their job search with a practical strategy.',
                '_tlg_services_heading' => 'Career Services',
                '_tlg_services_items' => "ATS CV and résumé writing | Clear, role-focused documents structured for applicant tracking systems.\nLinkedIn profile optimisation | A stronger professional profile aligned with your goals.\nCover letters | Tailored letters that connect your experience to the opportunity.\nInterview preparation | Focused preparation for likely questions and clear responses.\nMock interviews | Practice sessions with constructive feedback.\nCareer coaching | Practical guidance for career decisions and progression.\nJob-search strategy | A structured plan for identifying and pursuing suitable opportunities.\nUAE résumés | Résumé support suited to applications in the UAE.\nCanada résumés | Résumé support suited to applications in Canada.\nNigeria résumés | Résumé support suited to applications in Nigeria.\nInternational résumés | Résumé support for opportunities across international markets.",
                '_tlg_audience_heading' => 'Who We Help',
                '_tlg_audience_body' => 'Graduates, career changers, experienced professionals and international job seekers who want clearer, stronger application materials and interview preparation.',
                '_tlg_process_heading' => 'How We Work',
                '_tlg_process_items' => "Consult | We discuss your experience, goals and target roles.\nReview | We assess your current documents and positioning.\nDevelop | We prepare the agreed career materials or coaching plan.\nRefine | We incorporate feedback and complete the agreed deliverables.",
                '_tlg_cta_heading' => 'Prepare for your next career opportunity.',
                '_tlg_cta_text' => 'Book a Career Consultation',
                '_tlg_cta_url' => '/contact?book=true&service=Career%20Services',
                '_tlg_disclaimer_heading' => 'Career Outcomes',
                '_tlg_disclaimer_body' => 'Career services improve how experience and qualifications are presented but do not guarantee interviews, employment, visas or any particular outcome.',
                '_tlg_seo_title' => 'Career Services | Triumphal Lifetime Group',
                '_tlg_seo_description' => 'ATS CV and résumé writing, LinkedIn optimisation, cover letters, interview preparation, career coaching and international résumé support.',
                '_tlg_display_order' => 6,
                '_tlg_status' => 'active',
            ], $ok);
        }

        tlg_upgrade_create_post('tlg_services', 'career-services', 'Career Services', 'Practical career support for graduates, career changers, experienced professionals and international job seekers.', [
            '_tlg_short_description' => 'Helping professionals strengthen CVs, résumés, LinkedIn profiles, interviews and job-search strategy.',
            '_tlg_key_benefits' => '',
            '_tlg_cta_text' => 'Learn More',
            '_tlg_cta_url' => '/career-services',
            '_tlg_display_order' => 2,
            '_tlg_division' => 'career-services',
            '_tlg_status' => 'active',
            '_tlg_location_text' => '',
            '_tlg_entity_text' => 'Operating as a division of Triumphal Lifetime Group',
            '_tlg_contact_text' => '',
        ], $ok);

        foreach ([
            'real-estate-advisory' => [2, 5, 'Real Estate Advisory', 'Real Estate'],
            'information-technology' => [6, 6, null, null],
            'digital-products-learning' => [5, 7, null, null],
        ] as $slug => $values) {
            $post = get_page_by_path($slug, OBJECT, 'tlg_services');
            if (!$post) continue;
            tlg_upgrade_meta_if_legacy($post->ID, '_tlg_display_order', $values[0], $values[1], $ok);
            if ($values[2] !== null && $post->post_title === $values[2]) {
                $updated = wp_update_post(['ID' => $post->ID, 'post_title' => $values[3]], true);
                if (is_wp_error($updated)) $ok = false;
            }
        }

        $leader_changes = [
            'peace-emem' => [
                'title' => ['Peace Emem', 'Peace Emem Olorunkunle'],
                'replacements' => [
                    'Group CEO, President, and executive leadership team' => 'Group CEO and executive leadership team',
                    'organizational efficiency' => 'organisational efficiency',
                ],
            ],
            'kingsley-chukwuemeka-udenna' => [
                'replacements' => [
                    'organizational development' => 'organisational development',
                    'people-centered' => 'people-centred',
                    'organizational capability' => 'organisational capability',
                    'Great organizations' => 'Great organisations',
                ],
            ],
        ];
        foreach ($leader_changes as $slug => $changes) {
            $post = get_page_by_path($slug, OBJECT, 'tlg_leadership');
            if (!$post) continue;
            $update = ['ID' => $post->ID];
            if (isset($changes['title']) && $post->post_title === $changes['title'][0]) {
                $update['post_title'] = $changes['title'][1];
            }
            $content = str_replace(array_keys($changes['replacements']), array_values($changes['replacements']), $post->post_content);
            if ($content !== $post->post_content) $update['post_content'] = $content;
            if (count($update) > 1 && is_wp_error(wp_update_post($update, true))) $ok = false;
        }

        $old_faqs = [
            'can-you-digitise-our-existing-internal-manuals',
            'do-you-deliver-live-training-or-only-self-paced-content',
            'how-long-does-it-take-to-build-a-corporate-training-programme',
            'what-do-your-downloadable-business-resources-include',
            'what-types-of-organisations-do-you-build-training-programmes-for',
        ];
        foreach ($old_faqs as $slug) {
            $post = get_page_by_path($slug, OBJECT, 'tlg_faqs');
            if ($post) tlg_upgrade_meta_if_legacy($post->ID, '_tlg_status', 'active', 'inactive', $ok);
        }

        $new_faqs = [
            ['when-will-digital-products-launch', 'When will the digital products launch?', 'The products are currently in development. Launch details will be published on this website and our official platforms when the store is ready.'],
            ['what-digital-products-will-be-available', 'What types of digital products will be available?', 'Planned categories include practical business templates, HR resources, guides, e-books, training materials and other downloadable tools. Final product details will be confirmed before launch.'],
            ['how-will-customers-purchase-digital-products', 'How will customers purchase digital products?', 'Purchase instructions and a verified store link will be provided when the store launches. No active store link is displayed before that destination is confirmed.'],
            ['what-payment-options-will-be-available', 'What payment options will be available?', 'Supported payment methods, currencies and any applicable charges will be published before the official launch.'],
            ['how-will-digital-product-access-work', 'How will access and downloads work?', 'Access and delivery instructions will be shown clearly on each product page and in the purchase confirmation when the store is live.'],
            ['what-digital-product-refund-terms-will-apply', 'What refund terms will apply?', 'Product-specific refund and cancellation terms will be published before purchase and will reflect the product format and applicable consumer law.'],
            ['will-digital-product-support-be-available', 'Will support be available after purchase?', 'The support route and scope for each product will be stated before purchase. Customers will also be able to use the official contact page for order-related enquiries.'],
        ];
        foreach ($new_faqs as $index => $faq) {
            tlg_upgrade_create_post('tlg_faqs', $faq[0], $faq[1], $faq[2], [
                '_tlg_division' => 'digital-learning',
                '_tlg_display_order' => $index + 1,
                '_tlg_status' => 'active',
            ], $ok);
        }

        $settings = get_option('tlg_global_settings', []);
        if (!is_array($settings)) $settings = [];
        foreach ([
            'tagline' => 'Empowering People. Building Businesses. Transforming Communities.',
            'general_email' => 'admin@triumphallifetimegroup.com',
            'whatsapp' => '+2349031865491',
            'nigeria_phone' => '+234 903 186 5491',
            'canada_phone' => '+1 647 774 0409',
            'uae_phone' => '+971 55 199 5483',
        ] as $key => $value) {
            if (!isset($settings[$key]) || trim((string) $settings[$key]) === '') $settings[$key] = $value;
        }
        update_option('tlg_global_settings', $settings);
        $saved_settings = get_option('tlg_global_settings', []);
        foreach ($settings as $key => $value) {
            if (!is_array($saved_settings) || !array_key_exists($key, $saved_settings) || (string) $saved_settings[$key] !== (string) $value) $ok = false;
        }

        if ($ok) update_option($marker, true, false);
    } finally {
        delete_option($lock);
    }
}
