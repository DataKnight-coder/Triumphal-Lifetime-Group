import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const applyChanges = process.argv.includes("--apply");
const root = process.cwd();
const apiOrigin = process.env.WORDPRESS_API_URL?.replace(/\/+$/, "");
const username = process.env.WORDPRESS_USERNAME;
const applicationPassword = process.env.WORDPRESS_APPLICATION_PASSWORD;

const supersededRecords = [
  {
    endpoint: "leadership",
    slug: "arike-adedayo",
    reason: "Superseded by the client-corrected Adekemi Arike Adedayo record.",
    meta: { _tlg_status: "inactive" },
  },
];

const collections = [
  {
    directory: "leadership",
    endpoint: "leadership",
    build: (data, content) => ({
      title: data.name,
      slug: data.slug,
      content,
      status: "publish",
      meta: {
        _tlg_job_title: data.job_title ?? "",
        _tlg_department: data.department ?? "",
        _tlg_leadership_group: data.leadership_group ?? "division-head",
        _tlg_core_expertise: Array.isArray(data.core_expertise) ? data.core_expertise.join("\n") : "",
        _tlg_qualifications: Array.isArray(data.qualifications) ? data.qualifications.join("\n") : "",
        _tlg_email: data.email ?? "",
        _tlg_linkedin: data.linkedin ?? "",
        _tlg_display_order: data.display_order ?? 0,
        _tlg_status: data.status ?? "inactive",
      },
      image: data.photo,
    }),
  },
  {
    directory: "services",
    endpoint: "services",
    build: (data, content) => ({
      title: data.title,
      slug: data.slug,
      content,
      excerpt: data.short_description ?? "",
      status: "publish",
      meta: {
        _tlg_short_description: data.short_description ?? "",
        _tlg_key_benefits: Array.isArray(data.key_benefits) ? data.key_benefits.join("\n") : "",
        _tlg_cta_text: data.cta_text ?? "",
        _tlg_cta_url: data.cta_url ?? "",
        _tlg_display_order: data.display_order ?? 0,
        _tlg_division: data.division ?? "",
        _tlg_status: data.status ?? "inactive",
        _tlg_location_text: data.location_text ?? "",
        _tlg_entity_text: data.entity_text ?? "",
        _tlg_contact_text: data.contact_text ?? "",
      },
      image: data.featured_image,
    }),
  },
  {
    directory: "careers",
    endpoint: "careers",
    build: (data, content) => ({
      title: data.title,
      slug: data.slug,
      content,
      status: "publish",
      meta: {
        _tlg_department: data.department ?? "",
        _tlg_location: data.location ?? "",
        _tlg_employment_type: data.employment_type ?? "",
        _tlg_application_url: data.application_url ?? "",
        _tlg_job_status: data.job_status ?? "closed",
        _tlg_closing_date: data.closing_date ?? "",
        _tlg_display_order: data.display_order ?? 0,
      },
    }),
  },
  {
    directory: "faqs",
    endpoint: "faqs",
    build: (data, content) => ({
      title: data.question,
      slug: data.slug,
      content,
      status: "publish",
      meta: {
        _tlg_division: data.division,
        _tlg_display_order: data.order ?? 0,
        _tlg_status: "active",
      },
    }),
  },
  {
    directory: "insights",
    endpoint: "insights",
    build: (data, content) => ({
      title: data.title,
      slug: data.slug,
      content,
      excerpt: data.excerpt ?? "",
      status: data.draft ? "draft" : "publish",
      date: data.publish_date ? `${data.publish_date}T12:00:00` : undefined,
      meta: {
        _tlg_category: data.category ?? "",
        _tlg_author_name: data.author ?? "",
        _tlg_reviewer_name: data.reviewer ?? "",
        _tlg_last_reviewed: data.last_reviewed ?? "",
        _tlg_sources: Array.isArray(data.sources) ? data.sources.map((source) => `${source.name} | ${source.url}`).join("\n") : "",
        _tlg_related_division: data.related_division ?? "",
        _tlg_seo_title: data.seo_title ?? "",
        _tlg_seo_description: data.seo_description ?? "",
        _tlg_display_order: data.display_order ?? 0,
      },
      image: data.featured_image,
    }),
  },
  {
    directory: "pages",
    endpoint: "site-pages",
    jsonFile: "pages.json",
    build: (data) => ({
      title: data.title,
      slug: data.slug,
      content: data.body ?? "",
      status: "publish",
      meta: Object.fromEntries(Object.entries(data.fields ?? {}).map(([key, value]) => [`_tlg_${key}`, value])),
      image: data.image,
    }),
  },
  {
    directory: "locations",
    endpoint: "locations",
    jsonFile: "locations.json",
    build: (data) => ({
      title: data.title,
      slug: data.slug,
      content: data.description ?? "",
      status: "publish",
      meta: {
        _tlg_country: data.country ?? "",
        _tlg_city: data.city ?? "",
        _tlg_public_label: data.public_label ?? "",
        _tlg_address: data.address ?? "",
        _tlg_client_facing: data.client_facing ? "yes" : "no",
        _tlg_operational_status: data.operational_status ?? "unconfirmed",
        _tlg_services_available: Array.isArray(data.services_available) ? data.services_available.join("\n") : "",
        _tlg_public_email: data.public_email ?? "",
        _tlg_public_phone: data.public_phone ?? "",
        _tlg_display_order: data.display_order ?? 0,
        _tlg_status: data.status ?? "inactive",
      },
      image: data.image,
    }),
  },
  {
    directory: "foundation",
    endpoint: "foundation",
    jsonFile: "items.json",
    build: (data) => ({
      title: data.title,
      slug: data.slug,
      content: data.description ?? "",
      status: "publish",
      meta: {
        _tlg_item_type: data.item_type ?? "programme",
        _tlg_location: data.location ?? "",
        _tlg_year: data.year ?? 0,
        _tlg_display_order: data.display_order ?? 0,
        _tlg_status: data.status ?? "inactive",
      },
      image: data.image,
    }),
  },
];

