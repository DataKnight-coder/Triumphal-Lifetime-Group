# TLG CMS Parity Audit

Audit baseline: `c02ec5e9dfc9eae8dc66280cb6f74bcbf303c8ba` on `feature/tlg-wordpress-cms`.

Classification describes the repository before the full-parity remediation on `fix/full-wordpress-cms-parity`. A page is not classified as fully controlled merely because it imports one WordPress function.

| Public route or surface | Baseline | WordPress-controlled before remediation | Hard-coded/client-editable content found |
|---|---|---|---|
| `/` Home | `PARTIALLY_WORDPRESS` | Global contact/settings values | H1, hero copy/image, division positioning, section headings, process, benefits, CTAs |
| `/about` | `HARD_CODED` | None | Entire page, statistics, positioning, related-page cards, SEO |
| `/about/our-story` | `HARD_CODED` | None | Entire narrative and expansion claims |
| `/companies` | `PARTIALLY_WORDPRESS` | Six service cards | H1, introduction, labels and SEO |
| HR & Business Consulting | `PARTIALLY_WORDPRESS` | FAQs | Hero, service scope, audience, positioning, process, CTA, disclaimer and SEO |
| Real Estate | `PARTIALLY_WORDPRESS` | FAQs | Hero, service scope, advisory copy, process, CTA, risk disclaimer and SEO |
| Global Education Advisory | `PARTIALLY_WORDPRESS` | FAQs | Hero, journey, services, audience, CTA, disclaimer and SEO |
| Global Mobility Services | `PARTIALLY_WORDPRESS` | FAQs | Hero, service scope, process, deliverables, CTA, disclaimer and SEO |
| Information Technology | `PARTIALLY_WORDPRESS` | FAQs | Hero, service scope, process, CTA, capability claims and SEO |
| Digital Products & E-commerce | `PARTIALLY_WORDPRESS` | FAQs | Hero, product readiness, categories, CTAs and SEO |
| Charity Foundation | `HARD_CODED` | None | About, beneficiaries, programmes, claimed/future impact, founder panel, CTAs and SEO |
| `/about/leadership` | `PARTIALLY_WORDPRESS` | Profiles | Page title/introduction/CTA and incomplete profile trust fields |
| `/careers` | `PARTIALLY_WORDPRESS` | Open vacancy records | Page title/introduction, empty-state/talent-pool copy and SEO |
| `/careers/apply` | `HARD_CODED` | None | Entire simulated application experience |
| `/contact` | `PARTIALLY_WORDPRESS` | Global phone/email | Hero, assumed offices, form labels/options/copy; form had no confirmed server receipt |
| `/insights` | `PARTIALLY_WORDPRESS` | Insight cards | Page H1/introduction and unsupported “research-backed” wording |
| `/insights/[slug]` | `PARTIALLY_WORDPRESS` | Title, body, excerpt, author, date, image, category and basic SEO | Reviewer, review date, sources, related division and Article trust/schema fields missing |
| `/about/global-presence` | `HARD_CODED` | None | Nigeria/UAE/Canada labels, operational descriptions and images |
| `/about/partners` and `/partnerships` | `HARD_CODED` | None | Unverified partnership categories/positioning |
| `/privacy` | `HARD_CODED` | Global email only | Entire legal body and last-updated value |
| `/terms` | `HARD_CODED` | None | Entire legal body, jurisdiction placeholders and contact claims |
| `/disclaimer` | `HARD_CODED` | None | Entire legal body |
| `/cookies`, `/cookie-policy`, `/accessibility`, `/refund-policy` | `HARD_CODED` | Some global contact values | Entire policy copy and metadata |
| Primary/mobile navigation | `HARD_CODED` | None | Labels, URLs, division menu, CTA |
| Footer | `PARTIALLY_WORDPRESS` | Contact/social/settings values | Section labels, navigation links, CTA and descriptive copy |

## Developer-controlled surfaces

The following remain `DEVELOPER_CONTROLLED`: layout grids, Tailwind classes, animation timing, responsive breakpoints, accordion behaviour, form validation rules, REST parsing, security controls, canonical route mapping and structured-data rendering. These are implementation controls, not ordinary client copy.

## Remediation standard

The parity implementation must move the client-editable values above into constrained WordPress fields while keeping layout controls in code. Repository migration fixtures may remain for idempotent migration and rollback evidence but must not be runtime content fallbacks.

## Remediated state

The production runtime now classifies Home, About, Our Story, Companies, all six divisions, Foundation, Leadership, Careers, Contact, Insights index/detail, Global Presence, Partners, legal/policy pages, primary/mobile navigation and footer as `FULLY_WORDPRESS` for client-editable content. All render through the strict WordPress client; no `app/` or `components/` runtime module imports `lib/content/`.

`DEVELOPER_CONTROLLED` values remain limited to presentation and safety logic. `/careers/apply`, `/book`, duplicate policy paths and legacy route families are redirects, not independent content pages. Repository content is retained only for controlled migration, local contract tests and rollback evidence.
