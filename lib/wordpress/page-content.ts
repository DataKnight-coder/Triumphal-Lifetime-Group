import type { Metadata } from "next";
import type { PageContent } from "./client";

export type StructuredItem = {
  title: string;
  description: string;
  url: string;
  image: string;
};

export type PageLink = { label: string; url: string; image: string };

export function pageField(page: PageContent, key: string): string {
  return page.fields[key] ?? "";
}

export function pageItems(page: PageContent, key: string): StructuredItem[] {
  return pageField(page, key)
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [title = "", description = "", url = "", image = ""] = line.split("|").map((part) => part.trim());
      return { title, description, url, image };
    });
}

export function pageLinks(page: PageContent, key: string): PageLink[] {
  return pageField(page, key).split(/\r?\n/).map((line) => line.trim()).filter(Boolean).map((line) => {
    const [label = "", url = "", image = ""] = line.split("|").map((part) => part.trim());
    return { label, url, image };
  }).filter((item) => item.label && item.url);
}

export function pageMetadata(page: PageContent, canonicalPath: string): Metadata {
  const title = pageField(page, "seo_title") || pageField(page, "hero_title") || page.title;
  const description = pageField(page, "seo_description") || pageField(page, "hero_description");
  const image = pageField(page, "seo_og_image") || page.hero_image;
  const canonical = `https://triumphallifetimegroup.com${canonicalPath}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}
