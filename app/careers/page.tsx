import type { Metadata } from "next";
import Link from "next/link";
import { getCareers, getPageContent } from "@/lib/wordpress/client";
import { pageField, pageMetadata } from "@/lib/wordpress/page-content";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(await getPageContent("careers"), "/careers");
}

export default async function CareersPage() {
  const [page, careers] = await Promise.all([getPageContent("careers"), getCareers()]);
  return <main className="bg-white pt-32 pb-24"><section className="py-16 md:py-24 bg-tlg-ivory border-b border-tlg-stone"><div className="max-w-[1100px] mx-auto px-6 md:px-12"><span className="text-tlg-signatureGold text-[11px] font-bold uppercase tracking-[0.3em] mb-5 block">{pageField(page, "hero_eyebrow")}</span><h1 className="text-4xl md:text-6xl font-serif text-tlg-midnight mb-7">{pageField(page, "hero_title")}</h1><p className="text-xl text-gray-800 max-w-3xl">{pageField(page, "hero_description")}</p></div></section><section className="py-24"><div className="max-w-[900px] mx-auto px-6 md:px-12"><h2 className="text-3xl font-serif text-tlg-midnight mb-10">{pageField(page, "intro_heading")}</h2>{careers.length === 0 ? <div className="border border-tlg-stone bg-tlg-ivory p-8 text-gray-700" dangerouslySetInnerHTML={{__html: pageField(page, "intro_body")}} /> : <div className="space-y-6">{careers.map((career) => <article key={career.slug} className="border border-tlg-stone rounded-xl p-8"><h3 className="text-2xl font-serif text-tlg-midnight">{career.title}</h3><p className="text-xs uppercase tracking-widest text-tlg-signatureGold mt-2 mb-5">{[career.department, career.location, career.employment_type].filter(Boolean).join(" · ")}</p><div className="text-sm text-gray-700" dangerouslySetInnerHTML={{__html: career.content}} />{career.application_url && <Link href={career.application_url} className="inline-flex mt-6 bg-tlg-midnight text-white px-7 py-3 text-xs font-bold uppercase tracking-widest">Apply</Link>}</article>)}</div>}{pageField(page, "cta_body") && <div className="mt-14"><h2 className="text-2xl font-serif text-tlg-midnight mb-4">{pageField(page, "cta_heading")}</h2><div className="text-sm text-gray-700" dangerouslySetInnerHTML={{__html: pageField(page, "cta_body")}} /></div>}</div></section></main>;
}
