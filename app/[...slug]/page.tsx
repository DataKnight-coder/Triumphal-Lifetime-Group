import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getFlexiblePage, getFlexiblePages } from "@/lib/wordpress/client";

type Props = { params: Promise<{ slug: string[] }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  const pages = await getFlexiblePages();
  return pages.map((page) => ({ slug: page.path.split("/") }));
}

async function loadPage({ params }: Props) {
  const { slug } = await params;
  if (!slug?.length || slug.some((part) => !/^[a-z0-9-]+$/.test(part))) return null;
  return getFlexiblePage(slug.join("/"));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const page = await loadPage(props);
  if (!page) notFound();
  const url = `https://triumphallifetimegroup.com/${page.path}`;
  return {
    title: page.title,
    description: page.summary || undefined,
    alternates: { canonical: url },
    openGraph: { title: page.title, description: page.summary || undefined, url, images: page.image ? [{ url: page.image }] : undefined },
  };
}

export default async function WordPressPage(props: Props) {
  const page = await loadPage(props);
  if (!page) notFound();

  return (
    <main className="bg-white pb-24 pt-32">
      <header className="border-b border-tlg-stone bg-tlg-ivory">
        <div className={`mx-auto max-w-[1200px] px-6 py-16 md:px-12 md:py-24 ${page.image ? "grid items-center gap-12 lg:grid-cols-2" : ""}`}>
          <div>
            <span className="mb-5 block text-[11px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold">Triumphal Lifetime Group</span>
            <h1 className="font-serif text-4xl leading-tight text-tlg-midnight md:text-6xl">{page.title}</h1>
            {page.summary && <p className="mt-7 max-w-3xl text-lg leading-relaxed text-gray-800 md:text-xl">{page.summary}</p>}
          </div>
          {page.image && <div className="relative aspect-[4/3] overflow-hidden rounded-[28px]"><Image src={page.image} alt={page.title} fill priority className="object-cover" /></div>}
        </div>
      </header>
      <article className="cms-flexible-body mx-auto max-w-[900px] px-6 py-16 md:px-12 md:py-24" dangerouslySetInnerHTML={{ __html: page.body }} />
    </main>
  );
}
