import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronDown, MapPin, Target, Users, LayoutTemplate, Briefcase, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "HR & Business Consulting ",
  description: "Workforce engineering, executive search, and corporate governance for international markets.",
};

export default function HRConsultingPage() {
  return (
    <main className="bg-white pb-24">
      {/* 02 - Division Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-tlg-midnight text-white border-b border-tlg-signatureGold/20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
          <Link href="/companies" className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-tlg-signatureGold transition-colors mb-10">
            <ArrowRight size={12} className="mr-2 rotate-180" /> Back to Divisions
          </Link>
          <div className="max-w-4xl">
            <span className="text-tlg-signatureGold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Division 01</span>
            <h1 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-6">
              HR & Business Consulting
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl mb-10">
              Align your workforce structure with your commercial objectives. We engineer robust organisational systems for growing enterprises.
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
              <p className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-2">Markets</p>
              <p className="text-sm font-semibold text-tlg-midnight">Nigeria &middot; UAE &middot; Canada</p>
            </div>
            <div className="md:px-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-2">Primary Focus</p>
              <p className="text-sm font-semibold text-tlg-midnight">Workforce &amp; Growth</p>
            </div>
            <div className="md:px-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-2">Who We Support</p>
              <p className="text-sm font-semibold text-tlg-midnight">Enterprises &amp; SMEs</p>
            </div>
            <div className="md:px-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-2">Engagement</p>
              <p className="text-sm font-semibold text-tlg-midnight">Assess &rarr; Deliver</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 - Problem / Opportunity */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-tlg-midnight mb-6">The Human Capital Imperative</h2>
              <p className="text-gray-600 font-light text-lg leading-relaxed mb-6">
                In rapidly evolving markets, a company's structural foundation often struggles to keep pace with its commercial ambitions. Growth creates complexity, and complexity requires robust governance.
              </p>
              <p className="text-gray-600 font-light text-lg leading-relaxed">
                Our consulting division partners with executive leadership to assess operational gaps, redesign reporting frameworks, and source the critical talent required to execute your next phase of expansion.
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px] w-full rounded-[20px] overflow-hidden shadow-2xl">
              <Image src="/visuals/hr.jpg" alt="Corporate Executives Meeting" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* 05 - Capabilities Grid */}
      <section id="capabilities" className="py-24 bg-tlg-ivory border-y border-tlg-stone scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Capabilities</span>
            <h2 className="text-4xl font-serif text-tlg-midnight">Core Consulting Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white border border-tlg-stone p-10 rounded-[20px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold">
                <Users size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3 group-hover:text-tlg-signatureGold transition-colors">Executive Search</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                Source and secure high-impact leadership capable of driving immediate value within your specific regional context.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> C-Suite retained search</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Board member appointments</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Technical specialist sourcing</li>
              </ul>
            </div>

            <div className="bg-white border border-tlg-stone p-10 rounded-[20px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold">
                <LayoutTemplate size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3 group-hover:text-tlg-signatureGold transition-colors">Organisational Design</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                Redesign your corporate architecture to eliminate redundancies, clarify reporting lines, and improve operational agility.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Structural audits</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Role profiling &amp; mapping</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Change management support</li>
              </ul>
            </div>

            <div className="bg-white border border-tlg-stone p-10 rounded-[20px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold">
                <Briefcase size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3 group-hover:text-tlg-signatureGold transition-colors">Corporate Governance</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                Establish robust HR policies and compliance frameworks that protect the organisation while fostering transparency.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Employee handbook creation</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Compliance auditing</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Disciplinary framework design</li>
              </ul>
            </div>

            <div className="bg-white border border-tlg-stone p-10 rounded-[20px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold">
                <Target size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3 group-hover:text-tlg-signatureGold transition-colors">Performance Management</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                Develop quantifiable metrics that align individual employee objectives directly with overarching corporate goals.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> KPI &amp; OKR development</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Appraisal system design</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Compensation structuring</li>
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
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">Startups Scaling Operations</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">SMEs Restructuring</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">Multinationals Entering New Markets</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">Corporate Boards</span>
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
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Assess</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Comprehensive audit of current organisational structures, HR policies, and leadership capabilities.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">2</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Recommend</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Strategic roadmap detailing necessary restructuring, key hires, and compliance upgrades.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">3</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Implement</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Execution of executive search, deployment of performance frameworks, and policy rollout.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">4</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Support</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Ongoing advisory and post-implementation reviews to ensure systemic stability.</p>
              </div>
            </div>
          </div>

          <div className="bg-tlg-midnight text-white p-10 md:p-14">
            <h3 className="text-2xl font-serif mb-8">What You Receive</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <FileText className="text-tlg-signatureGold shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Strategic Audit Report</h4>
                  <p className="text-white/60 font-light text-sm">Identifying structural bottlenecks and compliance gaps.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FileText className="text-tlg-signatureGold shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Vetted Candidate Shortlists</h4>
                  <p className="text-white/60 font-light text-sm">For executive search mandates, fully briefed and verified.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <FileText className="text-tlg-signatureGold shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Implementation Roadmap</h4>
                  <p className="text-white/60 font-light text-sm">Step-by-step rollout plans for restructuring or new policies.</p>
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
          <h2 className="text-3xl font-serif text-tlg-midnight mb-8">Structural Clarity During Expansion</h2>
          <p className="text-gray-600 font-light text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            When a business expands across borders or scales rapidly, informal HR structures break down. We step in to assess the current operating model, identify the gaps, and engineer a formal, compliant organisational chart. This allows leadership to step back from day-to-day HR crises and focus on strategic growth, knowing the foundation is secure.
          </p>
        </div>
      </section>

      {/* 09 - Market Availability */}
      <section className="py-16 border-b border-tlg-stone">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-2">Regional Availability</h3>
              <p className="text-sm text-gray-500 font-light">Consulting services are fully tailored to local regulatory environments.</p>
            </div>
            <div className="flex gap-6 text-sm font-semibold text-tlg-midnight">
              <span className="flex items-center gap-2"><MapPin size={16} className="text-tlg-signatureGold" /> Nigeria</span>
              <span className="flex items-center gap-2"><MapPin size={16} className="text-tlg-signatureGold" /> UAE</span>
              <span className="flex items-center gap-2"><MapPin size={16} className="text-tlg-signatureGold" /> Canada</span>
            </div>
          </div>
        </div>
      </section>

      {/* 11 - Cross-Referral */}
      <section className="py-16">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center">
          <p className="text-sm text-gray-500 font-light">
            <strong className="text-tlg-midnight font-medium">Relocating key executives?</strong> You may also require our <Link href="/solutions/global-mobility" className="text-tlg-signatureGold hover:text-tlg-midnight transition-colors underline underline-offset-4">Global Mobility</Link> services to ensure a smooth transition.
          </p>
        </div>
      </section>

      {/* 14 - Final CTA */}
      <section className="py-24 bg-tlg-midnight text-white text-center">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-serif mb-6">Optimise Your Organisation</h2>
          <p className="text-white/70 font-light mb-10 text-lg">
            Schedule a confidential consultation with our advisory partners to discuss your specific corporate requirements.
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
