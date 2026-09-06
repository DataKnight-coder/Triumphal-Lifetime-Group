import type { Metadata } from "next";
import CmsSolutionPage from "@/components/cms/CmsSolutionPage";
import { getPageContent } from "@/lib/wordpress/client";
import { pageMetadata } from "@/lib/wordpress/page-content";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(await getPageContent("education"), "/global-education-advisory");
}

export default function EducationPage() {
  return <CmsSolutionPage pageKey="education" faqDivision="education" />;
}
