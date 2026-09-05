import type { Metadata } from "next";
import CmsSolutionPage from "@/components/cms/CmsSolutionPage";
import { getPageContent } from "@/lib/wordpress/client";
import { pageMetadata } from "@/lib/wordpress/page-content";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(await getPageContent("digital-products"), "/digital-products-ecommerce");
}

export default function DigitalProductsPage() {
  return <CmsSolutionPage pageKey="digital-products" faqDivision="digital-learning" />;
}