function authHeaders() {
  if (!username || !applicationPassword) {
    throw new Error("WORDPRESS_USERNAME and WORDPRESS_APPLICATION_PASSWORD are required with --apply.");
  }
  return { Authorization: `Basic ${Buffer.from(`${username}:${applicationPassword}`).toString("base64")}` };
}

async function request(route, options = {}) {
  const response = await fetch(`${apiOrigin}/wp-json/wp/v2/${route}`, {
    ...options,
    headers: { Accept: "application/json", ...authHeaders(), ...options.headers },
  });
  const responseBody = await response.text();
  let payload;
  try {
    payload = responseBody ? JSON.parse(responseBody) : null;
  } catch {
    const summary = responseBody
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 240);
    throw new Error(
      `${options.method ?? "GET"} ${route}: WordPress returned non-JSON HTTP ${response.status}. ${summary || "Check the CMS URL, username, Application Password, and any hosting security challenge."}`,
    );
  }
  if (!response.ok) {
    const message = payload?.message ? String(payload.message) : JSON.stringify(payload);
    throw new Error(`${options.method ?? "GET"} ${route}: HTTP ${response.status} ${message}`);
  }
  return payload;
}

async function sourceItems(directory) {
  const directoryPath = path.join(root, "content", directory);
  const names = (await readdir(directoryPath)).filter((name) => name.endsWith(".md")).sort();
  return Promise.all(names.map(async (name) => {
    const parsed = matter(await readFile(path.join(directoryPath, name), "utf8"));
    return { data: parsed.data, content: parsed.content.trim(), filename: name };
  }));
}

async function sourceJsonItems(directory, filename) {
  const filePath = path.join(root, "content", directory, filename);
  const records = JSON.parse(await readFile(filePath, "utf8"));
  if (!Array.isArray(records)) throw new Error(`${filePath} must contain a JSON array.`);
  return records.map((data, index) => ({ data, content: data.body ?? data.description ?? "", filename: `${filename}#${index + 1}` }));
}

