# TLG SEO register

- Every indexable fixed page gets its title, description and optional social image from its WordPress page record.
- Canonicals use the final root route family in `TLG-URL-MIGRATION-MAP.md`.
- Open Graph and Twitter cards are produced by `pageMetadata`.
- The root layout emits Organization/Corporation and WebSite JSON-LD. LocalBusiness is emitted only for a published, active, client-facing location with an address.
- Division pages emit Service, BreadcrumbList and FAQPage only when the FAQs are visibly rendered.
- Insight detail emits Article and BreadcrumbList with author, reviewer, publish/review dates and featured image.
- `/sitemap.xml` uses WordPress `modifiedAt` and Insight publish/review dates. Redirected/duplicate paths are excluded.
- `/robots.txt` allows public crawling and advertises the canonical sitemap.
- Unsupported thin supporting-service pages were not created.
- Remaining action: supply an approved 1200×630 default social image and validate production schema after the CMS migration.
