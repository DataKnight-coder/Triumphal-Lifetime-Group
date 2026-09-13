# Production deployment checklist — CMS page management, Legal Disclaimer, and contact update

Do not start until the production WordPress administrator and Netlify deployer have approved the deployment window. Freeze WordPress editing during the migration and deploy window. Record the current WordPress post ID for the active `disclaimer` page, its complete editor body, title, summary, last-updated value, any other populated page fields, the two legacy callout fields, Global Settings, form destination, and the current Netlify deploy ID. Resolve any unexpected populated disclaimer fields before deployment. The eight relevant PHP files passed `php -l` with the official PHP 8.5.10 CLI. Do not change DNS, MX, SPF, DKIM, or DMARC.

## Required preflight gate

- [x] Lint `tlg-core.php`, `tlg-core/admin.php`, `tlg-core/settings.php`, and `tlg-core/upgrades.php` with a real PHP CLI.
- [ ] Obtain a staging or disposable copy of the production WordPress database, back it up, and freeze CMS editing there.
- [ ] Record staging Legal Disclaimer editor content, legacy fields, Global Settings, and enquiry form destination before applying the plugin.
- [ ] Run the migration on staging. Confirm the three original sections, any legitimate legacy text, cleared fields only after a verified save, official contact values, and preservation of unrelated administrator values. Ambiguous content must remain intact for manual review.
- [ ] Run a second staging request. Confirm there is no duplicate or additional append, no contact overwrite, and no second side effect; confirm the two migration markers.
- [x] Inspect the lock failure/recovery behavior below before authorizing production deployment.

## Deployment order

- [ ] **A. Freeze production WordPress editing.** Announce the maintenance window and prevent concurrent administrator edits.
- [ ] **B. Back up the production WordPress database.** Include posts, post metadata, and options; confirm the backup can be restored.
- [ ] **C. Back up current production code and build.** Save the current `tlg-core.php` and `tlg-core/` files, Git commit, Netlify deploy ID, and rollback instructions.
- [ ] **D. Deploy the updated WordPress MU plugin as one unit.** Upload `tlg-core.php` and the changed/new files in `tlg-core/`: `admin.php`, `content-types.php`, `page-patterns.php`, `publishing.php`, `rest-api.php`, `settings.php`, and `upgrades.php`. Confirm all files are present before making a WordPress request.
- [ ] **E. Allow or trigger the upgrade.** Load the WordPress admin or `tlg/v1/pages?key=disclaimer`. Confirm the disclaimer upgrade marker `tlg_disclaimer_content_upgrade_v1` and contact marker `tlg_official_contact_upgrade_v1` are set. If a marker is absent, inspect PHP logs and legacy fields; stop before deploying the frontend. Do not run the full `cms:migrate -- --apply` import.
- [ ] **F. Confirm the migrated CMS record directly in WordPress.** Compare the editor body with the backup. The three existing sections and any valid legacy callout text must be present once; the obsolete placeholder must be absent. Confirm the legacy disclaimer heading/body fields are empty. Confirm Global Settings and any migrated form destination have the official values. Investigate any ambiguous legacy content before continuing.
- [ ] **G. Deploy the frontend production build** from the reviewed commit to Netlify, retaining the existing `WORDPRESS_API_URL` and other environment settings. Confirm the real-CMS production build succeeds and keep its deploy ID.
- [ ] **H. Clear relevant caches where applicable.** Purge affected WordPress caches, CDN/Cloudflare cached pages, Netlify cached content or trigger a rebuild if needed, and browser cache; do not alter DNS.
- [ ] **I. Run production QA** with the checks below. Record URLs, timestamps, deploy ID, results, and any deviations. Roll back before closing the window if core content or forms fail.
- [ ] **J. Unfreeze WordPress editing** only after the critical live checks pass.

## Lock failure and manual recovery

The disclaimer lock is the `wp_options` entry `tlg_disclaimer_content_upgrade_v1_lock`; its value is the Unix timestamp from when a request acquired it. The completed migration marker is `tlg_disclaimer_content_upgrade_v1`. Normal completion, including a caught PHP exception, releases the lock in `finally`. A terminated PHP process may leave it behind. The code does not remove a potentially active lock automatically.

