import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Plane, FileCheck, Briefcase, Building2, MapPin, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Global Mobility | Triumphal Lifetime Group",
  description: "Administrative logistics and strategic advisory for cross-border relocation.",
};

export default function GlobalMobilityPage() {
  return (
    <main className="bg-white pb-24">
      {/* 02 - Division Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-tlg-midnight text-white border-b border-tlg-signatureGold/20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
          <Link href="/companies" className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-tlg-signatureGold transition-colors mb-10">
            <ArrowRight size={12} className="mr-2 rotate-180" /> Back to Divisions
          </Link>
          <div className="max-w-4xl">
            <span className="text-tlg-signatureGold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Division 04</span>
            <h1 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-6">
              Global Mobility
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl mb-10">
              Structured administrative logistics and strategic advisory for corporate and individual cross-border relocations across high-growth international corridors.
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
              <p className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-2">Key Corridors</p>
              <p className="text-sm font-semibold text-tlg-midnight">Canada &middot; UAE &middot; UK</p>
            </div>
            <div className="md:px-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-2">Primary Focus</p>
              <p className="text-sm font-semibold text-tlg-midnight">Transition Logistics</p>
            </div>
            <div className="md:px-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-2">Who We Support</p>
              <p className="text-sm font-semibold text-tlg-midnight">Executives &amp; Enterprises</p>
            </div>
            <div className="md:px-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-2">Engagement</p>
              <p className="text-sm font-semibold text-tlg-midnight">Strategy &rarr; Execution</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13 - Compliance Notice */}
      <section className="pt-12 pb-4">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="bg-tlg-stone/30 border-l-4 border-tlg-signatureGold p-6">
            <p className="text-[10px] text-tlg-midnight font-bold uppercase tracking-widest mb-1">Advisory Disclaimer</p>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Triumphal Lifetime Group provides administrative coordination, logistical planning, and general mobility advisory. We are not a government agency and do not issue visas or permits. We cannot guarantee application outcomes or processing times. Regulated immigration legal advice must be provided by authorized professionals in the relevant jurisdiction.
            </p>
          </div>
        </div>
      </section>

      {/* 04 - Problem / Opportunity */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] md:h-[500px] w-full rounded-[20px] overflow-hidden shadow-2xl">
              <Image src="/visuals/global-mobility.jpg" alt="Executive in International Terminal" fill className="object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif text-tlg-midnight mb-6">Complexity in Cross-Border Movement</h2>
              <p className="text-gray-600 font-light text-lg leading-relaxed mb-6">
                International relocation involves a highly complex web of administrative filing, credential assessment, and logistical coordination. Whether an enterprise is transferring a specialized executive, or an individual is navigating a new career landscape abroad, friction during this process leads to significant delays and cost overruns.
              </p>
              <p className="text-gray-600 font-light text-lg leading-relaxed">
                Our Global Mobility division steps in to bring order to this complexity. We manage the administrative heavy lifting, ensuring that our clients experience a coordinated, compliant transition into their new operating environments.
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
            <h2 className="text-4xl font-serif text-tlg-midnight">Core Mobility Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white border border-tlg-stone p-10 rounded-[20px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold">
                <Briefcase size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3 group-hover:text-tlg-signatureGold transition-colors">Corporate Relocation Logistics</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                End-to-end management of executive transfers, ensuring minimal disruption to business continuity during cross-border assignments.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Transfer timeline management</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Corporate filing coordination</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Policy compliance monitoring</li>
              </ul>
            </div>

            <div className="bg-white border border-tlg-stone p-10 rounded-[20px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold">
                <FileCheck size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3 group-hover:text-tlg-signatureGold transition-colors">Documentary Compliance</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                Rigorous auditing of required paperwork before submission to authorities, mitigating the risk of administrative rejection due to technical errors.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Credential verification support</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Application package audits</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Third-party notarization coordination</li>
              </ul>
            </div>

            <div className="bg-white border border-tlg-stone p-10 rounded-[20px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold">
                <Building2 size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3 group-hover:text-tlg-signatureGold transition-colors">Settlement &amp; Integration</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                On-the-ground logistical support to facilitate rapid integration into the destination country's professional and social infrastructure.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Accommodation sourcing</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Financial &amp; banking setup guidance</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Local civic registration assistance</li>
              </ul>
            </div>

            <div className="bg-white border border-tlg-stone p-10 rounded-[20px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold">
                <Plane size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3 group-hover:text-tlg-signatureGold transition-colors">Pathway Advisory</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                Consultative sessions to evaluate which international mobility pathways align with a client's professional background and long-term objectives.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Feasibility assessments</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Regional economic trend briefings</li>
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
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">Multinational Enterprises</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">C-Suite Executives</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">Highly Skilled Professionals</span>
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
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Audit</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Evaluating the corporate mandate or individual profile against the administrative requirements of the destination country.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">2</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Structure</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Developing a clear timeline and checklist for credential gathering, filing, and logistical milestones.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">3</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Execute</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Active management of the documentation process, ensuring zero technical errors before final submission.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">4</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Settle</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Post-arrival support to finalize local registration, housing, and integration.</p>
              </div>
            </div>
          </div>

          <div className="bg-tlg-midnight text-white p-10 md:p-14">
            <h3 className="text-2xl font-serif mb-8">What You Receive</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-tlg-signatureGold shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Mobility Roadmap</h4>
                  <p className="text-white/60 font-light text-sm">A customized project plan detailing critical deadlines and administrative milestones.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-tlg-signatureGold shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Document Readiness Audit</h4>
                  <p className="text-white/60 font-light text-sm">A formal review report certifying that all paperwork is structured correctly for submission.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-tlg-signatureGold shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Settlement Guide</h4>
                  <p className="text-white/60 font-light text-sm">Tailored orientation material for navigating the specific civic requirements of the destination city.</p>
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
          <h2 className="text-3xl font-serif text-tlg-midnight mb-8">Eliminating Administrative Friction</h2>
          <p className="text-gray-600 font-light text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            For global enterprises, a delayed executive transfer can stall an entire regional launch. For individuals, an administrative oversight can delay a career move by months. We act as the central nervous system for the relocation process—tracking the moving parts, auditing the documentation, and managing the timelines so our clients can remain focused on their commercial objectives.
          </p>
        </div>
      </section>

      {/* 09 - Market Availability */}
      <section className="py-16 border-b border-tlg-stone">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-2">Key Corridors</h3>
              <p className="text-sm text-gray-500 font-light">Our mobility advisory maintains specific expertise in these primary markets.</p>
            </div>
            <div className="flex gap-6 text-sm font-semibold text-tlg-midnight">
              <span className="flex items-center gap-2"><MapPin size={16} className="text-tlg-signatureGold" /> Canada</span>
              <span className="flex items-center gap-2"><MapPin size={16} className="text-tlg-signatureGold" /> UAE</span>
              <span className="flex items-center gap-2"><MapPin size={16} className="text-tlg-signatureGold" /> United Kingdom</span>
            </div>
          </div>
        </div>
      </section>

      {/* 14 - Final CTA */}
      <section className="py-24 bg-tlg-midnight text-white text-center">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-serif mb-6">Structure Your Transition</h2>
          <p className="text-white/70 font-light mb-10 text-lg">
            Schedule a confidential consultation to discuss the logistical requirements for your corporate or individual mobility goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book" className="bg-tlg-signatureGold text-tlg-midnight px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors">
              Book an Assessment
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
