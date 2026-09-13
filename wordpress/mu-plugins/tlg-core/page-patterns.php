<?php

if (!defined('ABSPATH')) {
    exit;
}

function tlg_register_page_patterns() {
    if (!function_exists('register_block_pattern')) {
        return;
    }

    register_block_pattern_category('tlg-pages', ['label' => 'TLG Page Layouts']);

    register_block_pattern('tlg-pages/standard', [
        'title' => 'TLG Standard Page',
        'description' => 'A clear introduction, two content sections, and a contact action.',
        'categories' => ['tlg-pages'],
        'content' => '<!-- wp:paragraph --><p>Write a short introduction to this page.</p><!-- /wp:paragraph -->'
            . '<!-- wp:heading --><h2>First section</h2><!-- /wp:heading -->'
            . '<!-- wp:paragraph --><p>Explain the first point in your own words.</p><!-- /wp:paragraph -->'
            . '<!-- wp:heading --><h2>Second section</h2><!-- /wp:heading -->'
            . '<!-- wp:paragraph --><p>Add the next details here.</p><!-- /wp:paragraph -->'
            . '<!-- wp:buttons --><div class="wp-block-buttons"><!-- wp:button --><div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="/contact">Contact us</a></div><!-- /wp:button --></div><!-- /wp:buttons -->',
    ]);

    register_block_pattern('tlg-pages/two-column', [
        'title' => 'TLG Two-Column Page',
        'description' => 'An introduction followed by two side-by-side content areas.',
        'categories' => ['tlg-pages'],
        'content' => '<!-- wp:paragraph --><p>Write a short introduction to this page.</p><!-- /wp:paragraph -->'
            . '<!-- wp:columns --><div class="wp-block-columns">'
            . '<!-- wp:column --><div class="wp-block-column"><!-- wp:heading --><h2>First topic</h2><!-- /wp:heading --><!-- wp:paragraph --><p>Describe this topic.</p><!-- /wp:paragraph --></div><!-- /wp:column -->'
            . '<!-- wp:column --><div class="wp-block-column"><!-- wp:heading --><h2>Second topic</h2><!-- /wp:heading --><!-- wp:paragraph --><p>Describe this topic.</p><!-- /wp:paragraph --></div><!-- /wp:column -->'
            . '</div><!-- /wp:columns -->',
    ]);
}
