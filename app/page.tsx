import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Triumphal Lifetime Group connects expertise across HR, Real Estate, Education, Global Mobility, and Technology.",
};

import Hero from "@/components/home/Hero";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import ParallaxImage from "@/components/animations/ParallaxImage";

export default function Home() {
  return (
    <main className="bg-white">
      {/* 02 - Light Editorial Hero */}
      <Hero />
      
      {/* Quick Trust Indicators */}
      <section className="bg-tlg-ivory py-8 border-y border-tlg-stone">
        <Reveal delay={0.2}>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 divide-y md:divide-y-0 md:divide-x divide-tlg-stone/50">
          <div className="flex-1 flex flex-col items-center text-center pt-4 md:pt-0 w-full">
            <span className="text-2xl md:text-3xl font-serif text-tlg-midnight">3</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mt-2">Global Markets</span>
          </div>
          <div className="flex-1 flex flex-col items-center text-center pt-4 md:pt-0 w-full">
            <span className="text-2xl md:text-3xl font-serif text-tlg-midnight">6</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mt-2">Specialist Divisions</span>
          </div>
          <div className="flex-1 flex flex-col items-center text-center pt-4 md:pt-0 w-full">
            <span className="text-2xl md:text-3xl font-serif text-tlg-midnight">Integrated</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mt-2">Advisory Ecosystem</span>
          </div>
        </div>
      
        </Reveal>
      </section>

      {/* Who We Are - Brand Statement */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <Reveal><h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-tlg-midnight leading-[1.1] mb-8">
            Modern challenges rarely fit into one category. That is why Triumphal Lifetime Group brings complementary expertise together within one business ecosystem.
          </h2></Reveal>
          <Reveal delay={0.1}><p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Whether you are building a stronger organisation, exploring property opportunities, pursuing international education, or adopting technology, our specialist teams provide structured support from beginning to execution.
          </p></Reveal>
        </div>
      </section>

      {/* 03 - Triumphal Ecosystem */}
      <section className="py-24 md:py-32 bg-tlg-emerald relative">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="mb-16 flex flex-col items-center text-center">
            <Reveal>
            <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-[0.2em] mb-4 block">Our Ecosystem</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">An Integrated Advantage</h2>
            <p className="text-white/70 font-light max-w-2xl mx-auto text-lg">Explore our specialized divisions, each built to deliver premium advisory and operational support.</p>
          </Reveal>
          </div>
          
          <div className="md:hidden text-center text-white/50 text-[10px] uppercase tracking-widest mt-[-20px] mb-8 flex justify-center items-center gap-2">Swipe to explore <ArrowRight size={10} /></div>
          <Reveal delay={0.2} className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 -mx-6 px-6 md:mx-0 md:px-0">

            {/* HR */}
            <Link href="/solutions/hr-consulting" data-cursor="card" data-cursor-text="VIEW" className="shrink-0 w-[82vw] snap-center md:w-auto group bg-tlg-ivory p-8 rounded-[24px] hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full overflow-hidden relative">
              <span className="absolute top-8 left-8 bg-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-tlg-midnight shadow-sm z-10">Consulting</span>
              <div className="relative h-48 w-full rounded-[16px] overflow-hidden mb-8 mt-12">
                 <Image src="/visuals/hr.jpg" alt="HR" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Human Resources & Business Consulting</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-8 flex-1">
                Building stronger organisations through HR advisory, organisational development, and workforce strategy.
              </p>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">
                Explore Division <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
            
            {/* Real Estate */}
            <Link href="/solutions/real-estate" data-cursor="card" data-cursor-text="VIEW" className="shrink-0 w-[82vw] snap-center md:w-auto group bg-tlg-ivory p-8 rounded-[24px] hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full overflow-hidden relative">
              <span className="absolute top-8 left-8 bg-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-tlg-midnight shadow-sm z-10">Real Estate</span>
              <div className="relative h-48 w-full rounded-[16px] overflow-hidden mb-8 mt-12">
                 <Image src="/visuals/real-estate.jpg" alt="Real Estate" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Real Estate Advisory</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-8 flex-1">
                Supporting clients with informed property sourcing, investment support, and real estate advisory.
              </p>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">
                Explore Division <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>

            {/* Education */}
            <Link href="/solutions/education" data-cursor="card" data-cursor-text="VIEW" className="shrink-0 w-[82vw] snap-center md:w-auto group bg-tlg-ivory p-8 rounded-[24px] hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full overflow-hidden relative">
              <span className="absolute top-8 left-8 bg-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-tlg-midnight shadow-sm z-10">Education</span>
              <div className="relative h-48 w-full rounded-[16px] overflow-hidden mb-8 mt-12">
                 <Image src="/visuals/education.jpg" alt="Education" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Education Advisory</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-8 flex-1">
                Helping students and professionals identify educational opportunities aligned with their global goals.
              </p>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">
                Explore Division <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>

            {/* Global Mobility */}
            <Link href="/solutions/global-mobility" data-cursor="card" data-cursor-text="VIEW" className="shrink-0 w-[82vw] snap-center md:w-auto group bg-tlg-ivory p-8 rounded-[24px] hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full overflow-hidden relative">
              <span className="absolute top-8 left-8 bg-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-tlg-midnight shadow-sm z-10">Mobility</span>
              <div className="relative h-48 w-full rounded-[16px] overflow-hidden mb-8 mt-12">
                 <Image src="/visuals/global-mobility.jpg" alt="Mobility" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Global Mobility & Immigration</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-8 flex-1">
                Providing structured administrative and advisory support for international mobility.
              </p>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">
                Explore Division <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>

            {/* Digital Learning */}
            <Link href="/solutions/digital-learning" data-cursor="card" data-cursor-text="VIEW" className="shrink-0 w-[82vw] snap-center md:w-auto group bg-tlg-ivory p-8 rounded-[24px] hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full overflow-hidden relative">
              <span className="absolute top-8 left-8 bg-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-tlg-midnight shadow-sm z-10">Digital</span>
              <div className="relative h-48 w-full rounded-[16px] overflow-hidden mb-8 mt-12">
                 <Image src="/visuals/digital-learning.jpg" alt="Digital Learning" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Digital Products & Learning</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-8 flex-1">
                Creating practical digital resources and professional development programmes.
              </p>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">
                Explore Division <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>

            {/* IT */}
            <Link href="/solutions/technology" data-cursor="card" data-cursor-text="VIEW" className="shrink-0 w-[82vw] snap-center md:w-auto group bg-tlg-ivory p-8 rounded-[24px] hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full overflow-hidden relative">
              <span className="absolute top-8 left-8 bg-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-tlg-midnight shadow-sm z-10">Technology</span>
              <div className="relative h-48 w-full rounded-[16px] overflow-hidden mb-8 mt-12">
                 <Image src="/visuals/technology.jpg" alt="IT" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Information Technology</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-8 flex-1">
                Supporting businesses with technology solutions designed to improve digital operations.
              </p>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">
                Explore Division <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
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
            <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-[0.2em] mb-4 block">The TLG Difference</span>
            <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight mb-6 leading-tight">Expertise that Connects and Scales</h2>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              We move beyond isolated services to provide a holistic ecosystem. Our integrated approach ensures that every strategy aligns with your overarching goals.
            </p>
            <Link href="/about" className="inline-flex items-center justify-center bg-transparent border border-tlg-midnight text-tlg-midnight px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-tlg-midnight hover:text-white transition-colors">
              Our Story
            </Link>
          </div>
          
          <div className="lg:w-2/3 flex flex-col">
            <div className="md:hidden text-left text-tlg-midnight/40 text-[10px] uppercase tracking-widest mb-4 flex items-center gap-2">Swipe to read <ArrowRight size={10} /></div>
            <div className="w-full flex md:grid md:grid-cols-2 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 -mx-6 px-6 md:mx-0 md:px-0">
            <div className="shrink-0 w-[85vw] snap-center md:w-auto bg-white p-8 md:p-10 rounded-[24px] shadow-sm flex flex-col justify-center">
              <h4 className="text-xl font-serif text-tlg-midnight mb-3">Global Reach</h4>
              <p className="text-sm text-gray-600 font-light leading-relaxed">Operating across Nigeria, UAE, and Canada, giving you access to strategic international markets.</p>
            </div>
            <div className="shrink-0 w-[85vw] snap-center md:w-auto bg-white p-8 md:p-10 rounded-[24px] shadow-sm flex flex-col justify-center md:translate-y-8">
              <h4 className="text-xl font-serif text-tlg-midnight mb-3">Integrated Ecosystem</h4>
              <p className="text-sm text-gray-600 font-light leading-relaxed">Access complementary professional services—from real estate to IT—through one connected group.</p>
            </div>
            <div className="shrink-0 w-[85vw] snap-center md:w-auto bg-white p-8 md:p-10 rounded-[24px] shadow-sm flex flex-col justify-center">
              <h4 className="text-xl font-serif text-tlg-midnight mb-3">Community Impact</h4>
              <p className="text-sm text-gray-600 font-light leading-relaxed">Committed to sustainable business practices and supporting education through our Charity Foundation.</p>
            </div>
            <div className="shrink-0 w-[85vw] snap-center md:w-auto bg-white p-8 md:p-10 rounded-[24px] shadow-sm flex flex-col justify-center md:translate-y-8">
              <h4 className="text-xl font-serif text-tlg-midnight mb-3">Measurable Results</h4>
              <p className="text-sm text-gray-600 font-light leading-relaxed">Our structured approach prioritises clarity, professionalism, and delivering long-term value.</p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 - Our Approach */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-[0.2em] mb-4 block">Methodology</span>
            <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight">Our Approach</h2>
          </div>
          
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row gap-8 items-start py-8 border-t border-tlg-signatureGold/30 hover:bg-tlg-ivory transition-colors px-6 rounded-[24px]">
              <span className="text-4xl font-serif text-tlg-signatureGold w-16 shrink-0">01</span>
              <div>
                <h4 className="text-2xl font-serif text-tlg-midnight mb-3">Understand</h4>
                <p className="text-gray-600 font-light leading-relaxed">We begin by understanding your goals, challenges and desired outcomes.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start py-8 border-t border-tlg-signatureGold/30 hover:bg-tlg-ivory transition-colors px-6 rounded-[24px]">
              <span className="text-4xl font-serif text-tlg-signatureGold w-16 shrink-0">02</span>
              <div>
                <h4 className="text-2xl font-serif text-tlg-midnight mb-3">Strategise</h4>
                <p className="text-gray-600 font-light leading-relaxed">We develop a practical pathway and tailored framework appropriate to your circumstances.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start py-8 border-t border-tlg-signatureGold/30 hover:bg-tlg-ivory transition-colors px-6 rounded-[24px]">
              <span className="text-4xl font-serif text-tlg-signatureGold w-16 shrink-0">03</span>
              <div>
                <h4 className="text-2xl font-serif text-tlg-midnight mb-3">Execute</h4>
                <p className="text-gray-600 font-light leading-relaxed">Our specialists support seamless implementation with clearly defined responsibilities.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start py-8 border-t border-tlg-signatureGold/30 hover:bg-tlg-ivory transition-colors px-6 rounded-[24px]">
              <span className="text-4xl font-serif text-tlg-signatureGold w-16 shrink-0">04</span>
              <div>
                <h4 className="text-2xl font-serif text-tlg-midnight mb-3">Review</h4>
                <p className="text-gray-600 font-light leading-relaxed">We evaluate progress and continuously identify opportunities for improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 09 - Featured Insight */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-[0.2em] mb-4 block">Featured Insight</span>
            <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight mb-6">Ideas for People, Business & Global Growth</h2>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              Explore perspectives and practical resources from across the Triumphal Lifetime ecosystem. From macro-economic analysis to HR best practices, we share knowledge designed for real-world progress.
            </p>
            <Link href="/insights" className="inline-flex items-center text-xs font-bold uppercase tracking-[0.15em] text-tlg-midnight hover:text-tlg-signatureGold transition-colors">
              Explore All Insights <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>
          <div className="w-full md:w-1/2 bg-tlg-ivory p-12 border border-tlg-stone">
            <span className="text-xs text-gray-500 uppercase tracking-widest block mb-4">Corporate Strategy</span>
            <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Structuring for International Expansion</h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed mb-8">
              A comprehensive guide to preparing your workforce and operational frameworks for cross-border scale.
            </p>
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-tlg-midnight border-b border-tlg-midnight pb-1">Read Editorial</span>
          </div>
        </div>
      </section>

      {/* 07 - Final CTA */}
      <section className="py-32 bg-tlg-midnight relative overflow-hidden">
        {/* Subtle Emerald glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tlg-emerald opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center relative z-10">
          <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-[0.2em] mb-6 block">Ready to Begin?</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif mb-10 text-white leading-tight">
            Success That Extends <br/>
            <span className="italic font-light">Beyond Business.</span>
          </h2>
          <p className="text-lg text-white/70 font-light mb-12 max-w-xl mx-auto">
            Whether you are representing a business, pursuing an international opportunity, or exploring one of our specialist services, our team is ready to understand your goals.
          </p>
          <MagneticButton><Link href="/book" className="inline-flex items-center justify-center bg-tlg-signatureGold text-tlg-midnight px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white transition-colors">
            Book a Consultation
          </Link></MagneticButton>
        </div>
      </section>

    </main>
  );
}
