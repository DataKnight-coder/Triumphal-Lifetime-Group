const API_BASE = process.env.WORDPRESS_API_URL?.replace(/\/+$/, "");
const MAX_CONCURRENT_CMS_REQUESTS = 2;
let activeCmsRequests = 0;
const cmsRequestQueue: (() => void)[] = [];

async function withCmsRequestPermit<T>(request: () => Promise<T>): Promise<T> {
  if (activeCmsRequests >= MAX_CONCURRENT_CMS_REQUESTS) {
    await new Promise<void>((resolve) => cmsRequestQueue.push(resolve));
  }
  activeCmsRequests += 1;
  try {
    return await request();
  } finally {
    activeCmsRequests -= 1;
    cmsRequestQueue.shift()?.();
  }
}

export const FAQ_DIVISIONS = [
  "digital-learning",
  "education",
  "global-mobility",
  "hr-consulting",
  "real-estate",
  "technology",
  "global",
] as const;

export type FAQDivision = (typeof FAQ_DIVISIONS)[number];
export type RequestedFAQDivision = Exclude<FAQDivision, "global">;

export const PAGE_KEYS = [
  "home", "about", "our-story", "companies", "hr-consulting", "real-estate",
  "education", "global-mobility", "technology", "digital-products", "foundation",
  "global-presence", "leadership", "careers", "contact", "insights", "partners",
  "privacy", "terms", "disclaimer", "cookies", "accessibility", "refund-policy",
  "site-navigation", "site-footer",
] as const;

export type PageKey = (typeof PAGE_KEYS)[number];

export interface GlobalSettings {
  company_name?: string;
  general_email?: string;
  primary_phone?: string;
  whatsapp?: string;
  address?: string;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
  copyright_text?: string;
  seo_description?: string;
  seo_og_image?: string;
  turnstile_site_key?: string;
}

export interface LeadershipProfile {
  name: string;
  slug: string;
  job_title: string;
  department: string;
  leadership_group: "executive" | "division-head";
  core_expertise: string[];
  qualifications: string[];
  content: string;
  email: string;
  linkedin: string;
  photo?: string;
  display_order: number;
}

export interface Service {
  title: string;
  slug: string;
  short_description: string;
  content: string;
  featured_image?: string;
  key_benefits: string[];
  cta_text: string;
  cta_url: string;
  display_order: number;
  division: string;
  location_text: string;
  entity_text: string;
  contact_text: string;
}

export interface Career {
  title: string;
  slug: string;
  department: string;
  location: string;
  employment_type: string;
  content: string;
  application_url: string;
  job_status: "open";
  closing_date?: string;
  display_order: number;
}

export interface FAQ {
  question: string;
  answer: string;
  division: FAQDivision;
  order: number;
  slug: string;
}

export interface Insight {
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  reviewer: string;
  publish_date: string;
  last_reviewed_date?: string;
  featured_image?: string;
  category: string;
  sources: { name: string; url: string }[];
  related_division: string;
  seo_title: string;
  seo_description: string;
  content: string;
  display_order: number;
}

export interface PageContent {
  key: PageKey;
  title: string;
  body: string;
  hero_image?: string;
  fields: Record<string, string>;
  modified_at: string;
}

export interface Location {
  name: string;
  slug: string;
  description: string;
  country: string;
  city: string;
  public_label: string;
  address: string;
  client_facing: boolean;
  operational_status: "active" | "remote" | "planned" | "unconfirmed";
  services: string[];
  email: string;
  phone: string;
  image?: string;
  order: number;
}

export interface FoundationItem {
  title: string;
  slug: string;
  description: string;
  type: "programme" | "impact" | "future";
  location: string;
  year: number;
  image?: string;
  order: number;
}

type UnknownRecord = Record<string, unknown>;

function isRecord(value: unknown): value is UnknownRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function stringValue(record: UnknownRecord, key: string): string | null {
  const value = record[key];
  return typeof value === "string" ? value : null;
}

