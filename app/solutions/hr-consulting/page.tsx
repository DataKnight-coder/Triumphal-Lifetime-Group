import type { Metadata } from "next";
import CmsSolutionPage from "@/components/cms/CmsSolutionPage";
import { getPageContent } from "@/lib/wordpress/client";
import { pageMetadata } from "@/lib/wordpress/page-content";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(await getPageContent("hr-consulting"), "/hr-business-consulting");
}

export default function HrConsultingPage() {
  return <CmsSolutionPage pageKey="hr-consulting" faqDivision="hr-consulting" />;
}
