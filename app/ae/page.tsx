import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function UAEGateway() {
  return (
    <>
      <Header />
      <main className="bg-tlg-ivory">
        
        {/* Cinematic Hero */}
        <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-end overflow-hidden bg-tlg-midnight">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center animate-slow-zoom scale-105 opacity-60"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/60 to-tlg-midnight/20"></div>
          </div>
          
          <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10 pb-24 md:pb-32">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6 animate-reveal-up">Regional Gateway</span>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tight mb-8 animate-reveal-up-delayed">
              Middle East<br />
              <span className="italic font-light text-white/80">Operations.</span>
            </h1>
            <div className="w-24 h-[1px] bg-tlg-signatureGold mb-8 animate-draw-line"></div>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl leading-relaxed animate-reveal-up-delayed">
              The crossroads of global capital. We facilitate elite business setups, luxury property acquisitions, and Golden Visa strategies in the UAE.
            </p>
          </div>
        </section>

        {/* Philosophy / Authority Quote */}
        <section className="py-24 md:py-32 bg-white relative border-b border-tlg-stone">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest block mb-8">The Core Thesis</span>
            <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight leading-[1.3]">
              "The UAE is no longer just a tax haven; it is the definitive global command center for enterprise. We ensure your transition into this market is structurally flawless."
            </h2>
          </div>
        </section>

        {/* Asymmetric Services Grid */}
        <section className="py-32 bg-tlg-ivory relative">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            
            <div className="flex flex-col md:flex-row justify-between items-end mb-20">
              <h2 className="text-4xl md:text-6xl font-serif text-tlg-midnight">Regional Expertise</h2>
              <p className="text-gray-500 font-light max-w-sm mt-6 md:mt-0">Accelerating your access to the Middle East's most lucrative commercial and real estate opportunities.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              
              {/* Feature Block 1 (Large) */}
              <div className="md:col-span-8 group relative overflow-hidden bg-white shadow-sm border border-tlg-stone">
                <div className="h-[400px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[1.5s]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546412414-8035e1776c9a?q=80&w=2070&auto=format&fit=crop')" }}></div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700"></div>
                </div>
                <div className="p-12">
                  <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-4 block">01</span>
                  <h3 className="text-3xl font-serif text-tlg-midnight mb-6">Corporate Structuring & Setup</h3>
                  <p className="text-gray-500 font-light leading-relaxed mb-8 max-w-2xl">
                    End-to-end company formation in Dubai Mainland and Free Zones (DIFC, DMCC, ADGM). We handle the regulatory approvals, banking compliance, and initial workforce structuring required to launch operations instantly.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-semibold text-tlg-midnight">
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-tlg-signatureGold"/> Free Zone Licensing</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-tlg-signatureGold"/> Mainland LLC Formation</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-tlg-signatureGold"/> Corporate Bank Accounts</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-tlg-signatureGold"/> HR & Talent Acquisition</li>
                  </ul>
                </div>
              </div>

              {/* Feature Block 2 (Small) */}
              <div className="md:col-span-4 group relative overflow-hidden bg-tlg-midnight text-white shadow-sm flex flex-col">
                <div className="h-[300px] relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[1.5s] opacity-70 mix-blend-luminosity" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=2070&auto=format&fit=crop')" }}></div>
                </div>
                <div className="p-10 flex-1 flex flex-col justify-center border-t border-white/10">
                  <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-4 block">02</span>
                  <h3 className="text-2xl font-serif mb-4">Luxury Real Estate</h3>
                  <p className="text-white/70 font-light leading-relaxed text-sm">
                    Exclusive access to off-market developments and ultra-luxury penthouses across Palm Jumeirah, Downtown Dubai, and Dubai Marina.
                  </p>
                </div>
              </div>

              {/* Feature Block 3 (Small) */}
              <div className="md:col-span-5 group relative overflow-hidden bg-white shadow-sm border border-tlg-stone flex flex-col">
                <div className="p-10 flex-1 flex flex-col justify-center">
                  <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-4 block">03</span>
                  <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Residency & Golden Visas</h3>
                  <p className="text-gray-500 font-light leading-relaxed text-sm mb-6">
                    We structure property investments and corporate capital to meet the exact thresholds required for the UAE 10-Year Golden Visa, ensuring long-term security for you and your family.
                  </p>
                  <Link href="/companies/global-visa-immigration" className="text-xs uppercase tracking-widest font-bold text-tlg-midnight hover:text-tlg-signatureGold transition-colors flex items-center group-hover:translate-x-2">Secure Residency <ArrowRight size={14} className="ml-2"/></Link>
                </div>
              </div>

              {/* Feature Block 4 (Medium) */}
              <div className="md:col-span-7 group relative overflow-hidden bg-white shadow-sm border border-tlg-stone flex items-center">
                <div className="w-1/2 h-full absolute right-0 top-0 overflow-hidden hidden md:block">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[1.5s]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=2070&auto=format&fit=crop')" }}></div>
                </div>
                <div className="w-full md:w-1/2 p-10 md:p-12 relative z-10 bg-white md:bg-white/95 backdrop-blur-sm h-full flex flex-col justify-center">
                  <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-4 block">04</span>
                  <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Commercial Leasing</h3>
                  <p className="text-gray-500 font-light leading-relaxed text-sm">
                    Securing operational infrastructure in Dubai's most prestigious commercial districts. We handle the sourcing, negotiation, and fit-out of premium office spaces.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Global Impact Metrics */}
        <section className="py-24 bg-tlg-midnight relative border-y border-tlg-midnight">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <h4 className="text-4xl md:text-5xl font-serif text-white mb-2">Dubai</h4>
              <p className="text-[10px] uppercase tracking-widest text-tlg-signatureGold font-bold">Regional Command</p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-serif text-white mb-2">10-Year</h4>
              <p className="text-[10px] uppercase tracking-widest text-tlg-signatureGold font-bold">Golden Visas Secured</p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-serif text-white mb-2">Tier 1</h4>
              <p className="text-[10px] uppercase tracking-widest text-tlg-signatureGold font-bold">Banking Partners</p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-serif text-white mb-2">0%</h4>
              <p className="text-[10px] uppercase tracking-widest text-tlg-signatureGold font-bold">Corporate Tax Options</p>
            </div>
          </div>
        </section>

        {/* Action Section */}
        <section className="py-32 bg-white relative flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl px-6">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6">Take The Next Step</span>
            <h2 className="text-4xl md:text-5xl font-serif text-tlg-midnight mb-8">Establish Your Presence in the UAE</h2>
            <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
              Consult with our Middle East directors to select the optimal jurisdiction for your business or to view exclusive off-market properties.
            </p>
            <Link href="/book" className="inline-flex items-center gap-4 bg-tlg-midnight text-white px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-tlg-signatureGold transition-colors">
              Book UAE Consultation <ArrowRight size={14} />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
