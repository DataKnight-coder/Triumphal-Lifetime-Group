# TLG WordPress editor guide

1. Sign in to WordPress and open **TLG CMS**.
2. Choose Page Content, Leadership, Services, Careers, FAQs, Insights, Locations, Foundation Content or Global Settings.
3. Edit only the clearly labelled content fields. Layout, colours and animation are managed by the website code.
4. Use Featured Image for approved public imagery and write useful alternative text in Media.
5. Use one item per line where instructed; retain the shown `Heading | Description` or `Label | /path` format.
6. Keep unverified records Inactive or Draft. Careers appear only when Open; fixed content, services, leadership, FAQs, locations and Foundation items appear only when Active.
7. For high-trust Insights, supply author, reviewer, last-reviewed date and sources as `Source name | https://source-url` before publishing.
8. Click Update/Publish once. The private publishing integration coalesces quick edits into one Netlify build after 60 seconds; allow about 1–3 minutes for the public site.
9. If a correction is not visible, check the record status, wait for the build, then contact the maintainer. Do not paste the build-hook URL into tickets.

To create a **new website page**, use the separate **Pages → Add Page** menu in WordPress. Give it a title, optionally add a short Excerpt for the page summary, and write the page body with WordPress blocks. You can insert a reusable layout from **Patterns → TLG Page Layouts**. Save Draft while working; WordPress keeps autosaves and revisions for ordinary Pages. Set the URL slug in the page settings, then Publish. A published page at slug `career-services` appears at `https://triumphallifetimegroup.com/career-services`; nested Pages use their parent path. Use a new URL that does not match an existing website route such as `/careers` or `/contact`. Changing a slug changes the public URL, so update any navigation and internal links that used the old one.

To show a new page in the header, open **TLG CMS → Page Content → Site Navigation**. Add a row in **Primary navigation** with `Label | /page-slug`; use **Up** and **Down** to reorder rows and **Remove** to delete a link. The **Division navigation** and **TLG CMS → Page Content → Site Footer** fields work the same way. Save the WordPress record and allow the build/cache to refresh. Publishing a Page does not automatically put it in a menu.

To revise or remove a new Page, open **Pages**, choose the page, then edit, save a draft, publish, or move it to Trash. Use the editor's **Revisions** history to restore an earlier saved version. To reuse an entire page, copy its blocks into a new draft or insert a TLG Page Layout pattern; never change the existing page merely to make a copy.

The **TLG CMS → Page Content** menu is for the website's 25 existing fixed pages and shared navigation/footer content. **Add New Fixed Page** does not create an additional public route. Existing fixed-page records now support revisions, including their registered page fields, for future edits.

For the **Legal Disclaimer**, open **Page Content → Legal Disclaimer**. Edit the page title and summary in the labelled page fields. Edit all substantive sections in the main WordPress content editor: each heading and its paragraphs can be changed, added, removed, or reordered there. The separate compliance callout fields are retired for this page. Use **Last updated label** when the review date changes. Review the public `/disclaimer` route after publishing; it should show each section once.

The public email and Nigeria WhatsApp number come from **Global Settings**. The Nigeria number is stored there in international format, with the website deriving its local display and WhatsApp link from that one value. The distinct primary phone field remains the Canada number. **TLG CMS → Enquiry Forms → Destination email** controls where website enquiries are sent; it is set to `admin@triumphallifetimegroup.com`. Confirm delivery with a real test enquiry after deployment.

Do not label a location as an office, publish qualifications/partners/statistics, activate Foundation impact, open recruitment or sell digital products until the relevant confirmations in `TLG-CLIENT-CONFIRMATIONS.md` are complete.
