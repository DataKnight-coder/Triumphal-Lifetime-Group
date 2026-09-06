import type { Metadata } from "next";
import CmsSolutionPage from "@/components/cms/CmsSolutionPage";
import { getPageContent } from "@/lib/wordpress/client";
import { pageMetadata } from "@/lib/wordpress/page-content";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(await getPageContent("real-estate"), "/real-estate-advisory");
}

export default function RealEstatePage() {
  return <CmsSolutionPage pageKey="real-estate" faqDivision="real-estate" />;
}
