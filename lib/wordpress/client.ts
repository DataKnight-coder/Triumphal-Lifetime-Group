const API_BASE = process.env.WORDPRESS_API_URL?.replace(/\/+$/, "");

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
}

export interface LeadershipProfile {
  name: string;
  slug: string;
  job_title: string;
  department: string;
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
  publish_date: string;
  featured_image?: string;
  category: string;
  seo_title: string;
  seo_description: string;
  content: string;
  display_order: number;
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

function endpointUrl(endpoint: string): string | null {
  if (!API_BASE) return null;
  const root = API_BASE.endsWith("/wp-json") ? API_BASE : `${API_BASE}/wp-json`;
  return `${root}/${endpoint.replace(/^\/+/, "")}`;
}

/** Null means unavailable/malformed; a valid empty array remains empty. */
export async function fetchFromWordPress<T>(
  endpoint: string,
  parse: (value: unknown) => T | null,
): Promise<T | null> {
  const url = endpointUrl(endpoint);
  if (!url) return null;

  try {
    const response = await fetch(url, {
      headers: { Accept: "application/json" },
      next: { revalidate: 60 },
    });
    if (!response.ok) {
      console.warn(`WordPress API request failed (${response.status}): ${endpoint}`);
      return null;
    }
    const parsed = parse(await response.json());
    if (parsed === null) console.warn(`WordPress API returned malformed data: ${endpoint}`);
    return parsed;
  } catch (error: unknown) {
    console.warn(`WordPress API is unavailable: ${endpoint}`, error);
    return null;
  }
}

function parseSettings(value: unknown): GlobalSettings | null {
  if (!isRecord(value)) return null;
  const keys: (keyof GlobalSettings)[] = [
    "company_name", "general_email", "primary_phone", "whatsapp", "address",
    "facebook", "linkedin", "instagram", "copyright_text", "seo_description", "seo_og_image",
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
  return {
    title,
    slug,
    excerpt: stringValue(value, "excerpt") ?? "",
    author: stringValue(value, "author") ?? "",
    publish_date: stringValue(value, "publishedAt") ?? "",
    featured_image: optionalString(value, "image"),
    category: stringValue(value, "category") ?? "",
    seo_title: stringValue(value, "seoTitle") ?? "",
    seo_description: stringValue(value, "seoDescription") ?? "",
    content: body,
    display_order: order,
  };
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
