import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateMetadata(): Metadata {
  return {
    title: { absolute: "Page not found | Triumphal Lifetime Group" },
    robots: { index: false, follow: false },
  };
}

export default function PartnersPage() {
  notFound();
}
