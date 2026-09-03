# WordPress CMS Migration Walkthrough

## Current transition

The Next.js design and routes are unchanged. Active pages now call the strict WordPress client for Global Settings, Leadership, Services, Careers, FAQs, and Insights. Until Hostinger access is available and live records are verified, the client falls back only on API failure to the retained local migration files. A successful empty response remains empty and does not invoke fallback content.

Sveltia files and local Markdown have intentionally not been deleted. They are migration evidence and rollback material, not the intended final production source.

## Verified migration inventory

```text
Global Settings: 1 verified record
Leadership: 5
Services: 6
Careers: 0
FAQs: 30 (5 per solution division, 0 Global)
Insights: 3
```

No vacancies or missing contact values were invented. The WordPress migration command reports these counts in dry-run mode before it can perform a write.

## Deployment sequence

1. Back up Hostinger files and database.
2. Install WordPress at the approved `cms` subdomain and enable HTTPS.
3. deploy `wordpress/mu-plugins/tlg-core.php` and `wordpress/mu-plugins/tlg-core/`.
4. Verify the TLG admin menu and save Permalinks once.
5. Run `npm run cms:migrate` locally and confirm the inventory.
6. Create a temporary WordPress Application Password, set the three migration environment variables, and run `npm run cms:migrate -- --apply`.
7. Verify exact content counts, ordering, fields, images, and all REST schemas. Revoke the temporary Application Password.
8. Configure Netlify `WORDPRESS_API_URL` and the private WordPress Publishing build hook.
9. Produce and inspect an actual Netlify preview.
10. Test a harmless edit for each applicable content type, wait for the rebuild, verify it, and revert the edit.
11. Only after the live audit passes, remove the local-content bridge and active Sveltia admin dependency in a separate reviewed commit.

## Duplicate policy

Migration upserts by stable slug. It never deletes records. For FAQs, a differently named record is considered equivalent only when normalized question, division, and answer all match; that import is skipped and reported. Any uncertain duplicate is left untouched for human review.

## Verification chain

```text
WordPress admin field
  → WordPress post/metadata
  → /wp-json/tlg/v1 endpoint
  → strict TypeScript parser
  → unchanged React presentation
  → Netlify deploy
```

Validate typecheck and production build locally, then check the homepage, contact, companies, careers, insights, leadership, and all six solution routes. The live API test must cover status, schema, deterministic ordering, FAQ division-plus-Global behavior, image URLs, and the empty Careers response.

## Rollback

For frontend code, revert the responsible Git commit and redeploy the known-good Netlify build. For WordPress data or plugin failures, use the confirmed Hostinger backup or restore the plugin version from Git. Keep the public apex domain on Netlify throughout; a `cms` DNS change must use Hostinger's actual target and receive production approval.
