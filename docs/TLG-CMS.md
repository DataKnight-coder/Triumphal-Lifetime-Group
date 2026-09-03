# Triumphal Lifetime Group CMS

## Architecture

The CMS is a Git-backed publishing workflow:

```text
Editor → /admin → Sveltia CMS → GitHub feature/tlg-git-cms
       → Netlify build → Next.js website
```

Sveltia CMS is loaded from the pinned `@sveltia/cms@0.187.0` CDN script in `public/admin/index.html`. The project does not bundle a second Sveltia dependency and does not use WordPress, PHP, MySQL, ACF, Netlify Identity, Git Gateway, or a Cloudflare Worker for the active content flow.

## Content structure

```text
content/
  careers/       Open and closed job records
  faqs/          Flat division-prefixed FAQ records
  insights/      Insight index records
  leadership/    Leadership profiles
  services/      Company and division cards
  settings/      global.yml only
public/uploads/  CMS-managed uploads (2 MB maximum)
```

The public website reads local YAML and Markdown during the Next.js build through `lib/content`. It does not call GitHub or WordPress at runtime.

## Collections

- Global Settings: company identity, global contact channels, social links, copyright, and default SEO.
- Leadership: profile identity, job title, department, links, photo, order, status, and biography body.
- Services: card content, division, status, links, display order, and optional body/media fields.
- Careers: role metadata, application URL, status, closing date, order, and description body.
- FAQs: question, division, order, slug, and answer body. FAQ files remain flat.
- Insights: index metadata, SEO values, draft state, order, and body.

Generic Pages are intentionally not implemented because the current site has no dynamic generic-page requirement.

## Global settings mapping

`content/settings/global.yml` is the only global settings source. Its field names match `lib/content/settings.ts`, the Sveltia configuration, and React consumers. The `address` and `seo_og_image` fields may be blank when no verified value is available.

## Media policy

Uploads are stored in `public/uploads` and referenced as `/uploads/<filename>`. Sveltia limits files to 2,097,152 bytes and slugifies filenames. Do not upload secrets, private records, or unsupported executable files.

## Publishing and rollback

Publishing in Sveltia creates a Git commit on `feature/tlg-git-cms`. Netlify then builds that branch. To roll content back, revert the relevant Git commit and push the revert. To roll a deploy back, use Netlify's deploy history only after confirming the selected deploy belongs to the intended branch.

The legacy files in `lib/wordpress`, `wordpress/mu-plugins`, and `docs/WORDPRESS-CMS.md` are retained temporarily as rollback references. They are not active application dependencies and should not be removed until production validation is complete.

## OAuth setup

Create a GitHub OAuth App named `TLG Website Manager` with homepage `https://triumphallifetimegroup.com` and callback `https://api.netlify.com/auth/done`. In Netlify, install GitHub under Project configuration → Access & security → OAuth → Authentication Providers. Enter the Client ID and Client Secret directly in Netlify; never commit or share the secret.
