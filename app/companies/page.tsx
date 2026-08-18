import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Companies",
  description: "Explore the six primary operating divisions of Triumphal Lifetime Group.",
};

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CompaniesDirectoryPage() {
  return (
    <main className="bg-white pt-32 pb-24">
      <section className="relative pt-16 pb-24 border-b border-tlg-stone bg-tlg-ivory">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl animate-reveal-up">
            <span className="text-tlg-signatureGold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Our Companies</span>
            <h1 className="text-4xl md:text-6xl font-serif text-tlg-midnight leading-[1.1] mb-8">
              The Group Ecosystem.
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Explore the six primary operating divisions of Triumphal Lifetime Group, delivering specialised expertise across diverse sectors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <Link href="/solutions/hr-consulting" className="group bg-tlg-ivory border border-tlg-stone p-12 flex flex-col hover:border-tlg-midnight transition-colors min-h-[400px]">
              <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-[0.2em] mb-6 block">01</span>
              <h3 className="text-3xl font-serif text-tlg-midnight mb-6">HR & Business Consulting</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-auto">
                Workforce engineering, executive search, and corporate governance for expanding enterprises.
              </p>
              <div className="mt-8 pt-6 border-t border-tlg-stone flex items-center text-xs font-bold uppercase tracking-widest text-tlg-midnight">
                View Division <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            <Link href="/solutions/real-estate" className="group bg-tlg-ivory border border-tlg-stone p-12 flex flex-col hover:border-tlg-midnight transition-colors min-h-[400px]">
              <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-[0.2em] mb-6 block">02</span>
              <h3 className="text-3xl font-serif text-tlg-midnight mb-6">Real Estate Advisory</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-auto">
                Strategic property acquisition planning and international facility management.
              </p>
              <div className="mt-8 pt-6 border-t border-tlg-stone flex items-center text-xs font-bold uppercase tracking-widest text-tlg-midnight">
                View Division <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            <Link href="/solutions/education" className="group bg-tlg-ivory border border-tlg-stone p-12 flex flex-col hover:border-tlg-midnight transition-colors min-h-[400px]">
              <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-[0.2em] mb-6 block">03</span>
              <h3 className="text-3xl font-serif text-tlg-midnight mb-6">Education Advisory</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-auto">
                Strategic academic planning and global institutional partnerships.
              </p>
              <div className="mt-8 pt-6 border-t border-tlg-stone flex items-center text-xs font-bold uppercase tracking-widest text-tlg-midnight">
                View Division <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            <Link href="/solutions/global-mobility" className="group bg-tlg-ivory border border-tlg-stone p-12 flex flex-col hover:border-tlg-midnight transition-colors min-h-[400px]">
              <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-[0.2em] mb-6 block">04</span>
              <h3 className="text-3xl font-serif text-tlg-midnight mb-6">Global Mobility</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-auto">
                Corporate relocation logistics and cross-border administrative processing.
              </p>
              <div className="mt-8 pt-6 border-t border-tlg-stone flex items-center text-xs font-bold uppercase tracking-widest text-tlg-midnight">
                View Division <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            <Link href="/solutions/digital-learning" className="group bg-tlg-ivory border border-tlg-stone p-12 flex flex-col hover:border-tlg-midnight transition-colors min-h-[400px]">
              <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-[0.2em] mb-6 block">05</span>
              <h3 className="text-3xl font-serif text-tlg-midnight mb-6">Digital Learning</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-auto">
                Scalable learning platforms and professional capability building.
              </p>
              <div className="mt-8 pt-6 border-t border-tlg-stone flex items-center text-xs font-bold uppercase tracking-widest text-tlg-midnight">
                View Division <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            <Link href="/solutions/technology" className="group bg-tlg-ivory border border-tlg-stone p-12 flex flex-col hover:border-tlg-midnight transition-colors min-h-[400px]">
              <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-[0.2em] mb-6 block">06</span>
              <h3 className="text-3xl font-serif text-tlg-midnight mb-6">Information Technology</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-auto">
                Enterprise systems integration and strategic digital transformation.
              </p>
              <div className="mt-8 pt-6 border-t border-tlg-stone flex items-center text-xs font-bold uppercase tracking-widest text-tlg-midnight">
                View Division <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
}
