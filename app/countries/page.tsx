import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function CountriesHub() {
  return (
    <>
      <Header />
      <main className="bg-tlg-ivory">
        
        {/* Cinematic Hero */}
        <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-end overflow-hidden bg-tlg-midnight">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center animate-slow-zoom scale-105 opacity-50"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/60 to-tlg-midnight/20"></div>
          </div>
          
          <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10 pb-24 md:pb-32">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6 animate-reveal-up">Global Infrastructure</span>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tight mb-8 animate-reveal-up-delayed">
              Global<br />
              <span className="italic font-light text-white/80">Gateways.</span>
            </h1>
            <div className="w-24 h-[1px] bg-tlg-signatureGold mb-8 animate-draw-line"></div>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl leading-relaxed animate-reveal-up-delayed">
              Borderless enterprise architecture. We operate deeply integrated corporate hubs across North America, the Middle East, and West Africa.
            </p>
          </div>
        </section>

        {/* Philosophy / Authority Quote */}
        <section className="py-24 md:py-32 bg-white relative border-b border-tlg-stone">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest block mb-8">The Core Thesis</span>
            <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight leading-[1.3]">
              "Capital flows where friction is eliminated. Our regional gateways act as secure conduits for global investments, talent mobility, and corporate expansion."
            </h2>
          </div>
        </section>

        {/* Gateways Grid */}
        <section className="py-24 md:py-32 bg-tlg-ivory relative">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            
            <div className="flex flex-col md:flex-row justify-between items-end mb-20">
              <h2 className="text-4xl md:text-6xl font-serif text-tlg-midnight">Select Jurisdiction</h2>
              <p className="text-gray-500 font-light max-w-sm mt-6 md:mt-0">Access tailored legal, real estate, and corporate advisory parameters specific to each operating region.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              
              {/* UAE Gateway */}
              <Link href="/ae" className="group relative overflow-hidden bg-white border border-tlg-stone h-[600px] flex flex-col shadow-sm hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="absolute inset-0 z-0 h-[65%]">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-[2s]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')" }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
                </div>
                <div className="relative z-10 flex flex-col h-full justify-end p-10">
                  <div className="bg-white/90 backdrop-blur-sm p-8 border border-tlg-stone">
                    <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-3 block">Middle East HQ</span>
                    <h3 className="text-3xl font-serif text-tlg-midnight mb-4">United Arab Emirates</h3>
                    <p className="text-gray-500 font-light text-sm mb-8 leading-relaxed">
                      Corporate structuring in DIFC, luxury real estate acquisition, and 10-Year Golden Visa pathways.
                    </p>
                    <span className="flex items-center text-xs font-bold uppercase tracking-widest text-tlg-midnight group-hover:text-tlg-signatureGold transition-colors">Enter Gateway <ArrowRight size={14} className="ml-2"/></span>
                  </div>
                </div>
              </Link>

              {/* Canada Gateway */}
              <Link href="/ca" className="group relative overflow-hidden bg-white border border-tlg-stone h-[600px] flex flex-col shadow-sm hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="absolute inset-0 z-0 h-[65%]">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-[2s]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2070&auto=format&fit=crop')" }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
                </div>
                <div className="relative z-10 flex flex-col h-full justify-end p-10">
                  <div className="bg-white/90 backdrop-blur-sm p-8 border border-tlg-stone">
                    <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-3 block">North America HQ</span>
                    <h3 className="text-3xl font-serif text-tlg-midnight mb-4">Canada</h3>
                    <p className="text-gray-500 font-light text-sm mb-8 leading-relaxed">
                      Elite university placements, skilled permanent residency, and North American corporate expansion.
                    </p>
                    <span className="flex items-center text-xs font-bold uppercase tracking-widest text-tlg-midnight group-hover:text-tlg-signatureGold transition-colors">Enter Gateway <ArrowRight size={14} className="ml-2"/></span>
                  </div>
                </div>
              </Link>

              {/* Nigeria Gateway */}
              <Link href="/ng" className="group relative overflow-hidden bg-white border border-tlg-stone h-[600px] flex flex-col shadow-sm hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="absolute inset-0 z-0 h-[65%]">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-[2s]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=2070&auto=format&fit=crop')" }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
                </div>
                <div className="relative z-10 flex flex-col h-full justify-end p-10">
                  <div className="bg-white/90 backdrop-blur-sm p-8 border border-tlg-stone">
                    <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-3 block">West Africa HQ</span>
                    <h3 className="text-3xl font-serif text-tlg-midnight mb-4">Nigeria</h3>
                    <p className="text-gray-500 font-light text-sm mb-8 leading-relaxed">
                      Market entry advisory, legacy real estate acquisition, and corporate governance for African enterprises.
                    </p>
                    <span className="flex items-center text-xs font-bold uppercase tracking-widest text-tlg-midnight group-hover:text-tlg-signatureGold transition-colors">Enter Gateway <ArrowRight size={14} className="ml-2"/></span>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* Global Impact Metrics */}
        <section className="py-24 bg-tlg-midnight relative border-y border-tlg-midnight">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <h4 className="text-4xl md:text-5xl font-serif text-white mb-2">3</h4>
              <p className="text-[10px] uppercase tracking-widest text-tlg-signatureGold font-bold">Continents</p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-serif text-white mb-2">Tier 1</h4>
              <p className="text-[10px] uppercase tracking-widest text-tlg-signatureGold font-bold">Banking Partners</p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-serif text-white mb-2">100%</h4>
              <p className="text-[10px] uppercase tracking-widest text-tlg-signatureGold font-bold">Local Compliance</p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-serif text-white mb-2">24/7</h4>
              <p className="text-[10px] uppercase tracking-widest text-tlg-signatureGold font-bold">Global Operations</p>
            </div>
          </div>
        </section>

        {/* Action Section */}
        <section className="py-32 bg-white relative flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl px-6">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6">Take The Next Step</span>
            <h2 className="text-4xl md:text-5xl font-serif text-tlg-midnight mb-8">Establish Your Global Presence</h2>
            <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
              Consult with our decentralized executive team to structure your international expansion securely and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/book" className="inline-flex items-center justify-center gap-4 bg-tlg-midnight text-white px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-tlg-signatureGold transition-colors">
                Book Consultation <ArrowRight size={14} />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center gap-4 bg-transparent border border-tlg-stone text-tlg-midnight px-10 py-5 text-xs font-bold uppercase tracking-widest hover:border-tlg-signatureGold transition-colors">
                View Directory <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
