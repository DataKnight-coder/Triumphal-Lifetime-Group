import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Triumphal Lifetime Group - HR, Real Estate, Education, Mobility & Technology",
 description: "Triumphal Lifetime Group is an integrated advisory ecosystem operating across Nigeria, UAE, and Canada. We connect expertise in HR consulting, real estate investment, education advisory, global mobility, digital learning, and information technology.",
};

import Hero from "@/components/home/Hero";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import MagneticButton from "@/components/animations/MagneticButton";
import ParallaxImage from "@/components/animations/ParallaxImage";
import TextReveal from "@/components/animations/TextReveal";
import { getGlobalSettings } from "@/lib/wordpress/client";

export default async function Home() {
 const settings = await getGlobalSettings();
 return (
 <main className="bg-white">
 {/* 02 - Light Editorial Hero */}
 <Hero />
 
 {/* Who We Are - Brand Statement */}
 <section className="py-24 md:py-32 bg-white relative">
 <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
 <Reveal><span className="text-tlg-signatureGold text-xs uppercase font-bold tracking-[0.2em] mb-4 block">Who We Are</span></Reveal>
 <TextReveal 
   text="Specialist Expertise. One Group." 
   className="text-3xl md:text-5xl lg:text-6xl font-serif text-tlg-midnight leading-[1.1] mb-8" 
 />
 <Reveal delay={0.1}><p className="text-lg md:text-xl text-gray-700 font-normal max-w-3xl mx-auto leading-relaxed mb-10">
  Triumphal Lifetime Group is a diversified business group providing professional services across human resources, business consulting, real estate, education, global mobility, digital learning and technology. Through our businesses and specialist teams, we support individuals and organisations across Nigeria, the United Arab Emirates and Canada.
 </p></Reveal>
 <Reveal delay={0.15}>
 <div className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-widest">
  <span className="px-5 py-2 border border-tlg-stone rounded-full text-tlg-midnight">HR & Business Consulting</span>
  <span className="px-5 py-2 border border-tlg-stone rounded-full text-tlg-midnight">Real Estate Advisory</span>
  <span className="px-5 py-2 border border-tlg-stone rounded-full text-tlg-midnight">Education Advisory</span>
  <span className="px-5 py-2 border border-tlg-stone rounded-full text-tlg-midnight">Global Mobility</span>
  <span className="px-5 py-2 border border-tlg-stone rounded-full text-tlg-midnight">Digital Learning</span>
  <span className="px-5 py-2 border border-tlg-stone rounded-full text-tlg-midnight">Information Technology</span>
 </div>
 </Reveal>
 </div>
 </section>

 {/* 03 - Triumphal Ecosystem */}
 <section className="py-24 md:py-32 bg-tlg-emerald relative">
 <div className="max-w-[1600px] mx-auto px-6 md:px-12">
 <div className="mb-16 flex flex-col items-center text-center">
 <Reveal>
 <span className="text-tlg-signatureGold text-xs uppercase font-bold tracking-[0.2em] mb-4 block">Our Businesses</span>
 </Reveal>
 <TextReveal 
   text="Our Businesses" 
   className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6" 
 />
 <Reveal delay={0.1}>
 <p className="text-white/90 font-normal max-w-2xl mx-auto text-lg">Our businesses provide specialist services while sharing a common commitment to professionalism, responsible growth and long-term client relationships.</p>
 </Reveal>
 </div>
 
 <div className="md:hidden text-center text-white text-[11px] uppercase tracking-widest mt-[-20px] mb-8 flex justify-center items-center gap-2">Swipe to explore <ArrowRight size={10} /></div>
 <Reveal delay={0.2} className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 -mx-6 px-6 md:mx-0 md:px-0">

 {/* HR */}
 <Link href="/solutions/hr-consulting" data-cursor="card" data-cursor-text="VIEW" className="shrink-0 w-[82vw] snap-center md:w-auto group bg-tlg-ivory p-8 rounded-[24px] hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full overflow-hidden relative">
 <span className="absolute top-8 left-8 bg-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-tlg-midnight shadow-sm z-10">Consulting</span>
 <div className="relative h-48 w-full rounded-[16px] overflow-hidden mb-8 mt-12">
 <Image src="/visuals/hr.jpg" alt="HR" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
 </div>
 <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Human Resources & Business Consulting</h3>
 <p className="text-gray-700 font-normal text-sm leading-relaxed mb-8 flex-1">
 Building stronger organisations through HR advisory, organisational development, and workforce strategy.
 </p>
 <span className="text-xs font-bold uppercase tracking-[0.15em] text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">
 Explore Division <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
 </span>
 </Link>
 
 {/* Real Estate */}
 <Link href="/solutions/real-estate" data-cursor="card" data-cursor-text="VIEW" className="shrink-0 w-[82vw] snap-center md:w-auto group bg-tlg-ivory p-8 rounded-[24px] hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full overflow-hidden relative">
 <span className="absolute top-8 left-8 bg-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-tlg-midnight shadow-sm z-10">Real Estate</span>
 <div className="relative h-48 w-full rounded-[16px] overflow-hidden mb-8 mt-12">
 <Image src="/visuals/real-estate.jpg" alt="Real Estate" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
 </div>
 <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Real Estate Advisory</h3>
 <p className="text-gray-700 font-normal text-sm leading-relaxed mb-8 flex-1">
 Supporting clients with informed property sourcing, investment support, and real estate advisory.
 </p>
 <span className="text-xs font-bold uppercase tracking-[0.15em] text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">
 Explore Division <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
 </span>
 </Link>

 {/* Education */}
 <Link href="/solutions/education" data-cursor="card" data-cursor-text="VIEW" className="shrink-0 w-[82vw] snap-center md:w-auto group bg-tlg-ivory p-8 rounded-[24px] hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full overflow-hidden relative">
 <span className="absolute top-8 left-8 bg-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-tlg-midnight shadow-sm z-10">Education</span>
 <div className="relative h-48 w-full rounded-[16px] overflow-hidden mb-8 mt-12">
 <Image src="/visuals/education.jpg" alt="Education" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
 </div>
 <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Education Advisory</h3>
 <p className="text-gray-700 font-normal text-sm leading-relaxed mb-8 flex-1">
 Helping students and professionals identify educational opportunities aligned with their global goals.
 </p>
 <span className="text-xs font-bold uppercase tracking-[0.15em] text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">
 Explore Division <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
 </span>
 </Link>

 {/* Global Mobility */}
 <Link href="/solutions/global-mobility" data-cursor="card" data-cursor-text="VIEW" className="shrink-0 w-[82vw] snap-center md:w-auto group bg-tlg-ivory p-8 rounded-[24px] hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full overflow-hidden relative">
 <span className="absolute top-8 left-8 bg-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-tlg-midnight shadow-sm z-10">Mobility</span>
 <div className="relative h-48 w-full rounded-[16px] overflow-hidden mb-8 mt-12">
 <Image src="/visuals/global-mobility.jpg" alt="Mobility" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
 </div>
 <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Global Mobility & Immigration</h3>
 <p className="text-gray-700 font-normal text-sm leading-relaxed mb-8 flex-1">
 Providing structured administrative and advisory support for international mobility.
 </p>
 <span className="text-xs font-bold uppercase tracking-[0.15em] text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">
 Explore Division <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
 </span>
 </Link>

 {/* Digital Learning */}
 <Link href="/solutions/digital-learning" data-cursor="card" data-cursor-text="VIEW" className="shrink-0 w-[82vw] snap-center md:w-auto group bg-tlg-ivory p-8 rounded-[24px] hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full overflow-hidden relative">
 <span className="absolute top-8 left-8 bg-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-tlg-midnight shadow-sm z-10">Digital</span>
 <div className="relative h-48 w-full rounded-[16px] overflow-hidden mb-8 mt-12">
 <Image src="/visuals/digital-learning.jpg" alt="Digital Learning" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
 </div>
 <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Digital Products & Learning</h3>
 <p className="text-gray-700 font-normal text-sm leading-relaxed mb-8 flex-1">
 Creating practical digital resources and professional development programmes.
 </p>
 <span className="text-xs font-bold uppercase tracking-[0.15em] text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">
 Explore Division <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
 </span>
 </Link>

 {/* IT */}
 <Link href="/solutions/technology" data-cursor="card" data-cursor-text="VIEW" className="shrink-0 w-[82vw] snap-center md:w-auto group bg-tlg-ivory p-8 rounded-[24px] hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full overflow-hidden relative border border-tlg-stone">
   <span className="absolute top-8 left-8 bg-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-tlg-midnight shadow-sm z-10 border border-tlg-stone">Technology</span>
   <div className="relative h-48 w-full rounded-[16px] overflow-hidden mb-8 mt-12">
      <Image src="/visuals/technology.jpg" alt="IT" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
   </div>
   <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Information Technology</h3>
   <p className="text-gray-700 font-normal text-sm leading-relaxed mb-8 flex-1">
     Supporting businesses with technology solutions designed to improve digital operations.
   </p>
   <span className="text-xs font-bold uppercase tracking-widest text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">
     Explore Division <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
   </span>
 </Link>

 {/* Charity Foundation */}
 <Link href="/impact" data-cursor="card" data-cursor-text="VIEW" className="shrink-0 w-[82vw] snap-center md:w-auto group bg-tlg-ivory p-8 rounded-[24px] hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full overflow-hidden relative border border-tlg-stone">
   <span className="absolute top-8 left-8 bg-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-tlg-midnight shadow-sm z-10 border border-tlg-stone">Philanthropy</span>
   <div className="relative h-48 w-full rounded-[16px] overflow-hidden mb-8 mt-12">
      <Image src="/images/impact_hero.jpg" alt="Charity" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
   </div>
   <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Charity Foundation</h3>
   <p className="text-gray-700 font-normal text-sm leading-relaxed mb-8 flex-1">
     Supporting communities through education, humanitarian assistance and community-development initiatives.
   </p>
   <span className="text-xs font-bold uppercase tracking-widest text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">
     Explore Foundation <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
   </span>
 </Link>
 
 </Reveal>
 </div>
 </section>

 {/* Panoramic rounded image */}
 <section className="pb-24 md:pb-32 bg-white relative">
 <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-24 md:pt-32">
 <ParallaxImage 
 src="/visuals/homepage_hero.jpg" 
 alt="Triumphal Lifetime Group" 
 className="h-[300px] md:h-[500px] w-full rounded-[40px] shadow-2xl" 
 />
 </div>
 </section>

 {/* 04 - What Makes TLG Different */}
 <section className="py-24 md:py-32 bg-tlg-ivory">
 <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
 <div className="lg:w-1/3">
 <span className="text-tlg-signatureGold text-xs uppercase font-bold tracking-[0.2em] mb-4 block">The TLG Difference</span>
 <TextReveal text="Specialist Expertise. One Group." className="text-3xl md:text-5xl font-serif text-tlg-midnight mb-6 leading-tight" />
 <p className="text-gray-700 font-normal leading-relaxed mb-8">
 We move beyond isolated services to provide professional support across multiple sectors. Our coordinated approach ensures that every strategy aligns with your overarching goals.
 </p>
 <MagneticButton as={Link} href="/about" className="border border-tlg-midnight text-tlg-midnight px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] rounded-full">
 Our Story
 </MagneticButton>
 </div>
 
 <div className="lg:w-2/3 flex flex-col">
 <div className="md:hidden text-left text-tlg-midnight/40 text-[11px] uppercase tracking-widest mb-4 flex items-center gap-2">Swipe to read <ArrowRight size={10} /></div>
 <div className="w-full flex md:grid md:grid-cols-2 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 -mx-6 px-6 md:mx-0 md:px-0">
 <div className="shrink-0 w-[85vw] snap-center md:w-auto bg-white p-8 md:p-10 rounded-[24px] shadow-sm flex flex-col justify-center">
 <h4 className="text-xl font-serif text-tlg-midnight mb-3">Global Reach</h4>
 <p className="text-sm text-gray-700 font-normal leading-relaxed">Operating across Nigeria, UAE, and Canada, giving you access to strategic international markets.</p>
 </div>
 <div className="shrink-0 w-[85vw] snap-center md:w-auto bg-white p-8 md:p-10 rounded-[24px] shadow-sm flex flex-col justify-center md:translate-y-8">
 <h4 className="text-xl font-serif text-tlg-midnight mb-3">Coordinated Support</h4>
 <p className="text-sm text-gray-700 font-normal leading-relaxed">Access complementary professional services - from real estate to IT - through one connected group.</p>
 </div>
 <div className="shrink-0 w-[85vw] snap-center md:w-auto bg-white p-8 md:p-10 rounded-[24px] shadow-sm flex flex-col justify-center">
 <h4 className="text-xl font-serif text-tlg-midnight mb-3">Community Impact</h4>
 <p className="text-sm text-gray-700 font-normal leading-relaxed">Committed to sustainable business practices and supporting education through our Charity Foundation.</p>
 </div>
 <div className="shrink-0 w-[85vw] snap-center md:w-auto bg-white p-8 md:p-10 rounded-[24px] shadow-sm flex flex-col justify-center md:translate-y-8">
 <h4 className="text-xl font-serif text-tlg-midnight mb-3">Measurable Results</h4>
 <p className="text-sm text-gray-700 font-normal leading-relaxed">Our structured approach prioritises clarity, professionalism, and delivering long-term value.</p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* 05 - Our Approach */}
 <section className="py-24 md:py-32 bg-white">
 <div className="max-w-[1200px] mx-auto px-6 md:px-12">
 <div className="text-center mb-16">
 <span className="text-tlg-signatureGold text-xs uppercase font-bold tracking-[0.2em] mb-4 block">Methodology</span>
 <TextReveal text="Our Approach" className="text-3xl md:text-5xl font-serif text-tlg-midnight" />
 </div>
 
 <div className="flex flex-col">
 <div className="flex flex-col md:flex-row gap-8 items-start py-8 border-t border-tlg-signatureGold/30 hover:bg-tlg-ivory transition-colors px-6 rounded-[24px]">
 <span className="text-4xl font-serif text-tlg-signatureGold w-16 shrink-0">01</span>
 <div>
 <h4 className="text-2xl font-serif text-tlg-midnight mb-3">Understand</h4>
 <p className="text-gray-700 font-normal leading-relaxed">We begin by understanding your goals, challenges and desired outcomes.</p>
 </div>
 </div>
 
 <div className="flex flex-col md:flex-row gap-8 items-start py-8 border-t border-tlg-signatureGold/30 hover:bg-tlg-ivory transition-colors px-6 rounded-[24px]">
 <span className="text-4xl font-serif text-tlg-signatureGold w-16 shrink-0">02</span>
 <div>
 <h4 className="text-2xl font-serif text-tlg-midnight mb-3">Strategise</h4>
 <p className="text-gray-700 font-normal leading-relaxed">We develop a practical pathway and tailored framework appropriate to your circumstances.</p>
 </div>
 </div>
 
 <div className="flex flex-col md:flex-row gap-8 items-start py-8 border-t border-tlg-signatureGold/30 hover:bg-tlg-ivory transition-colors px-6 rounded-[24px]">
 <span className="text-4xl font-serif text-tlg-signatureGold w-16 shrink-0">03</span>
 <div>
 <h4 className="text-2xl font-serif text-tlg-midnight mb-3">Execute</h4>
 <p className="text-gray-700 font-normal leading-relaxed">Our specialists support seamless implementation with clearly defined responsibilities.</p>
 </div>
 </div>
 
 <div className="flex flex-col md:flex-row gap-8 items-start py-8 border-t border-tlg-signatureGold/30 hover:bg-tlg-ivory transition-colors px-6 rounded-[24px]">
 <span className="text-4xl font-serif text-tlg-signatureGold w-16 shrink-0">04</span>
 <div>
 <h4 className="text-2xl font-serif text-tlg-midnight mb-3">Review</h4>
 <p className="text-gray-700 font-normal leading-relaxed">We evaluate progress and continuously identify opportunities for improvement.</p>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* 09 - Why TLG / Proof Section */}
 <section className="py-24 md:py-32 bg-white">
 <div className="max-w-[1600px] mx-auto px-6 md:px-12">
 <div className="text-center mb-16">
  <Reveal><span className="text-tlg-signatureGold text-xs uppercase font-bold tracking-[0.2em] mb-4 block">Our Reach</span></Reveal>
  <TextReveal text="Operating Where Opportunity Exists" className="text-3xl md:text-5xl font-serif text-tlg-midnight" />
 </div>
 <Reveal delay={0.1}>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Nigeria */}
  <div className="bg-tlg-ivory border border-tlg-stone rounded-[24px] p-10 flex flex-col">
  <span className="text-tlg-signatureGold text-xs uppercase font-bold tracking-widest mb-4">Nigeria</span>
  <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Abuja HQ</h3>
  <p className="text-sm text-gray-700 leading-relaxed mb-6">Our home market and operational headquarters. We deliver HR consulting, real estate advisory, talent placement, and corporate training across Abuja and key Nigerian cities.</p>
  <div className="mt-auto pt-6 border-t border-tlg-stone">
   <p className="text-xs text-gray-700 uppercase tracking-widest font-bold">Abuja, Nigeria</p>
  </div>
  </div>
  {/* UAE */}
  <div className="bg-tlg-ivory border border-tlg-stone rounded-[24px] p-10 flex flex-col">
  <span className="text-tlg-signatureGold text-xs uppercase font-bold tracking-widest mb-4">UAE</span>
  <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Dubai Office</h3>
  <p className="text-sm text-gray-700 leading-relaxed mb-6">Our real estate hub. We support clients exploring property opportunities and coordinate transactions with appropriately licensed professionals in the UAE.</p>
  <div className="mt-auto pt-6 border-t border-tlg-stone">
  <p className="text-xs text-gray-700 uppercase tracking-widest font-bold">+971 55 199 5483</p>
  </div>
  </div>
  {/* Canada */}
  <div className="bg-tlg-ivory border border-tlg-stone rounded-[24px] p-10 flex flex-col">
  <span className="text-tlg-signatureGold text-xs uppercase font-bold tracking-widest mb-4">Canada</span>
  <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Canadian Office</h3>
  <p className="text-sm text-gray-700 leading-relaxed mb-6">Supporting education advisory, global mobility, and professional relocation for clients targeting Canadian universities, work permits, and study visas across multiple provinces.</p>
  <div className="mt-auto pt-6 border-t border-tlg-stone">
  {settings.primary_phone && <p className="text-xs text-gray-700 uppercase tracking-widest font-bold">{settings.primary_phone}</p>}
  </div>
  </div>
 </div>
 </Reveal>
 </div>
 </section>

 {/* 07 - Final CTA */}
 <section className="py-32 bg-tlg-midnight relative overflow-hidden">
 {/* Subtle Emerald glow */}
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tlg-emerald opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
 
 <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center relative z-10">
 <span className="text-tlg-signatureGold text-xs uppercase font-bold tracking-[0.2em] mb-6 block">Ready to Begin?</span>
 <TextReveal text="Success That Extends Beyond Business." className="text-4xl md:text-5xl lg:text-7xl font-serif mb-10 text-white leading-tight" />
 <p className="text-lg text-white/90 font-normal mb-12 max-w-xl mx-auto">
 Whether you are representing a business, pursuing an international opportunity, or exploring one of our specialist services, our team is ready to understand your goals.
 </p>
 <MagneticButton as={Link} href="?book=true" className="bg-white text-tlg-midnight px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] rounded-full">
 Book a Consultation
 </MagneticButton>
 </div>
 </section>

 </main>
 );
}
