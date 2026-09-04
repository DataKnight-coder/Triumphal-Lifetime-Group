# TLG enquiry data flow

```text
Browser form
  -> same-origin POST /api/enquiry on Netlify
  -> POST /wp-json/tlg/v1/enquiries on WordPress
  -> Origin, honeypot, validation, rate limit and Turnstile verification
  -> wp_mail to the private business-controlled destination
  -> success/reference returned only if wp_mail succeeds
```

Fields: name, email, optional phone, country, service, message, consent, form type, honeypot and Turnstile token. The UI warns users not to submit identity, financial, medical or password data.

The destination and Turnstile secret are private WordPress options and never enter REST, frontend JavaScript or logs. The public site key is returned by settings. The audit retains only reference, time, consent, service and keyed hashes of email/IP; it stores no raw message or contact identity, keeps at most 250 rows and removes records older than the configured 30–365-day window.

Rate limit: five attempts per email/IP key per 15 minutes. Analytics receives only `enquiry_submit` and `form_type` after confirmed success; no form values are sent.

Production checks: configure the approved mailbox, keys and origin; confirm mail delivery and Reply-To; test invalid fields, bot field, expired token, throttling, success and failure paths; then record references without copying personal data into tickets.
