import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPageContent, getServices } from "@/lib/wordpress/client";
import { pageField, pageMetadata } from "@/lib/wordpress/page-content";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(await getPageContent("companies"), "/companies");
}

export default async function CompaniesPage() {
  const [page, services] = await Promise.all([getPageContent("companies"), getServices()]);
  return <main className="bg-white pt-32 pb-24">
    <section className="py-16 md:py-24 bg-tlg-ivory border-b border-tlg-stone"><div className="max-w-[1200px] mx-auto px-6 md:px-12"><span className="text-tlg-signatureGold text-[11px] font-bold uppercase tracking-[0.3em] mb-5 block">{pageField(page, "hero_eyebrow")}</span><h1 className="text-4xl md:text-6xl font-serif text-tlg-midnight mb-7">{pageField(page, "hero_title")}</h1><p className="text-xl text-gray-800 max-w-3xl">{pageField(page, "hero_description")}</p></div></section>
    <section className="py-24"><div className="max-w-[1200px] mx-auto px-6 md:px-12"><h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight mb-5">{pageField(page, "intro_heading")}</h2><div className="text-gray-700 max-w-3xl mb-14" dangerouslySetInnerHTML={{__html: pageField(page, "intro_body")}} /><div className="grid grid-cols-1 md:grid-cols-2 gap-7">{services.map((service) => <article key={service.slug} className="border border-tlg-stone rounded-[24px] overflow-hidden flex flex-col">{service.featured_image && <div className="relative aspect-[16/7]"><Image src={service.featured_image} alt={service.title} fill className="object-cover" /></div>}<div className="p-8 flex-1 flex flex-col"><h3 className="text-2xl font-serif text-tlg-midnight mb-3">{service.title}</h3><p className="text-sm text-gray-700 leading-relaxed flex-1">{service.short_description}</p>{service.cta_url && <Link href={service.cta_url} className="inline-flex items-center mt-7 text-xs font-bold uppercase tracking-widest">{service.cta_text || "Explore"}<ArrowRight size={14} className="ml-2" /></Link>}</div></article>)}</div></div></section>
  </main>;
}
