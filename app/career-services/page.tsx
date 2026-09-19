import type { Metadata } from "next";
import CmsSolutionPage from "@/components/cms/CmsSolutionPage";
import { getPageContent } from "@/lib/wordpress/client";
import { pageMetadata } from "@/lib/wordpress/page-content";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(await getPageContent("career-services"), "/career-services");
}

export default function CareerServicesPage() {
  return <CmsSolutionPage pageKey="career-services" faqDivision="career-services" />;
}
