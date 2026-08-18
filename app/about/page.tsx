import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Our Group",
  description: "Triumphal Lifetime Group is a diversified business network providing structural, operational, and strategic support across multiple high-impact sectors globally.",
};

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutGroupPage() {
  return (
    <main className="bg-white pt-32 pb-24">
      <section className="relative pt-16 pb-24 border-b border-tlg-stone bg-tlg-ivory">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl animate-reveal-up">
            <span className="text-tlg-signatureGold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 block">About The Group</span>
            <h1 className="text-4xl md:text-6xl font-serif text-tlg-midnight leading-[1.1] mb-8">
              Expertise That Moves<br />Ambition Forward.
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-12">
              Triumphal Lifetime Group is a diversified business network providing structural, operational, and strategic support across multiple high-impact sectors globally.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 relative">
            <div className="sticky top-40 bg-tlg-ivory p-8 border border-tlg-stone">
              <h4 className="text-lg font-serif text-tlg-midnight mb-6">About Us</h4>
              <ul className="flex flex-col gap-4 text-sm">
                <li><Link href="/about/our-story" className="text-gray-500 hover:text-tlg-signatureGold transition-colors block">Our Story & History</Link></li>
                <li><Link href="/about/leadership" className="text-gray-500 hover:text-tlg-signatureGold transition-colors block">Executive Leadership</Link></li>
                <li><Link href="/about/global-presence" className="text-gray-500 hover:text-tlg-signatureGold transition-colors block">Global Presence</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="prose prose-lg prose-headings:font-serif prose-headings:text-tlg-midnight prose-p:text-gray-600 prose-p:font-light prose-p:leading-relaxed max-w-none">
              <h2 className="text-3xl font-serif text-tlg-midnight mb-6 border-b border-tlg-stone pb-4">Our Core Philosophy</h2>
              <p className="mb-6">
                Modern business and personal challenges rarely fit neatly into a single category. Whether an enterprise is expanding into a new jurisdiction, or an individual is navigating international education and mobility, the solutions require interconnected expertise.
              </p>
              <p className="mb-12">
                Triumphal Lifetime Group was founded on the principle that integrated advisory—combining human resources, real estate, technology, and compliance under one ecosystem—delivers superior, frictionless results for our clients.
              </p>

              <h2 className="text-3xl font-serif text-tlg-midnight mb-6 border-b border-tlg-stone pb-4">Our Operating Divisions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white border border-tlg-stone p-8">
                  <h4 className="font-serif text-xl text-tlg-midnight mb-2">HR & Business Consulting</h4>
                  <p className="text-sm text-gray-500">Workforce engineering and corporate governance.</p>
                </div>
                <div className="bg-white border border-tlg-stone p-8">
                  <h4 className="font-serif text-xl text-tlg-midnight mb-2">Real Estate Advisory</h4>
                  <p className="text-sm text-gray-500">Commercial property strategy and facilities management.</p>
                </div>
                <div className="bg-white border border-tlg-stone p-8">
                  <h4 className="font-serif text-xl text-tlg-midnight mb-2">Global Mobility</h4>
                  <p className="text-sm text-gray-500">Logistics and administrative relocation support.</p>
                </div>
                <div className="bg-white border border-tlg-stone p-8">
                  <h4 className="font-serif text-xl text-tlg-midnight mb-2">Education Advisory</h4>
                  <p className="text-sm text-gray-500">Academic planning and institutional placement.</p>
                </div>
                <div className="bg-white border border-tlg-stone p-8">
                  <h4 className="font-serif text-xl text-tlg-midnight mb-2">Information Technology</h4>
                  <p className="text-sm text-gray-500">Enterprise systems and digital transformation.</p>
                </div>
                <div className="bg-white border border-tlg-stone p-8">
                  <h4 className="font-serif text-xl text-tlg-midnight mb-2">Digital Learning</h4>
                  <p className="text-sm text-gray-500">Corporate training and digital curriculum.</p>
                </div>
              </div>

              <div className="bg-tlg-midnight text-white p-12 mt-16 flex flex-col items-start">
                <h3 className="text-2xl font-serif mb-4">Discover the full scope of our expertise</h3>
                <Link href="/companies" className="mt-6 inline-flex items-center text-xs font-bold uppercase tracking-widest text-tlg-signatureGold hover:text-white transition-colors">
                  Explore Our Companies <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