If the marker is absent and the lock exists, first confirm no migration request or PHP worker is still active; compare the lock timestamp with the server request timeout and inspect PHP logs. Age alone does not prove the lock is stale. Back up the database, keep editing frozen, and compare the current editor body and legacy fields with the pre-migration record. If text was appended but the legacy fields remain, reconcile duplicates and ambiguous copy before retrying. Only an administrator who has confirmed the process is inactive and the data is safe should delete the lock option, then trigger one request and verify the marker and content. If the state cannot be reconciled, restore the matched staging or production database backup rather than forcing a retry.

## Live verification

### Legal Disclaimer

- [ ] `/disclaimer` has no “Legal Review” section or “Final wording remains subject to review by a qualified legal professional.” sentence, and no duplicated sections.
- [ ] WordPress controls the title, summary, section headings and bodies, section order, and Last Updated label. The original three sections remain.
- [ ] Make a harmless temporary edit to a section, publish, wait for the rebuild/cache refresh, and confirm the live page changes. Restore it.
- [ ] Reorder two sections and confirm the live order changes. Restore it.
- [ ] Add a clearly marked temporary test section and confirm it appears exactly once. Delete it and confirm it disappears. Verify the original three remain.

### Contact and email

- [ ] `admin@triumphallifetimegroup.com` is visible where the official email appears; links use `mailto:admin@triumphallifetimegroup.com`.
- [ ] Nigeria/Abuja displays `0903 186 5491`; CMS and structured contact data use `+2349031865491`; WhatsApp links open `https://wa.me/2349031865491`.
- [ ] No obsolete official Nigeria number or general email appears in the website, CMS settings, or relevant form destination. Preserve deliberately distinct departmental addresses and the Canada primary phone.
- [ ] Submit one real test enquiry and confirm delivery to the configured mailbox. Do not change DNS or Hostinger mailbox settings.
- [ ] Send Gmail → `admin@triumphallifetimegroup.com`, confirm arrival in Hostinger, then reply Hostinger → Gmail and confirm receipt.

### Site QA

- [ ] Header, footer, contact page, country and solution pages, forms, and mobile navigation work at desktop and mobile widths.
- [ ] No horizontal overflow, broken route, or console-breaking error is present.
- [ ] Important routes return HTTP 200, including `/`, `/contact`, `/disclaimer`, `/companies`, `/global-presence`, `/careers`, and the six solution routes. Confirm existing redirects still work.
- [ ] The production build completed successfully and SEO metadata and structured data remain valid.

### WordPress-managed new pages

- [ ] Confirm the ordinary WordPress **Pages** editor has Excerpt, slug/permalink, drafts, autosaves, revisions, and the TLG Page Layouts patterns. Confirm the public website URL box shows the expected main-domain URL.
- [ ] Create a temporary draft and confirm it is absent from the public site and sitemap. Publish it; wait for the queued Netlify build and confirm its chosen URL returns HTTP 200 with its WordPress title, summary, and body.
- [ ] Edit the temporary page and confirm the live content changes. Change its slug and confirm the new URL works after the build. Restore the original slug if needed.
- [ ] Add the temporary page to **Site Navigation**, move it up and down, and confirm header and mobile menu order follows WordPress. Remove it and confirm the link disappears.
- [ ] Confirm the temporary page's revisions can restore a prior version. Move the page to Trash; after the build, confirm its URL returns HTTP 404 and its sitemap entry disappears.
- [ ] Review any Career Services content found in drafts, autosaves, revisions, or a backup before restoring it. Do not overwrite an existing live page without comparing versions.

## Rollback and closeout

If WordPress migration validation fails, restore the database and previous MU plugin files before deploying the frontend. If the frontend or live QA fails, restore the prior Netlify deploy; restore WordPress state if the data migration itself caused the failure. Keep the backup and deploy IDs with the verification record.
