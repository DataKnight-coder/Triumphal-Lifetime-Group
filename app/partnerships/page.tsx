import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnerships",
  description: "Collaborative growth and strategic alliances.",
};

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PartnershipsPage() {
  return (
    <main className="bg-white pt-32 pb-24">
      <section className="relative pt-16 pb-24 border-b border-tlg-stone bg-tlg-ivory">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl animate-reveal-up">
            <span className="text-tlg-signatureGold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Partnerships</span>
            <h1 className="text-4xl md:text-6xl font-serif text-tlg-midnight leading-[1.1] mb-8">
              Collaborative Growth.
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              We partner with global institutions, technology providers, and government agencies to expand our service capabilities and market impact.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl font-serif text-tlg-midnight mb-6">Strategic Alliances</h2>
            <p className="text-gray-600 font-light leading-relaxed mb-6">
              Triumphal Lifetime Group is committed to building robust ecosystems. We actively seek partnerships with:
            </p>
            <ul className="space-y-4 text-sm text-gray-600 font-light mb-12">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-tlg-signatureGold mr-4"></span> International Educational Institutions</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-tlg-signatureGold mr-4"></span> Global Real Estate Developers</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-tlg-signatureGold mr-4"></span> Technology Integrators and Software Vendors</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-tlg-signatureGold mr-4"></span> Specialist Legal Counsel in North America and MENA</li>
            </ul>
            
            <Link href="/contact" className="inline-flex items-center justify-center bg-tlg-midnight text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-tlg-signatureGold transition-colors">
              Propose a Partnership
            </Link>
          </div>



        </div>
      </section>
    </main>
  );
}
