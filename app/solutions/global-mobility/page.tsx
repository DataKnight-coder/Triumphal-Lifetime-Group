import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Plane, FileCheck, Briefcase, Building2, MapPin, GraduationCap, Users } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import { getFaqsByDivision } from "@/lib/content/faqs";

export const metadata: Metadata = {
  title: "Global Mobility & Immigration Advisory - Canada, UAE & UK | Triumphal Lifetime Group",
  description: "Administrative support and advisory for study visas, work permits, business visas, family relocation and international settlement. Serving Nigeria, Canada, UAE and UK.",
};

export default async function GlobalMobilityPage() {
  const faqs = await getFaqsByDivision("global-mobility");

  return (
    <main className="bg-white pb-24">
      {/* Hero Section - Split Editorial Layout */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white border-b border-tlg-stone overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="w-full lg:w-1/2">
            <Link href="/companies" className="inline-flex items-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700 hover:text-tlg-signatureGold transition-colors mb-10">
              <ArrowRight size={12} className="mr-2 rotate-180" /> Back to Divisions
            </Link>
            <Reveal><span className="text-tlg-signatureGold text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4 block">GLOBAL MOBILITY</span></Reveal>
            <Reveal delay={0.1}><h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] text-tlg-midnight mb-6">
              Organise Your Immigration Strategy with Professional Guidance.
            </h1></Reveal>
            <Reveal delay={0.2}><p className="text-lg text-gray-800 leading-relaxed max-w-xl mb-10">
              From study and work visas to business travel and family relocation, we provide administrative support and advisory to help you navigate international mobility.
            </p></Reveal>
            
            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-tlg-signatureGold mb-10">
                <span className="flex items-center gap-2"><MapPin size={14} /> Canada</span> &middot;
                <span className="flex items-center gap-2"><MapPin size={14} /> UAE</span> &middot;
                <span className="flex items-center gap-2"><MapPin size={14} /> UK</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="?book=true&service=global-mobility" className="bg-tlg-midnight text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-tlg-signatureGold hover:text-tlg-midnight hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  Book a Consultation
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="w-full lg:w-1/2">
            <Reveal delay={0.2} className="relative h-[400px] lg:h-[500px] w-full rounded-[24px] overflow-hidden shadow-xl border border-tlg-stone">
               <Image src="/visuals/mobility-professional.jpg" alt="International Professional Consultation" fill className="object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Compliance Notice (Proof/Responsible) */}
      <section className="bg-tlg-ivory py-4 border-b border-tlg-stone">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <p className="text-xs text-gray-800 uppercase tracking-widest font-bold text-center">
            Notice: We are not a government embassy and do not issue visas. Final visa decisions are made by respective governments.
          </p>
        </div>
      </section>

      {/* Who It Is For */}
      <section className="py-24 bg-white border-b border-tlg-stone">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <Reveal><span className="text-[11px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Who We Work With</span></Reveal>
          <Reveal delay={0.1}><h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight mb-8">Administrative Logistics & Strategic Advisory</h2></Reveal>
          <Reveal delay={0.2}><p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed mb-10">
            We support enterprises, executives, students, and skilled professionals seeking compliant transitions into new operating environments.
          </p></Reveal>
          <Reveal delay={0.3}><div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">Multinational Enterprises</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">C-Suite Executives</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">Skilled Professionals</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">International Students</span>
          </div></Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-24 bg-tlg-ivory border-b border-tlg-stone scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Reveal><div className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-serif text-tlg-midnight">What You Can Hire Us For</h2>
          </div></Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Reveal delay={0.1} className="flex"><div className="bg-white border border-tlg-stone p-8 rounded-[24px] flex flex-col w-full group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">Study Visas</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-6 flex-1">Administrative coordination for international students, ensuring application documentation meets embassy standards.</p>
            </div></Reveal>

            <Reveal delay={0.2} className="flex"><div className="bg-white border border-tlg-stone p-8 rounded-[24px] flex flex-col w-full group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <Briefcase size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">Work & Business</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-6 flex-1">Support for skilled professionals and business travellers requiring compliant transitions into new commercial environments.</p>
            </div></Reveal>

            <Reveal delay={0.3} className="flex"><div className="bg-white border border-tlg-stone p-8 rounded-[24px] flex flex-col w-full group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <Plane size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">Visit & Family</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-6 flex-1">Assistance with tourist applications and family reunification documentation for seamless international travel.</p>
            </div></Reveal>

            <Reveal delay={0.4} className="flex"><div className="bg-white border border-tlg-stone p-8 rounded-[24px] flex flex-col w-full group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <Building2 size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">Relocation Support</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-6 flex-1">Logistical coordination covering accommodation sourcing, financial setup guidance, and local integration assistance.</p>
            </div></Reveal>

            <Reveal delay={0.5} className="flex"><div className="bg-white border border-tlg-stone p-8 rounded-[24px] flex flex-col w-full group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <FileCheck size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">Document Organisation</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-6 flex-1">Structured auditing and preparation of credentials, ensuring paperwork is correctly formatted before final submission.</p>
            </div></Reveal>

            <Reveal delay={0.6} className="flex"><div className="bg-white border border-tlg-stone p-8 rounded-[24px] flex flex-col w-full group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <Users size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">Professional Referrals</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-6 flex-1">We connect you with authorized legal professionals in relevant jurisdictions when regulated immigration advice is required.</p>
            </div></Reveal>
          </div>
        </div>
      </section>

      {/* Visual Storytelling Section */}
      <section className="py-24 bg-white border-b border-tlg-stone">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal><div className="relative h-[400px] rounded-[24px] overflow-hidden border border-tlg-stone">
              <Image src="/visuals/mobility-documents.jpg" alt="Document Preparation & Auditing" fill className="object-cover" />
            </div></Reveal>
            <Reveal delay={0.2}><div>
              <h3 className="text-3xl font-serif text-tlg-midnight mb-6">Meticulous Document Preparation</h3>
              <p className="text-gray-800 text-lg leading-relaxed mb-6">
                The success of any mobility strategy relies on precision. We help organise, audit, and structure your credentials to meet the exact standards required by international authorities, minimising the risk of technical refusals.
              </p>
            </div></Reveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-24">
            <Reveal className="order-2 md:order-1"><div>
              <h3 className="text-3xl font-serif text-tlg-midnight mb-6">Structured Relocation Planning</h3>
              <p className="text-gray-800 text-lg leading-relaxed mb-6">
                Moving across borders involves more than visas. We provide settlement guides and logistical support - from understanding local housing markets to navigating civic registrations - so you can transition smoothly into your new environment.
              </p>
            </div></Reveal>
            <Reveal delay={0.2} className="order-1 md:order-2"><div className="relative h-[400px] rounded-[24px] overflow-hidden border border-tlg-stone">
              <Image src="/visuals/mobility-relocation.jpg" alt="Relocation Planning and Settlement" fill className="object-cover" />
            </div></Reveal>
          </div>
        </div>
      </section>

      {/* How It Works & Deliverables */}
      <section className="py-24 bg-tlg-ivory border-b border-tlg-stone">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <Reveal><div>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">How It Works</span>
            <h2 className="text-3xl font-serif text-tlg-midnight mb-10">Our Process</h2>
            <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[15px] before:w-px before:bg-tlg-stone">
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-white border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">1</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Audit</h4>
                <p className="text-gray-800 text-sm leading-relaxed">Evaluating your corporate mandate or individual profile against the administrative requirements of the destination country.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-white border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">2</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Structure</h4>
                <p className="text-gray-800 text-sm leading-relaxed">Developing a clear timeline and checklist for credential gathering, filing, and logistical milestones.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-white border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">3</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Execute</h4>
                <p className="text-gray-800 text-sm leading-relaxed">Active management of the documentation process, aiming to minimize technical errors before final submission.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-white border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">4</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Settle</h4>
                <p className="text-gray-800 text-sm leading-relaxed">Post-arrival support to facilitate local registration, housing, and integration.</p>
              </div>
            </div>
          </div></Reveal>

          <Reveal delay={0.2}><div className="bg-tlg-midnight text-white p-10 md:p-14 rounded-[24px]">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/70 mb-4 block">Deliverables</span>
            <h3 className="text-2xl font-serif mb-8">What You Receive</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-tlg-signatureGold shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-sm mb-1 uppercase tracking-widest text-white/90">Mobility Roadmap</h4>
                  <p className="text-white/70 text-sm">A customized project plan detailing critical deadlines and administrative milestones.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-tlg-signatureGold shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-sm mb-1 uppercase tracking-widest text-white/90">Document Readiness Audit</h4>
                  <p className="text-white/70 text-sm">A formal review report checking that paperwork is structured correctly for submission.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-tlg-signatureGold shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-sm mb-1 uppercase tracking-widest text-white/90">Settlement Guide</h4>
                  <p className="text-white/70 text-sm">Tailored orientation material for navigating the civic requirements of your destination city.</p>
                </div>
              </li>
            </ul>
          </div></Reveal>

        </div>
      </section>

      {/* Disclaimers */}
      <section className="py-16 bg-white border-b border-tlg-stone">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <div className="bg-tlg-ivory border border-tlg-stone p-8 rounded-[24px]">
            <h3 className="text-lg font-serif text-tlg-midnight mb-3">Important Disclaimer</h3>
            <p className="text-sm text-gray-800 leading-relaxed mb-4">
              Triumphal Lifetime Group provides administrative coordination, logistical planning, and general mobility advisory. We are NOT an immigration law firm or government visa processing entity. We do not issue visas or permits and cannot guarantee application outcomes or processing times. Final visa decisions are made by respective governments.
            </p>
            <p className="text-sm text-gray-800 leading-relaxed">
              Regulated immigration legal advice must be provided by authorized professionals in the relevant jurisdiction.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs.length > 0 && (
      <section className="py-24 bg-white border-y border-tlg-stone">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <Reveal><div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Common Questions</span>
            <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight">Global Mobility FAQs</h2>
          </div></Reveal>
          <div className="space-y-0">
            {faqs.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <details className="group border-b border-tlg-stone py-6 cursor-pointer">
                  <summary className="flex justify-between items-center font-serif text-lg text-tlg-midnight list-none">
                    {item.question}
                    <span className="text-tlg-signatureGold text-2xl font-normal group-open:rotate-45 transition-transform duration-200 ml-4 shrink-0">+</span>
                  </summary>
                  <p className="mt-4 text-sm text-gray-700 leading-relaxed max-w-3xl">{item.answer}</p>
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
          <Reveal><h2 className="text-4xl font-serif mb-6">Structure Your Transition</h2></Reveal>
          <Reveal delay={0.1}><p className="text-white/90 mb-10 text-lg">
            Schedule a confidential consultation to discuss the logistical requirements for your corporate or individual mobility goals.
          </p></Reveal>
          <Reveal delay={0.2}><div className="flex flex-wrap justify-center gap-4">
            <Link href="?book=true&service=global-mobility" className="bg-tlg-signatureGold text-tlg-midnight px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              Book a Consultation
            </Link>
          </div></Reveal>
        </div>
      </section>
    </main>
  );
}
