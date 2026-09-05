import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getFoundationItems, getLeadershipProfiles, getPageContent } from "@/lib/wordpress/client";
import { pageField, pageItems, pageMetadata } from "@/lib/wordpress/page-content";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(await getPageContent("foundation"), "/charity-foundation");
}

export default async function FoundationPage() {
  const [page, items, leadership] = await Promise.all([
    getPageContent("foundation"),
    getFoundationItems(),
    getLeadershipProfiles(),
  ]);
  const founder = leadership.find((profile) => profile.slug === "adekemi-arike-adedayo");
  const audiences = pageItems(page, "audience_items");

  return (
    <main className="bg-white pb-24 pt-32">
      <section className="border-b border-tlg-stone bg-tlg-ivory py-16 md:py-24">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-14 px-6 md:px-12 lg:grid-cols-2">
          <div>
            <span className="mb-5 block text-[11px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold">
              {pageField(page, "hero_eyebrow")}
            </span>
            <h1 className="mb-7 font-serif text-4xl text-tlg-midnight md:text-6xl">
              {pageField(page, "hero_title")}
            </h1>
            <p className="text-xl text-gray-800">{pageField(page, "hero_description")}</p>
          </div>
          {page.hero_image && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]">
              <Image
                src={page.hero_image}
                alt={pageField(page, "hero_image_alt") || page.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1000px] px-6 md:px-12">
          <h2 className="mb-7 font-serif text-3xl text-tlg-midnight md:text-5xl">
            {pageField(page, "intro_heading")}
          </h2>
          <div
            className="leading-relaxed text-gray-700"
            dangerouslySetInnerHTML={{ __html: pageField(page, "intro_body") }}
          />
          {audiences.length > 0 && (
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {audiences.map((item) => (
                <article key={item.title} className="rounded-xl bg-tlg-ivory p-7">
                  <h3 className="mb-2 font-serif text-xl text-tlg-midnight">{item.title}</h3>
                  <p className="text-sm text-gray-700">{item.description}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {founder && (
        <section className="bg-tlg-midnight py-20 text-white">
          <div className="mx-auto grid max-w-[1000px] grid-cols-1 items-center gap-10 px-6 md:grid-cols-[260px_1fr] md:px-12">
            {founder.photo && (
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={founder.photo} alt={founder.name} fill className="object-cover object-top" />
              </div>
            )}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-tlg-signatureGold">
                Foundation Leadership
              </span>
              <h2 className="mb-2 mt-4 font-serif text-3xl text-white">{founder.name}</h2>
              <p className="mb-5 text-sm text-white/70">{founder.job_title}</p>
              <div
                className="text-sm leading-relaxed text-white/85"
                dangerouslySetInnerHTML={{ __html: founder.content }}
              />
            </div>
          </div>
        </section>
      )}

      {["programme", "impact", "future"].map((type) => {
        const group = items.filter((item) => item.type === type);
        if (!group.length) return null;
        return (
          <section key={type} className="py-20">
            <div className="mx-auto max-w-[1100px] px-6 md:px-12">
              <h2 className="mb-10 font-serif text-3xl capitalize text-tlg-midnight">
                {type === "impact" ? "Verified Impact" : `${type}s`}
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {group.map((item) => (
                  <article key={item.slug} className="rounded-xl border border-tlg-stone p-7">
                    <h3 className="font-serif text-xl text-tlg-midnight">{item.title}</h3>
                    <p className="mt-3 text-sm text-gray-700">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-tlg-ivory py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="mb-6 font-serif text-3xl text-tlg-midnight">{pageField(page, "cta_heading")}</h2>
          <p className="mb-8 text-gray-700">{pageField(page, "cta_body")}</p>
          {pageField(page, "cta_text") && (
            <Link
              href={pageField(page, "cta_url")}
              className="inline-flex rounded-full bg-tlg-midnight px-8 py-4 text-xs font-bold uppercase tracking-widest text-white"
            >
              {pageField(page, "cta_text")}
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
