import { readMarkdownCollection } from './utils';

export type Insight = {
  title?: string;
  slug?: string;
  excerpt?: string;
  author?: string;
  publish_date?: string;
  featured_image?: string;
  category?: string;
  seo_title?: string;
  seo_description?: string;
  draft?: boolean;
  display_order?: number;
  content: string;
};

/** Load all insights from `content/insights`. */
export async function getAllInsights(): Promise<Insight[]> {
  return readMarkdownCollection<Insight>('content/insights')
    .filter((insight) => insight.draft !== true)
    .sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0));
}