function normalized(value) {
  return String(value ?? "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
}

function localImagePath(image) {
  if (typeof image !== "string" || !image.startsWith("/")) return null;
  return path.join(root, "public", ...image.split("/").filter(Boolean));
}

async function uploadImage(image, cache) {
  const filePath = localImagePath(image);
  if (!filePath) return undefined;
  if (cache.has(filePath)) return cache.get(filePath);

  const filename = path.basename(filePath);
  const stem = path.basename(filePath, path.extname(filePath)).toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const existing = await request(`media?slug=${encodeURIComponent(stem)}&context=edit&per_page=1`);
  if (existing[0]?.id) {
    cache.set(filePath, existing[0].id);
    return existing[0].id;
  }

  const mime = { ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp" }[path.extname(filename).toLowerCase()];
  if (!mime) throw new Error(`Unsupported image type: ${filename}`);
  const uploaded = await request("media", {
    method: "POST",
    headers: { "Content-Type": mime, "Content-Disposition": `attachment; filename="${filename.replaceAll('"', '')}"` },
    body: await readFile(filePath),
  });
  cache.set(filePath, uploaded.id);
  return uploaded.id;
}

function verifySavedRecord(saved, expected, filename) {
  const missing = Object.entries(expected.meta ?? {}).filter(([key, value]) => {
    const savedValue = saved.meta?.[key];
    return JSON.stringify(savedValue) !== JSON.stringify(value);
  });

  if (missing.length > 0) {
    const keys = missing.map(([key]) => key).join(", ");
    throw new Error(`WordPress did not persist registered metadata for ${filename}: ${keys}. Confirm that the CPT supports custom-fields and the updated MU plugin is active.`);
  }

  if (expected.featured_media && saved.featured_media !== expected.featured_media) {
    throw new Error(`WordPress did not persist the featured image for ${filename}.`);
  }
}

async function migrate() {
  const report = {};
  const prepared = [];

  for (const collection of collections) {
    const items = collection.jsonFile
      ? await sourceJsonItems(collection.directory, collection.jsonFile)
      : await sourceItems(collection.directory);
    report[collection.directory] = items.length;
    prepared.push({ ...collection, items: items.map((item) => ({ ...item, record: collection.build(item.data, item.content) })) });
  }

  console.log("Verified source counts:", report, "total", Object.values(report).reduce((sum, count) => sum + count, 0));
  const faqItems = prepared.find((collection) => collection.directory === "faqs")?.items ?? [];
  const faqDivisionCounts = {};
  const faqKeys = new Set();
  const provenSourceDuplicates = [];
  for (const item of faqItems) {
    const division = item.record.meta._tlg_division;
    faqDivisionCounts[division] = (faqDivisionCounts[division] ?? 0) + 1;
    const key = [normalized(item.record.title), division, normalized(item.record.content)].join("|");
    if (faqKeys.has(key)) provenSourceDuplicates.push(item.filename);
    faqKeys.add(key);
  }
  console.log("FAQ divisions:", faqDivisionCounts);
  console.log("Proven duplicate source FAQs:", provenSourceDuplicates.length, provenSourceDuplicates);
  if (!applyChanges) {
    console.log("Dry run complete. Re-run with --apply and WordPress credentials to upsert records.");
    return;
  }
  if (!apiOrigin?.startsWith("https://")) throw new Error("WORDPRESS_API_URL must be an HTTPS WordPress origin.");

  const imageCache = new Map();
  const totals = { created: 0, updated: 0, supersededRecordsDeactivated: 0, equivalentDuplicatesSkipped: 0 };

  for (const collection of prepared) {
    const existingRecords = collection.endpoint === "faqs"
      ? await request("faqs?context=edit&per_page=100&status=publish,draft,pending,private")
      : [];

    for (const item of collection.items) {
      const record = { ...item.record };
      const slugMatches = await request(`${collection.endpoint}?slug=${encodeURIComponent(record.slug)}&context=edit&status=publish,draft,pending,private`);

      if (collection.endpoint === "faqs" && slugMatches.length === 0) {
        const equivalent = existingRecords.find((candidate) =>
          normalized(candidate.title?.rendered) === normalized(record.title)
          && candidate.meta?._tlg_division === record.meta._tlg_division
          && normalized(candidate.content?.raw) === normalized(record.content));
        if (equivalent) {
          totals.equivalentDuplicatesSkipped += 1;
          console.log(`Equivalent FAQ already exists; skipped ${item.filename} (ID ${equivalent.id}).`);
          continue;
        }
      }

      if (record.image) {
        record.featured_media = await uploadImage(record.image, imageCache);
        delete record.image;
      }
      Object.keys(record).forEach((key) => record[key] === undefined && delete record[key]);

      const existing = slugMatches[0];
      const saved = await request(existing ? `${collection.endpoint}/${existing.id}` : collection.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
      verifySavedRecord(saved, record, item.filename);
      totals[existing ? "updated" : "created"] += 1;
    }
  }

  for (const superseded of supersededRecords) {
    const matches = await request(`${superseded.endpoint}?slug=${encodeURIComponent(superseded.slug)}&context=edit&status=publish,draft,pending,private`);
    if (!matches[0]) continue;
    const saved = await request(`${superseded.endpoint}/${matches[0].id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ meta: superseded.meta }),
    });
    verifySavedRecord(saved, { meta: superseded.meta }, superseded.slug);
    totals.supersededRecordsDeactivated += 1;
    console.log(`Deactivated superseded record ${superseded.slug}: ${superseded.reason}`);
  }

  console.log("Migration complete:", totals);
  console.log("No records were deleted.");
}

migrate().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
