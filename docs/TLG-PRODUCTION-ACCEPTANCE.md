# TLG production acceptance

## Local evidence

| Check | Result |
|---|---|
| PHP syntax, all seven TLG PHP files | PASS |
| Migration dry run | PASS: 72 records; leadership 8, services 6, careers 0, FAQs 30, Insights 3, pages 25, locations 0, Foundation 0 |
| Proven equivalent source FAQ duplicates | PASS: 0 |
| TypeScript | PASS |
| CMS parity contract suite | PASS |
| Production Next.js build against the local WordPress contract | PASS: 43 routes |
| Browser canonical pages/H1/schema | PASS for all six divisions, Foundation, Leadership, Careers, Contact, Privacy and Terms |
| One-hop legacy redirect | PASS: `/solutions/hr-consulting` resolved directly to `/hr-business-consulting` |
| Form semantics | PASS: labelled fields, consent, honeypot and disabled submission before verification |

## Required external acceptance after Hostinger upload

Upload the plugin files, create a verified backup, run the migration with a temporary Application Password, configure Enquiry Forms, and rebuild the preview. For Home, each division, Foundation, Leadership, one reviewed Insight and settings/contact: edit one visible field, save, observe one debounced build, verify the preview, revert, and verify the second build. Do not use personal data in form tests.

Also verify all nine public TLG endpoints, record counts, images, metadata, sitemap, robots, canonicals, schema, 404, mail receipt/failure, rate limiting, Turnstile, desktop/mobile keyboard navigation and media-triggered publishing.

## Gate

Repository implementation is ready for deployment review. Production acceptance remains `BLOCKED_CLIENT_CONFIRMATION` until the updated MU-plugin and migration are live, secrets/settings are supplied, high-trust content is approved and the edit/save/rebuild/revert matrix is recorded. Do not merge to `main` before that gate is signed off.
