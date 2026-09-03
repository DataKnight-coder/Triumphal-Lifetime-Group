import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getAllLeadership } from "@/lib/content/leadership";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Guided by experience across North America, the Middle East, and Africa.",
};

export default async function LeadershipPage() {
  const profiles = (await getAllLeadership()).map((profile) => ({
    name: profile.name || "",
    role: profile.job_title || "",
    image: profile.photo || "/images/team/placeholder.jpeg",
    bioHtml: profile.content,
    slug: profile.slug,
  }));
  const featuredProfile = profiles[0];
  const regularProfiles = profiles.slice(1);

  return (
    <main className="bg-white pt-32 pb-24">
      <section className="relative pt-16 pb-24 border-b border-tlg-stone bg-tlg-ivory">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Link href="/about" className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-gray-800 hover:text-tlg-midnight transition-colors mb-12">
            <ArrowRight size={14} className="mr-2 rotate-180" /> Back to About
          </Link>

          <div className="max-w-4xl animate-reveal-up">
            <span className="text-tlg-signatureGold text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Leadership</span>
            <h1 className="text-4xl md:text-6xl font-serif text-tlg-midnight leading-[1.1] mb-8">
              Guided by Experience.
            </h1>
            <p className="text-xl text-gray-800 font-normal leading-relaxed">
              Our executive board brings together decades of rigorous cross-sector experience in international markets.
            </p>
          </div>
        </div>
      </section>

      {/* CEO - Featured */}
      {featuredProfile && (
        <section className="py-24 border-b border-tlg-stone">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-16 block">Founder & Group Chief Executive</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative w-full aspect-[3/4] max-w-sm overflow-hidden bg-tlg-stone/20">
                <Image src={featuredProfile.image} alt={featuredProfile.name} fill className="object-cover object-top" priority />
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-tlg-midnight mb-2">{featuredProfile.name}</h2>
                <p className="text-xs text-tlg-signatureGold font-bold uppercase tracking-[0.25em] mb-8">{featuredProfile.role}</p>
                <div className="space-y-5 text-gray-800 font-normal leading-relaxed text-[15px]" dangerouslySetInnerHTML={{ __html: featuredProfile.bioHtml }} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Executive Team */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-800 mb-12 block">Executive Board</span>
          <div className="space-y-24">
            {regularProfiles.map((profile) => (
              <div key={profile.slug} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                <div className="md:col-span-4 relative aspect-[3/4] overflow-hidden bg-tlg-stone/20">
                  <Image src={profile.image} alt={profile.name} fill className="object-cover object-top" />
                </div>
                <div className="md:col-span-8">
                  <h3 className="text-3xl font-serif text-tlg-midnight mb-1">{profile.name}</h3>
                  <p className="text-xs text-tlg-signatureGold font-bold uppercase tracking-widest mb-6">{profile.role}</p>
                  <div className="space-y-4 text-gray-700 font-normal text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: profile.bioHtml }} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 border-t border-tlg-stone pt-16 text-center max-w-2xl mx-auto">
            <h4 className="text-2xl font-serif text-tlg-midnight mb-6">Join Our Global Team</h4>
            <p className="text-gray-700 font-normal mb-8">
              We are constantly seeking exceptional talent to drive our divisions forward. Explore current opportunities across our international offices.
            </p>
            <Link href="/careers" className="inline-flex items-center justify-center bg-transparent border border-tlg-stone text-tlg-midnight px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:border-tlg-midnight transition-colors">
              View Careers
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
