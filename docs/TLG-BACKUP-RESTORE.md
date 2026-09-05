# TLG backup and restore

Before plugin upload or migration, create and verify a Hostinger on-demand backup of both WordPress files and database. Record its timestamp outside WordPress. Keep automated daily backups enabled and retain a periodic off-platform WordPress export.

For frontend rollback, redeploy the last known-good Netlify deploy or revert through a reviewed Git commit. Do not reset a shared branch. For plugin rollback, restore the previous seven MU-plugin files from a tagged/known commit. For content/database corruption, restore the matched Hostinger files-and-database backup, then verify all TLG REST endpoints before rebuilding Netlify.

The migration is an idempotent slug upsert. It does not delete records; equivalent FAQs are skipped and superseded leadership is made inactive. Repository `content/` fixtures are retained as migration/rollback evidence, not runtime fallbacks.

After any restore: clear relevant WordPress/server caches, test `/wp-json/tlg/v1/settings`, page content, all lists and a division FAQ; trigger one controlled build; validate the public site; revoke any temporary migration Application Password.
