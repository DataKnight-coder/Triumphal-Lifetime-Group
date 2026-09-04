import type { MetadataRoute } from "next";
import { getInsights, getPageContent, type PageKey } from "@/lib/wordpress/client";

const pages: { path: string; key: PageKey; priority: number }[] = [
  { path: "", key: "home", priority: 1 }, { path: "/about", key: "about", priority: .8 },
  { path: "/about/our-story", key: "our-story", priority: .6 }, { path: "/companies", key: "companies", priority: .8 },
  { path: "/hr-business-consulting", key: "hr-consulting", priority: .8 }, { path: "/real-estate-advisory", key: "real-estate", priority: .8 },
  { path: "/global-education-advisory", key: "education", priority: .8 }, { path: "/global-mobility-visa-services", key: "global-mobility", priority: .8 },
  { path: "/it-solutions", key: "technology", priority: .8 }, { path: "/digital-products-ecommerce", key: "digital-products", priority: .7 },
  { path: "/charity-foundation", key: "foundation", priority: .7 }, { path: "/global-presence", key: "global-presence", priority: .6 },
  { path: "/leadership", key: "leadership", priority: .7 }, { path: "/careers", key: "careers", priority: .6 },
  { path: "/contact", key: "contact", priority: .7 }, { path: "/insights", key: "insights", priority: .7 }, { path: "/partners", key: "partners", priority: .5 },
  { path: "/privacy", key: "privacy", priority: .3 }, { path: "/terms", key: "terms", priority: .3 }, { path: "/disclaimer", key: "disclaimer", priority: .3 },
  { path: "/cookies", key: "cookies", priority: .3 }, { path: "/accessibility", key: "accessibility", priority: .3 }, { path: "/refund-policy", key: "refund-policy", priority: .3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://triumphallifetimegroup.com";
  const [cmsPages, insights] = await Promise.all([Promise.all(pages.map((item) => getPageContent(item.key))), getInsights()]);
  return [
    ...pages.map((item, index) => ({ url: `${base}${item.path}`, lastModified: cmsPages[index].modified_at, changeFrequency: "weekly" as const, priority: item.priority })),
    ...insights.map((insight) => ({ url: `${base}/insights/${insight.slug}`, lastModified: insight.last_reviewed_date || insight.publish_date, changeFrequency: "monthly" as const, priority: .6 })),
  ];
}
