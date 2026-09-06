import type { Metadata } from "next";
import CmsStandardPage from "./CmsStandardPage";
import { getPageContent, type PageKey } from "@/lib/wordpress/client";
import { pageMetadata } from "@/lib/wordpress/page-content";

export function createCmsPage(pageKey: PageKey, canonicalPath: string) {
  return {
    Page: function Page() { return <CmsStandardPage pageKey={pageKey} />; },
    generateMetadata: async function generateMetadata(): Promise<Metadata> { return pageMetadata(await getPageContent(pageKey), canonicalPath); },
  };
}
