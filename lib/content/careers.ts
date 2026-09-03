import { readMarkdownCollection } from './utils';

export type Career = {
  title?: string;
  slug?: string;
  department?: string;
  location?: string;
  employment_type?: string;
  application_url?: string;
  job_status?: "open" | "closed";
  closing_date?: string;
  display_order?: number;
  content: string;
};

/** Load all careers from `content/careers`. */
export async function getAllCareers(): Promise<Career[]> {
  return readMarkdownCollection<Career>('content/careers')
    .filter((career) => career.job_status === "open")
    .sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0));
}
