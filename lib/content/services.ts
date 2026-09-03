import { readMarkdownCollection } from './utils';

export type Service = {
  title?: string;
  slug?: string;
  short_description?: string;
  featured_image?: string;
  key_benefits?: string[];
  cta_text?: string;
  cta_url?: string;
  display_order?: number;
  division?: string;
  status?: "active" | "inactive";
  location_text?: string;
  entity_text?: string;
  contact_text?: string;
  content: string;
};

/**
 * Load all services from the `content/services` folder.
 * Returns an empty array if the folder does not exist or contains no markdown files.
 */
export async function getAllServices(): Promise<Service[]> {
  return readMarkdownCollection<Service>('content/services')
    .filter((service) => service.status === "active")
    .sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0));
}
