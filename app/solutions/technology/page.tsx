import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Database, CloudCog, Network, Laptop, Code2, ServerCog, Cpu } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Information Technology",
  description: "Build reliable technology systems for your business.",
};

export default function TechnologyPage() {
  return (
    <main className="bg-white pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white border-b border-tlg-stone overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="w-full lg:w-1/2">
            <Link href="/companies" className="inline-flex items-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700 hover:text-tlg-signatureGold transition-colors mb-10">
              <ArrowRight size={12} className="mr-2 rotate-180" /> Back to Divisions
            </Link>
            <Reveal><span className="text-tlg-signatureGold text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4 block">INFORMATION TECHNOLOGY</span></Reveal>
            <Reveal delay={0.1}><h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] text-tlg-midnight mb-6">
              Build Reliable Technology Systems for Your Business.
            </h1></Reveal>
            <Reveal delay={0.2}><p className="text-lg text-gray-800 leading-relaxed max-w-xl mb-10">
              We help growing companies build, manage, and secure their IT infrastructure - from custom software development and cloud migration to managed IT support, cybersecurity, and process automation.
            </p></Reveal>
            
            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link href="?book=true&service=technology" className="bg-tlg-midnight text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-tlg-signatureGold hover:text-tlg-midnight hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  Book an IT Consultation
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="w-full lg:w-1/2">
            <Reveal delay={0.2} className="relative h-[400px] lg:h-[500px] w-full rounded-[24px] overflow-hidden shadow-xl border border-tlg-stone">
               <Image src="/visuals/tech-workspace.jpg" alt="Clean Technology Workspace" fill className="object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Who It Is For */}
      <section className="py-24 bg-tlg-ivory border-b border-tlg-stone">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <Reveal><span className="text-[11px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Who We Work With</span></Reveal>
          <Reveal delay={0.1}><h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight mb-8">Aligning IT with Commercial Strategy</h2></Reveal>
          <Reveal delay={0.2}><p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed mb-10">
            Technology should never operate in a silo. We ensure your digital infrastructure directly supports corporate objectives and daily operations.
          </p></Reveal>
          <Reveal delay={0.3}><div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-white">Operations Teams</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-white">Growing Businesses</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-white">CTOs</span>
            <span className="px-6 py-3 border border-tlg-stone rounded-full text-sm font-semibold text-tlg-midnight bg-white">Scaling Enterprises</span>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            
            <Reveal delay={0.1} className="flex"><div className="bg-tlg-ivory border border-tlg-stone p-6 rounded-[24px] flex flex-col w-full group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 bg-white border border-tlg-stone rounded-full flex items-center justify-center mb-4 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <CloudCog size={18} />
              </div>
              <h3 className="text-lg font-serif text-tlg-midnight mb-2">Cloud Infrastructure</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-4 flex-1">
                We safely transition your systems to scalable, secure cloud environments to improve remote accessibility and reduce physical server costs.
              </p>
            </div></Reveal>

            <Reveal delay={0.2} className="flex"><div className="bg-tlg-ivory border border-tlg-stone p-6 rounded-[24px] flex flex-col w-full group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 bg-white border border-tlg-stone rounded-full flex items-center justify-center mb-4 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <Code2 size={18} />
              </div>
              <h3 className="text-lg font-serif text-tlg-midnight mb-2">Software Development</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-4 flex-1">
                We build proprietary applications, internal tools, and software solutions designed exactly for your operational workflows.
              </p>
            </div></Reveal>

            <Reveal delay={0.3} className="flex"><div className="bg-tlg-ivory border border-tlg-stone p-6 rounded-[24px] flex flex-col w-full group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 bg-white border border-tlg-stone rounded-full flex items-center justify-center mb-4 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <ShieldCheck size={18} />
              </div>
              <h3 className="text-lg font-serif text-tlg-midnight mb-2">Cybersecurity</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-4 flex-1">
                Protect corporate data through rigorous vulnerability audits, firewall implementations, and the enforcement of digital security protocols.
              </p>
            </div></Reveal>

            <Reveal delay={0.4} className="flex"><div className="bg-tlg-ivory border border-tlg-stone p-6 rounded-[24px] flex flex-col w-full group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 bg-white border border-tlg-stone rounded-full flex items-center justify-center mb-4 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <Database size={18} />
              </div>
              <h3 className="text-lg font-serif text-tlg-midnight mb-2">Data Management</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-4 flex-1">
                Structure, store, and manage your corporate data effectively, ensuring reliability, swift recovery, and robust integrity.
              </p>
            </div></Reveal>

            <Reveal delay={0.5} className="flex"><div className="bg-tlg-ivory border border-tlg-stone p-6 rounded-[24px] flex flex-col w-full group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 bg-white border border-tlg-stone rounded-full flex items-center justify-center mb-4 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <ServerCog size={18} />
              </div>
              <h3 className="text-lg font-serif text-tlg-midnight mb-2">IT Infrastructure</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-4 flex-1">
                Design and deployment of robust local or hybrid networks tailored to scale with your physical corporate footprint.
              </p>
            </div></Reveal>

            <Reveal delay={0.6} className="flex"><div className="bg-tlg-ivory border border-tlg-stone p-6 rounded-[24px] flex flex-col w-full group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 bg-white border border-tlg-stone rounded-full flex items-center justify-center mb-4 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <Network size={18} />
              </div>
              <h3 className="text-lg font-serif text-tlg-midnight mb-2">Managed IT Support</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-4 flex-1">
                Outsource your daily technical support, network administration, hardware procurement, and proactive system maintenance.
              </p>
            </div></Reveal>

            <Reveal delay={0.7} className="flex md:col-span-2 xl:col-span-2"><div className="bg-tlg-ivory border border-tlg-stone p-6 rounded-[24px] flex flex-col w-full group hover:-translate-y-1 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 bg-white border border-tlg-stone rounded-full flex items-center justify-center mb-4 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <Cpu size={18} />
              </div>
              <h3 className="text-lg font-serif text-tlg-midnight mb-2">Process Automation</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-4 flex-1">
                We identify redundant operational tasks across your organisation and deploy software scripts and integrations that allow systems to communicate seamlessly - improving efficiency and eliminating manual entry errors.
              </p>
            </div></Reveal>

          </div>
        </div>
      </section>

      {/* Visual Storytelling Section */}
      <section className="py-24 bg-white border-b border-tlg-stone">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <Reveal className="order-2 md:order-1"><div>
              <h3 className="text-3xl font-serif text-tlg-midnight mb-6">Secure Cloud Architectures</h3>
              <p className="text-gray-800 text-lg leading-relaxed mb-6">
                Legacy on-premise systems can slow down a modern workforce. We design and implement secure cloud environments that offer superior redundancy, dynamic scalability, and seamless remote access for distributed teams without compromising corporate data governance.
              </p>
            </div></Reveal>
            <Reveal delay={0.2} className="order-1 md:order-2"><div className="relative h-[350px] rounded-[24px] overflow-hidden border border-tlg-stone shadow-sm">
              <Image src="/visuals/tech-cloud.jpg" alt="Cloud Infrastructure and Server Racks" fill className="object-cover" />
            </div></Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal><div className="relative h-[350px] rounded-[24px] overflow-hidden border border-tlg-stone shadow-sm">
              <Image src="/visuals/tech-software.jpg" alt="Custom Software Engineering" fill className="object-cover" />
            </div></Reveal>
            <Reveal delay={0.2}><div>
              <h3 className="text-3xl font-serif text-tlg-midnight mb-6">Bespoke Software Engineering</h3>
              <p className="text-gray-800 text-lg leading-relaxed mb-6">
                When off-the-shelf software fails to map to your specific operational workflows, our engineering team builds proprietary tools. From internal management portals to client-facing applications, we develop solutions that belong exclusively to your organisation.
              </p>
            </div></Reveal>
          </div>
          
        </div>
      </section>

      {/* How It Works & Deliverables */}
      <section className="py-24 bg-tlg-ivory border-b border-tlg-stone">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <Reveal><div>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">How It Works</span>
            <h2 className="text-3xl font-serif text-tlg-midnight mb-10">Our Methodology</h2>
            <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[15px] before:w-px before:bg-tlg-stone">
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-white border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">1</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Audit</h4>
                <p className="text-gray-800 text-sm leading-relaxed">Comprehensive mapping of your existing technology stack, identifying redundancies and security flaws.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-white border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">2</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Design</h4>
                <p className="text-gray-800 text-sm leading-relaxed">Blueprint creation for the new digital environment or software architecture, aligning with your budget.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-white border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">3</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Deploy</h4>
                <p className="text-gray-800 text-sm leading-relaxed">Controlled rollout of new systems, cloud migrations, or custom applications.</p>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1 w-8 h-8 bg-white border border-tlg-signatureGold rounded-full flex items-center justify-center text-xs font-bold text-tlg-signatureGold">4</div>
                <h4 className="font-serif text-xl text-tlg-midnight mb-2">Manage</h4>
                <p className="text-gray-800 text-sm leading-relaxed">Post-launch monitoring, maintenance, helpdesk support, and system optimization.</p>
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
                  <h4 className="font-bold text-sm mb-1 uppercase tracking-widest text-white/90">Technical Architecture Plan</h4>
                  <p className="text-white/70 text-sm">Strategic blueprint detailing the phased rollout of new platforms or migrations.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-tlg-signatureGold shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-sm mb-1 uppercase tracking-widest text-white/90">Custom Software & Applications</h4>
                  <p className="text-white/70 text-sm">Fully tested, deployed digital products belonging exclusively to your organisation.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-tlg-signatureGold shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-sm mb-1 uppercase tracking-widest text-white/90">IT Security & Audit Report</h4>
                  <p className="text-white/70 text-sm">Detailed analysis of current tech debt, security risks, and required compliance steps.</p>
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
            <strong className="text-tlg-midnight font-bold uppercase tracking-widest">Upgrading your workforce along with your tech?</strong><br/><br/>
            Partner with our <Link href="/solutions/hr-consulting" className="text-tlg-signatureGold hover:text-tlg-midnight transition-colors font-bold underline underline-offset-4">HR & Business Consulting</Link> team to ensure structural alignment and manage the human element of change.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-tlg-ivory border-y border-tlg-stone">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <Reveal><div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Common Questions</span>
            <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight">IT Services FAQs</h2>
          </div></Reveal>
          <div className="space-y-0">
            {[
              { q: "Do you build websites and mobile apps?", a: "Yes. Our software development service covers web applications, internal management portals, and mobile-first platforms. We scope each project to understand your business requirements before designing any architecture." },
              { q: "How do you approach cybersecurity?", a: "We start with a vulnerability audit of your existing infrastructure. We then implement layered defences including firewall configurations, access controls, data encryption protocols, and staff security awareness programmes. Ongoing monitoring is available as a managed service." },
              { q: "What is managed IT support?", a: "Managed IT support means we act as your outsourced technology team - handling helpdesk queries, hardware procurement, network administration, software updates, and proactive system maintenance. This model is cost-effective for organisations that do not need a full in-house IT department." },
              { q: "Can you help us migrate to cloud systems?", a: "Yes. We plan and execute cloud migrations for Microsoft Azure, Google Cloud, and AWS environments. Our process is phased to avoid disruption: we audit, design the new architecture, migrate in controlled stages, and train your team before full cutover." },
              { q: "How long does a typical IT engagement take?", a: "It depends on the scope. A cybersecurity audit can take 2–4 weeks. A cloud migration for a medium-sized organisation typically takes 2–4 months. Custom software projects vary. We provide clear timelines and milestone-based delivery during the scoping phase." },
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
          <Reveal><h2 className="text-4xl font-serif mb-6">Modernise Your Operations</h2></Reveal>
          <Reveal delay={0.1}><p className="text-white/90 mb-10 text-lg">
            Schedule a technical advisory consultation to discuss auditing and transforming your corporate IT infrastructure.
          </p></Reveal>
          <Reveal delay={0.2}><div className="flex flex-wrap justify-center gap-4">
            <Link href="?book=true&service=technology" className="bg-tlg-signatureGold text-tlg-midnight px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              Book a Consultation
            </Link>
          </div></Reveal>
        </div>
      </section>
    </main>
  );
}
