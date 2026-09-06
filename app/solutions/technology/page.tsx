import type { Metadata } from "next";
import CmsSolutionPage from "@/components/cms/CmsSolutionPage";
import { getPageContent } from "@/lib/wordpress/client";
import { pageMetadata } from "@/lib/wordpress/page-content";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(await getPageContent("technology"), "/it-solutions");
}

export default function TechnologyPage() {
  return <CmsSolutionPage pageKey="technology" faqDivision="technology" />;
}
