import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import { getFaqsByDivision, getPageContent, type PageKey, type RequestedFAQDivision } from "@/lib/wordpress/client";
import { pageField, pageItems } from "@/lib/wordpress/page-content";

type CmsSolutionPageProps = {
  pageKey: PageKey;
  faqDivision: RequestedFAQDivision;
};

export default async function CmsSolutionPage({ pageKey, faqDivision }: CmsSolutionPageProps) {
  const [page, faqs] = await Promise.all([getPageContent(pageKey), getFaqsByDivision(faqDivision)]);
  const services = pageItems(page, "services_items");
  const audiences = pageItems(page, "audience_items");
  const process = pageItems(page, "process_items");
  const benefits = pageItems(page, "benefits_items");
  const schemas = [
    { "@context": "https://schema.org", "@type": "Service", name: pageField(page, "hero_title") || page.title, description: pageField(page, "hero_description"), provider: { "@type": "Organization", name: "Triumphal Lifetime Group", url: "https://triumphallifetimegroup.com" } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://triumphallifetimegroup.com" }, { "@type": "ListItem", position: 2, name: "Our Divisions", item: "https://triumphallifetimegroup.com/companies" }, { "@type": "ListItem", position: 3, name: page.title }] },
    ...(faqs.length > 0 ? [{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim() } })) }] : []),
  ];

  return (
    <main className="bg-white pt-32 pb-24">
      {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />)}
      <section className="relative overflow-hidden border-b border-tlg-stone bg-tlg-ivory">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <Link href="/companies" className="inline-flex items-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700 hover:text-tlg-signatureGold transition-colors mb-10">
              <ArrowRight size={14} className="mr-2 rotate-180" /> Our Divisions
            </Link>
            <Reveal>
              <span className="text-tlg-signatureGold text-[11px] font-bold uppercase tracking-[0.3em] mb-5 block">{pageField(page, "hero_eyebrow")}</span>
              <h1 className="text-4xl md:text-6xl font-serif leading-[1.08] text-tlg-midnight mb-6">{pageField(page, "hero_title")}</h1>
              <p className="text-lg text-gray-800 leading-relaxed max-w-xl mb-10">{pageField(page, "hero_description")}</p>
            </Reveal>
            {pageField(page, "cta_text") && (
              <Link href={pageField(page, "cta_url")} className="inline-flex bg-tlg-midnight text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-tlg-signatureGold hover:text-tlg-midnight transition-colors">
                {pageField(page, "cta_text")}
              </Link>
            )}
          </div>
          {page.hero_image && (
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] rounded-[28px] overflow-hidden bg-tlg-stone/30">
                <Image src={page.hero_image} alt={pageField(page, "hero_image_alt") || pageField(page, "hero_title")} fill priority className="object-cover" />
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {(pageField(page, "intro_heading") || pageField(page, "intro_body")) && (
        <section className="py-24 border-b border-tlg-stone">
          <div className="max-w-[900px] mx-auto px-6 md:px-12 text-center">
            <Reveal><h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight mb-8">{pageField(page, "intro_heading")}</h2></Reveal>
            <Reveal delay={0.1}><div className="text-lg text-gray-800 leading-relaxed space-y-5" dangerouslySetInnerHTML={{ __html: pageField(page, "intro_body") }} /></Reveal>
          </div>
        </section>
      )}

      {services.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-14">
              <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight mb-5">{pageField(page, "services_heading")}</h2>
              {pageField(page, "services_intro") && <p className="text-gray-700 leading-relaxed">{pageField(page, "services_intro")}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Reveal key={`${service.title}-${index}`} delay={(index % 3) * 0.05}>
                  <article className="h-full border border-tlg-stone rounded-[22px] p-8 hover:border-tlg-midnight transition-colors">
                    <span className="text-xs font-bold text-tlg-signatureGold mb-5 block">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="text-xl font-serif text-tlg-midnight mb-3">{service.title}</h3>
                    {service.description && <p className="text-sm text-gray-700 leading-relaxed">{service.description}</p>}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {(pageField(page, "audience_heading") || audiences.length > 0) && (
        <section className="py-20 bg-tlg-midnight text-white">
          <div className="max-w-[1100px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">{pageField(page, "audience_heading")}</h2>
              <p className="text-white/80 leading-relaxed">{pageField(page, "audience_body")}</p>
            </div>
            {audiences.length > 0 && <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">{audiences.map((item) => <li key={item.title} className="flex gap-3 text-sm"><CheckCircle2 size={18} className="text-tlg-signatureGold shrink-0" />{item.title}</li>)}</ul>}
          </div>
        </section>
      )}

      {pageField(page, "positioning_heading") && (
        <section className="py-24 bg-tlg-ivory">
          <div className="max-w-[900px] mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight mb-8">{pageField(page, "positioning_heading")}</h2>
            <div className="space-y-5 text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: pageField(page, "positioning_body") }} />
          </div>
        </section>
      )}

      {process.length > 0 && (
        <section className="py-24 border-y border-tlg-stone">
          <div className="max-w-[1100px] mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight mb-14">{pageField(page, "process_heading")}</h2>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {process.map((step, index) => <li key={`${step.title}-${index}`} className="border-l-2 border-tlg-signatureGold pl-6"><span className="text-xs font-bold text-gray-500">{String(index + 1).padStart(2, "0")}</span><h3 className="text-xl font-serif text-tlg-midnight my-2">{step.title}</h3><p className="text-sm text-gray-700 leading-relaxed">{step.description}</p></li>)}
            </ol>
          </div>
        </section>
      )}

      {benefits.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-[1100px] mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight mb-5">{pageField(page, "benefits_heading")}</h2>
            <p className="text-gray-700 mb-12">{pageField(page, "benefits_body")}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{benefits.map((item) => <div key={item.title} className="bg-tlg-ivory p-7 rounded-xl"><h3 className="font-serif text-xl text-tlg-midnight mb-2">{item.title}</h3><p className="text-sm text-gray-700">{item.description}</p></div>)}</div>
          </div>
        </section>
      )}

      {pageField(page, "disclaimer_body") && (
        <section className="py-12">
          <div className="max-w-[1000px] mx-auto px-6 md:px-12">
            <div className="border border-tlg-signatureGold/40 bg-tlg-ivory rounded-xl p-7">
              <h2 className="font-serif text-xl text-tlg-midnight mb-3">{pageField(page, "disclaimer_heading")}</h2>
              <p className="text-sm text-gray-800 leading-relaxed">{pageField(page, "disclaimer_body")}</p>
            </div>
          </div>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="py-24 bg-tlg-ivory border-y border-tlg-stone">
          <div className="max-w-[900px] mx-auto px-6 md:px-12">
            <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight mb-12">Frequently Asked Questions</h2>
            <div className="divide-y divide-tlg-stone border-y border-tlg-stone">
              {faqs.map((faq) => <details key={faq.slug} className="group py-6"><summary className="cursor-pointer list-none font-serif text-xl text-tlg-midnight flex justify-between gap-6">{faq.question}<span aria-hidden="true" className="text-tlg-signatureGold group-open:rotate-45 transition-transform">+</span></summary><div className="pt-4 text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }} /></details>)}
            </div>
          </div>
        </section>
      )}

      {pageField(page, "cta_heading") && (
        <section className="py-24 bg-tlg-midnight text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">{pageField(page, "cta_heading")}</h2>
            {pageField(page, "cta_body") && <p className="text-white/80 mb-10">{pageField(page, "cta_body")}</p>}
            <Link href={pageField(page, "cta_url")} className="inline-flex bg-tlg-signatureGold text-tlg-midnight px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white transition-colors">{pageField(page, "cta_text")}</Link>
          </div>
        </section>
      )}
    </main>
  );
}
