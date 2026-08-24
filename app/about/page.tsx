import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Triumphal Lifetime Group",
  description: "Triumphal Lifetime Group is a diversified business network providing structural, operational, and strategic support across multiple high-impact sectors globally.",
};

import Link from "next/link";
import { ArrowRight, Users, Globe, Building2, BookOpen } from "lucide-react";
import ReadingProgress from "@/components/ui/ReadingProgress";

const subPages = [
  {
    href: "/about/our-story",
    label: "Our Story",
    eyebrow: "History & Origins",
    description: "From a boutique advisory firm in Nigeria to an integrated global group spanning three continents. Read the founding story, our growth milestones, and the philosophy that drives everything we do.",
    icon: BookOpen,
    cta: "Read Our Story",
  },
  {
    href: "/about/leadership",
    label: "Executive Leadership",
    eyebrow: "People & Leadership",
    description: "Meet the experienced executives and directors steering the Group's strategy, operations, and growth across our divisions in Nigeria, the UAE, and Canada.",
    icon: Users,
    cta: "Meet the Team",
  },
  {
    href: "/about/global-presence",
    label: "Global Presence",
    eyebrow: "Markets & Offices",
    description: "We operate from strategic hubs in Abuja, Dubai, and Toronto. Understand how our three-region infrastructure gives you unmatched access to talent, capital, and opportunity.",
    icon: Globe,
    cta: "Explore Our Offices",
  },
  {
    href: "/about/partners",
    label: "Partners & Affiliates",
    eyebrow: "Strategic Network",
    description: "Our ecosystem is strengthened by a curated network of institutional partners, academic affiliates, and regulatory bodies across our operating jurisdictions.",
    icon: Building2,
    cta: "View Our Partners",
  },
];

export default function AboutGroupPage() {
  return (
    <>
      <ReadingProgress />
      <main className="bg-white pt-32 pb-24">

        {/* Hero */}
        <section className="relative pt-16 pb-24 border-b border-tlg-stone bg-tlg-ivory">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="max-w-4xl animate-reveal-up">
              <span className="text-tlg-signatureGold text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 block">About The Group</span>
              <h1 className="text-4xl md:text-6xl font-serif text-tlg-midnight leading-[1.1] mb-8">
                Expertise That Moves<br />Ambition Forward.
              </h1>
              <p className="text-xl text-gray-700 font-normal leading-relaxed max-w-2xl">
                Triumphal Lifetime Group is a diversified business network providing structural, operational, and strategic support across multiple high-impact sectors globally.
              </p>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-b border-tlg-stone bg-tlg-midnight">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {[
                { value: "3", label: "Countries" },
                { value: "6+", label: "Operating Divisions" },
                { value: "500+", label: "Clients Served" },
                { value: "2017", label: "Year Founded" },
              ].map((stat) => (
                <div key={stat.label} className="py-10 px-8 text-center">
                  <p className="text-3xl md:text-4xl font-serif text-tlg-signatureGold mb-1">{stat.value}</p>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 border-b border-tlg-stone">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Core Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-serif text-tlg-midnight leading-[1.15]">Why Integration Matters</h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-gray-800 font-normal leading-relaxed text-[15px]">
              <p>
                Modern business and personal challenges rarely fit neatly into a single category. Whether an enterprise is expanding into a new jurisdiction, or an individual is navigating international education and mobility, the solutions require interconnected expertise.
              </p>
              <p>
                Triumphal Lifetime Group was founded on the principle that integrated advisory — combining human resources, real estate, technology, and compliance under one ecosystem — delivers superior, frictionless results. We remove the friction of coordinating between multiple disconnected firms and replace it with a single, accountable partnership.
              </p>
              <p className="text-tlg-midnight font-medium">
                Our six divisions are not independent silos. They are deliberately designed to work in concert — so that when your business grows, every pillar of support grows with it.
              </p>
            </div>
          </div>
        </section>

        {/* Sub-page Navigation — The Key Section */}
        <section className="py-24 bg-tlg-ivory">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">

            {/* Section header */}
            <div className="mb-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-3 block">Explore In Depth</span>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight leading-[1.1]">
                  There's More to<br className="hidden md:block" /> Discover Below
                </h2>
                <p className="text-sm text-gray-700 font-normal max-w-sm leading-relaxed">
                  Each section below is a full dedicated page. Tap or click any card to explore that chapter of our group.
                </p>
              </div>
            </div>

            {/* Sub-page cards — responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
              {subPages.map((page) => {
                const Icon = page.icon;
                return (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="group relative bg-white border border-tlg-stone hover:border-tlg-midnight transition-all duration-300 p-8 md:p-10 flex flex-col hover:shadow-lg hover:-translate-y-1"
                  >
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-full bg-tlg-ivory border border-tlg-stone flex items-center justify-center group-hover:bg-tlg-midnight group-hover:border-tlg-midnight transition-colors duration-300">
                        <Icon size={18} className="text-tlg-signatureGold group-hover:text-tlg-signatureGold transition-colors" />
                      </div>
                      {/* Arrow indicator — always visible on mobile, animated on desktop */}
                      <div className="flex items-center justify-center w-9 h-9 rounded-full border border-tlg-stone group-hover:bg-tlg-midnight group-hover:border-tlg-midnight transition-all duration-300">
                        <ArrowRight size={14} className="text-gray-700 group-hover:text-white transition-colors -rotate-45 group-hover:rotate-0 duration-300" />
                      </div>
                    </div>

                    {/* Content */}
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-tlg-signatureGold mb-2 block">{page.eyebrow}</span>
                    <h3 className="text-2xl md:text-3xl font-serif text-tlg-midnight mb-4 group-hover:text-tlg-midnight transition-colors">
                      {page.label}
                    </h3>
                    <p className="text-sm text-gray-700 font-normal leading-relaxed flex-1 mb-8">
                      {page.description}
                    </p>

                    {/* CTA row — always at bottom */}
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-tlg-midnight group-hover:text-tlg-signatureGold transition-colors mt-auto pt-6 border-t border-tlg-stone">
                      {page.cta}
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </div>

                    {/* Mobile tap hint */}
                    <span className="absolute top-4 right-4 text-[9px] font-bold uppercase tracking-widest text-tlg-signatureGold bg-tlg-signatureGold/10 px-2 py-1 rounded-full sm:hidden">
                      Tap to explore
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Bottom prompt for mobile */}
            <div className="mt-10 flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-widest text-gray-700 sm:hidden">
              <span className="w-8 h-px bg-tlg-stone" />
              Scroll up to explore each section
              <span className="w-8 h-px bg-tlg-stone" />
            </div>

          </div>
        </section>

      </main>
    </>
  );
}
