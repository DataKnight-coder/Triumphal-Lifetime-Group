import http from "node:http";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const root = process.cwd();
const port = Number(process.env.TLG_MOCK_PORT || 4187);
const readMarkdown = async (directory) => Promise.all((await readdir(path.join(root, "content", directory))).filter((name) => name.endsWith(".md")).sort().map(async (name) => { const parsed = matter(await readFile(path.join(root, "content", directory, name), "utf8")); return { ...parsed.data, body: parsed.content.trim() }; }));
const [pages, leadership, services, careers, faqs, insights, locations, foundation] = await Promise.all([
  readFile(path.join(root, "content/pages/pages.json"), "utf8").then(JSON.parse), readMarkdown("leadership"), readMarkdown("services"), readMarkdown("careers"), readMarkdown("faqs"), readMarkdown("insights"), readFile(path.join(root, "content/locations/locations.json"), "utf8").then(JSON.parse), readFile(path.join(root, "content/foundation/items.json"), "utf8").then(JSON.parse),
]);
const lines = (value) => Array.isArray(value) ? value : String(value || "").split(/\r?\n/).filter(Boolean);
const mapped = {
  leadership: leadership.filter((item) => item.status === "active").map((item) => ({ name:item.name, slug:item.slug, jobTitle:item.job_title || "", department:item.department || "", leadershipGroup:item.leadership_group || "division-head", coreExpertise:lines(item.core_expertise), qualifications:lines(item.qualifications), biography:item.body, email:item.email || "", linkedin:item.linkedin || "", photo:item.photo || null, order:Number(item.display_order || 0) })),
  services: services.filter((item) => item.status === "active").map((item) => ({ title:item.title, slug:item.slug, shortDescription:item.short_description || "", description:item.body, image:item.featured_image || null, keyBenefits:lines(item.key_benefits), ctaText:item.cta_text || "", ctaUrl:item.cta_url || "", order:Number(item.display_order || 0), division:item.division || "", locationText:item.location_text || "", entityText:item.entity_text || "", contactText:item.contact_text || "" })),
  careers: careers.filter((item) => item.job_status === "open").map((item) => ({ title:item.title, slug:item.slug, department:item.department || "", location:item.location || "", employmentType:item.employment_type || "", description:item.body, applicationUrl:item.application_url || "", status:"open", closingDate:item.closing_date || null, order:Number(item.display_order || 0) })),
  insights: insights.filter((item) => !item.draft).map((item) => ({ title:item.title, slug:item.slug, excerpt:item.excerpt || "", author:item.author || "", reviewer:item.reviewer || "", publishedAt:item.publish_date || "", lastReviewedAt:item.last_reviewed || null, image:item.featured_image || null, category:item.category || "", sources:item.sources || [], relatedDivision:item.related_division || "", seoTitle:item.seo_title || "", seoDescription:item.seo_description || "", body:item.body, order:Number(item.display_order || 0) })),
};
const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://127.0.0.1:${port}`);
  let payload;
  if (url.pathname === "/wp-json/tlg/v1/settings") payload = { company_name:"Triumphal Lifetime Group", general_email:"info@triumphallifetimegroup.com", copyright_text:"All rights reserved.", turnstile_site_key:"" };
  else if (url.pathname === "/wp-json/tlg/v1/pages") { const item = pages.find((page) => page.fields.page_key === url.searchParams.get("key")); payload = item ? { key:item.fields.page_key, title:item.title, body:item.body || "", heroImage:item.image || null, fields:Object.fromEntries(Object.entries(item.fields).filter(([key]) => !["page_key","status","display_order"].includes(key)).map(([key,value]) => [key,String(value)])), modifiedAt:"2026-09-04T00:00:00Z" } : null; }
  else if (url.pathname === "/wp-json/tlg/v1/faqs") payload = faqs.filter((item) => item.division === url.searchParams.get("division") || item.division === "global").map((item) => ({ question:item.question, answer:item.body, division:item.division, order:Number(item.order), slug:item.slug })).sort((a,b) => a.order-b.order);
  else if (url.pathname === "/wp-json/tlg/v1/leadership") payload = mapped.leadership;
  else if (url.pathname === "/wp-json/tlg/v1/services") payload = mapped.services;
  else if (url.pathname === "/wp-json/tlg/v1/careers") payload = mapped.careers;
  else if (url.pathname === "/wp-json/tlg/v1/insights") payload = mapped.insights;
  else if (url.pathname === "/wp-json/tlg/v1/locations") payload = locations;
  else if (url.pathname === "/wp-json/tlg/v1/foundation") payload = foundation;
  else { response.writeHead(404); response.end(); return; }
  response.writeHead(payload === null ? 404 : 200, { "Content-Type":"application/json" }); response.end(JSON.stringify(payload));
});
server.listen(port, "127.0.0.1", () => console.log(`TLG mock WordPress listening on ${port}`));
