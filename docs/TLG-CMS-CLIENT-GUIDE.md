# TLG WordPress CMS — Client Guide

## Sign in

Open `https://cms.triumphallifetimegroup.com/wp-admin` and sign in with your own WordPress account. Never share accounts or passwords. Enable two-factor authentication when it is available.

## Edit and publish

1. Choose TLG CMS in the WordPress menu.
2. Open Global Settings, Leadership, Services, Careers, FAQs, or Insights.
3. Edit only approved public information.
4. Use Preview when available, then select Publish or Update.
5. WordPress queues a Netlify rebuild. Allow the deploy to complete before checking the public site.

Several quick saves are combined into one build after about a minute. Draft Insights do not appear publicly and do not trigger a production build.

## Content notes

- Global Settings controls the company name, main contact details, social profiles, copyright, and default SEO information. Address and social image may remain blank until approved.
- Leadership uses the title field for the person's name, the main editor for the biography, Featured image for the photo, and Active/Inactive for public visibility.
- Services uses the main editor for the full description. Put one Key benefit on each line. Only Active services appear.
- Careers must be genuine vacancies. Only Published records marked Open appear; Closed roles stay hidden.
- FAQs use the title as the exact question and the editor as the exact answer. Select one solution division or Global, and use Display order for sequencing.
- Insights use Featured image, Excerpt, Author display name, Category, SEO fields, and the main editor. Keep an existing slug unchanged unless the maintainer has arranged a redirect.

## Images

Use the WordPress Media Library or the Featured image panel. Upload only licensed public assets, use descriptive filenames, and choose appropriately sized web images. Never upload passports, CVs, contracts, customer records, or other private files.

## Safe operation

- Use Active/Inactive, Open/Closed, or Draft instead of deleting valuable content when possible.
- Do not alter TLG plugin code, WordPress URLs, permalink settings, or the private Publishing hook.
- If a change is wrong, record the item name and time, correct it, and publish again. Contact the maintainer for a code, deploy, or database rollback.
- The Media Library, content fields, and Global Settings are sufficient for routine website management; no code edit is required.
