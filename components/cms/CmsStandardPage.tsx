import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import { getPageContent, getServices, type PageKey } from "@/lib/wordpress/client";
import { pageField, pageItems } from "@/lib/wordpress/page-content";

export default async function CmsStandardPage({ pageKey }: { pageKey: PageKey }) {
  const [page, directoryServices] = await Promise.all([
    getPageContent(pageKey),
    pageKey === "home" ? getServices() : Promise.resolve([]),
  ]);
  const itemSections = [
    ["services_heading", "services_intro", "services_items"],
    ["audience_heading", "audience_body", "audience_items"],
    ["process_heading", "", "process_items"],
    ["benefits_heading", "benefits_body", "benefits_items"],
    ["future_heading", "future_body", "future_items"],
  ] as const;

  return (
    <main className="bg-white pt-32 pb-24">
      <section className="relative overflow-hidden border-b border-tlg-stone bg-tlg-ivory">
        <div className={`max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24 ${page.hero_image ? "grid grid-cols-1 lg:grid-cols-2 gap-14 items-center" : ""}`}>
          <Reveal>
            <span className="text-tlg-signatureGold text-[11px] font-bold uppercase tracking-[0.3em] mb-5 block">{pageField(page, "hero_eyebrow")}</span>
            <h1 className="text-4xl md:text-6xl font-serif leading-[1.08] text-tlg-midnight mb-7">{pageField(page, "hero_title") || page.title}</h1>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-3xl">{pageField(page, "hero_description")}</p>
          </Reveal>
          {page.hero_image && <Reveal delay={0.1}><div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-tlg-stone/20"><Image src={page.hero_image} alt={pageField(page, "hero_image_alt") || page.title} fill priority className="object-cover" /></div></Reveal>}
        </div>
      </section>

      {(pageField(page, "intro_heading") || pageField(page, "intro_body") || page.body) && (
        <section className="py-20 md:py-24 border-b border-tlg-stone">
          <div className="max-w-[900px] mx-auto px-6 md:px-12">
            {pageField(page, "intro_heading") && <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight mb-7">{pageField(page, "intro_heading")}</h2>}
            <div className="prose prose-lg prose-headings:font-serif prose-headings:text-tlg-midnight prose-p:text-gray-800 max-w-none" dangerouslySetInnerHTML={{ __html: pageField(page, "intro_body") || page.body }} />
          </div>
        </section>
      )}

      {pageField(page, "positioning_heading") && (
        <section className="py-20 bg-tlg-midnight text-white"><div className="max-w-[900px] mx-auto px-6 md:px-12"><h2 className="text-3xl md:text-5xl font-serif text-white mb-7">{pageField(page, "positioning_heading")}</h2><div className="text-white/85 leading-relaxed" dangerouslySetInnerHTML={{ __html: pageField(page, "positioning_body") }} /></div></section>
      )}

      {directoryServices.length > 0 && (
        <section className="py-20 md:py-24 bg-tlg-emerald text-white">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-5">{pageField(page, "services_heading")}</h2>
            <p className="text-white/80 max-w-3xl mb-12">{pageField(page, "services_intro")}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {directoryServices.map((service) => <Link key={service.slug} href={service.cta_url || "/companies"} className="rounded-[22px] bg-white text-tlg-midnight p-7 hover:-translate-y-1 transition-transform"><h3 className="text-xl font-serif mb-3">{service.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{service.short_description}</p><span className="inline-flex items-center mt-5 text-xs font-bold uppercase tracking-widest">{service.cta_text || "Explore"}<ArrowRight size={13} className="ml-2" /></span></Link>)}
            </div>
          </div>
        </section>
      )}

      {itemSections.map(([headingKey, bodyKey, itemsKey], sectionIndex) => {
        const items = pageItems(page, itemsKey);
        if (items.length === 0) return null;
        return (
          <section key={itemsKey} className={`py-20 md:py-24 ${sectionIndex % 2 ? "bg-tlg-ivory" : "bg-white"}`}>
            <div className="max-w-[1100px] mx-auto px-6 md:px-12">
              <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight mb-5">{pageField(page, headingKey)}</h2>
              {bodyKey && pageField(page, bodyKey) && <div className="text-gray-700 leading-relaxed max-w-3xl mb-12" dangerouslySetInnerHTML={{ __html: pageField(page, bodyKey) }} />}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                  <Reveal key={`${itemsKey}-${item.title}-${index}`} delay={(index % 3) * 0.05}>
                    <article className="h-full border border-tlg-stone bg-white rounded-[22px] p-7">
                      <CheckCircle2 size={19} className="text-tlg-signatureGold mb-5" />
                      <h3 className="text-xl font-serif text-tlg-midnight mb-3">{item.title}</h3>
                      {item.description && <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>}
                      {item.url && <Link href={item.url} className="inline-flex items-center mt-5 text-xs font-bold uppercase tracking-widest text-tlg-midnight">Learn More <ArrowRight size={13} className="ml-2" /></Link>}
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {pageField(page, "disclaimer_body") && (
        <section className="py-12"><div className="max-w-[900px] mx-auto px-6 md:px-12"><div className="border border-tlg-signatureGold/50 bg-tlg-ivory rounded-xl p-7"><h2 className="font-serif text-xl text-tlg-midnight mb-3">{pageField(page, "disclaimer_heading")}</h2><div className="text-sm text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: pageField(page, "disclaimer_body") }} /></div></div></section>
      )}

      {pageField(page, "cta_text") && (
        <section className="py-20 bg-tlg-midnight text-white text-center"><div className="max-w-3xl mx-auto px-6"><h2 className="text-3xl md:text-5xl font-serif text-white mb-6">{pageField(page, "cta_heading")}</h2>{pageField(page, "cta_body") && <p className="text-white/80 mb-9">{pageField(page, "cta_body")}</p>}<div className="flex flex-wrap justify-center gap-4"><Link href={pageField(page, "cta_url")} className="inline-flex bg-tlg-signatureGold text-tlg-midnight px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full">{pageField(page, "cta_text")}</Link>{pageField(page, "secondary_cta_text") && <Link href={pageField(page, "secondary_cta_url")} className="inline-flex border border-white/30 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full">{pageField(page, "secondary_cta_text")}</Link>}</div></div></section>
      )}
    </main>
  );
}
