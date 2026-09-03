import { readMarkdownCollection } from './utils';

export type FAQDivision =
  | "digital-learning"
  | "education"
  | "global-mobility"
  | "hr-consulting"
  | "real-estate"
  | "technology"
  | "global";

export interface FAQ {
  question: string;
  answer: string;
  division?: FAQDivision;
  order?: number;
  slug?: string;
}

type FAQSource = Omit<FAQ, 'answer'> & { content: string };

/** Load all FAQs from `content/faqs`. */
export async function getAllFaqs(): Promise<FAQ[]> {
  const items = readMarkdownCollection<FAQSource>('content/faqs');
  return items.map(item => ({
    question: item.question,
    answer: item.content.trim(),
    division: item.division,
    order: item.order,
    slug: item.slug,
  } as FAQ));
}



/** Get FAQs filtered by division (including global) and sorted by order */
export async function getFaqsByDivision(
  division: FAQDivision,
): Promise<FAQ[]> {
  const allFaqs = await getAllFaqs();
  return allFaqs
    .filter((faq) => faq.division === division || faq.division === "global")
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}
