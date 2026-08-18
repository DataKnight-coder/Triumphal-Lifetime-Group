import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description: "Analysis and perspectives on global markets.",
};

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InsightsPage() {
  return (
    <main className="bg-white pt-32 pb-24">
      <section className="relative pt-16 pb-24 border-b border-tlg-stone bg-tlg-ivory">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl animate-reveal-up">
            <span className="text-tlg-signatureGold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Insights</span>
            <h1 className="text-4xl md:text-6xl font-serif text-tlg-midnight leading-[1.1] mb-8">
              Analysis & Perspectives.
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Research-backed insights into global mobility, corporate restructuring, real estate markets, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Article 1 */}
            <Link href="/insights/express-entry-canada-2024" className="group flex flex-col border border-tlg-stone hover:border-tlg-midnight transition-colors h-full">
              <div className="h-48 bg-tlg-stone/20 w-full shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-tlg-stone opacity-30 group-hover:scale-105 transition-transform duration-700"></div>
              </div>
              <div className="p-8 flex flex-col flex-1 bg-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-tlg-signatureGold mb-3">Global Mobility</span>
                <h3 className="text-xl font-serif text-tlg-midnight mb-3">Navigating the Canadian Express Entry System in 2024</h3>
                <p className="text-sm text-gray-600 font-light mb-8 flex-1">
                  A comprehensive breakdown of the latest CRS score trends and strategic pathways for skilled professionals seeking Canadian permanent residency.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">
                  Read Article <ArrowRight size={14} className="ml-2" />
                </div>
              </div>
            </Link>

            {/* Article 2 */}
            <Link href="/insights/dubai-real-estate-trends" className="group flex flex-col border border-tlg-stone hover:border-tlg-midnight transition-colors h-full">
              <div className="h-48 bg-tlg-stone/20 w-full shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-tlg-stone opacity-30 group-hover:scale-105 transition-transform duration-700"></div>
              </div>
              <div className="p-8 flex flex-col flex-1 bg-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-tlg-signatureGold mb-3">Real Estate</span>
                <h3 className="text-xl font-serif text-tlg-midnight mb-3">Dubai Commercial Real Estate: Q3 Market Analysis</h3>
                <p className="text-sm text-gray-600 font-light mb-8 flex-1">
                  Evaluating the surge in prime office space demand across the DIFC and Business Bay as international firms expand their Middle Eastern footprint.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">
                  Read Article <ArrowRight size={14} className="ml-2" />
                </div>
              </div>
            </Link>

            {/* Article 3 */}
            <Link href="/insights/hr-restructuring-guide" className="group flex flex-col border border-tlg-stone hover:border-tlg-midnight transition-colors h-full">
              <div className="h-48 bg-tlg-stone/20 w-full shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-tlg-stone opacity-30 group-hover:scale-105 transition-transform duration-700"></div>
              </div>
              <div className="p-8 flex flex-col flex-1 bg-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-tlg-signatureGold mb-3">HR Consulting</span>
                <h3 className="text-xl font-serif text-tlg-midnight mb-3">The Blueprint for Structured Corporate Restructuring</h3>
                <p className="text-sm text-gray-600 font-light mb-8 flex-1">
                  How to manage organisational change, preserve company culture, and retain critical talent during cross-border mergers and acquisitions.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">
                  Read Article <ArrowRight size={14} className="ml-2" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}
