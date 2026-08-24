import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, GraduationCap, BookOpen, Globe2, Building } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Education Advisory - Study in Canada, UAE & Nigeria | Triumphal Lifetime Group",
  description: "Expert education advisory for students applying to Canadian, UAE and Nigerian universities. We provide profile assessment, institution research, application support, scholarship research and pre-departure guidance.",
};

export default function EducationAdvisoryPage() {
  return (
    <main className="bg-white pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white border-b border-tlg-stone overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="w-full lg:w-5/12">
            <Link href="/companies" className="inline-flex items-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700 hover:text-tlg-signatureGold transition-colors mb-10">
              <ArrowRight size={12} className="mr-2 rotate-180" /> Back to Divisions
            </Link>
            <Reveal><span className="text-tlg-signatureGold text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4 block">EDUCATION ADVISORY</span></Reveal>
            <Reveal delay={0.1}><h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] text-tlg-midnight mb-6">
              Choose Your Next Education Path With Greater Clarity.
            </h1></Reveal>
            <Reveal delay={0.2}><p className="text-lg text-gray-800 leading-relaxed max-w-xl mb-10">
              We assess your academic background, career goals, budget, and preferred destination, then help you research suitable programmes and prepare for the application process.
            </p></Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link href="?book=true&service=education" className="bg-tlg-midnight text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-tlg-signatureGold hover:text-tlg-midnight hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  Book an Assessment
                </Link>
              </div>
            </Reveal>
          </div>
          
          <div className="w-full lg:w-7/12">
            <Reveal delay={0.2} className="relative h-[400px] lg:h-[600px] w-full rounded-[24px] overflow-hidden shadow-sm">
               <Image src="/visuals/edu-consultation.jpg" alt="Student Consultation" fill className="object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Compliance Notice (Proof/Responsible) */}
      <section className="bg-tlg-ivory py-4 border-b border-tlg-stone">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <p className="text-xs text-gray-800 uppercase tracking-widest font-bold text-center">
            Notice: Admission and scholarships cannot be guaranteed. Final decisions belong to the institutions.
          </p>
        </div>
      </section>

      {/* Who It Is For */}
      <section className="py-24 bg-white border-b border-tlg-stone">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <Reveal><span className="text-[11px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Who We Work With</span></Reveal>
          <Reveal delay={0.1}><h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight mb-8">Supporting Academic Ambition</h2></Reveal>
          <Reveal delay={0.2}><p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed mb-10">
            We provide structured advisory for students, professionals, and corporate sponsors navigating international institutional placement and academic pathways.
          </p></Reveal>
          <Reveal delay={0.3}><div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">Undergraduate Applicants</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">Postgraduate &amp; Research</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">Mid-Career Professionals</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-tlg-ivory">Corporate Sponsors</span>
          </div></Reveal>
        </div>
      </section>

      {/* Visual Storytelling: Explore Education Possibilities */}
      <section className="py-24 bg-tlg-midnight text-white border-b border-tlg-stone">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Reveal><div className="mb-16 text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Global Opportunities</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Explore Education Possibilities</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We connect ambitious students with leading academic environments in key global markets, facilitating both academic placement and career advancement.
            </p>
          </div></Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Canada */}
            <Reveal delay={0.1} className="group relative h-[350px] rounded-[24px] overflow-hidden border border-white/10">
              <Image src="/visuals/edu-canada.jpg" alt="Study in Canada" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/60 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h4 className="text-2xl font-serif mb-2 text-white">Canada</h4>
                <p className="text-white/80 text-sm leading-relaxed">Structured academic pathways with strong integration into a global workforce.</p>
              </div>
            </Reveal>

            {/* UAE */}
            <Reveal delay={0.2} className="group relative h-[350px] rounded-[24px] overflow-hidden border border-white/10">
              <Image src="/visuals/edu-uae.jpg" alt="Study in the UAE" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/60 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h4 className="text-2xl font-serif mb-2 text-white">UAE</h4>
                <p className="text-white/80 text-sm leading-relaxed">Fast-growing international campuses offering modern learning environments.</p>
              </div>
            </Reveal>

            {/* Nigeria */}
            <Reveal delay={0.3} className="group relative h-[350px] rounded-[24px] overflow-hidden border border-white/10">
              <Image src="/visuals/edu-nigeria.jpg" alt="Study in Nigeria" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/60 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h4 className="text-2xl font-serif mb-2 text-white">Nigeria</h4>
                <p className="text-white/80 text-sm leading-relaxed">Connecting students with leading domestic institutions for foundational learning.</p>
              </div>
            </Reveal>

            {/* Career Development */}
            <Reveal delay={0.4} className="group relative h-[350px] rounded-[24px] overflow-hidden border border-white/10">
              <Image src="/visuals/edu-career.jpg" alt="Career Development" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/60 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h4 className="text-2xl font-serif mb-2 text-white">Career Development</h4>
                <p className="text-white/80 text-sm leading-relaxed">Aligning your academic choices directly with your professional aspirations.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-24 bg-tlg-ivory scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Reveal><div className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-serif text-tlg-midnight">What You Can Hire Us For</h2>
          </div></Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <Reveal delay={0.1} className="flex"><div className="bg-white border border-tlg-stone p-8 rounded-[24px] shadow-sm flex flex-col w-full group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-tlg-ivory border border-tlg-stone rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">Student Profile Assessment</h3>
              <p className="text-gray-800 text-sm leading-relaxed flex-1">
                We evaluate your academic background, career objectives, and financial capacity to determine your viability for specific programs.
              </p>
            </div></Reveal>

            <Reveal delay={0.2} className="flex"><div className="bg-white border border-tlg-stone p-8 rounded-[24px] shadow-sm flex flex-col w-full group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-tlg-ivory border border-tlg-stone rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <Building size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">Course & Institution Research</h3>
              <p className="text-gray-800 text-sm leading-relaxed flex-1">
                We identify and research suitable institutions that match your criteria across key destinations like Canada and the UAE.
              </p>
            </div></Reveal>

            <Reveal delay={0.3} className="flex"><div className="bg-white border border-tlg-stone p-8 rounded-[24px] shadow-sm flex flex-col w-full group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-tlg-ivory border border-tlg-stone rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <BookOpen size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">Application Support</h3>
              <p className="text-gray-800 text-sm leading-relaxed flex-1">
                We assist with organising your documents, reviewing personal statements, and ensuring your application meets the institution's guidelines.
              </p>
            </div></Reveal>

            <Reveal delay={0.4} className="flex"><div className="bg-white border border-tlg-stone p-8 rounded-[24px] shadow-sm flex flex-col w-full group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-tlg-ivory border border-tlg-stone rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">Scholarship Research</h3>
              <p className="text-gray-800 text-sm leading-relaxed flex-1">
                We help identify available funding opportunities, bursaries, and scholarships that you may be eligible to apply for.
              </p>
            </div></Reveal>
            
            <Reveal delay={0.5} className="flex"><div className="bg-white border border-tlg-stone p-8 rounded-[24px] shadow-sm flex flex-col w-full group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-tlg-ivory border border-tlg-stone rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <ArrowRight size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">Career Pathway Guidance</h3>
              <p className="text-gray-800 text-sm leading-relaxed flex-1">
                We help map out how your chosen academic program connects to your long-term professional objectives.
              </p>
            </div></Reveal>

            <Reveal delay={0.6} className="flex"><div className="bg-white border border-tlg-stone p-8 rounded-[24px] shadow-sm flex flex-col w-full group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-tlg-ivory border border-tlg-stone rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <Globe2 size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">Pre-Departure Support</h3>
              <p className="text-gray-800 text-sm leading-relaxed flex-1">
                We provide preparatory guidance addressing logistics, academic culture, and what to expect when you arrive at your destination.
              </p>
            </div></Reveal>

          </div>
        </div>
      </section>

      {/* How It Works & Deliverables */}
      <section className="py-24 bg-white border-y border-tlg-stone">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <Reveal><div>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">How It Works</span>
            <h2 className="text-3xl font-serif text-tlg-midnight mb-10">Our Process</h2>
            <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[15px] before:w-px before:bg-tlg-stone">
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">1</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Profile Assessment</h4>
                <p className="text-gray-800 text-sm leading-relaxed">We review your academic transcripts, career history, and objectives.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">2</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Strategic Shortlisting</h4>
                <p className="text-gray-800 text-sm leading-relaxed">We identify target institutions that align with your capabilities and budget.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">3</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Application Support</h4>
                <p className="text-gray-800 text-sm leading-relaxed">We guide you through document preparation and review your submissions.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-tlg-ivory border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">4</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Pre-Departure Briefing</h4>
                <p className="text-gray-800 text-sm leading-relaxed">We help you understand the next steps once your admission is secured.</p>
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
                  <h4 className="font-bold text-sm mb-1 uppercase tracking-widest text-white/90">Academic Gap Analysis</h4>
                  <p className="text-white/70 text-sm">Identification of prerequisites or testing required for admission.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-tlg-signatureGold shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-sm mb-1 uppercase tracking-widest text-white/90">Curated Institution List</h4>
                  <p className="text-white/70 text-sm">A highly targeted shortlist of universities matched to your profile.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-tlg-signatureGold shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-sm mb-1 uppercase tracking-widest text-white/90">Document Audit</h4>
                  <p className="text-white/70 text-sm">A comprehensive review of your application paperwork before submission.</p>
                </div>
              </li>
            </ul>
          </div></Reveal>

        </div>
      </section>

      {/* Cross-Referral */}
      <section className="py-16 bg-white border-b border-tlg-stone">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center">
          <p className="text-sm text-gray-800">
            <strong className="text-tlg-midnight font-bold uppercase tracking-widest">Planning to relocate for study?</strong><br/><br/>
            Our <Link href="/solutions/global-mobility" className="text-tlg-signatureGold hover:text-tlg-midnight transition-colors font-bold underline underline-offset-4">Global Mobility</Link> division can provide general information and administrative support for your logistical transition once your academic placement is secured.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-y border-tlg-stone">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <Reveal><div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Common Questions</span>
            <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight">Education Advisory FAQs</h2>
          </div></Reveal>
          <div className="space-y-0">
            {[
              { q: "Can you guarantee my admission to a university?", a: "No. Final admission decisions belong to the institutions, and we state this clearly. What we can do is help you present the strongest possible application - identifying suitable programmes, reviewing your documents, and preparing your personal statement - to significantly improve your chances." },
              { q: "Which countries do you help students apply to?", a: "We primarily support applications to Canada, UAE, and Nigeria. Canada is a leading destination due to its post-study work options and immigration pathways. UAE offers fast-growing international campuses. We assess your profile and goals to determine which destination is the best fit." },
              { q: "Do you help with scholarships?", a: "Yes, we research available bursaries, government scholarships, and institutional funding opportunities that you may be eligible for. We cannot apply on your behalf, but we identify what is available and guide you through the process." },
              { q: "What if I don't have high grades?", a: "Our advisory is not restricted to top-performing students. We assess your full profile - including work experience, extracurricular background, and career intent - and help identify programmes and institutions where you are realistically competitive." },
              { q: "How soon should I start the process?", a: "Ideally 6–12 months before your intended start date. Admission timelines, document gathering, scholarship applications, and visa processing all take time. The earlier you start, the more options you have. Reach out to us for a timeline review specific to your situation." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <details className="group border-b border-tlg-stone py-6 cursor-pointer">
                  <summary className="flex justify-between items-center font-serif text-lg text-tlg-midnight list-none">
                    {item.q}
                    <span className="text-tlg-signatureGold text-2xl font-normal group-open:rotate-45 transition-transform duration-200 ml-4 shrink-0">+</span>
                  </summary>
                  <p className="mt-4 text-sm text-gray-700 leading-relaxed max-w-3xl">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-tlg-midnight text-white text-center">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <Reveal><h2 className="text-4xl font-serif mb-6">Begin Your Academic Journey</h2></Reveal>
          <Reveal delay={0.1}><p className="text-white/90 mb-10 text-lg">
            Schedule a profile assessment with our education advisory team to discuss your options.
          </p></Reveal>
          <Reveal delay={0.2}><div className="flex flex-wrap justify-center gap-4">
            <Link href="?book=true&service=education" className="bg-tlg-signatureGold text-tlg-midnight px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              Book an Assessment
            </Link>
          </div></Reveal>
        </div>
      </section>
    </main>
  );
}
