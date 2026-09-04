import type { Metadata } from "next";
import Image from "next/image";
import { getLeadershipProfiles, getPageContent } from "@/lib/wordpress/client";
import { pageField, pageMetadata } from "@/lib/wordpress/page-content";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(await getPageContent("leadership"), "/leadership");
}

export default async function LeadershipPage() {
  const [page, profiles] = await Promise.all([getPageContent("leadership"), getLeadershipProfiles()]);
  const groups = [
    { key: "executive", label: "Executive Leadership" },
    { key: "division-head", label: "Division Leadership" },
  ] as const;
  return <main className="bg-white pt-32 pb-24">
    <section className="py-16 md:py-24 bg-tlg-ivory border-b border-tlg-stone"><div className="max-w-[1200px] mx-auto px-6 md:px-12"><span className="text-tlg-signatureGold text-[11px] font-bold uppercase tracking-[0.3em] mb-5 block">{pageField(page, "hero_eyebrow")}</span><h1 className="text-4xl md:text-6xl font-serif text-tlg-midnight mb-7">{pageField(page, "hero_title")}</h1><p className="text-xl text-gray-800 max-w-3xl">{pageField(page, "hero_description")}</p></div></section>
    {groups.map((group) => { const members = profiles.filter((profile) => profile.leadership_group === group.key); if (!members.length) return null; return <section key={group.key} className="py-20 border-b border-tlg-stone"><div className="max-w-[1200px] mx-auto px-6 md:px-12"><h2 className="text-3xl md:text-4xl font-serif text-tlg-midnight mb-12">{group.label}</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-12">{members.map((profile) => <article key={profile.slug} className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-7 items-start"><div className="relative aspect-[3/4] bg-tlg-stone/20 overflow-hidden">{profile.photo && <Image src={profile.photo} alt={profile.name} fill className="object-cover object-top" />}</div><div><h3 className="text-2xl font-serif text-tlg-midnight">{profile.name}</h3><p className="text-xs text-tlg-signatureGold font-bold uppercase tracking-widest mt-2 mb-5">{profile.job_title}</p><div className="text-sm text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{__html: profile.content}} />{profile.core_expertise.length > 0 && <p className="text-xs text-gray-600 mt-5"><strong>Core expertise:</strong> {profile.core_expertise.join(", ")}</p>}{profile.qualifications.length > 0 && <p className="text-xs text-gray-600 mt-2"><strong>Qualifications:</strong> {profile.qualifications.join(", ")}</p>}</div></article>)}</div></div></section>; })}
    {profiles.length === 0 && <section className="py-24 text-center text-gray-700">Leadership profiles will be published after review.</section>}
  </main>;
}
