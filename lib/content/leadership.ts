import { readMarkdownCollection } from './utils';

export type LeadershipProfile = {
  name?: string;
  slug?: string;
  job_title?: string;
  department?: string;
  email?: string;
  linkedin?: string;
  photo?: string;
  display_order?: number;
  status?: "active" | "inactive";
  content: string;
};

/** Load all leadership profiles from `content/leadership`. */
export async function getAllLeadership(): Promise<LeadershipProfile[]> {
  return readMarkdownCollection<LeadershipProfile>('content/leadership')
    .filter((profile) => profile.status === "active")
    .sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0));
}
