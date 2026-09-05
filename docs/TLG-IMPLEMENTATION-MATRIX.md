# TLG implementation matrix

| Requirement | Status | Evidence / limitation |
|---|---|---|
| WordPress as runtime content source | DONE | Public business copy is fetched through `lib/wordpress/client.ts`; repository fixtures are migration/test inputs only. |
| Structured fixed-page editing | DONE | `tlg_pages` provides constrained hero, section, CTA, disclaimer, navigation, footer and SEO fields. |
| Six divisions and Foundation copy | DONE | Approved copy is in `content/pages/pages.json`; six service records remain separate. |
| Leadership | PARTIAL | Structured groups and trust fields are complete. Final titles/biographies require client confirmation. Mr Charles is retained but inactive pending resolution. |
| Locations | BLOCKED_CLIENT_CONFIRMATION | CPT and frontend are complete; no location is seeded or labelled as an office without evidence. |
| Foundation impact | BLOCKED_CLIENT_CONFIRMATION | Programme/impact/future model is complete; no completed impact record is seeded without evidence. |
| Careers | DONE | Only WordPress records marked Open render. With zero records the approved no-vacancy text displays. Talent-pool uploads are disabled. |
| Insights | PARTIAL | Dynamic index/slug, author, reviewer, dates, sources and schema are complete. Existing high-trust articles are drafts pending review/sources. |
| Enquiry and booking | PARTIAL | Server validation, Turnstile, rate limit, consent audit and real mail result are implemented. Production keys/destination and delivery test are external blockers. |
| Navigation/footer | DONE | Both are constrained WordPress page records; layout remains developer-controlled. |
| SEO | DONE | Canonicals, metadata, Organization/WebSite/Service/FAQ/Article/Breadcrumb schema, robots, one-hop redirects and dynamic sitemap implemented. |
| Analytics | PARTIAL | PII-free event helper and successful enquiry/consultation events implemented; business-owned analytics ID and consent configuration are outstanding. |
| Publishing | DONE | All eight public CPTs, settings, status/meta/media changes use the private debounced hook; autosaves/revisions are ignored. |
| Legal text | LEGAL_REVIEW | Safe factual drafts are migrated, explicitly marked for final legal/client approval. |
| Production CMS edit/rebuild proof | BLOCKED_CLIENT_CONFIRMATION | Requires MU-plugin upload, migration credentials and authorised Hostinger/Netlify access. |

`DEVELOPER_CONTROLLED`: visual layout, Tailwind classes, animation, responsive behaviour, schema generation, route mapping, REST validation and security rules.
