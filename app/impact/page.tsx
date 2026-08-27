import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Social Impact",
 description: "Driving sustainable change through the Triumphal Lifetime Charity Foundation.",
};

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Heart } from "lucide-react";
import ReadingProgress from "@/components/ui/ReadingProgress";

export default function CharityFoundation() {
 return (
 <>
 <ReadingProgress />
 <main className="bg-white">
 
 {/* Cinematic Light Hero */}
 <section className="relative min-h-[85vh] w-full flex flex-col justify-end overflow-hidden bg-[#f4ece3] pt-32 pb-24">
 <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 animate-slow-zoom scale-105 opacity-30">
            <Image 
              src="/images/impact_hero.jpg" 
              alt="Impact" 
              fill 
              priority 
              sizes="100vw"
              className="object-cover" 
            />
          </div>
 <div className="absolute inset-0 bg-gradient-to-t from-[#f4ece3] via-[#f4ece3]/80 to-transparent"></div>
 </div>
 
 <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 relative z-10 text-center">
 <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-[0.2em] block mb-8 animate-reveal-up">Philanthropy & Social Impact</span>
  <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-tlg-midnight leading-[0.9] tracking-tight mb-8 animate-reveal-up-delayed">
  Supporting People.<br />
  <span className="italic font-normal text-gray-700">Strengthening Communities.</span>
  </h1>
  <p className="text-xl md:text-2xl text-gray-700 font-normal max-w-3xl mx-auto leading-relaxed animate-reveal-up-delayed mt-12">
  Triumphal Lifetime Charity Foundation supports community-focused initiatives aimed at improving opportunities for individuals and families. Our activities focus on practical assistance, education, humanitarian support and community development.
  </p>
  </div>
 </section>

 {/* Philosophy / Authority Quote */}
 <section className="py-24 md:py-32 bg-white relative border-b border-tlg-stone">
 <div className="max-w-[1200px] mx-auto px-6 text-center">
 <span className="text-gray-800 text-xs font-bold uppercase tracking-[0.2em] block mb-8">Our Commitment</span>
 <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight leading-[1.3]">
 "True luxury is the privilege to uplift others. We measure our corporate success not just by our global balance sheets, but by the generational impact we leave in our wake."
 </h2>
 </div>
 </section>

 {/* Asymmetric Impact Grid (Light Theme) */}
 <section className="py-32 bg-tlg-ivory relative">
 <div className="max-w-[1600px] mx-auto px-6 md:px-12">
 
 <div className="flex flex-col md:flex-row justify-between items-end mb-20">
 <h2 className="text-4xl md:text-6xl font-serif text-tlg-midnight">Our Strategic Priorities</h2>
 <p className="text-gray-700 font-normal max-w-sm mt-6 md:mt-0 leading-relaxed">As Triumphal Lifetime Charity Foundation grows, we aim to expand our community impact through carefully developed initiatives in these areas.</p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
 
 {/* Feature Block 1 (Large) */}
 <div className="md:col-span-8 group relative overflow-hidden bg-white shadow-sm border border-tlg-stone">
 <div className="h-[400px] relative overflow-hidden">
 <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[1.5s]" style={{ backgroundImage: "url('/images/impact_edu.jpg')" }}></div>
 </div>
 <div className="p-12 border-t border-tlg-stone bg-white">
 <span className="text-tlg-signatureGold text-[11px] uppercase font-bold tracking-[0.2em] mb-4 block">01</span>
  <h3 className="text-3xl font-serif text-tlg-midnight mb-6">Educational Infrastructure</h3>
  <p className="text-gray-800 font-normal leading-relaxed mb-8 max-w-2xl">
  We believe access to quality education should not be constrained by geography. Our corporate giving initiative aims to support the development of learning facilities, provide digital equipment, and sponsor scholarships for students in developing regions.
  </p>
  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-semibold text-tlg-midnight">
 <li className="flex items-center gap-3"><Heart size={16} className="text-tlg-signatureGold"/> Scholarship Funds</li>
 <li className="flex items-center gap-3"><Heart size={16} className="text-tlg-signatureGold"/> School Construction</li>
 <li className="flex items-center gap-3"><Heart size={16} className="text-tlg-signatureGold"/> Technology Grants</li>
 <li className="flex items-center gap-3"><Heart size={16} className="text-tlg-signatureGold"/> Teacher Training</li>
 </ul>
 </div>
 </div>

 {/* Feature Block 2 (Small) */}
 <div className="md:col-span-4 group relative overflow-hidden bg-[#f4ece3] shadow-sm border border-tlg-stone flex flex-col">
 <div className="h-[300px] relative overflow-hidden shrink-0">
 <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[1.5s]" style={{ backgroundImage: "url('/images/impact_health.jpg')" }}></div>
 </div>
 <div className="p-10 flex-1 flex flex-col justify-center border-t border-tlg-stone bg-white">
 <span className="text-tlg-signatureGold text-[11px] uppercase font-bold tracking-[0.2em] mb-4 block">02</span>
  <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Healthcare Access</h3>
  <p className="text-gray-800 font-normal leading-relaxed text-sm">
  We are dedicated to supporting community health initiatives and aim to provide relief and resources to underserved communities across our operational regions.
  </p>
 </div>
 </div>

 {/* Feature Block 3 (Small) */}
 <div className="md:col-span-5 group relative overflow-hidden bg-white shadow-sm border border-tlg-stone flex flex-col">
 <div className="p-10 flex-1 flex flex-col justify-center">
 <span className="text-tlg-signatureGold text-[11px] uppercase font-bold tracking-[0.2em] mb-4 block">03</span>
  <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Economic Empowerment</h3>
  <p className="text-gray-800 font-normal leading-relaxed text-sm mb-8">
  We aim to support local entrepreneurs through corporate grants and mentorship initiatives, with the goal of helping small businesses become sustainable community pillars.
  </p>
 <Link href="/contact" className="text-xs uppercase tracking-[0.15em] font-bold text-tlg-midnight hover:text-tlg-signatureGold transition-colors flex items-center group-hover:translate-x-2 w-max">
 Partner With Us <ArrowRight size={14} className="ml-2"/>
 </Link>
 </div>
 </div>

 {/* Feature Block 4 (Medium) */}
 <div className="md:col-span-7 group relative overflow-hidden bg-white shadow-sm border border-tlg-stone flex items-center">
 <div className="w-1/2 h-full absolute right-0 top-0 overflow-hidden hidden md:block">
 <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[1.5s]" style={{ backgroundImage: "url('/images/impact_disaster.jpg')" }}></div>
 </div>
 <div className="w-full md:w-1/2 p-10 md:p-12 relative z-10 bg-white md:bg-white/95 backdrop-blur-sm h-full flex flex-col justify-center border-r md:border-none border-tlg-stone">
 <span className="text-tlg-signatureGold text-[11px] uppercase font-bold tracking-[0.2em] mb-4 block">04</span>
  <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Disaster Relief</h3>
  <p className="text-gray-800 font-normal leading-relaxed text-sm">
  Our foundation is committed to coordinating resources in response to regional crises. We aim to leverage our logistics network to facilitate aid where it is most urgently needed.
  </p>
 </div>
 </div>

 </div>
 <div className="mt-12 text-sm text-gray-700 italic max-w-4xl border-l-2 border-tlg-signatureGold pl-4">
 These initiatives represent the Foundation’s future strategic priorities and development goals. Implementation will depend on available funding, regulatory requirements, partnerships and programme feasibility.
 </div>
 </div>
 </section>

 {/* Action Section */}
 <section className="py-32 bg-tlg-ivory relative flex flex-col items-center justify-center text-center">
 <div className="max-w-3xl px-6">
 <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-[0.2em] block mb-6">Take The Next Step</span>
 <h2 className="text-4xl md:text-5xl font-serif text-tlg-midnight mb-8">Join Our Global Mission</h2>
 <p className="text-gray-800 font-normal leading-relaxed mb-12 text-lg">
 We welcome strategic partnerships from corporations, NGOs, and individual philanthropists who share our vision of structured, sustainable giving.
 </p>
 <div className="flex flex-col sm:flex-row justify-center gap-6">
 <Link href="/contact" className="inline-flex justify-center items-center bg-tlg-midnight text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-tlg-signatureGold transition-colors">
 Partner With Us
 </Link>
 <Link href="?book=true" className="inline-flex justify-center items-center bg-transparent border border-tlg-stone text-tlg-midnight px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:border-tlg-midnight transition-colors">
 Request A Grant
 </Link>
 </div>
 </div>
 </section>

 </main>
 </>
 );
}
