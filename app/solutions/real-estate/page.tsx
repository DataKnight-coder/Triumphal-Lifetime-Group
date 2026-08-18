import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin, Building2, TrendingUp, Key, Search, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Real Estate Advisory | Triumphal Lifetime Group",
  description: "Commercial property strategy and strategic facility management.",
};

export default function RealEstatePage() {
  return (
    <main className="bg-white pb-24">
      {/* 02 - Division Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-tlg-midnight text-white border-b border-tlg-signatureGold/20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
          <Link href="/companies" className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-tlg-signatureGold transition-colors mb-10">
            <ArrowRight size={12} className="mr-2 rotate-180" /> Back to Divisions
          </Link>
          <div className="max-w-4xl">
            <span className="text-tlg-signatureGold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Division 02</span>
            <h1 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-6">
              Real Estate Advisory
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl mb-10">
              Navigate international property markets with clarity. We provide strategic consulting for commercial acquisitions, market entry, and facility management.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/book" className="bg-tlg-signatureGold text-tlg-midnight px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors">
                Book a Consultation
              </Link>
              <a href="#capabilities" className="bg-transparent border border-white/20 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:border-white transition-colors">
                View Capabilities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 03 - Executive Snapshot */}
      <section className="bg-tlg-ivory border-b border-tlg-stone py-8">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-tlg-stone">
            <div className="md:px-6 first:pl-0">
              <p className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-2">Core Markets</p>
              <p className="text-sm font-semibold text-tlg-midnight">UAE &middot; Nigeria</p>
            </div>
            <div className="md:px-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-2">Primary Focus</p>
              <p className="text-sm font-semibold text-tlg-midnight">Commercial &amp; Strategic</p>
            </div>
            <div className="md:px-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-2">Who We Support</p>
              <p className="text-sm font-semibold text-tlg-midnight">Corporations &amp; Investors</p>
            </div>
            <div className="md:px-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-2">Engagement</p>
              <p className="text-sm font-semibold text-tlg-midnight">Research &rarr; Strategy</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13 - Compliance Notice (Moved up for visibility) */}
      <section className="pt-12 pb-4">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="bg-tlg-stone/30 border-l-4 border-tlg-signatureGold p-6">
            <p className="text-[10px] text-tlg-midnight font-bold uppercase tracking-widest mb-1">Advisory Disclaimer</p>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Triumphal Lifetime Group provides administrative and strategic advisory services. We are not licensed financial advisors or brokers. We do not guarantee property yields, investment returns, or market appreciation. Regulated legal conveyancing must be performed by authorized local professionals.
            </p>
          </div>
        </div>
      </section>

      {/* 04 - Problem / Opportunity */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] md:h-[500px] w-full rounded-[20px] overflow-hidden shadow-2xl">
              <Image src="/visuals/real-estate.jpg" alt="Modern Corporate Skyscraper" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif text-tlg-midnight mb-6">Strategic Real Estate Positioning</h2>
              <p className="text-gray-600 font-light text-lg leading-relaxed mb-6">
                Real estate decisions fundamentally impact corporate balance sheets and operational efficiency. Entering a new market or expanding operations requires more than just finding a building—it requires rigorous feasibility studies and locational intelligence.
              </p>
              <p className="text-gray-600 font-light text-lg leading-relaxed">
                We support businesses in navigating complex property markets in Nigeria and the UAE by providing meticulous, research-backed advisory services that align physical infrastructure with long-term corporate goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 - Capabilities Grid */}
      <section id="capabilities" className="py-24 bg-tlg-ivory border-y border-tlg-stone scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Capabilities</span>
            <h2 className="text-4xl font-serif text-tlg-midnight">Core Advisory Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white border border-tlg-stone p-10 rounded-[20px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold">
                <Search size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3 group-hover:text-tlg-signatureGold transition-colors">Market Feasibility &amp; Research</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                Understand the market before committing capital. We provide deep-dive research into regional property trends, zoning regulations, and commercial viability.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Market trend analysis</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Site selection consulting</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Competitor locational mapping</li>
              </ul>
            </div>

            <div className="bg-white border border-tlg-stone p-10 rounded-[20px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold">
                <Building2 size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3 group-hover:text-tlg-signatureGold transition-colors">Corporate Relocation Advisory</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                Establishing regional headquarters requires logistical precision. We advise on commercial leasing strategies, identifying properties that meet specific operational requirements.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Office footprint optimisation</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Commercial lease advisory</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Workspace planning oversight</li>
              </ul>
            </div>

            <div className="bg-white border border-tlg-stone p-10 rounded-[20px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold">
                <Key size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3 group-hover:text-tlg-signatureGold transition-colors">Strategic Facility Management</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                Beyond acquisition, we partner with enterprises to optimise physical environments, focusing on operational efficiency and sustainable resource utilisation.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Operational cost reduction</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Health &amp; safety compliance</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Vendor management frameworks</li>
              </ul>
            </div>

            <div className="bg-white border border-tlg-stone p-10 rounded-[20px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold">
                <TrendingUp size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3 group-hover:text-tlg-signatureGold transition-colors">Portfolio Review</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                For existing corporate real estate portfolios, we conduct high-level strategic reviews to identify underutilised assets and alignment with business goals.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Asset utilisation audits</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Divestment strategy</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Expansion roadmapping</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 06 - Who We Help */}
      <section className="py-20 border-b border-tlg-stone">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-8 block">Who We Support</span>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">Corporate HQs</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">Multinational Franchises</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">Institutional Investors</span>
          </div>
        </div>
      </section>

      {/* 07 & 08 - How It Works & Deliverables */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-serif text-tlg-midnight mb-10">Our Methodology</h2>
            <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[15px] before:w-px before:bg-tlg-stone">
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">1</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Scoping</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Detailed briefing to understand your corporate goals, budget parameters, and spatial requirements.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">2</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Research</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Deep-dive market analysis identifying target zones, comparative leasing rates, and infrastructural readiness.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">3</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Strategy</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Delivery of a comprehensive strategic advisory report outlining the optimal path forward.</p>
              </div>
            </div>
          </div>

          <div className="bg-tlg-midnight text-white p-10 md:p-14">
            <h3 className="text-2xl font-serif mb-8">What You Receive</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <FileCheck className="text-tlg-signatureGold shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Market Feasibility Report</h4>
                  <p className="text-white/60 font-light text-sm">Actionable data on target regions and property classifications.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FileCheck className="text-tlg-signatureGold shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Facility Management Framework</h4>
                  <p className="text-white/60 font-light text-sm">Custom guidelines for maintaining newly acquired corporate spaces.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FileCheck className="text-tlg-signatureGold shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Vendor Shortlists</h4>
                  <p className="text-white/60 font-light text-sm">Introductions to verified local legal, architectural, and contracting partners.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 10 - Value Demonstration */}
      <section className="py-24 bg-tlg-ivory border-y border-tlg-stone">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 text-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-6 block">How We Create Value</span>
          <h2 className="text-3xl font-serif text-tlg-midnight mb-8">Mitigating Risk in Unfamiliar Markets</h2>
          <p className="text-gray-600 font-light text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            Entering the UAE or expanding within Nigeria involves complex zoning laws, fluctuating commercial lease structures, and opaque vendor networks. We act as your strategic filter—conducting the heavy lifting on research and feasibility, so executive teams can make real estate decisions based on verified intelligence, not speculation.
          </p>
        </div>
      </section>

      {/* 09 - Market Availability */}
      <section className="py-16 border-b border-tlg-stone">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-2">Regional Availability</h3>
              <p className="text-sm text-gray-500 font-light">Real estate advisory is currently concentrated in these primary markets.</p>
            </div>
            <div className="flex gap-6 text-sm font-semibold text-tlg-midnight">
              <span className="flex items-center gap-2"><MapPin size={16} className="text-tlg-signatureGold" /> Nigeria</span>
              <span className="flex items-center gap-2"><MapPin size={16} className="text-tlg-signatureGold" /> UAE</span>
            </div>
          </div>
        </div>
      </section>

      {/* 11 - Cross-Referral */}
      <section className="py-16">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center">
          <p className="text-sm text-gray-500 font-light">
            <strong className="text-tlg-midnight font-medium">Opening a new corporate office?</strong> Ensure your team is compliant with our <Link href="/solutions/hr-consulting" className="text-tlg-signatureGold hover:text-tlg-midnight transition-colors underline underline-offset-4">HR &amp; Business Consulting</Link> division.
          </p>
        </div>
      </section>

      {/* 14 - Final CTA */}
      <section className="py-24 bg-tlg-midnight text-white text-center">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-serif mb-6">Structure Your Next Move</h2>
          <p className="text-white/70 font-light mb-10 text-lg">
            Schedule a confidential consultation to discuss market feasibility and corporate property strategy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book" className="bg-tlg-signatureGold text-tlg-midnight px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors">
              Book a Consultation
            </Link>
            <Link href="/contact" className="bg-transparent border border-white/20 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:border-white transition-colors">
              Contact the Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
