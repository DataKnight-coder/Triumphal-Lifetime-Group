# WordPress CMS Migration Walkthrough

## Completed transition

Active pages call the strict WordPress client for Global Settings, Leadership, Services, Careers, FAQs, and Insights. The live WordPress content audit, final CMS domain, Netlify environment variable, publishing hook, and branch preview were verified before the final cutover. Production has no local-content fallback; a missing or malformed WordPress response fails explicitly, while a valid empty collection remains empty.

The public Sveltia admin files were removed after verification. The local Markdown/YAML inventory remains as migration and rollback evidence and as input to `npm run cms:migrate`; it is not read by production pages.

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
11. After the live audit passed, remove the local-content bridge and active Sveltia admin dependency in a separate reviewed commit.

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

## Legal Disclaimer and contact update

Deploy the updated WordPress MU plugin before the frontend. On its first request, it moves any legitimate text from the old Legal Disclaimer callout into the WordPress page editor, skips the obsolete legal-review placeholder, and clears the callout fields. It also replaces the known obsolete general email and Nigeria WhatsApp values in saved Global Settings, and replaces the old general mailbox if it is the enquiry form destination. The existing Canada primary phone is deliberately unchanged. Back up WordPress before deploying, and confirm the migrated page body and settings in the admin UI.

Then deploy the frontend and let the WordPress publishing hook rebuild Netlify. Verify `/disclaimer` has one ordered set of sections, the page title and summary follow CMS edits, the last-updated label appears, the footer and contact page show `admin@triumphallifetimegroup.com` and `0903 186 5491`, and the Nigeria link opens `https://wa.me/2349031865491`. Send one test enquiry to verify the mailbox destination. Do not run the full `cms:migrate -- --apply` against edited production content: it upserts the entire retained source inventory and could overwrite newer CMS edits.

## Rollback

For frontend code, revert the responsible Git commit and redeploy the known-good Netlify build. For WordPress data or plugin failures, use the confirmed Hostinger backup or restore the plugin version from Git. Keep the public apex domain on Netlify throughout; a `cms` DNS change must use Hostinger's actual target and receive production approval.
