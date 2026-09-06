import { access, readFile, readdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const read = (file) => readFile(path.join(root, file), "utf8");
function assert(condition, message) { if (!condition) throw new Error(message); }

const pages = JSON.parse(await read("content/pages/pages.json"));
const byKey = new Map(pages.map((page) => [page.fields?.page_key, page]));
assert(pages.length === 25 && byKey.size === 25, "Expected 25 unique structured page records.");
for (const key of ["home", "hr-consulting", "real-estate", "education", "global-mobility", "technology", "digital-products", "foundation", "contact", "site-navigation", "site-footer"]) assert(byKey.has(key), `Missing structured page: ${key}`);
for (const page of pages.filter((item) => item.image?.startsWith("/"))) await access(path.join(root, "public", page.image.slice(1))).catch(() => { throw new Error(`Missing page image: ${page.image}`); });
assert(byKey.get("home").fields.process_items.includes("Consult | We take time") && byKey.get("home").fields.process_items.includes("Implement | We develop") && byKey.get("home").fields.process_items.includes("Support | We provide"), "Homepage three-step process is incomplete.");
assert(byKey.get("hr-consulting").fields.services_items.split("\n").length === 9, "HR must have exactly nine approved services.");
assert(byKey.get("education").fields.process_items.split("\n").length === 6, "Education must have exactly six approved stages.");
assert(byKey.get("digital-products").fields.hero_eyebrow.toLowerCase().includes("coming soon"), "Digital Products must remain Coming Soon.");
assert(byKey.get("real-estate").fields.disclaimer_body.includes("not guaranteed"), "Real Estate disclaimer is missing.");
assert(byKey.get("global-mobility").fields.disclaimer_body.includes("does not guarantee visa approval"), "Mobility disclaimer is missing.");

const contentTypes = await read("wordpress/mu-plugins/tlg-core/content-types.php");
for (const type of ["tlg_leadership", "tlg_services", "tlg_careers", "tlg_faqs", "tlg_insights", "tlg_pages", "tlg_locations", "tlg_foundation"]) {
  const line = contentTypes.split(/\r?\n/).find((candidate) => candidate.includes(`'${type}'`) && candidate.includes("=>"));
  assert(line?.includes("'custom-fields'"), `${type} does not support custom-fields.`);
}
const publishing = await read("wordpress/mu-plugins/tlg-core/publishing.php");
for (const type of ["tlg_leadership", "tlg_services", "tlg_careers", "tlg_faqs", "tlg_insights", "tlg_pages", "tlg_locations", "tlg_foundation"]) assert(publishing.includes(`'${type}'`), `${type} is missing from automatic publishing.`);
assert(publishing.includes("wp_is_post_autosave") && publishing.includes("wp_is_post_revision") && publishing.includes("wp_next_scheduled"), "Publishing safeguards or debounce missing.");

const nextConfig = await read("next.config.js");
const redirects = [...nextConfig.matchAll(/source:\s*'([^']+)'\s*,\s*destination:\s*'([^']+)'/g)].map((match) => ({ source: match[1], destination: match[2] }));
const sources = new Set(redirects.map((item) => item.source));
for (const redirect of redirects) assert(!sources.has(redirect.destination), `Redirect chain detected: ${redirect.source} -> ${redirect.destination}`);

const sourceFiles = [];
async function walk(directory) { for (const entry of await readdir(path.join(root, directory), { withFileTypes: true })) { const relative = path.join(directory, entry.name); if (entry.isDirectory()) await walk(relative); else if (/\.(ts|tsx)$/.test(entry.name)) sourceFiles.push(relative); } }
await walk("app"); await walk("components");
const runtime = (await Promise.all(sourceFiles.map(async (file) => [file, await read(file)]))).filter(([, body]) => /@\/lib\/content\//.test(body));
assert(runtime.length === 0, `Runtime local-content imports remain: ${runtime.map(([file]) => file).join(", ")}`);
const fakeForms = (await Promise.all(sourceFiles.map(async (file) => [file, await read(file)]))).filter(([, body]) => /setSubmitted\(true\)|Request Received/.test(body));
assert(fakeForms.length === 0, `Simulated form success remains: ${fakeForms.map(([file]) => file).join(", ")}`);

for (const removed of ["app/api/contact/route.ts", "app/api/book/route.ts", "components/forms/ContactForm.tsx"]) {
  let exists = true;
  await access(path.join(root, removed)).catch(() => { exists = false; });
  assert(!exists, `Obsolete simulated form file was restored: ${removed}`);
}

const wordpressPages = [
  "app/page.tsx",
  "app/about/page.tsx",
  "app/about/our-story/page.tsx",
  "app/companies/page.tsx",
  "app/contact/page.tsx",
  "app/careers/page.tsx",
  "app/about/leadership/page.tsx",
  "app/about/global-presence/page.tsx",
  "app/impact/page.tsx",
  "app/insights/page.tsx",
  "app/solutions/digital-learning/page.tsx",
  "app/solutions/education/page.tsx",
  "app/solutions/global-mobility/page.tsx",
  "app/solutions/hr-consulting/page.tsx",
  "app/solutions/real-estate/page.tsx",
  "app/solutions/technology/page.tsx",
];
for (const file of wordpressPages) {
  const body = await read(file);
  assert(/getPageContent|CmsSolutionPage/.test(body), `Production page is not backed by the WordPress client: ${file}`);
}

const contactPage = await read("app/contact/page.tsx");
assert(contactPage.includes("<EnquiryForm") && contactPage.includes("getLocations"), "Contact page is not using the secure enquiry form and verified locations.");
assert(!/Abuja|Dubai|Toronto|Regional Offices/.test(contactPage), "Contact page contains an unverified hard-coded office claim.");

const enquiryRoute = await read("app/api/enquiry/route.ts");
assert(enquiryRoute.includes("/tlg/v1/enquiries") && enquiryRoute.includes("WORDPRESS_API_URL"), "Enquiry route does not proxy to the private WordPress workflow.");

console.log(`CMS parity checks passed: ${pages.length} pages, ${redirects.length} one-hop redirects, ${sourceFiles.length} runtime files audited.`);