function numberValue(record: UnknownRecord, key: string): number | null {
  const value = record[key];
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function optionalString(record: UnknownRecord, key: string): string | undefined {
  const value = record[key];
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

function isFAQDivision(value: string): value is FAQDivision {
  return (FAQ_DIVISIONS as readonly string[]).includes(value);
}

function isPageKey(value: string): value is PageKey {
  return (PAGE_KEYS as readonly string[]).includes(value);
}

function endpointUrl(endpoint: string): string | null {
  if (!API_BASE) return null;
  const root = API_BASE.endsWith("/wp-json") ? API_BASE : `${API_BASE}/wp-json`;
  return `${root}/${endpoint.replace(/^\/+/, "")}`;
}

/** Null means unavailable/malformed; a valid empty array remains empty. */
async function fetchFromWordPressUnlocked<T>(
  endpoint: string,
  parse: (value: unknown) => T | null,
): Promise<T | null> {
  const url = endpointUrl(endpoint);
  if (!url) return null;

  const maxAttempts = 6;
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        headers: { Accept: "application/json" },
        next: { revalidate: 60 },
      });
      const retryable = response.status === 429 || response.status >= 500;
      if (retryable && attempt < maxAttempts) {
        const delayMs = 500 * (2 ** (attempt - 1));
        console.warn(
          `WordPress API request temporarily failed (${response.status}): ${endpoint}; retrying in ${delayMs}ms (${attempt}/${maxAttempts}).`,
        );
        await response.arrayBuffer();
        await new Promise((resolve) => setTimeout(resolve, delayMs));
        continue;
      }
      if (!response.ok) {
        console.warn(`WordPress API request failed (${response.status}): ${endpoint}`);
        return null;
      }
      const parsed = parse(await response.json());
      if (parsed === null) console.warn(`WordPress API returned malformed data: ${endpoint}`);
      return parsed;
    } catch (error: unknown) {
      if (attempt < maxAttempts) {
        const delayMs = 500 * (2 ** (attempt - 1));
        console.warn(
          `WordPress API request was interrupted: ${endpoint}; retrying in ${delayMs}ms (${attempt}/${maxAttempts}).`,
        );
        await new Promise((resolve) => setTimeout(resolve, delayMs));
        continue;
      }
      console.warn(`WordPress API is unavailable after ${maxAttempts} attempts: ${endpoint}`, error);
      return null;
    }
  }

  return null;
}

export async function fetchFromWordPress<T>(
  endpoint: string,
  parse: (value: unknown) => T | null,
): Promise<T | null> {
  return withCmsRequestPermit(() => fetchFromWordPressUnlocked(endpoint, parse));
}

function parseSettings(value: unknown): GlobalSettings | null {
  if (!isRecord(value)) return null;
  const keys: (keyof GlobalSettings)[] = [
    "company_name", "general_email", "primary_phone", "whatsapp", "address",
    "facebook", "linkedin", "instagram", "copyright_text", "seo_description", "seo_og_image",
    "turnstile_site_key",
  ];
  const settings: GlobalSettings = {};
  for (const key of keys) {
    if (typeof value[key] === "string") settings[key] = value[key];
  }
  return settings;
}

function parseLeadershipItem(value: unknown): LeadershipProfile | null {
  if (!isRecord(value)) return null;
  const name = stringValue(value, "name");
  const slug = stringValue(value, "slug");
  const jobTitle = stringValue(value, "jobTitle");
  const biography = stringValue(value, "biography");
  const order = numberValue(value, "order");
  if (name === null || slug === null || jobTitle === null || biography === null || order === null) return null;
  return {
    name,
    slug,
    job_title: jobTitle,
    department: stringValue(value, "department") ?? "",
    leadership_group: value.leadershipGroup === "executive" ? "executive" : "division-head",
    core_expertise: Array.isArray(value.coreExpertise) && value.coreExpertise.every((item) => typeof item === "string") ? value.coreExpertise : [],
    qualifications: Array.isArray(value.qualifications) && value.qualifications.every((item) => typeof item === "string") ? value.qualifications : [],
    content: biography,
    email: stringValue(value, "email") ?? "",
    linkedin: stringValue(value, "linkedin") ?? "",
    photo: optionalString(value, "photo"),
    display_order: order,
  };
}

