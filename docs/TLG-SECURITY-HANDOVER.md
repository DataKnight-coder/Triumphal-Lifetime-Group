# TLG security handover

- `DISALLOW_FILE_EDIT` is enabled by the MU-plugin. Prefer setting it in `wp-config.php` as defence in depth.
- Give each editor a named least-privilege account; reserve Administrator for owners/maintainers and enable 2FA where supported.
- Never share or commit Hostinger, WordPress, Cloudflare, Netlify or GitHub credentials. Revoke the temporary migration Application Password after use.
- The Netlify build hook and Turnstile secret are private WordPress options with `show_in_rest` disabled. They are not logged or rendered.
- Content metadata uses explicit type, sanitizer, authorisation callback and REST registration. Public responses are normalised and read-only; core authenticated REST handles migration writes.
- The enquiry endpoint enforces Origin, honeypot, server validation, Turnstile and bounded rate limiting. Consent audit data is minimised and time-limited.
- Patch WordPress core/plugins after a backup and staging check. Remove unnecessary plugins and disable XML-RPC if there is no documented operational need.
- Keep only approved public assets in Media. Do not upload client identity or financial documents to the public CMS.
- Review WordPress users, Application Passwords, build hooks, Turnstile keys, mail delivery, backups and audit retention quarterly.
