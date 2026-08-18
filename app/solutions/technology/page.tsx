import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Database, CloudCog, Cpu, Network, Laptop } from "lucide-react";

export const metadata: Metadata = {
  title: "Information Technology | Triumphal Lifetime Group",
  description: "Enterprise systems, digital transformation, and cybersecurity advisory.",
};

export default function TechnologyPage() {
  return (
    <main className="bg-white pb-24">
      {/* 02 - Division Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-tlg-midnight text-white border-b border-tlg-signatureGold/20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
          <Link href="/companies" className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-tlg-signatureGold transition-colors mb-10">
            <ArrowRight size={12} className="mr-2 rotate-180" /> Back to Divisions
          </Link>
          <div className="max-w-4xl">
            <span className="text-tlg-signatureGold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Division 06</span>
            <h1 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-6">
              Information Technology
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl mb-10">
              Deploying enterprise architecture and digital transformation strategies to modernise operations, protect data, and unlock commercial agility.
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
              <p className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-2">Scope</p>
              <p className="text-sm font-semibold text-tlg-midnight">Enterprise Systems</p>
            </div>
            <div className="md:px-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-2">Primary Focus</p>
              <p className="text-sm font-semibold text-tlg-midnight">Digital Transformation</p>
            </div>
            <div className="md:px-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-2">Who We Support</p>
              <p className="text-sm font-semibold text-tlg-midnight">CTOs &amp; Operations</p>
            </div>
            <div className="md:px-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-2">Engagement</p>
              <p className="text-sm font-semibold text-tlg-midnight">Audit &rarr; Architect</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 - Problem / Opportunity */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] md:h-[500px] w-full rounded-[20px] overflow-hidden shadow-2xl">
              <Image src="/visuals/technology.jpg" alt="Modern Enterprise IT Architecture" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif text-tlg-midnight mb-6">Aligning IT with Commercial Strategy</h2>
              <p className="text-gray-600 font-light text-lg leading-relaxed mb-6">
                Technology should never operate in a silo. When IT infrastructure becomes fragmented or outdated, it creates data silos, operational delays, and significant security vulnerabilities.
              </p>
              <p className="text-gray-600 font-light text-lg leading-relaxed">
                We approach IT consulting from a business-first perspective. We ensure that your digital infrastructure investments—whether cloud migration or enterprise system integration—directly support corporate objectives and deliver measurable ROI.
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
            <h2 className="text-4xl font-serif text-tlg-midnight">Core Technology Advisory</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white border border-tlg-stone p-10 rounded-[20px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold">
                <Network size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3 group-hover:text-tlg-signatureGold transition-colors">Digital Transformation Strategy</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                Guiding traditional enterprises through the complexities of digitisation to reduce operational friction and position the business for rapid scaling.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Legacy system modernization</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Workflow automation roadmaps</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Change management for tech adoption</li>
              </ul>
            </div>

            <div className="bg-white border border-tlg-stone p-10 rounded-[20px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold">
                <Database size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3 group-hover:text-tlg-signatureGold transition-colors">Enterprise Systems Integration</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                Designing unified ERP and CRM ecosystems to provide executive leadership with single-pane-of-glass visibility into corporate performance.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> ERP architecture &amp; deployment</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Cross-platform API integrations</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Data silo unification</li>
              </ul>
            </div>

            <div className="bg-white border border-tlg-stone p-10 rounded-[20px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold">
                <CloudCog size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3 group-hover:text-tlg-signatureGold transition-colors">Cloud Infrastructure</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                Migrating on-premise solutions to scalable, secure cloud environments that support remote workforces and dynamic data storage needs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Cloud readiness assessments</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Migration execution &amp; testing</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Cloud cost optimization</li>
              </ul>
            </div>

            <div className="bg-white border border-tlg-stone p-10 rounded-[20px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3 group-hover:text-tlg-signatureGold transition-colors">Cybersecurity &amp; Compliance</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                Protecting critical corporate data through rigorous auditing, policy formulation, and the implementation of robust security protocols.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Threat &amp; vulnerability audits</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Data privacy compliance mapping</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Disaster recovery planning</li>
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
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">Legacy Enterprises Digitizing</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">CTOs Managing Mergers</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">Firms Requiring Compliance</span>
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
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Systems Audit</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Comprehensive mapping of the existing technology stack, identifying redundancies and security flaws.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">2</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Architecture Design</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Blueprint creation for the new digital environment, selecting vendors and platforms that align with the budget.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">3</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Phased Implementation</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Controlled rollout of new systems to ensure zero disruption to ongoing daily commercial operations.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">4</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Optimization</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Post-launch monitoring to refine integrations and measure the realized ROI of the transformation.</p>
              </div>
            </div>
          </div>

          <div className="bg-tlg-midnight text-white p-10 md:p-14">
            <h3 className="text-2xl font-serif mb-8">What You Receive</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <Laptop className="text-tlg-signatureGold shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-sm mb-1">IT Infrastructure Audit</h4>
                  <p className="text-white/60 font-light text-sm">Detailed report on current tech debt, security risks, and software redundancies.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Laptop className="text-tlg-signatureGold shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Transformation Roadmap</h4>
                  <p className="text-white/60 font-light text-sm">Strategic blueprint detailing the phased rollout of new platforms and migrations.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Laptop className="text-tlg-signatureGold shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Vendor Specification Documents</h4>
                  <p className="text-white/60 font-light text-sm">Rigorous requirements mapping used to tender bids from software vendors.</p>
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
          <h2 className="text-3xl font-serif text-tlg-midnight mb-8">Demystifying Technical Investment</h2>
          <p className="text-gray-600 font-light text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            For non-technical leadership teams, authorizing major IT expenditure is risky. We act as independent technical advisors, translating complex architectural requirements into clear commercial propositions. We ensure you only invest in technology that directly reduces operational cost or opens new revenue channels, protecting the organization from expensive "digital fads."
          </p>
        </div>
      </section>

      {/* 11 - Cross-Referral */}
      <section className="py-16 border-b border-tlg-stone">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center">
          <p className="text-sm text-gray-500 font-light">
            <strong className="text-tlg-midnight font-medium">Upgrading your workforce along with your tech?</strong> Partner with our <Link href="/solutions/hr-consulting" className="text-tlg-signatureGold hover:text-tlg-midnight transition-colors underline underline-offset-4">HR &amp; Business Consulting</Link> team to ensure structural alignment.
          </p>
        </div>
      </section>

      {/* 14 - Final CTA */}
      <section className="py-24 bg-tlg-midnight text-white text-center">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-serif mb-6">Modernise Your Operations</h2>
          <p className="text-white/70 font-light mb-10 text-lg">
            Schedule a technical advisory consultation to discuss auditing and transforming your corporate IT infrastructure.
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
