import type { Metadata } from "next";
import Image from "next/image";
import { getLocations, getPageContent } from "@/lib/wordpress/client";
import { pageField, pageMetadata } from "@/lib/wordpress/page-content";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(await getPageContent("global-presence"), "/global-presence");
}

export default async function GlobalPresencePage() {
  const [page, locations] = await Promise.all([getPageContent("global-presence"), getLocations()]);
  return <main className="bg-white pt-32 pb-24"><section className="py-16 md:py-24 bg-tlg-ivory border-b border-tlg-stone"><div className="max-w-[1200px] mx-auto px-6 md:px-12"><span className="text-tlg-signatureGold text-[11px] font-bold uppercase tracking-[0.3em] mb-5 block">{pageField(page, "hero_eyebrow")}</span><h1 className="text-4xl md:text-6xl font-serif text-tlg-midnight mb-7">{pageField(page, "hero_title")}</h1><p className="text-xl text-gray-800 max-w-3xl">{pageField(page, "hero_description")}</p></div></section><section className="py-24"><div className="max-w-[1100px] mx-auto px-6 md:px-12">{locations.length === 0 ? <div className="max-w-2xl"><h2 className="text-3xl font-serif text-tlg-midnight mb-5">{pageField(page, "intro_heading")}</h2><div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{__html: pageField(page, "intro_body")}} /></div> : <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{locations.map((location) => <article key={location.slug} className="border border-tlg-stone rounded-[24px] overflow-hidden">{location.image && <div className="relative aspect-[16/8]"><Image src={location.image} alt={location.public_label || location.name} fill className="object-cover" /></div>}<div className="p-8"><span className="text-xs font-bold uppercase tracking-widest text-tlg-signatureGold">{location.operational_status}</span><h2 className="text-2xl font-serif text-tlg-midnight mt-3">{location.public_label || location.name}</h2><p className="text-sm text-gray-700 mt-4">{location.description}</p>{location.address && <p className="text-sm text-gray-600 mt-4">{location.address}</p>}</div></article>)}</div>}</div></section></main>;
}
