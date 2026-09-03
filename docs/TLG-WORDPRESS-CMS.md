# TLG WordPress Headless CMS

## Architecture

The public website remains the existing Next.js application on Netlify. WordPress is a headless content service only:

```text
cms.triumphallifetimegroup.com/wp-admin
  → WordPress on Hostinger
  → TLG Headless CMS must-use plugin
  → /wp-json/tlg/v1/*
  → Next.js on Netlify
  → triumphallifetimegroup.com
```

Cloudflare continues to manage DNS, GitHub stores the frontend source, and Netlify serves the public domain. Do not install or activate a public WordPress theme as a replacement for the Next.js site.

## WordPress installation

1. Install a current supported WordPress release on Hostinger for `cms.triumphallifetimegroup.com`.
2. Enable HTTPS and use a supported PHP 8.x release recommended by Hostinger.
3. In WordPress Settings → Permalinks, choose Post name and save.
4. Copy `wordpress/mu-plugins/tlg-core.php` and the complete `wordpress/mu-plugins/tlg-core/` directory into `wp-content/mu-plugins/`.
5. Sign in to WordPress and confirm the TLG CMS menu contains Dashboard, Global Settings, Leadership, Services, Careers, FAQs, Insights, and Publishing. Media remains a normal WordPress menu.
6. Confirm the WordPress uploads directory is writable through the Media Library. Do not broaden filesystem permissions beyond Hostinger's normal WordPress recommendation.

The plugin uses WordPress core APIs and does not require ACF or another paid field plugin.

## Content model

| Content | WordPress storage | Public rule |
|---|---|---|
| Global Settings | Private WordPress option | Returned from the normalized settings endpoint |
| Leadership | `tlg_leadership` | Published and Active |
| Services | `tlg_services` | Published and Active |
| Careers | `tlg_careers` | Published and Open |
| FAQs | `tlg_faqs` | Published and Active; requested division plus Global |
| Insights | `tlg_insights` | Published |

All content lists are ordered by Display order, then title, then WordPress ID. Missing FAQ divisions are rejected and are never interpreted as Global.

## Public REST API

The plugin exposes read-only normalized routes:

```text
GET /wp-json/tlg/v1/settings
GET /wp-json/tlg/v1/leadership
GET /wp-json/tlg/v1/services
GET /wp-json/tlg/v1/careers
GET /wp-json/tlg/v1/faqs?division=technology
GET /wp-json/tlg/v1/insights
```

The FAQ route requires one of the six solution division slugs. WordPress core REST authentication protects administrative writes. The TLG plugin registers no public write route. The private Netlify build-hook value is not registered in REST and is never included in settings responses.

## Next.js configuration

Configure this server-side variable in local development and Netlify:

```text
WORDPRESS_API_URL=https://cms.triumphallifetimegroup.com
```

Use the WordPress origin only; do not append `/wp-json/wp/v2`. The strict client in `lib/wordpress/client.ts` validates every response. A valid empty collection stays empty. An unavailable or malformed API returns the retained local migration content until live WordPress records are verified. This bridge must be removed only after the live API count and content audit passes.

## Content migration

The migration utility is non-destructive and idempotently upserts records by slug. It never deletes WordPress records. For FAQs, it also skips a record when normalized question, division, and answer prove an equivalent record already exists.

Audit the package without credentials:

```bash
npm run cms:migrate
```

After creating a dedicated WordPress Application Password, keep the credentials only in the process environment and run:

```text
WORDPRESS_API_URL=https://cms.triumphallifetimegroup.com
WORDPRESS_USERNAME=<deployment-user>
WORDPRESS_APPLICATION_PASSWORD=<application-password>
npm run cms:migrate -- --apply
```

Delete or revoke the temporary Application Password after migration. Do not put it in `.env.example`, Git, documentation, chat transcripts, or build logs. The migration uploads verified local leadership and insight images through the WordPress Media Library and sets featured images.

Expected source counts are 5 leadership profiles, 6 services, 0 careers, 30 FAQs, and 3 insights. Global settings use only the verified values already present in the site; Address and default OG image intentionally remain blank.

## WordPress to Netlify publishing

1. In Netlify, create a build hook for the production site.
2. In WordPress, open TLG CMS → Publishing and paste the HTTPS hook URL.
3. Save a relevant published content item or Global Settings.
4. WordPress coalesces rapid saves into one scheduled request after 60 seconds.

The URL is stored only in the WordPress database. Content drafts do not trigger builds. Relevant published updates, status changes, deletions, and Global Settings changes do.

## DNS and Hostinger

Create the `cms` DNS record only after Hostinger supplies the actual hostname or IP target. Do not guess it. Obtain explicit production approval before changing Cloudflare. Keep the apex/public domain pointing to Netlify. After the record resolves, enforce HTTPS and verify that WordPress admin and all six API groups work without mixed content.

## Backups and recovery

- Enable Hostinger automated files and database backups before importing content.
- Take an on-demand backup before plugin upgrades, bulk migration, or DNS cutover.
- Export WordPress content periodically and retain off-platform copies.
- For a frontend regression, redeploy the last known-good Netlify deploy or revert the responsible Git commit; never reset a shared branch destructively.
- For a CMS regression, restore the confirmed pre-change Hostinger backup or roll back the plugin files to a known Git revision.
- Keep the retained `content/`, `lib/content/`, and Sveltia history until the live WordPress content audit has passed.

## Security and handover

- Give each editor a separate least-privilege WordPress account and require 2FA where available.
- Reserve Administrator access for site owners and maintainers.
- Never share developer passwords or reuse Hostinger, Cloudflare, GitHub, Netlify, and WordPress credentials.
- Keep WordPress core and plugins updated after backups and staging checks.
- Do not expose WordPress XML-RPC or extra plugins unless a verified operational need exists.
- Test media upload restrictions and retain only public website assets in Media.

## Validation checklist

Run locally:

```bash
npm run cms:migrate
npm run typecheck
npm run build
```

Then test `/`, `/contact`, `/companies`, `/careers`, `/insights`, `/about/leadership`, and all six solution routes. On the live CMS, verify HTTP status, response schema, order, FAQ filtering, image URLs, and empty Careers behavior for every TLG endpoint.
