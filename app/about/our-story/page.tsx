import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Our Story",
 description: "From a localized advisory firm to an integrated global group.",
};

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OurStoryPage() {
 return (
 <main className="bg-white pt-32 pb-24">
 <section className="relative pt-16 pb-24 border-b border-tlg-stone bg-tlg-ivory">
 <div className="max-w-[1200px] mx-auto px-6 md:px-12">
 <Link href="/about" className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-gray-800 hover:text-tlg-midnight transition-colors mb-12">
 <ArrowRight size={14} className="mr-2 rotate-180" /> Back to About
 </Link>
 
 <div className="max-w-4xl animate-reveal-up">
 <span className="text-tlg-signatureGold text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Our Story</span>
 <h1 className="text-4xl md:text-6xl font-serif text-tlg-midnight leading-[1.1] mb-8">
 A History of Growth.
 </h1>
 <p className="text-xl text-gray-800 font-normal leading-relaxed">
 From localized consulting to an integrated global group.
 </p>
 </div>
 </div>
 </section>

 <section className="py-24">
 <div className="max-w-[800px] mx-auto px-6 md:px-12">
 
 <div className="relative border-l border-tlg-stone pl-10 md:pl-16 py-8 space-y-24">
 
 <div className="relative">
 <div className="absolute -left-[45px] md:-left-[69px] top-1 w-4 h-4 rounded-full bg-tlg-signatureGold border-4 border-white shadow-sm"></div>
 <span className="text-tlg-signatureGold font-bold text-sm tracking-widest uppercase mb-2 block">The Beginning</span>
 <h3 className="text-3xl font-serif text-tlg-midnight mb-4">Foundation</h3>
 <p className="text-gray-800 font-normal leading-relaxed">
 Triumphal Lifetime was established with a singular vision: to bridge the gap between human capital potential and corporate execution. Operating initially as a boutique advisory firm, we built a reputation for meticulous recruitment and organisational design.
 </p>
 </div>

 <div className="relative">
 <div className="absolute -left-[45px] md:-left-[69px] top-1 w-4 h-4 rounded-full bg-tlg-signatureGold border-4 border-white shadow-sm"></div>
 <span className="text-tlg-signatureGold font-bold text-sm tracking-widest uppercase mb-2 block">Expansion</span>
 <h3 className="text-3xl font-serif text-tlg-midnight mb-4">Market Diversification</h3>
 <p className="text-gray-800 font-normal leading-relaxed">
 As our clients expanded, their needs evolved. Recognising that modern businesses require integrated solutions, we launched specialized divisions in Real Estate Advisory, Information Technology, and Digital Learning—transforming from a single consultancy into a diversified Group.
 </p>
 </div>

 <div className="relative">
 <div className="absolute -left-[45px] md:-left-[69px] top-1 w-4 h-4 rounded-full bg-tlg-signatureGold border-4 border-white shadow-sm"></div>
 <span className="text-tlg-signatureGold font-bold text-sm tracking-widest uppercase mb-2 block">Global Reach</span>
 <h3 className="text-3xl font-serif text-tlg-midnight mb-4">International Horizons</h3>
 <p className="text-gray-800 font-normal leading-relaxed">
 To better serve our clients traversing international borders, we established strategic footholds in the UAE and Canada. This enabled the launch of our Global Mobility and Education Advisory divisions, completing the comprehensive Triumphal Lifetime ecosystem we operate today.
 </p>
 </div>

 </div>

 </div>
 </section>
 </main>
 );
}
