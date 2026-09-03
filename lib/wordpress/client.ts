const API_URL = process.env.WORDPRESS_API_URL || 'https://cms.triumphallifetimegroup.com/wp-json/wp/v2';

/**
 * Generic fetch wrapper for WordPress REST API
 */
export async function fetchFromWordPress(endpoint: string, options: RequestInit = {}) {
  try {
    const res = await fetch(`${API_URL}/${endpoint}`, {
      // In Next.js, we can use 'force-cache' for static content or 'no-store' for dynamic.
      // We default to revalidating every 60 seconds for CMS content so updates appear quickly.
      next: { revalidate: 60 },
      ...options,
    });

    if (!res.ok) {
      console.warn(`WordPress API error on ${endpoint}: ${res.statusText}`);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error(`Failed to fetch from WordPress API (${endpoint}):`, error);
    return null; // Return null to trigger graceful fallbacks in components
  }
}

// ---------------------------------------------------------------------------
// Type Definitions
// ---------------------------------------------------------------------------
export interface WPLeadershipProfile {
  id: number;
  title: { rendered: string };
  acf?: {
    job_title?: string;
    department?: string;
    biography?: string;
    email?: string;
    linkedin?: string;
    display_order?: number;
    status?: 'Active' | 'Inactive';
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
  };
}

export interface WPCareer {
  id: number;
  title: { rendered: string };
  acf?: {
    department?: string;
    location?: string;
    employment_type?: string;
    application_url?: string;
    job_status?: 'Open' | 'Closed';
  };
}

export interface WPSettings {
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

export interface WPService {
  id: number;
  title: { rendered: string };
  acf?: {
    short_description?: string;
    key_benefits?: { benefit: string }[];
    cta_text?: string;
    cta_url?: string;
    display_order?: number;
    location_text?: string;
    entity_text?: string;
    contact_text?: string;
  };
}

export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string }>;
    'wp:term'?: Array<Array<{ name: string }>>; // categories
  };
}

export interface WPFaq {
  id: number;
  title: { rendered: string };
  acf?: {
    answer?: string;
    division?: string;
    display_order?: number;
  };
}

// ---------------------------------------------------------------------------
// API Services
// ---------------------------------------------------------------------------

/**
 * Fetch FAQs
 */
export async function getFaqs(division?: string): Promise<WPFaq[] | null> {
  // If a division is provided, ideally we'd filter via WP API.
  // For now we fetch all and filter in the client since we don't have a complex taxonomy set up yet.
  return fetchFromWordPress('faqs?per_page=100');
}

/**
 * Fetch all posts (Insights/News)
 */
export async function getPosts(): Promise<WPPost[] | null> {
  return fetchFromWordPress('posts?_embed=true&per_page=100');
}

/**
 * Fetch all services
 */
export async function getServices(): Promise<WPService[] | null> {
  return fetchFromWordPress('services?per_page=100');
}

/**
 * Fetch all leadership profiles
 */
export async function getLeadershipProfiles(): Promise<WPLeadershipProfile[] | null> {
  return fetchFromWordPress('leadership?_embed=1&per_page=100');
}

/**
 * Fetch all careers
 */
export async function getCareers(): Promise<WPCareer[] | null> {
  return fetchFromWordPress('careers?per_page=100');
}

export async function getGlobalSettings(): Promise<WPSettings | null> {
  const res = await fetchFromWordPress('../tlg/v1/settings');
  return res ? res : null;
}
