# TLG Website Manager — Client Guide

## Sign in

1. Open `https://triumphallifetimegroup.com/admin`.
2. Choose GitHub authentication.
3. Sign in with the GitHub account that has access to the TLG repository.

## Edit and publish

1. Select a collection from the left menu.
2. Open an existing entry or create one where creation is enabled.
3. Edit only verified public website information.
4. Use Preview to review the entry.
5. Choose Publish and confirm the change.
6. Wait for the GitHub commit and Netlify branch build to complete before checking the website.

## Collection notes

- Global Settings has one entry only. Leave Address or SEO Open Graph Image blank if no approved value exists.
- Leadership and Services use `active`/`inactive` status. Inactive records are not displayed.
- Careers uses `open`/`closed`. Only open vacancies appear; never create sample jobs.
- FAQs require a division and numeric order. Keep FAQ files flat and use a unique kebab-case slug.
- Insights with Draft enabled do not appear on the Insights index. Existing article URLs must not be renamed casually.

## Images

Use the media library to upload files no larger than 2 MB. Prefer descriptive, lowercase filenames. Confirm that you have permission to publish every image.

## Safe editing

- Do not paste passwords, client records, or private documents into the CMS.
- Do not change slugs or URLs without checking existing links.
- Make one logical change per publish where practical.
- If a published edit is wrong, contact the site maintainer with the entry name and approximate publish time so the Git commit can be reverted safely.
