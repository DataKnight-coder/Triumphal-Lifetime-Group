import type { Metadata } from "next";
import CmsLegalDisclaimerPage from "@/components/cms/CmsLegalDisclaimerPage";
import { getPageContent } from "@/lib/wordpress/client";
import { pageMetadata } from "@/lib/wordpress/page-content";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(await getPageContent("disclaimer"), "/disclaimer");
}

export default CmsLegalDisclaimerPage;