function parseServiceItem(value: unknown): Service | null {
  if (!isRecord(value)) return null;
  const title = stringValue(value, "title");
  const slug = stringValue(value, "slug");
  const description = stringValue(value, "description");
  const order = numberValue(value, "order");
  const benefits = value.keyBenefits;
  if (title === null || slug === null || description === null || order === null || !Array.isArray(benefits) || !benefits.every((item) => typeof item === "string")) return null;
  return {
    title,
    slug,
    short_description: stringValue(value, "shortDescription") ?? "",
    content: description,
    featured_image: optionalString(value, "image"),
    key_benefits: benefits,
    cta_text: stringValue(value, "ctaText") ?? "",
    cta_url: stringValue(value, "ctaUrl") ?? "",
    display_order: order,
    division: stringValue(value, "division") ?? "",
    location_text: stringValue(value, "locationText") ?? "",
    entity_text: stringValue(value, "entityText") ?? "",
    contact_text: stringValue(value, "contactText") ?? "",
  };
}

function parseCareerItem(value: unknown): Career | null {
  if (!isRecord(value)) return null;
  const title = stringValue(value, "title");
  const slug = stringValue(value, "slug");
  const description = stringValue(value, "description");
  const order = numberValue(value, "order");
  if (title === null || slug === null || description === null || order === null || value.status !== "open") return null;
  return {
    title,
    slug,
    department: stringValue(value, "department") ?? "",
    location: stringValue(value, "location") ?? "",
    employment_type: stringValue(value, "employmentType") ?? "",
    content: description,
    application_url: stringValue(value, "applicationUrl") ?? "",
    job_status: "open",
    closing_date: optionalString(value, "closingDate"),
    display_order: order,
  };
}

function parseFAQItem(value: unknown): FAQ | null {
  if (!isRecord(value)) return null;
  const question = stringValue(value, "question");
  const answer = stringValue(value, "answer");
  const division = stringValue(value, "division");
  const order = numberValue(value, "order");
  const slug = stringValue(value, "slug");
  if (question === null || answer === null || division === null || !isFAQDivision(division) || order === null || slug === null) return null;
  return { question, answer, division, order, slug };
}

function parseInsightItem(value: unknown): Insight | null {
  if (!isRecord(value)) return null;
  const title = stringValue(value, "title");
  const slug = stringValue(value, "slug");
  const body = stringValue(value, "body");
  const order = numberValue(value, "order");
  if (title === null || slug === null || body === null || order === null) return null;
  const rawSources = value.sources ?? [];
  if (!Array.isArray(rawSources)) return null;
  const sources = rawSources.map((source) => {
    if (!isRecord(source)) return null;
    const name = stringValue(source, "name");
    const url = stringValue(source, "url");
    return name !== null && url !== null ? { name, url } : null;
  });
  if (sources.some((source) => source === null)) return null;
  return {
    title,
    slug,
    excerpt: stringValue(value, "excerpt") ?? "",
    author: stringValue(value, "author") ?? "",
    reviewer: stringValue(value, "reviewer") ?? "",
    publish_date: stringValue(value, "publishedAt") ?? "",
    last_reviewed_date: optionalString(value, "lastReviewedAt"),
    featured_image: optionalString(value, "image"),
    category: stringValue(value, "category") ?? "",
    sources: sources as { name: string; url: string }[],
    related_division: stringValue(value, "relatedDivision") ?? "",
    seo_title: stringValue(value, "seoTitle") ?? "",
    seo_description: stringValue(value, "seoDescription") ?? "",
    content: body,
    display_order: order,
  };
}

function parsePage(value: unknown): PageContent | null {
  if (!isRecord(value)) return null;
  const key = stringValue(value, "key");
  const title = stringValue(value, "title");
  const body = stringValue(value, "body");
  const modifiedAt = stringValue(value, "modifiedAt");
  const rawFields = value.fields;
  if (key === null || !isPageKey(key) || title === null || body === null || modifiedAt === null || !isRecord(rawFields)) return null;
  const fields: Record<string, string> = {};
  for (const [field, fieldValue] of Object.entries(rawFields)) {
    if (typeof fieldValue !== "string") return null;
    fields[field] = fieldValue;
  }
  return { key, title, body, hero_image: optionalString(value, "heroImage"), fields, modified_at: modifiedAt };
}

