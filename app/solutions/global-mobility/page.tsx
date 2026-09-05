import type { Metadata } from "next";
import CmsSolutionPage from "@/components/cms/CmsSolutionPage";
import { getPageContent } from "@/lib/wordpress/client";
import { pageMetadata } from "@/lib/wordpress/page-content";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(await getPageContent("global-mobility"), "/global-mobility-visa-services");
}

export default function GlobalMobilityPage() {
  return <CmsSolutionPage pageKey="global-mobility" faqDivision="global-mobility" />;
}
