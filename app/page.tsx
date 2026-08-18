import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Triumphal Lifetime Group connects expertise across HR, Real Estate, Education, Global Mobility, and Technology.",
};

import Hero from "@/components/home/Hero";
import SmartNeedFinder from "@/components/home/SmartNeedFinder";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-white">
      {/* 02 - Light Editorial Hero */}
      <Hero />
      
      {/* 03 - Group Positioning */}
      <section className="py-24 md:py-32 bg-white relative border-b border-tlg-stone">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] md:h-[500px] w-full rounded-[20px] overflow-hidden shadow-2xl">
              <Image src="/visuals/homepage_hero.jpg" alt="Triumphal Lifetime Group" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div>
              <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-[0.2em] mb-4 block">The Power of Synergy</span>
              <h2 className="text-3xl md:text-4xl font-serif text-tlg-midnight mb-6">One Group. Multiple Solutions.</h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                Modern challenges rarely fit into one category. That is why Triumphal Lifetime Group brings complementary expertise together within one business ecosystem.
              </p>
              <p className="text-lg text-gray-600 font-light leading-relaxed">
                Whether you are building a stronger organisation, exploring property opportunities, pursuing international education, or adopting technology, our specialist teams provide structured support from beginning to execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 - Smart Need Finder */}
      <SmartNeedFinder />
      
      {/* 05 - Our Companies (6 Clean Editorial Cards) */}
      <section className="py-24 md:py-32 bg-tlg-ivory relative">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-[0.2em] mb-4 block">Our Companies</span>
            <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight">An Integrated Business Ecosystem</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* HR & Consulting */}
            <Link href="/solutions/hr-consulting" className="group bg-white p-12 border border-tlg-stone hover:border-tlg-midnight transition-colors flex flex-col h-full">
              <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Human Resources & Business Consulting</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-10 flex-1">
                Building stronger organisations through HR advisory, organisational development, talent solutions, workforce strategy and business consulting.
              </p>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">
                Explore HR & Consulting <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
            
            {/* Real Estate */}
            <Link href="/solutions/real-estate" className="group bg-white p-12 border border-tlg-stone hover:border-tlg-midnight transition-colors flex flex-col h-full">
              <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Real Estate</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-10 flex-1">
                Supporting clients with informed property sourcing, investment support, market research and real estate advisory.
              </p>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">
                Explore Real Estate <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>

            {/* Education */}
            <Link href="/solutions/education" className="group bg-white p-12 border border-tlg-stone hover:border-tlg-midnight transition-colors flex flex-col h-full">
              <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Education</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-10 flex-1">
                Helping students and professionals identify educational opportunities aligned with their academic, career and international goals.
              </p>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">
                Explore Education <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>

            {/* Global Mobility */}
            <Link href="/solutions/global-mobility" className="group bg-white p-12 border border-tlg-stone hover:border-tlg-midnight transition-colors flex flex-col h-full">
              <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Global Mobility & Immigration</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-10 flex-1">
                Providing structured administrative and advisory support for international mobility while working within applicable regulatory requirements.
              </p>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">
                Explore Global Mobility <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>

            {/* Digital Products & Learning */}
            <Link href="/solutions/digital-learning" className="group bg-white p-12 border border-tlg-stone hover:border-tlg-midnight transition-colors flex flex-col h-full">
              <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Digital Products & Learning</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-10 flex-1">
                Creating practical digital resources, professional development programmes and learning solutions for individuals and organisations.
              </p>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">
                Explore Digital Learning <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>

            {/* Information Technology */}
            <Link href="/solutions/technology" className="group bg-white p-12 border border-tlg-stone hover:border-tlg-midnight transition-colors flex flex-col h-full">
              <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Information Technology</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-10 flex-1">
                Supporting businesses with technology solutions designed to improve efficiency, digital operations and sustainable growth.
              </p>
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">
                Explore Technology <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* 06 - Global Presence */}
      <section className="py-24 md:py-32 bg-white relative border-y border-tlg-stone">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight max-w-2xl">
              An International Perspective.<br />
              <span className="italic font-light text-gray-500">Connected Opportunities.</span>
            </h2>
            <p className="text-gray-600 font-light mt-6 md:mt-0 max-w-md">
              We understand the complexities and opportunities associated with operating, studying, and investing across different markets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l border-tlg-stone pl-8 py-4">
              <h3 className="text-2xl font-serif text-tlg-midnight mb-3">Nigeria</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">Strategic hub for entrepreneurship, talent acquisition, and emerging-market expansion.</p>
            </div>
            <div className="border-l border-tlg-stone pl-8 py-4">
              <h3 className="text-2xl font-serif text-tlg-midnight mb-3">United Arab Emirates</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">Commercial nucleus for international commerce, real estate investment, and global connectivity.</p>
            </div>
            <div className="border-l border-tlg-stone pl-8 py-4">
              <h3 className="text-2xl font-serif text-tlg-midnight mb-3">Canada</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">North American bridge for education pathways, professional development, and mobility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 07 - Why Triumphal Lifetime? */}
      <section className="py-24 md:py-32 bg-tlg-ivory">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight mb-6">Why Triumphal Lifetime?</h2>
        </div>
        
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h4 className="text-lg font-serif text-tlg-midnight mb-3 border-b border-tlg-stone pb-3">Integrated Expertise</h4>
            <p className="text-sm text-gray-600 font-light leading-relaxed">Access complementary professional services through one connected business ecosystem.</p>
          </div>
          <div>
            <h4 className="text-lg font-serif text-tlg-midnight mb-3 border-b border-tlg-stone pb-3">Client-Centred</h4>
            <p className="text-sm text-gray-600 font-light leading-relaxed">Every engagement begins with understanding your objectives, circumstances and priorities.</p>
          </div>
          <div>
            <h4 className="text-lg font-serif text-tlg-midnight mb-3 border-b border-tlg-stone pb-3">Structured Delivery</h4>
            <p className="text-sm text-gray-600 font-light leading-relaxed">Our approach prioritises clarity, professionalism, documentation and measurable objectives.</p>
          </div>
          <div>
            <h4 className="text-lg font-serif text-tlg-midnight mb-3 border-b border-tlg-stone pb-3">Long-Term Value</h4>
            <p className="text-sm text-gray-600 font-light leading-relaxed">We seek to build relationships and solutions that remain valuable beyond a single transaction.</p>
          </div>
        </div>
      </section>

      {/* 08 - Our Approach */}
      <section className="py-24 md:py-32 bg-tlg-midnight text-white text-center">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-[0.2em] mb-4 block">Methodology</span>
          <h2 className="text-3xl md:text-5xl font-serif mb-16">Our Approach</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative">
            <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-white/20 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <span className="w-12 h-12 rounded-full bg-tlg-midnight border-2 border-tlg-signatureGold flex items-center justify-center text-sm font-bold mb-6">01</span>
              <h4 className="text-xl font-serif mb-3">Understand</h4>
              <p className="text-xs text-white/70 font-light leading-relaxed max-w-[200px]">We begin by understanding your goals, challenges and desired outcomes.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <span className="w-12 h-12 rounded-full bg-tlg-midnight border-2 border-tlg-signatureGold flex items-center justify-center text-sm font-bold mb-6">02</span>
              <h4 className="text-xl font-serif mb-3">Strategise</h4>
              <p className="text-xs text-white/70 font-light leading-relaxed max-w-[200px]">We develop a practical pathway appropriate to your circumstances.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <span className="w-12 h-12 rounded-full bg-tlg-midnight border-2 border-tlg-signatureGold flex items-center justify-center text-sm font-bold mb-6">03</span>
              <h4 className="text-xl font-serif mb-3">Execute</h4>
              <p className="text-xs text-white/70 font-light leading-relaxed max-w-[200px]">Our specialists support implementation with defined responsibilities.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center">
              <span className="w-12 h-12 rounded-full bg-tlg-midnight border-2 border-tlg-signatureGold flex items-center justify-center text-sm font-bold mb-6">04</span>
              <h4 className="text-xl font-serif mb-3">Review</h4>
              <p className="text-xs text-white/70 font-light leading-relaxed max-w-[200px]">We evaluate progress and identify opportunities for continued improvement.</p>
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

      {/* 10 - Social Impact */}
      <section className="py-24 md:py-32 bg-tlg-ivory border-t border-tlg-stone">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-[0.2em] mb-4 block">Triumphal Lifetime Charity Foundation</span>
              <h2 className="text-3xl md:text-4xl font-serif text-tlg-midnight mb-6">Success That Extends Beyond Business</h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-10">
                We believe sustainable business should contribute to stronger people and communities. Through the Group’s social-impact initiatives, we seek opportunities to support education, employability, entrepreneurship, and community advancement.
              </p>
              <Link href="/impact" className="inline-flex items-center justify-center bg-transparent border border-tlg-midnight text-tlg-midnight px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-tlg-midnight hover:text-white transition-colors">
                Discover Our Impact
              </Link>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] md:h-[500px] w-full rounded-[20px] overflow-hidden shadow-2xl">
              <Image src="/visuals/social_impact.jpg" alt="Social Impact Initiatives" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>



      {/* 12 - Final CTA */}
      <section className="py-32 bg-tlg-midnight text-white text-center">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-10">Your Next Chapter Starts With a Conversation.</h2>
          <p className="text-lg text-white/70 font-light mb-12 max-w-xl mx-auto">
            Whether you are representing a business, pursuing an international opportunity or exploring one of our specialist services, our team is ready to understand your goals.
          </p>
          <Link href="/book" className="inline-flex items-center justify-center bg-tlg-signatureGold text-tlg-midnight px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors">
            Book a Consultation
          </Link>
        </div>
      </section>

    </main>
  );
}
