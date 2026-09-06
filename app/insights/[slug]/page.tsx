import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Calendar, User } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import { getInsights } from "@/lib/wordpress/client";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const insights = await getInsights();
  return insights.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = (await getInsights()).find((item) => item.slug === slug);

  if (!insight) return {};

  return {
    title: insight.seo_title || insight.title,
    description: insight.seo_description || insight.excerpt,
    openGraph: insight.featured_image ? { images: [insight.featured_image] } : undefined,
  };
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export default async function InsightPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const insight = (await getInsights()).find((item) => item.slug === slug);

  if (!insight) notFound();

  const articleSchema = { "@context": "https://schema.org", "@type": "Article", headline: insight.title, description: insight.excerpt, image: insight.featured_image ? [insight.featured_image] : undefined, datePublished: insight.publish_date, dateModified: insight.last_reviewed_date || insight.publish_date, author: { "@type": "Person", name: insight.author }, reviewer: insight.reviewer ? { "@type": "Person", name: insight.reviewer } : undefined, mainEntityOfPage: `https://triumphallifetimegroup.com/insights/${insight.slug}` };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://triumphallifetimegroup.com" }, { "@type": "ListItem", position: 2, name: "Insights", item: "https://triumphallifetimegroup.com/insights" }, { "@type": "ListItem", position: 3, name: insight.title }] };

  return (
    <main className="bg-white pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c") }} />
      <section className="relative pt-16 pb-12 bg-tlg-ivory border-b border-tlg-stone">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center">
          <Reveal>
            <Link href="/insights" className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-gray-800 hover:text-tlg-midnight transition-colors mb-8">
              <ArrowRight size={14} className="mr-2 rotate-180" /> Back to Insights
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-tlg-signatureGold text-[11px] font-bold uppercase tracking-[0.3em] mb-6 block">
              {insight.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-serif text-tlg-midnight leading-[1.2] mb-8">
              {insight.title}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex items-center justify-center gap-6 text-xs text-gray-700 uppercase tracking-widest font-bold">
              <span className="flex items-center gap-2"><Calendar size={14} /> {formatDate(insight.publish_date)}</span>
              <span className="flex items-center gap-2"><User size={14} /> {insight.author}</span>
              {insight.reviewer && <span>Reviewed by {insight.reviewer}</span>}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <Reveal delay={0.3}>
            <div className="relative w-full aspect-[21/9] rounded-[24px] overflow-hidden bg-tlg-stone">
              <Image
                src={insight.featured_image || "/visuals/global-mobility.jpg"}
                alt={insight.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <Reveal delay={0.4}>
            <article
              className="prose prose-lg prose-headings:font-serif prose-headings:text-tlg-midnight prose-p:text-gray-800 prose-p:font-normal prose-p:leading-relaxed prose-a:text-tlg-signatureGold max-w-none"
              dangerouslySetInnerHTML={{ __html: insight.content }}
            />
          </Reveal>
          {(insight.last_reviewed_date || insight.sources.length > 0) && <aside className="mt-14 border-t border-tlg-stone pt-8 text-sm text-gray-700">{insight.last_reviewed_date && <p><strong>Last reviewed:</strong> {formatDate(insight.last_reviewed_date)}</p>}{insight.sources.length > 0 && <div className="mt-5"><strong>Sources</strong><ul className="list-disc pl-5 mt-2 space-y-1">{insight.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="underline">{source.name}</a></li>)}</ul></div>}</aside>}
        </div>
      </section>
    </main>
  );
}
