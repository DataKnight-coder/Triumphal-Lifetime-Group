# CMS Migration Walkthrough

## What changed

The public site was migrated from hard-coded and provisional WordPress-backed content to local Git-managed YAML and Markdown. Sveltia CMS edits those files on `feature/tlg-git-cms`, and Netlify rebuilds the Next.js site.

Migrated content includes:

- one global settings file;
- five leadership profiles;
- six company/service cards;
- thirty FAQs across six divisions;
- zero fabricated career vacancies;
- three existing insight index records.

The generic Pages collection was omitted because no existing route requires it. Existing individual insight routes remain intact.

## Verification workflow

For every collection, verify this chain before release:

```text
Sveltia field → YAML/Markdown field → TypeScript loader → React consumer
```

Then run:

```bash
npm run typecheck
npm run build
```

Confirm the homepage, contact, companies, careers, insights, leadership, six solution routes, and `/admin` return successfully. Verify that media URLs resolve under `/uploads` and that empty collections do not crash their pages.

## Publishing flow

1. An authorised editor opens `/admin` and signs in through GitHub OAuth.
2. Sveltia writes a commit to `feature/tlg-git-cms`.
3. Netlify detects the commit and starts a branch build.
4. The build reads `content/` locally and produces the website.
5. The editor verifies the change on the actual branch-deploy URL.

## Rollback

For content or code errors, revert the responsible Git commit on `feature/tlg-git-cms` and push the revert. For a Netlify-only problem, inspect deploy logs first and use Netlify's deploy history only when the target deploy is confirmed. Do not reset the branch or delete the retained WordPress rollback files during initial production validation.

## Handover checklist

- GitHub OAuth application and Netlify provider configured by an authorised owner.
- Branch deploy enabled for `feature/tlg-git-cms`.
- `/admin` login and publish tested.
- One harmless edit tested for each applicable collection and then reverted.
- Media upload tested with a non-sensitive image under 2 MB.
- Git and Netlify rollback demonstrated to the site owner.
- No credentials stored in source control or documentation.
