import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, Globe2, ShieldCheck, Zap } from "lucide-react";

export default function Careers() {
  return (
    <>
      <Header />
      <main className="bg-tlg-ivory">
        
        {/* Cinematic Hero */}
        <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-end overflow-hidden bg-tlg-midnight">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center animate-slow-zoom scale-105 opacity-40"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/60 to-tlg-midnight/20"></div>
          </div>
          
          <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10 pb-24 md:pb-32">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6 animate-reveal-up">Join The Group</span>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tight mb-8 animate-reveal-up-delayed">
              Global<br />
              <span className="italic font-light text-white/80">Careers.</span>
            </h1>
            <div className="w-24 h-[1px] bg-tlg-signatureGold mb-8 animate-draw-line"></div>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl leading-relaxed animate-reveal-up-delayed">
              We are seeking elite intellects to architect solutions across real estate, corporate strategy, and digital infrastructure in Nigeria, the UAE, and Canada.
            </p>
          </div>
        </section>

        {/* Philosophy / Authority Quote */}
        <section className="py-24 md:py-32 bg-white relative border-b border-tlg-stone">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest block mb-8">The Culture</span>
            <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight leading-[1.3]">
              "We do not hire employees; we recruit structural architects. If you demand a frictionless, high-performance environment where your intellect directly scales global enterprises, you belong here."
            </h2>
          </div>
        </section>

        {/* Culture / Benefits Grid */}
        <section className="py-24 bg-tlg-ivory relative border-b border-tlg-stone">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white p-10 border border-tlg-stone shadow-sm hover:border-tlg-signatureGold transition-colors">
                <Globe2 className="text-tlg-signatureGold mb-6" size={32} />
                <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Global Mobility</h3>
                <p className="text-gray-500 font-light leading-relaxed text-sm">
                  Top performers are actively rotated across our operational hubs in Lagos, Dubai, and Toronto, accelerating cross-cultural leadership development.
                </p>
              </div>
              <div className="bg-white p-10 border border-tlg-stone shadow-sm hover:border-tlg-signatureGold transition-colors">
                <ShieldCheck className="text-tlg-signatureGold mb-6" size={32} />
                <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Elite Compensation</h3>
                <p className="text-gray-500 font-light leading-relaxed text-sm">
                  We offer top-percentile base salaries, profit-sharing on closed corporate/real estate deals, and comprehensive international healthcare.
                </p>
              </div>
              <div className="bg-white p-10 border border-tlg-stone shadow-sm hover:border-tlg-signatureGold transition-colors">
                <Zap className="text-tlg-signatureGold mb-6" size={32} />
                <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Hyper-Growth Trajectory</h3>
                <p className="text-gray-500 font-light leading-relaxed text-sm">
                  We operate with zero bureaucratic friction. If you prove capable of managing complex international assets, you will be handed the reigns immediately.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions List */}
        <section className="py-32 bg-white relative">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            
            <div className="flex justify-between items-end mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-tlg-midnight">Open Positions</h2>
              <span className="text-xs font-bold uppercase tracking-widest text-tlg-signatureGold hidden md:block">4 Available Roles</span>
            </div>

            <div className="flex flex-col border-t border-tlg-stone">
              
              {/* Job 1 */}
              <div className="py-10 border-b border-tlg-stone flex flex-col md:flex-row justify-between items-start md:items-center group cursor-pointer hover:bg-tlg-ivory transition-colors px-4 -mx-4">
                <div>
                  <div className="flex gap-3 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-tlg-midnight text-white px-2 py-1">Dubai, UAE</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest border border-tlg-stone text-gray-500 px-2 py-1">Full-Time</span>
                  </div>
                  <h3 className="text-2xl font-serif text-tlg-midnight mb-2 group-hover:text-tlg-signatureGold transition-colors">Senior Real Estate Acquisition Manager</h3>
                  <p className="text-gray-500 font-light text-sm max-w-xl">
                    Spearhead off-market commercial and ultra-luxury acquisitions for high-net-worth African investors relocating to the UAE.
                  </p>
                </div>
                <div className="mt-6 md:mt-0">
                  <span className="flex items-center text-xs font-bold uppercase tracking-widest text-tlg-midnight group-hover:translate-x-2 transition-transform">Apply Now <ArrowRight size={14} className="ml-2"/></span>
                </div>
              </div>

              {/* Job 2 */}
              <div className="py-10 border-b border-tlg-stone flex flex-col md:flex-row justify-between items-start md:items-center group cursor-pointer hover:bg-tlg-ivory transition-colors px-4 -mx-4">
                <div>
                  <div className="flex gap-3 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-tlg-midnight text-white px-2 py-1">Toronto, CA</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest border border-tlg-stone text-gray-500 px-2 py-1">Full-Time</span>
                  </div>
                  <h3 className="text-2xl font-serif text-tlg-midnight mb-2 group-hover:text-tlg-signatureGold transition-colors">Corporate Immigration Counsel</h3>
                  <p className="text-gray-500 font-light text-sm max-w-xl">
                    Manage complex intra-company transfers, LMIA applications, and executive permanent residency pathways for our corporate clients.
                  </p>
                </div>
                <div className="mt-6 md:mt-0">
                  <span className="flex items-center text-xs font-bold uppercase tracking-widest text-tlg-midnight group-hover:translate-x-2 transition-transform">Apply Now <ArrowRight size={14} className="ml-2"/></span>
                </div>
              </div>

              {/* Job 3 */}
              <div className="py-10 border-b border-tlg-stone flex flex-col md:flex-row justify-between items-start md:items-center group cursor-pointer hover:bg-tlg-ivory transition-colors px-4 -mx-4">
                <div>
                  <div className="flex gap-3 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-tlg-midnight text-white px-2 py-1">Lagos, NG</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest border border-tlg-stone text-gray-500 px-2 py-1">Contract / Retainer</span>
                  </div>
                  <h3 className="text-2xl font-serif text-tlg-midnight mb-2 group-hover:text-tlg-signatureGold transition-colors">Enterprise Systems Architect</h3>
                  <p className="text-gray-500 font-light text-sm max-w-xl">
                    Design and deploy secure cloud infrastructure for our expanding IT division, focusing on compliance with local and international data sovereignty laws.
                  </p>
                </div>
                <div className="mt-6 md:mt-0">
                  <span className="flex items-center text-xs font-bold uppercase tracking-widest text-tlg-midnight group-hover:translate-x-2 transition-transform">Apply Now <ArrowRight size={14} className="ml-2"/></span>
                </div>
              </div>

              {/* Job 4 */}
              <div className="py-10 border-b border-tlg-stone flex flex-col md:flex-row justify-between items-start md:items-center group cursor-pointer hover:bg-tlg-ivory transition-colors px-4 -mx-4">
                <div>
                  <div className="flex gap-3 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-tlg-midnight text-white px-2 py-1">Remote</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest border border-tlg-stone text-gray-500 px-2 py-1">Full-Time</span>
                  </div>
                  <h3 className="text-2xl font-serif text-tlg-midnight mb-2 group-hover:text-tlg-signatureGold transition-colors">Education Placement Director</h3>
                  <p className="text-gray-500 font-light text-sm max-w-xl">
                    Oversee our global student advisory division, managing university partnerships across North America and Europe.
                  </p>
                </div>
                <div className="mt-6 md:mt-0">
                  <span className="flex items-center text-xs font-bold uppercase tracking-widest text-tlg-midnight group-hover:translate-x-2 transition-transform">Apply Now <ArrowRight size={14} className="ml-2"/></span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Action Section */}
        <section className="py-32 bg-tlg-midnight relative flex flex-col items-center justify-center text-center">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="max-w-3xl px-6 relative z-10">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6">Spontaneous Application</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Don't See Your Role?</h2>
            <p className="text-white/70 font-light leading-relaxed mb-12 text-lg">
              We are continually seeking exceptional legal, financial, and strategic talent. Submit your dossier for future consideration.
            </p>
            <Link href="mailto:careers@triumphallifetimegroup.com" className="inline-flex items-center gap-4 bg-white text-tlg-midnight px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-tlg-signatureGold hover:text-white transition-colors">
              Submit Executive CV <ArrowRight size={14} />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
