import { getPageContent } from "@/lib/wordpress/client";
import { pageField } from "@/lib/wordpress/page-content";
import Reveal from "@/components/animations/Reveal";

export default async function CmsLegalDisclaimerPage() {
  const page = await getPageContent("disclaimer");

  return (
    <main className="bg-white pt-32 pb-24">
      <section className="relative overflow-hidden border-b border-tlg-stone bg-tlg-ivory">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <Reveal>
            <span className="text-tlg-signatureGold text-[11px] font-bold uppercase tracking-[0.3em] mb-5 block">{pageField(page, "hero_eyebrow")}</span>
            <h1 className="text-4xl md:text-6xl font-serif leading-[1.08] text-tlg-midnight mb-7">{pageField(page, "hero_title") || page.title}</h1>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-3xl">{pageField(page, "hero_description")}</p>
          </Reveal>
        </div>
      </section>

      {page.body && (
        <section className="py-20 md:py-24 border-b border-tlg-stone">
          <div className="max-w-[900px] mx-auto px-6 md:px-12">
            <div className="max-w-none text-gray-800 [&_h2]:mb-5 [&_h2]:mt-12 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:text-tlg-midnight [&_h2:first-child]:mt-0 [&_p]:mb-6 [&_p]:text-base [&_p]:leading-8 md:[&_h2]:text-4xl md:[&_p]:text-lg" dangerouslySetInnerHTML={{ __html: page.body }} />
          </div>
        </section>
      )}

      {pageField(page, "last_updated") && (
        <p className="max-w-[900px] mx-auto px-6 md:px-12 pt-8 text-sm text-gray-700">Last updated: {pageField(page, "last_updated")}</p>
      )}
    </main>
  );
}
