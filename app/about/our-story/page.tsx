import type { Metadata } from "next";
import CmsStandardPage from "@/components/cms/CmsStandardPage";
import { getPageContent } from "@/lib/wordpress/client";
import { pageMetadata } from "@/lib/wordpress/page-content";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(await getPageContent("our-story"), "/about/our-story");
}

export default function OurStoryPage() {
  return <CmsStandardPage pageKey="our-story" />;
}
