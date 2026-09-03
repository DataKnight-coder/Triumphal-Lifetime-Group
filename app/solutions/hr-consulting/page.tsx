import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Users, Target, Building2, Scale, BarChart3, Presentation, Briefcase, Network, Lightbulb, MapPin } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import { getFaqsByDivision } from "@/lib/wordpress/client";

export const metadata: Metadata = {
  title: "HR & Business Consulting - Nigeria, UAE & Canada | Triumphal Lifetime Group",
  description: "HR consulting, talent acquisition, organisational design, performance management and leadership training for growing businesses in Nigeria, UAE and Canada.",
};

export default async function HRConsultingPage() {
  const faqs = await getFaqsByDivision("hr-consulting");

  return (
    <main className="bg-white pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white text-tlg-midnight border-b border-tlg-stone overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="w-full lg:w-1/2">
            <Link href="/companies" className="inline-flex items-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700 hover:text-tlg-signatureGold transition-colors mb-10">
              <ArrowRight size={12} className="mr-2 rotate-180" /> Back to Divisions
            </Link>
            <div className="max-w-4xl">
              <Reveal><span className="text-tlg-signatureGold text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4 block">HR & BUSINESS CONSULTING</span></Reveal>
              <Reveal delay={0.1}><h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] mb-6">
                Build a Stronger Team. Run a Stronger Business.
              </h1></Reveal>
              <Reveal delay={0.2}><p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-2xl mb-10">
                We help growing organisations improve their people, processes and HR systems - from recruitment and policies to performance management, training and business advisory.
              </p></Reveal>
              
              <Reveal delay={0.3}>
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-tlg-signatureGold mb-10">
                  <span className="flex items-center gap-2"><MapPin size={14} /> Nigeria</span> &middot;
                  <span className="flex items-center gap-2"><MapPin size={14} /> UAE</span> &middot;
                  <span className="flex items-center gap-2"><MapPin size={14} /> Canada</span>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="?book=true&service=hr-consulting" className="bg-tlg-midnight text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-tlg-signatureGold hover:text-tlg-midnight hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                    Book an HR Consultation
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Reveal delay={0.2} className="relative h-[400px] lg:h-[550px] w-full rounded-[24px] overflow-hidden shadow-sm border border-tlg-stone">
               <Image src="/visuals/hr_team.jpg" alt="Professional HR Team" fill className="object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Service Categories Strip */}
      <section className="py-8 bg-tlg-midnight">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex-1 py-4 md:py-0 md:px-8 flex flex-col items-center text-center justify-center">
              <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-tlg-signatureGold">Recruitment & Talent</span>
            </div>
            <div className="flex-1 py-4 md:py-0 md:px-8 flex flex-col items-center text-center justify-center">
              <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-tlg-signatureGold">HR Policies & Compliance</span>
            </div>
            <div className="flex-1 py-4 md:py-0 md:px-8 flex flex-col items-center text-center justify-center">
              <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-tlg-signatureGold">Performance & Development</span>
            </div>
            <div className="flex-1 py-4 md:py-0 md:px-8 flex flex-col items-center text-center justify-center">
              <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-tlg-signatureGold">Workforce Strategy</span>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-tlg-ivory border-b border-tlg-stone">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <Reveal><span className="text-xs font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Who We Work With</span></Reveal>
          <Reveal delay={0.1}><h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight mb-8">HR Solutions Built Around Your Business</h2></Reveal>
          <Reveal delay={0.2}><p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed mb-6">
            We work with growing businesses, established organisations, executives, and leadership teams that need stronger people systems and better workforce outcomes.
          </p></Reveal>
        </div>
      </section>

      {/* Core Services Grid */}
      <section id="services" className="py-24 scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Reveal><div className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif text-tlg-midnight">Our HR Consulting Services</h2>
          </div></Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Executive Search */}
            <Reveal delay={0.1} className="flex"><div className="bg-white border border-tlg-stone p-10 rounded-[24px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col w-full group">
              <div className="w-14 h-14 bg-tlg-ivory border border-tlg-stone rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <Target size={24} />
              </div>
              <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Find the Right People for Critical Roles.</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-6">
                From role definition and candidate screening to shortlisting and onboarding support, we help businesses run a more focused recruitment process.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Executive search</li>
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Board appointments</li>
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Specialist talent sourcing</li>
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Candidate screening</li>
              </ul>
              <Link href="?book=true&service=hr-consulting" className="text-xs font-bold uppercase tracking-widest text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors pt-6 border-t border-tlg-stone">
                Recruit Talent <ArrowRight size={14} className="ml-2" />
              </Link>
            </div></Reveal>

            {/* Talent Acquisition */}
            <Reveal delay={0.2} className="flex"><div className="bg-white border border-tlg-stone p-10 rounded-[24px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col w-full group">
              <div className="w-14 h-14 bg-tlg-ivory border border-tlg-stone rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <Users size={24} />
              </div>
              <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Build a Workforce That Matches Your Needs.</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-6">
                We support companies with permanent hiring, contract staffing, and workforce requirements, helping you define the role and prepare job descriptions.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Permanent & contract staffing</li>
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Volume recruitment support</li>
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Workforce planning</li>
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Recruitment process design</li>
              </ul>
              <Link href="?book=true&service=hr-consulting" className="text-xs font-bold uppercase tracking-widest text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors pt-6 border-t border-tlg-stone">
                Plan Your Workforce <ArrowRight size={14} className="ml-2" />
              </Link>
            </div></Reveal>

            {/* Organisational Design */}
            <Reveal delay={0.3} className="flex"><div className="bg-white border border-tlg-stone p-10 rounded-[24px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col w-full group">
              <div className="w-14 h-14 bg-tlg-ivory border border-tlg-stone rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <Building2 size={24} />
              </div>
              <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Organisational Design</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-6">
                Create a structure that supports accountability, efficiency, and growth. We assess how your teams and responsibilities work together and identify opportunities for improvement.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Structure & workforce audits</li>
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Job role profiling & descriptions</li>
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Reporting-line design</li>
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Department restructuring</li>
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Role clarity frameworks</li>
              </ul>
              <Link href="?book=true&service=hr-consulting" className="text-xs font-bold uppercase tracking-widest text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors pt-6 border-t border-tlg-stone">
                Review Your Organisation <ArrowRight size={14} className="ml-2" />
              </Link>
            </div></Reveal>

            {/* Corporate Governance */}
            <Reveal delay={0.4} className="flex"><div className="bg-white border border-tlg-stone p-10 rounded-[24px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col w-full group">
              <div className="w-14 h-14 bg-tlg-ivory border border-tlg-stone rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <Scale size={24} />
              </div>
              <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Corporate Governance</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-6">
                Build clear workplace policies and reduce operational risk. We help organisations create HR systems that support fair decision-making, accountability, and compliance.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Employee handbooks</li>
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> HR policy development</li>
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Compliance reviews</li>
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Disciplinary & grievance frameworks</li>
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> HR governance structures</li>
              </ul>
              <Link href="?book=true&service=hr-consulting" className="text-xs font-bold uppercase tracking-widest text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors pt-6 border-t border-tlg-stone">
                Strengthen Your HR Systems <ArrowRight size={14} className="ml-2" />
              </Link>
            </div></Reveal>

            {/* Performance Management */}
            <Reveal delay={0.5} className="flex"><div className="bg-white border border-tlg-stone p-10 rounded-[24px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col w-full group">
              <div className="w-14 h-14 bg-tlg-ivory border border-tlg-stone rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Performance Management</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-6">
                Turn business goals into measurable employee performance. We help build systems that clarify expectations, improve accountability, and support employee development.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> KPI & OKR frameworks</li>
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Performance appraisal systems</li>
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Compensation & reward structures</li>
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Performance improvement plans</li>
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Promotion frameworks</li>
              </ul>
              <Link href="?book=true&service=hr-consulting" className="text-xs font-bold uppercase tracking-widest text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors pt-6 border-t border-tlg-stone">
                Improve Workforce Performance <ArrowRight size={14} className="ml-2" />
              </Link>
            </div></Reveal>

            {/* Leadership Development */}
            <Reveal delay={0.6} className="flex"><div className="bg-white border border-tlg-stone p-10 rounded-[24px] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col w-full group">
              <div className="w-14 h-14 bg-tlg-ivory border border-tlg-stone rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <Presentation size={24} />
              </div>
              <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Leadership Development</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-6">
                Develop capable teams and stronger managers. We design practical training programmes around the needs of your organisation and workforce.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Leadership & management training</li>
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Workplace communication</li>
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Interview & performance skills</li>
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Team development & productivity</li>
                <li className="flex items-start gap-3 text-sm text-gray-700"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0 mt-0.5" /> Custom corporate training</li>
              </ul>
              <Link href="?book=true&service=hr-consulting" className="text-xs font-bold uppercase tracking-widest text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors pt-6 border-t border-tlg-stone">
                Plan a Training Programme <ArrowRight size={14} className="ml-2" />
              </Link>
            </div></Reveal>

          </div>
        </div>
      </section>

      {/* Sector Expertise with Light Imagery */}
      <section className="py-24 bg-tlg-ivory border-y border-tlg-stone">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Reveal><div className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Sector Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif text-tlg-midnight">We support organisations across multiple industries.</h2>
          </div></Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Healthcare */}
            <Reveal delay={0.1} className="group bg-white rounded-[24px] overflow-hidden border border-tlg-stone hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-[200px] w-full">
                <Image src="/visuals/healthcare.jpg" alt="Healthcare" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-serif mb-2 text-tlg-midnight">Healthcare</h4>
                <p className="text-gray-800 text-sm">Recruit qualified professionals and build workforce systems that support quality service delivery.</p>
              </div>
            </Reveal>

            {/* Logistics */}
            <Reveal delay={0.2} className="group bg-white rounded-[24px] overflow-hidden border border-tlg-stone hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-[200px] w-full">
                <Image src="/visuals/logistics.jpg" alt="Logistics" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-serif mb-2 text-tlg-midnight">Logistics</h4>
                <p className="text-gray-800 text-sm">Improve staffing, workforce planning, operational performance, and employee accountability.</p>
              </div>
            </Reveal>

            {/* Financial Services */}
            <Reveal delay={0.3} className="group bg-white rounded-[24px] overflow-hidden border border-tlg-stone hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-[200px] w-full">
                <Image src="/visuals/fintech.jpg" alt="Financial Services" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-serif mb-2 text-tlg-midnight">Financial & Fintech</h4>
                <p className="text-gray-800 text-sm">Source specialised talent and strengthen people systems for fast-growing financial organisations.</p>
              </div>
            </Reveal>

            {/* Agriculture */}
            <Reveal delay={0.4} className="group bg-white rounded-[24px] overflow-hidden border border-tlg-stone hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-[200px] w-full">
                <Image src="/visuals/agriculture.jpg" alt="Agriculture" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-serif mb-2 text-tlg-midnight">Agriculture</h4>
                <p className="text-gray-800 text-sm">Support seasonal staffing, operational recruitment, workforce planning, and organisational development.</p>
              </div>
            </Reveal>

            {/* Retail */}
            <Reveal delay={0.1} className="group bg-white rounded-[24px] overflow-hidden border border-tlg-stone hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-[200px] w-full">
                <Image src="/visuals/retail.jpg" alt="Retail" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-serif mb-2 text-tlg-midnight">Retail</h4>
                <p className="text-gray-800 text-sm">Build effective frontline teams, management structures, and performance systems.</p>
              </div>
            </Reveal>

            {/* Real Estate */}
            <Reveal delay={0.2} className="group bg-white rounded-[24px] overflow-hidden border border-tlg-stone hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-[200px] w-full">
                <Image src="/visuals/real-estate.jpg" alt="Real Estate" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-serif mb-2 text-tlg-midnight">Real Estate</h4>
                <p className="text-gray-800 text-sm">Recruit sales, operations, management, and specialist professionals.</p>
              </div>
            </Reveal>

            {/* Technology */}
            <Reveal delay={0.3} className="lg:col-span-2 group bg-white rounded-[24px] overflow-hidden border border-tlg-stone hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row">
              <div className="relative h-[200px] md:h-full md:w-[250px] shrink-0">
                <Image src="/visuals/technology.jpg" alt="Technology" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h4 className="text-xl font-serif mb-2 text-tlg-midnight">Technology</h4>
                <p className="text-gray-800 text-sm max-w-lg">Source specialised talent and develop workforce systems for growing digital businesses.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Consulting Process */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <Reveal><div>
            <h2 className="text-3xl font-serif text-tlg-midnight mb-10">Our Consulting Process</h2>
            <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[15px] before:w-px before:bg-tlg-stone">
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">1</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Assess</h4>
                <p className="text-gray-800 text-sm leading-relaxed">We examine your workforce, structure, challenges, goals, and current HR systems.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">2</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Recommend</h4>
                <p className="text-gray-800 text-sm leading-relaxed">We identify gaps and develop practical recommendations based on your organisation's needs.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">3</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Implement</h4>
                <p className="text-gray-800 text-sm leading-relaxed">We help you put the recommended systems, structures, policies, or recruitment strategy into action.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">4</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Support</h4>
                <p className="text-gray-800 text-sm leading-relaxed">We provide continued guidance, monitoring, and advisory support where required.</p>
              </div>
            </div>
          </div></Reveal>

          <Reveal delay={0.2}><div className="bg-tlg-midnight text-white p-10 md:p-14 rounded-[24px]">
            <h3 className="text-2xl font-serif mb-8">What You Receive</h3>
            <p className="text-white/90 text-sm mb-8">Depending on your project, your organisation may receive:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex items-center gap-3 text-sm text-white/90"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0" /> HR diagnostic reports</li>
              <li className="flex items-center gap-3 text-sm text-white/90"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0" /> Workforce assessments</li>
              <li className="flex items-center gap-3 text-sm text-white/90"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0" /> Structure recommendations</li>
              <li className="flex items-center gap-3 text-sm text-white/90"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0" /> Recruitment strategies</li>
              <li className="flex items-center gap-3 text-sm text-white/90"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0" /> Candidate shortlists</li>
              <li className="flex items-center gap-3 text-sm text-white/90"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0" /> Job descriptions</li>
              <li className="flex items-center gap-3 text-sm text-white/90"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0" /> HR policies & Handbooks</li>
              <li className="flex items-center gap-3 text-sm text-white/90"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0" /> Performance frameworks</li>
              <li className="flex items-center gap-3 text-sm text-white/90"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0" /> Implementation roadmaps</li>
              <li className="flex items-center gap-3 text-sm text-white/90"><CheckCircle2 size={16} className="text-tlg-signatureGold shrink-0" /> Training programmes</li>
            </ul>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white font-serif italic text-lg text-center">Every engagement focuses on practical outcomes your organisation can implement.</p>
            </div>
          </div></Reveal>

        </div>
      </section>

      {/* Dual CTA */}
      <section className="py-24 bg-tlg-ivory border-y border-tlg-stone">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal><div className="bg-white p-10 md:p-14 rounded-[24px] border border-tlg-stone shadow-sm h-full flex flex-col items-start">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-800 mb-4 block">For Employers</span>
              <h2 className="text-3xl font-serif text-tlg-midnight mb-6">Build the Team Your Business Needs</h2>
              <p className="text-gray-800 leading-relaxed mb-10">
                Whether you need one senior executive, an entire department, stronger HR systems, or better workforce performance, we can support your organisation.
              </p>
              <Link href="?book=true&service=hr-consulting" className="bg-tlg-midnight text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-tlg-signatureGold hover:text-tlg-midnight hover:-translate-y-1 hover:shadow-lg transition-all duration-300 mt-auto">
                Speak With an HR Consultant
              </Link>
            </div></Reveal>

            <Reveal delay={0.2}><div className="bg-white p-10 md:p-14 rounded-[24px] border border-tlg-stone shadow-sm h-full flex flex-col items-start">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-800 mb-4 block">For Professionals</span>
              <h2 className="text-3xl font-serif text-tlg-midnight mb-6">Take the Next Step in Your Career</h2>
              <p className="text-gray-800 leading-relaxed mb-6">
                We connect qualified professionals with suitable opportunities and provide career support designed to improve employability.
              </p>
              <ul className="space-y-2 mb-10">
                <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 size={14} className="text-tlg-signatureGold" /> Job opportunities & Talent registration</li>
                <li className="flex items-center gap-2 text-sm text-gray-700"><CheckCircle2 size={14} className="text-tlg-signatureGold" /> CV review, Interview prep & Career guidance</li>
              </ul>
              <Link href="/careers" className="bg-transparent border border-tlg-stone text-tlg-midnight px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:border-tlg-midnight hover:-translate-y-1 hover:shadow-lg transition-all duration-300 mt-auto">
                Join Our Talent Network
              </Link>
            </div></Reveal>
          </div>
        </div>
      </section>

      {/* Why Triumphal */}
      <section className="py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <Reveal><div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Why Triumphal Lifetime Group?</span>
            <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight">The Triumphal Difference</h2>
          </div></Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Reveal delay={0.1}><div className="p-8 border border-tlg-stone rounded-[24px]">
              <Briefcase className="text-tlg-signatureGold mb-6" size={32} />
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">Business-Focused</h3>
              <p className="text-gray-800 text-sm">We align every recommendation with your commercial and operational goals.</p>
            </div></Reveal>
            <Reveal delay={0.2}><div className="p-8 border border-tlg-stone rounded-[24px]">
              <Network className="text-tlg-signatureGold mb-6" size={32} />
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">End-to-End Support</h3>
              <p className="text-gray-800 text-sm">We support recruitment, structure, governance, performance, training, and workforce strategy.</p>
            </div></Reveal>
            <Reveal delay={0.3}><div className="p-8 border border-tlg-stone rounded-[24px]">
              <MapPin className="text-tlg-signatureGold mb-6" size={32} />
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">International Perspective</h3>
              <p className="text-gray-800 text-sm">We serve clients and professionals across Nigeria, the UAE, and Canada.</p>
            </div></Reveal>
            <Reveal delay={0.4}><div className="p-8 border border-tlg-stone rounded-[24px]">
              <CheckCircle2 className="text-tlg-signatureGold mb-6" size={32} />
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">Practical Implementation</h3>
              <p className="text-gray-800 text-sm">We do more than make recommendations. We help organisations put the right systems into operation.</p>
            </div></Reveal>
            <Reveal delay={0.5}><div className="p-8 border border-tlg-stone rounded-[24px]">
              <Lightbulb className="text-tlg-signatureGold mb-6" size={32} />
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">Flexible Engagement</h3>
              <p className="text-gray-800 text-sm">Engage us for a single project, recruitment assignment, HR audit, training programme, or ongoing advisory.</p>
            </div></Reveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs.length > 0 && (
      <section className="py-24 bg-tlg-ivory border-y border-tlg-stone">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <Reveal><div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Common Questions</span>
            <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight">Frequently Asked Questions</h2>
          </div></Reveal>
          <div className="space-y-0">
            {faqs.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <details className="group border-b border-tlg-stone py-6 cursor-pointer">
                  <summary className="flex justify-between items-center font-serif text-lg text-tlg-midnight list-none">
                    {item.question}
                    <span className="text-tlg-signatureGold text-2xl font-normal group-open:rotate-45 transition-transform duration-200 ml-4 shrink-0">+</span>
                  </summary>
                  <div className="mt-4 text-sm text-gray-700 leading-relaxed max-w-3xl" dangerouslySetInnerHTML={{ __html: item.answer }} />
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Final CTA */}
      <section className="py-24 bg-tlg-midnight text-white text-center">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <Reveal><h2 className="text-4xl md:text-5xl font-serif mb-6">Build a Workforce That Supports Growth</h2></Reveal>
          <Reveal delay={0.1}><p className="text-white/90 mb-10 text-lg max-w-2xl mx-auto">
            Strong organisations require the right people, clear structures, effective leadership, and reliable systems. Triumphal Lifetime Group helps you build them.
          </p></Reveal>
          <Reveal delay={0.2}><div className="flex flex-wrap justify-center gap-4">
            <Link href="?book=true&service=hr-consulting" className="bg-tlg-signatureGold text-tlg-midnight px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              Book an HR Consultation
            </Link>
            <Link href="/contact" className="bg-transparent border border-white/20 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:border-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              Request a Proposal
            </Link>
          </div></Reveal>
        </div>
      </section>
    </main>
  );
}
