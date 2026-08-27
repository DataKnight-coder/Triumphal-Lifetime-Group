import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MonitorPlay, Layers, BookOpen, Code2, Users, FileText } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Digital Products & Learning",
  description: "Deploy training and learning systems that actually work.",
};

export default function DigitalLearningPage() {
  return (
    <main className="bg-white pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white border-b border-tlg-stone overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <Link href="/companies" className="inline-flex items-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700 hover:text-tlg-signatureGold transition-colors mb-10">
              <ArrowRight size={12} className="mr-2 rotate-180" /> Back to Divisions
            </Link>
            <Reveal><span className="text-tlg-signatureGold text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4 block">DIGITAL PRODUCTS & LEARNING</span></Reveal>
            <Reveal delay={0.1}><h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] text-tlg-midnight mb-6">
              Equip Your Teams With Knowledge That Scales.
            </h1></Reveal>
            <Reveal delay={0.2}><p className="text-lg text-gray-800 leading-relaxed max-w-xl mb-10">
              We create practical learning resources, professional development programmes and business tools designed to help individuals and organisations build useful workplace skills. We are an advisory and training service, not an accredited university.
            </p></Reveal>
            
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link href="?book=true&service=digital-learning" className="bg-tlg-midnight text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-tlg-signatureGold hover:text-tlg-midnight hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  Explore Learning Products
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-[250px] md:h-[300px] rounded-[24px] overflow-hidden shadow-md translate-y-8">
                  <Image src="/visuals/learning-courses.jpg" alt="Professional Courses" fill className="object-cover" />
                </div>
                <div className="relative h-[250px] md:h-[300px] rounded-[24px] overflow-hidden shadow-md">
                  <Image src="/visuals/learning-workshops.jpg" alt="Interactive Workshops" fill className="object-cover" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Who It Is For */}
      <section className="py-24 bg-tlg-ivory border-b border-tlg-stone">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <Reveal><span className="text-[11px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Who We Work With</span></Reveal>
          <Reveal delay={0.1}><h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight mb-8">Workforce Development & Capacity Building</h2></Reveal>
          <Reveal delay={0.2}><p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed mb-10">
            We support organisations that need to standardise knowledge transfer, track employee compliance, and deliver consistent training at scale.
          </p></Reveal>
          <Reveal delay={0.3}><div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-white">Corporate HR Departments</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-white">Growing Enterprises</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-white">Educational Institutions</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-white">Business Franchises</span>
          </div></Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-24 bg-white border-b border-tlg-stone scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Reveal><div className="mb-16 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-serif text-tlg-midnight">What You Can Hire Us For</h2>
          </div></Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Reveal delay={0.1} className="flex"><div className="bg-tlg-ivory border border-tlg-stone p-8 rounded-[24px] flex flex-col w-full group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-white border border-tlg-stone rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <BookOpen size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">Professional Courses</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-6 flex-1">
                Access structured, self-paced learning modules covering essential business skills, leadership, and operational compliance.
              </p>
            </div></Reveal>

            <Reveal delay={0.2} className="flex"><div className="bg-tlg-ivory border border-tlg-stone p-8 rounded-[24px] flex flex-col w-full group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-white border border-tlg-stone rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <Users size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">Corporate Training</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-6 flex-1">
                Customised, cohort-based training programmes designed specifically around your organisation's operational gaps.
              </p>
            </div></Reveal>

            <Reveal delay={0.3} className="flex"><div className="bg-tlg-ivory border border-tlg-stone p-8 rounded-[24px] flex flex-col w-full group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-white border border-tlg-stone rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <FileText size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">Templates & Resources</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-6 flex-1">
                Downloadable business frameworks, HR policy templates, and operational toolkits to immediately implement best practices.
              </p>
            </div></Reveal>

            <Reveal delay={0.4} className="flex"><div className="bg-tlg-ivory border border-tlg-stone p-8 rounded-[24px] flex flex-col w-full group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-white border border-tlg-stone rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <MonitorPlay size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">Interactive Workshops</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-6 flex-1">
                Live, scenario-based virtual or in-person workshops facilitating active skill acquisition for teams.
              </p>
            </div></Reveal>

            <Reveal delay={0.5} className="flex lg:col-span-2"><div className="bg-tlg-ivory border border-tlg-stone p-8 rounded-[24px] flex flex-col w-full group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-white border border-tlg-stone rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <Layers size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">Career & Business Learning Design</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-6 flex-1">
                We help you digitise your internal manuals, onboarding materials, and operational processes into structured learning formats designed for better retention and scalability.
              </p>
            </div></Reveal>
          </div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section className="py-24 bg-white border-b border-tlg-stone">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <Reveal><div className="relative h-[400px] rounded-[24px] overflow-hidden border border-tlg-stone">
              <Image src="/visuals/learning-templates.jpg" alt="Downloadable Business Resources" fill className="object-cover" />
            </div></Reveal>
            <Reveal delay={0.2}><div>
              <h3 className="text-3xl font-serif text-tlg-midnight mb-6">Actionable Resources</h3>
              <p className="text-gray-800 text-lg leading-relaxed mb-6">
                Theory is useful, but execution requires tools. Our digital products include comprehensive business frameworks and policy templates that organisations can adapt and deploy immediately, bridging the gap between learning and operational implementation.
              </p>
            </div></Reveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal className="order-2 md:order-1"><div>
              <h3 className="text-3xl font-serif text-tlg-midnight mb-6">Interactive Cohort Learning</h3>
              <p className="text-gray-800 text-lg leading-relaxed mb-6">
                Corporate learning should not be isolating. We design and facilitate interactive workshops where teams engage with scenario-based challenges, improving collaboration while acquiring essential business skills.
              </p>
            </div></Reveal>
            <Reveal delay={0.2} className="order-1 md:order-2"><div className="relative h-[400px] rounded-[24px] overflow-hidden border border-tlg-stone">
              <Image src="/visuals/learning-corporate.jpg" alt="Corporate Training Workshops" fill className="object-cover" />
            </div></Reveal>
          </div>
        </div>
      </section>

      {/* Cross-Referral */}
      <section className="py-16 bg-tlg-ivory border-b border-tlg-stone">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center">
          <p className="text-sm text-gray-800">
            <strong className="text-tlg-midnight font-bold uppercase tracking-widest">Need Broader IT Support?</strong><br/><br/>
            Our <Link href="/solutions/technology" className="text-tlg-signatureGold hover:text-tlg-midnight transition-colors font-bold underline underline-offset-4">Information Technology</Link> division can help integrate digital systems and software into your existing corporate network.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-tlg-ivory border-y border-tlg-stone">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <Reveal><div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Common Questions</span>
            <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight">Digital Learning FAQs</h2>
          </div></Reveal>
          <div className="space-y-0">
            {[
              { q: "What types of organisations do you build training programmes for?", a: "We work with growing businesses, HR departments, educational institutions, and corporate franchises that need to standardise how they train, onboard, and develop their people. We design programmes for both small teams and large organisations across multiple locations." },
              { q: "Do you deliver live training or only self-paced content?", a: "Both. We design self-paced digital learning modules and also facilitate live, cohort-based interactive workshops - either in-person or virtually. The format we recommend depends on your team's size, geography, and the nature of the subject matter." },
              { q: "Can you digitise our existing internal manuals?", a: "Yes. This is one of our core services. We convert internal SOPs, onboarding guides, and operational manuals into structured, engaging digital formats designed for better knowledge retention and scalability across distributed teams." },
              { q: "What do your downloadable business resources include?", a: "Our digital resource library includes HR policy templates, performance review frameworks, onboarding checklists, business operations toolkits, and leadership guides. These are practical frameworks your team can adapt and implement immediately." },
              { q: "How long does it take to build a corporate training programme?", a: "This depends on the scope and complexity. A focused module can be delivered in 3–6 weeks. A comprehensive multi-module programme typically takes 2–4 months. We work within your timeline and can phase delivery where needed." },
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
          <Reveal><h2 className="text-4xl font-serif mb-6">Digitise Your Expertise</h2></Reveal>
          <Reveal delay={0.1}><p className="text-white/90 mb-10 text-lg">
            Speak with our team to discuss building a scalable learning ecosystem for your organisation.
          </p></Reveal>
          <Reveal delay={0.2}><div className="flex flex-wrap justify-center gap-4">
            <Link href="?book=true&service=digital-learning" className="bg-tlg-signatureGold text-tlg-midnight px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              Explore Our Library
            </Link>
          </div></Reveal>
        </div>
      </section>
    </main>
  );
}
