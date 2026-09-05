import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getInsights, getPageContent } from "@/lib/wordpress/client";
import { pageField, pageMetadata } from "@/lib/wordpress/page-content";

export async function generateMetadata(): Promise<Metadata> { return pageMetadata(await getPageContent("insights"), "/insights"); }

export default async function InsightsPage() {
  const [page, postsToRender] = await Promise.all([getPageContent("insights"), getInsights()]);

  return (
    <main className="bg-white pt-32 pb-24">
      <section className="relative pt-16 pb-24 border-b border-tlg-stone bg-tlg-ivory">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl animate-reveal-up">
            <span className="text-tlg-signatureGold text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 block">{pageField(page, "hero_eyebrow")}</span>
            <h1 className="text-4xl md:text-6xl font-serif text-tlg-midnight leading-[1.1] mb-8">
              {pageField(page, "hero_title")}
            </h1>
            <p className="text-xl text-gray-800 font-normal leading-relaxed">
              {pageField(page, "hero_description")}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">

          {postsToRender.length === 0 ? (
            <p className="text-center text-gray-800 py-12">No insights published yet. Check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {postsToRender.map((post, i) => (
                <Link key={i} href={`/insights/${post.slug}`} className="group flex flex-col border border-tlg-stone hover:border-tlg-midnight transition-colors h-full">
                  <div className="h-48 bg-tlg-stone/20 w-full shrink-0 relative overflow-hidden">
                    <Image
                      src={post.featured_image || "/visuals/global-mobility.jpg"}
                      alt={post.title || "Insight"}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-1 bg-white">
                    <span className="text-[11px] uppercase font-bold tracking-widest text-tlg-signatureGold mb-3">{post.category}</span>
                    <h3 className="text-xl font-serif text-tlg-midnight mb-3">{post.title}</h3>
                    <p className="text-sm text-gray-800 font-normal mb-8 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="text-xs font-bold uppercase tracking-widest text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">
                      Read Article <ArrowRight size={14} className="ml-2" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>
      </section>
    </main>
  );
}
