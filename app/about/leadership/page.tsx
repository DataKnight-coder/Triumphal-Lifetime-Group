import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Guided by experience across North America, the Middle East, and Africa.",
};

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function LeadershipPage() {
  return (
    <main className="bg-white pt-32 pb-24">
      <section className="relative pt-16 pb-24 border-b border-tlg-stone bg-tlg-ivory">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Link href="/about" className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-tlg-midnight transition-colors mb-12">
            <ArrowRight size={14} className="mr-2 rotate-180" /> Back to About
          </Link>
          
          <div className="max-w-4xl animate-reveal-up">
            <span className="text-tlg-signatureGold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Leadership</span>
            <h1 className="text-4xl md:text-6xl font-serif text-tlg-midnight leading-[1.1] mb-8">
              Guided by Experience.
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Our executive board brings together decades of rigorous cross-sector experience in international markets.
            </p>
          </div>
        </div>
      </section>

      {/* CEO — Featured */}
      <section className="py-24 border-b border-tlg-stone">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-16 block">Founder & Group Chief Executive</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Photo */}
            <div className="relative w-full aspect-[3/4] max-w-sm overflow-hidden bg-tlg-stone/20">
              <Image
                src="/Adekemi Arike Adedayo.jpeg"
                alt="Adekemi Arike Adedayo — Founder & Group CEO"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Bio */}
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-tlg-midnight mb-2">
                Adekemi Arike Adedayo
              </h2>
              <p className="text-xs text-tlg-signatureGold font-bold uppercase tracking-[0.25em] mb-8">
                Founder & Group Chief Executive Officer
              </p>
              <div className="space-y-5 text-gray-600 font-light leading-relaxed text-[15px]">
                <p>
                  Adekemi Arike Adedayo is the Founder and Group CEO of Triumphal Lifetime Group, providing strategic oversight across the Group's six specialist divisions and directing operations across Nigeria, the UAE, and Canada.
                </p>
                <p>
                  Her work spans human resources, international education, global mobility, and business development — bringing a cross-sector perspective to organisations navigating complex growth and transition challenges.
                </p>
                <p>
                  Under her leadership, the Group has built a multi-disciplinary advisory framework designed to serve individuals, businesses, and institutions at every stage of their international journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-12 block">Executive Board</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="border border-tlg-stone p-8">
              <h3 className="text-xl font-serif text-tlg-midnight mb-1">Director of Advisory</h3>
              <p className="text-xs text-tlg-signatureGold font-bold uppercase tracking-widest mb-4">HR & Business Consulting</p>
              <p className="text-gray-500 font-light text-sm leading-relaxed">
                Leading the enterprise consulting practice, focusing on corporate governance, executive search, and cross-border restructuring operations.
              </p>
            </div>
            
            <div className="border border-tlg-stone p-8">
              <h3 className="text-xl font-serif text-tlg-midnight mb-1">Regional Director</h3>
              <p className="text-xs text-tlg-signatureGold font-bold uppercase tracking-widest mb-4">Middle East & Africa</p>
              <p className="text-gray-500 font-light text-sm leading-relaxed">
                Directing market entry, facility management, and educational partnerships across the Group's emerging market corridors.
              </p>
            </div>

          </div>
          
          <div className="mt-24 border-t border-tlg-stone pt-16 text-center max-w-2xl mx-auto">
            <h4 className="text-2xl font-serif text-tlg-midnight mb-6">Join Our Global Team</h4>
            <p className="text-gray-500 font-light mb-8">
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