function parseLocation(value: unknown): Location | null {
  if (!isRecord(value)) return null;
  const name = stringValue(value, "name");
  const slug = stringValue(value, "slug");
  const description = stringValue(value, "description");
  const country = stringValue(value, "country");
  const city = stringValue(value, "city");
  const publicLabel = stringValue(value, "publicLabel");
  const address = stringValue(value, "address");
  const operationalStatus = stringValue(value, "operationalStatus");
  const order = numberValue(value, "order");
  const services = value.services;
  if (
    name === null || slug === null || description === null || country === null || city === null
    || publicLabel === null || address === null || order === null
    || !["active", "remote", "planned", "unconfirmed"].includes(operationalStatus ?? "")
    || !Array.isArray(services) || !services.every((item) => typeof item === "string")
  ) return null;
  return {
    name, slug, description, country, city, public_label: publicLabel, address,
    client_facing: value.clientFacing === true,
    operational_status: operationalStatus as Location["operational_status"],
    services,
    email: stringValue(value, "email") ?? "",
    phone: stringValue(value, "phone") ?? "",
    image: optionalString(value, "image"), order,
  };
}

function parseFoundationItem(value: unknown): FoundationItem | null {
  if (!isRecord(value)) return null;
  const title = stringValue(value, "title");
  const slug = stringValue(value, "slug");
  const description = stringValue(value, "description");
  const type = stringValue(value, "type");
  const location = stringValue(value, "location");
  const year = numberValue(value, "year");
  const order = numberValue(value, "order");
  if (title === null || slug === null || description === null || !["programme", "impact", "future"].includes(type ?? "") || location === null || year === null || order === null) return null;
  return { title, slug, description, type: type as FoundationItem["type"], location, year, image: optionalString(value, "image"), order };
}

function parseArray<T>(value: unknown, parseItem: (item: unknown) => T | null): T[] | null {
  if (!Array.isArray(value)) return null;
  const parsed = value.map(parseItem);
  return parsed.some((item) => item === null) ? null : (parsed as T[]);
}

function requireWordPress<T>(value: T | null, endpoint: string): T {
  if (value !== null) return value;
  throw new Error(
    `WordPress CMS request failed for ${endpoint}. Confirm WORDPRESS_API_URL and the TLG REST API are available.`,
  );
}

export async function getGlobalSettings(): Promise<GlobalSettings> {
  const endpoint = "tlg/v1/settings";
  return requireWordPress(await fetchFromWordPress(endpoint, parseSettings), endpoint);
}

export async function getLeadershipProfiles(): Promise<LeadershipProfile[]> {
  const endpoint = "tlg/v1/leadership";
  return requireWordPress(
    await fetchFromWordPress(endpoint, (value) => parseArray(value, parseLeadershipItem)),
    endpoint,
  );
}

export async function getServices(): Promise<Service[]> {
  const endpoint = "tlg/v1/services";
  return requireWordPress(
    await fetchFromWordPress(endpoint, (value) => parseArray(value, parseServiceItem)),
    endpoint,
  );
}

export async function getCareers(): Promise<Career[]> {
  const endpoint = "tlg/v1/careers";
  return requireWordPress(
    await fetchFromWordPress(endpoint, (value) => parseArray(value, parseCareerItem)),
    endpoint,
  );
}

export async function getFaqsByDivision(division: RequestedFAQDivision): Promise<FAQ[]> {
  const endpoint = `tlg/v1/faqs?division=${encodeURIComponent(division)}`;
  return requireWordPress(
    await fetchFromWordPress(endpoint, (value) => parseArray(value, parseFAQItem)),
    endpoint,
  );
}

export async function getInsights(): Promise<Insight[]> {
  const endpoint = "tlg/v1/insights";
  return requireWordPress(
    await fetchFromWordPress(endpoint, (value) => parseArray(value, parseInsightItem)),
    endpoint,
  );
}

export async function getPageContent(key: PageKey): Promise<PageContent> {
  const endpoint = `tlg/v1/pages?key=${encodeURIComponent(key)}`;
  return requireWordPress(await fetchFromWordPress(endpoint, parsePage), endpoint);
}

export async function getLocations(): Promise<Location[]> {
  const endpoint = "tlg/v1/locations";
  return requireWordPress(await fetchFromWordPress(endpoint, (value) => parseArray(value, parseLocation)), endpoint);
}

export async function getFoundationItems(): Promise<FoundationItem[]> {
  const endpoint = "tlg/v1/foundation";
  return requireWordPress(await fetchFromWordPress(endpoint, (value) => parseArray(value, parseFoundationItem)), endpoint);
}
