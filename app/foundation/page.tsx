import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export default function CharityFoundation() {
  return (
    <>
      <Header />
      <main className="bg-tlg-ivory">
        
        {/* Cinematic Hero */}
        <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-end overflow-hidden bg-tlg-emerald">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center animate-slow-zoom scale-105 opacity-50"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/60 to-tlg-midnight/20"></div>
          </div>
          
          <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10 pb-24 md:pb-32">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6 animate-reveal-up">Philanthropy & Social Impact</span>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tight mb-8 animate-reveal-up-delayed">
              Charity<br />
              <span className="italic font-light text-white/80">Foundation.</span>
            </h1>
            <div className="w-24 h-[1px] bg-tlg-signatureGold mb-8 animate-draw-line"></div>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl leading-relaxed animate-reveal-up-delayed">
              Deploying corporate capital to engineer sustainable social change. We focus on education, healthcare, and economic empowerment across our global operational hubs.
            </p>
          </div>
        </section>

        {/* Philosophy / Authority Quote */}
        <section className="py-24 md:py-32 bg-white relative border-b border-tlg-stone">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest block mb-8">Our Commitment</span>
            <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight leading-[1.3]">
              "True luxury is the privilege to uplift others. We measure our corporate success not just by our global balance sheets, but by the generational impact we leave in our wake."
            </h2>
          </div>
        </section>

        {/* Asymmetric Impact Grid */}
        <section className="py-32 bg-tlg-ivory relative">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            
            <div className="flex flex-col md:flex-row justify-between items-end mb-20">
              <h2 className="text-4xl md:text-6xl font-serif text-tlg-midnight">Areas of Impact</h2>
              <p className="text-gray-500 font-light max-w-sm mt-6 md:mt-0">Targeted, data-driven philanthropic initiatives designed to solve foundational societal challenges.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              
              {/* Feature Block 1 (Large) */}
              <div className="md:col-span-8 group relative overflow-hidden bg-white shadow-sm border border-tlg-stone">
                <div className="h-[400px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[1.5s]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop')" }}></div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700"></div>
                </div>
                <div className="p-12">
                  <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-4 block">01</span>
                  <h3 className="text-3xl font-serif text-tlg-midnight mb-6">Educational Infrastructure</h3>
                  <p className="text-gray-500 font-light leading-relaxed mb-8 max-w-2xl">
                    We believe access to premier education should not be constrained by geography. Our foundation funds the construction of modern learning facilities, provides advanced digital equipment, and sponsors full-ride scholarships for exceptional students in developing regions.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-semibold text-tlg-midnight">
                    <li className="flex items-center gap-3"><Heart size={16} className="text-tlg-signatureGold"/> Scholarship Funds</li>
                    <li className="flex items-center gap-3"><Heart size={16} className="text-tlg-signatureGold"/> School Construction</li>
                    <li className="flex items-center gap-3"><Heart size={16} className="text-tlg-signatureGold"/> Technology Grants</li>
                    <li className="flex items-center gap-3"><Heart size={16} className="text-tlg-signatureGold"/> Teacher Training</li>
                  </ul>
                </div>
              </div>

              {/* Feature Block 2 (Small) */}
              <div className="md:col-span-4 group relative overflow-hidden bg-tlg-midnight text-white shadow-sm flex flex-col">
                <div className="h-[300px] relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[1.5s] opacity-70 mix-blend-luminosity" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2069&auto=format&fit=crop')" }}></div>
                </div>
                <div className="p-10 flex-1 flex flex-col justify-center border-t border-white/10">
                  <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-4 block">02</span>
                  <h3 className="text-2xl font-serif mb-4">Healthcare Access</h3>
                  <p className="text-white/70 font-light leading-relaxed text-sm">
                    Funding critical medical research, building regional clinics, and providing emergency medical relief to underserved communities across Africa and beyond.
                  </p>
                </div>
              </div>

              {/* Feature Block 3 (Small) */}
              <div className="md:col-span-5 group relative overflow-hidden bg-white shadow-sm border border-tlg-stone flex flex-col">
                <div className="p-10 flex-1 flex flex-col justify-center">
                  <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-4 block">03</span>
                  <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Economic Empowerment</h3>
                  <p className="text-gray-500 font-light leading-relaxed text-sm mb-6">
                    We issue micro-grants and offer extensive mentorship programs to entrepreneurs, transforming localized small businesses into sustainable community pillars.
                  </p>
                  <Link href="/contact" className="text-xs uppercase tracking-widest font-bold text-tlg-midnight hover:text-tlg-signatureGold transition-colors flex items-center group-hover:translate-x-2">Partner With Us <ArrowRight size={14} className="ml-2"/></Link>
                </div>
              </div>

              {/* Feature Block 4 (Medium) */}
              <div className="md:col-span-7 group relative overflow-hidden bg-white shadow-sm border border-tlg-stone flex items-center">
                <div className="w-1/2 h-full absolute right-0 top-0 overflow-hidden hidden md:block">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[1.5s]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593113514676-59b52a92a548?q=80&w=2070&auto=format&fit=crop')" }}></div>
                </div>
                <div className="w-full md:w-1/2 p-10 md:p-12 relative z-10 bg-white md:bg-white/95 backdrop-blur-sm h-full flex flex-col justify-center">
                  <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-4 block">04</span>
                  <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Disaster Relief</h3>
                  <p className="text-gray-500 font-light leading-relaxed text-sm">
                    Rapid deployment of resources in response to global crises. We leverage our international logistics network to deliver aid where it is most urgently needed.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Global Impact Metrics */}
        <section className="py-24 bg-tlg-emerald relative border-y border-tlg-emerald">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <h4 className="text-4xl md:text-5xl font-serif text-white mb-2">$5M+</h4>
              <p className="text-[10px] uppercase tracking-widest text-tlg-signatureGold font-bold">Capital Deployed</p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-serif text-white mb-2">10k+</h4>
              <p className="text-[10px] uppercase tracking-widest text-tlg-signatureGold font-bold">Lives Impacted</p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-serif text-white mb-2">15+</h4>
              <p className="text-[10px] uppercase tracking-widest text-tlg-signatureGold font-bold">Global Partnerships</p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-serif text-white mb-2">100%</h4>
              <p className="text-[10px] uppercase tracking-widest text-tlg-signatureGold font-bold">Transparency Guarantee</p>
            </div>
          </div>
        </section>

        {/* Action Section */}
        <section className="py-32 bg-white relative flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl px-6">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6">Take The Next Step</span>
            <h2 className="text-4xl md:text-5xl font-serif text-tlg-midnight mb-8">Join Our Global Mission</h2>
            <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
              We welcome strategic partnerships from corporations, NGOs, and individual philanthropists who share our vision of structured, sustainable giving.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact" className="inline-flex justify-center items-center gap-4 bg-tlg-midnight text-white px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-tlg-signatureGold transition-colors">
                Partner With Us <ArrowRight size={14} />
              </Link>
              <Link href="/book" className="inline-flex justify-center items-center gap-4 bg-transparent border border-tlg-stone text-tlg-midnight px-10 py-5 text-xs font-bold uppercase tracking-widest hover:border-tlg-signatureGold transition-colors">
                Request A Grant <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
