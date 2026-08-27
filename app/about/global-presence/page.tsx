import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Global Presence",
 description: "Strategic proximity connecting talent and opportunity across Nigeria, the UAE, and Canada.",
};

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function GlobalPresencePage() {
 return (
 <main className="bg-white pt-32 pb-24">
 <section className="relative pt-16 pb-24 border-b border-tlg-stone bg-tlg-ivory">
 <div className="max-w-[1200px] mx-auto px-6 md:px-12">
 <Link href="/about" className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-gray-800 hover:text-tlg-midnight transition-colors mb-12">
 <ArrowRight size={14} className="mr-2 rotate-180" /> Back to About
 </Link>
 
 <div className="max-w-4xl animate-reveal-up">
 <span className="text-tlg-signatureGold text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Global Presence</span>
 <h1 className="text-4xl md:text-6xl font-serif text-tlg-midnight leading-[1.1] mb-8">
 Strategic Proximity.
 </h1>
 <p className="text-xl text-gray-800 font-normal leading-relaxed">
 Operating across three dynamic regions, we serve as a vital bridge for corporate expansion, education, and international investment.
 </p>
 </div>
 </div>
 </section>

 <section className="py-24">
 <div className="max-w-[1200px] mx-auto px-6 md:px-12">
 
 <div className="space-y-24">
  {/* Nigeria */}
  <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
  <div className="md:col-span-5 relative aspect-square rounded-[24px] overflow-hidden p-12 flex flex-col justify-end group">
  <Image src="/visuals/global-mobility.jpg" alt="Nigeria" fill className="object-cover group-hover:scale-105 transition-transform duration-1000 z-0" />
  <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/40 to-transparent z-10" />
  <div className="relative z-20 flex flex-col h-full">
  <span className="text-4xl font-serif text-white mb-auto">01</span>
  <h3 className="text-4xl font-serif text-white mb-2">Nigeria</h3>
  <p className="text-xs uppercase font-bold tracking-widest text-tlg-signatureGold">Group/Regional Operations</p>
  </div>
  </div>
  <div className="md:col-span-7 md:pl-12">
  <h4 className="text-2xl font-serif text-tlg-midnight mb-6">Group & Regional Operations</h4>
  <p className="text-gray-800 font-normal leading-relaxed mb-6">
  Nigeria represents one of the world's most dynamic emerging markets. Our extensive local expertise allows us to guide foreign investment, manage complex HR ecosystems, and facilitate global mobility out of West Africa.
  </p>
  <Link href="/contact" className="text-xs font-bold uppercase tracking-widest text-tlg-midnight hover:text-tlg-signatureGold transition-colors inline-flex items-center">
  Contact Nigeria <ArrowRight size={14} className="ml-2" />
  </Link>
  </div>
  </div>

  {/* UAE */}
  <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
  <div className="md:col-span-7 md:pr-12 md:order-1 order-2">
  <h4 className="text-2xl font-serif text-tlg-midnight mb-6">UAE Operations</h4>
  <p className="text-gray-800 font-normal leading-relaxed mb-6">
  Our UAE presence supports clients with consulting, real estate advisory, and professional services. It serves as a primary access point for individuals and organisations establishing a footprint in the region.
  </p>
  <Link href="/contact" className="text-xs font-bold uppercase tracking-widest text-tlg-midnight hover:text-tlg-signatureGold transition-colors inline-flex items-center">
  Contact UAE <ArrowRight size={14} className="ml-2" />
  </Link>
  </div>
  <div className="md:col-span-5 relative aspect-square rounded-[24px] overflow-hidden p-12 flex flex-col justify-end md:order-2 order-1 group">
  <Image src="/visuals/real-estate.jpg" alt="UAE" fill className="object-cover group-hover:scale-105 transition-transform duration-1000 z-0" />
  <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/40 to-transparent z-10" />
  <div className="relative z-20 flex flex-col h-full">
  <span className="text-4xl font-serif text-white mb-auto">02</span>
  <h3 className="text-4xl font-serif text-white mb-2">United Arab Emirates</h3>
  <p className="text-xs uppercase font-bold tracking-widest text-tlg-signatureGold">UAE Operations</p>
  </div>
  </div>
  </div>

  {/* Canada */}
  <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
  <div className="md:col-span-5 relative aspect-square rounded-[24px] overflow-hidden p-12 flex flex-col justify-end group">
  <Image src="/visuals/education.jpg" alt="Canada" fill className="object-cover group-hover:scale-105 transition-transform duration-1000 z-0" />
  <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/40 to-transparent z-10" />
  <div className="relative z-20 flex flex-col h-full">
  <span className="text-4xl font-serif text-white mb-auto">03</span>
  <h3 className="text-4xl font-serif text-white mb-2">Canada</h3>
  <p className="text-xs uppercase font-bold tracking-widest text-tlg-signatureGold">Canadian Operations</p>
  </div>
  </div>
  <div className="md:col-span-7 md:pl-12">
  <h4 className="text-2xl font-serif text-tlg-midnight mb-6">Canadian Operations</h4>
  <p className="text-gray-800 font-normal leading-relaxed mb-6">
  Our North American operations facilitate educational advisory, professional support, and administrative coordination, connecting international talent with Canadian opportunities.
  </p>
  <Link href="/contact" className="text-xs font-bold uppercase tracking-widest text-tlg-midnight hover:text-tlg-signatureGold transition-colors inline-flex items-center">
  Contact Canada <ArrowRight size={14} className="ml-2" />
  </Link>
  </div>
  </div>

 </div>
 </div>
 </section>
 </main>
 );
}
