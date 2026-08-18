import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, GraduationCap, BookOpen, Globe2, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "Education Advisory | Triumphal Lifetime Group",
  description: "Academic planning, institutional placement, and international education strategy.",
};

export default function EducationAdvisoryPage() {
  return (
    <main className="bg-white pb-24">
      {/* 02 - Division Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-tlg-midnight text-white border-b border-tlg-signatureGold/20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
          <Link href="/companies" className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-tlg-signatureGold transition-colors mb-10">
            <ArrowRight size={12} className="mr-2 rotate-180" /> Back to Divisions
          </Link>
          <div className="max-w-4xl">
            <span className="text-tlg-signatureGold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Division 03</span>
            <h1 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-6">
              Education Advisory
            </h1>
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl mb-10">
              Aligning academic ambition with global opportunity. We provide structured advisory for international institutional placement and academic pathway planning.
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
              <p className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-2">Destinations</p>
              <p className="text-sm font-semibold text-tlg-midnight">Canada &middot; UK &middot; Global</p>
            </div>
            <div className="md:px-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-2">Primary Focus</p>
              <p className="text-sm font-semibold text-tlg-midnight">Academic Pathways</p>
            </div>
            <div className="md:px-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-2">Who We Support</p>
              <p className="text-sm font-semibold text-tlg-midnight">Students &amp; Professionals</p>
            </div>
            <div className="md:px-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-2">Engagement</p>
              <p className="text-sm font-semibold text-tlg-midnight">Profile &rarr; Placement</p>
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
              Triumphal Lifetime Group provides independent academic consulting and administrative guidance. We do not guarantee admission into any educational institution, nor do we guarantee the issuance of scholarships, funding, or student visas. Final admissions decisions rest entirely with the respective institutions.
            </p>
          </div>
        </div>
      </section>

      {/* 04 - Problem / Opportunity */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-tlg-midnight mb-6">Navigating International Education</h2>
              <p className="text-gray-600 font-light text-lg leading-relaxed mb-6">
                Selecting the right academic institution requires more than just reviewing prospectuses. It requires a deep understanding of how a specific degree or program aligns with long-term career trajectories and global mobility objectives.
              </p>
              <p className="text-gray-600 font-light text-lg leading-relaxed">
                We act as strategic advisors to students, professionals, and corporate sponsors, matching academic ambition with the right international institutions to foster global competitiveness.
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px] w-full rounded-[20px] overflow-hidden shadow-2xl">
              <Image src="/visuals/education.jpg" alt="Executive Education Training" fill className="object-cover hover:scale-105 transition-transform duration-700" />
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
                <GraduationCap size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3 group-hover:text-tlg-signatureGold transition-colors">Academic Pathway Planning</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                We assess your current academic standing and career goals to engineer a structured pathway into top-tier undergraduate or postgraduate programs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Course &amp; curriculum alignment</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Credential evaluation guidance</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Long-term career mapping</li>
              </ul>
            </div>

            <div className="bg-white border border-tlg-stone p-10 rounded-[20px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold">
                <Building size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3 group-hover:text-tlg-signatureGold transition-colors">Institutional Placement</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                Navigate the complex admissions landscape with structured administrative support, ensuring all applications meet strict institutional requirements.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> University shortlisting</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Application package review</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Interview preparation</li>
              </ul>
            </div>

            <div className="bg-white border border-tlg-stone p-10 rounded-[20px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold">
                <Globe2 size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3 group-hover:text-tlg-signatureGold transition-colors">Post-Graduate Relocation Support</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                Working in tandem with our Global Mobility division, we assist students transitioning from education into international work environments.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Post-study work pathways</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Professional credential transition</li>
              </ul>
            </div>

            <div className="bg-white border border-tlg-stone p-10 rounded-[20px] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold">
                <BookOpen size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3 group-hover:text-tlg-signatureGold transition-colors">Corporate Training Advisory</h3>
              <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                We advise enterprises on structuring executive education and professional development programs at leading international institutions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Executive MBA placement</li>
                <li className="flex items-start gap-3 text-sm text-gray-500 font-light"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Technical certification mapping</li>
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
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">Undergraduate Applicants</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">Postgraduate &amp; Research</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">Mid-Career Professionals</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">Corporate Sponsors</span>
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
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Profile Assessment</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">We evaluate academic transcripts, career history, and long-term goals to determine institutional fit.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">2</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Strategic Shortlisting</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Identification of 3-5 target institutions that align with both academic capability and regional mobility preferences.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">3</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Application Engineering</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Rigorous review and structuring of personal statements, CVs, and supporting documentation.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">4</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Pre-Departure Briefing</h4>
                <p className="text-gray-500 font-light text-sm leading-relaxed">Final preparatory guidance addressing logistics, academic culture, and regulatory compliance in the destination country.</p>
              </div>
            </div>
          </div>

          <div className="bg-tlg-midnight text-white p-10 md:p-14">
            <h3 className="text-2xl font-serif mb-8">What You Receive</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-tlg-signatureGold shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Academic Gap Analysis</h4>
                  <p className="text-white/60 font-light text-sm">Identifying necessary prerequisites or testing (IELTS/GMAT) required for admission.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-tlg-signatureGold shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Curated Institution List</h4>
                  <p className="text-white/60 font-light text-sm">A highly targeted shortlist of universities matched to your exact profile.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-tlg-signatureGold shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-sm mb-1">Document Audit</h4>
                  <p className="text-white/60 font-light text-sm">Comprehensive review ensuring all submitted paperwork is institution-compliant.</p>
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
          <h2 className="text-3xl font-serif text-tlg-midnight mb-8">Beyond the Acceptance Letter</h2>
          <p className="text-gray-600 font-light text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            Securing admission is only the first step. The true value of international education lies in how it positions you for future opportunities. By integrating our education advisory with our global mobility insights, we ensure that the programs our clients choose naturally feed into sustainable, long-term career pathways in their target regions.
          </p>
        </div>
      </section>

      {/* 11 - Cross-Referral */}
      <section className="py-16 border-b border-tlg-stone">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center">
          <p className="text-sm text-gray-500 font-light">
            <strong className="text-tlg-midnight font-medium">Planning to relocate for study?</strong> Our <Link href="/solutions/global-mobility" className="text-tlg-signatureGold hover:text-tlg-midnight transition-colors underline underline-offset-4">Global Mobility</Link> division can assist with the logistical transition once your academic placement is secured.
          </p>
        </div>
      </section>

      {/* 14 - Final CTA */}
      <section className="py-24 bg-tlg-midnight text-white text-center">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-serif mb-6">Begin Your Academic Journey</h2>
          <p className="text-white/70 font-light mb-10 text-lg">
            Schedule a profile assessment with our education advisory team to discuss your global academic options.
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
