import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutGroup() {
  return (
    <>
      <Header />
      <main className="bg-tlg-ivory">
        
        {/* About Hero */}
        <section className="relative h-[80vh] min-h-[600px] w-full flex flex-col justify-end overflow-hidden bg-tlg-midnight">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center animate-slow-zoom scale-105 opacity-60"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/50 to-transparent"></div>
          </div>
          <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10 pb-24">
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tight mb-8 animate-reveal-up">
              The Group<br />
              <span className="italic font-light text-tlg-signatureGold">Ecosystem.</span>
            </h1>
            <p className="text-xl text-white/80 font-light max-w-2xl animate-reveal-up-delayed">
              A unified platform of seven specialized companies designed to drive international growth, from corporate structuring to community enrichment.
            </p>
          </div>
        </section>

        {/* Who We Are & Story Preview */}
        <section className="py-32 bg-white relative">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div className="animate-reveal-up">
                <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6">Who We Are</span>
                <h2 className="text-4xl md:text-5xl font-serif text-tlg-midnight mb-8 leading-tight">
                  We empower people to elevate businesses, creating wealth that enriches communities.
                </h2>
                <div className="flex flex-col gap-6 text-gray-500 font-light leading-relaxed">
                  <p>
                    Established as a multidisciplinary platform, Triumphal Lifetime Group eliminates the friction of cross-border growth. Whether you are expanding operations into the UAE, securing prime real estate in Nigeria, or establishing educational pathways in Canada, our ecosystem provides end-to-end execution.
                  </p>
                </div>
                <div className="mt-12">
                  <Link href="/about/our-story" className="inline-flex items-center gap-4 bg-tlg-midnight text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-tlg-signatureGold transition-colors">
                    Read Our Story <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-[300px] bg-tlg-stone/20 bg-cover bg-center rounded-sm" style={{backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1932&auto=format&fit=crop')"}}></div>
                <div className="h-[300px] bg-tlg-stone/20 bg-cover bg-center rounded-sm translate-y-12" style={{backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')"}}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-32 bg-tlg-midnight text-white">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/10 pt-16">
              
              <div>
                <h3 className="text-2xl font-serif text-tlg-signatureGold mb-6">Our Vision</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  To be the world's most trusted integrated platform for global mobility, corporate structuring, and generational wealth creation.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-tlg-signatureGold mb-6">Our Mission</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  To provide seamless, high-integrity advisory and execution services that bridge emerging markets with established global economies.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-tlg-signatureGold mb-6">Core Values</h3>
                <ul className="text-white/70 font-light space-y-3">
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-tlg-signatureGold rounded-full"></div> Uncompromising Integrity</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-tlg-signatureGold rounded-full"></div> Ecosystem Thinking</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-tlg-signatureGold rounded-full"></div> Global Excellence</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-tlg-signatureGold rounded-full"></div> Community Enrichment</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Further Routing Links */}
        <section className="py-32 bg-tlg-ivory">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              <Link href="/companies" className="group bg-white p-12 border border-tlg-stone hover:border-tlg-signatureGold transition-colors flex flex-col h-full">
                <span className="text-xs uppercase tracking-widest text-tlg-signatureGold font-bold mb-4 block">Ecosystem</span>
                <h3 className="text-3xl font-serif text-tlg-midnight mb-6">Our Companies</h3>
                <div className="mt-auto pt-8 border-t border-tlg-stone group-hover:border-tlg-signatureGold flex justify-between items-center transition-colors">
                  <span className="text-sm font-medium">Explore Division</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>

              <Link href="/about/leadership" className="group bg-white p-12 border border-tlg-stone hover:border-tlg-signatureGold transition-colors flex flex-col h-full">
                <span className="text-xs uppercase tracking-widest text-tlg-signatureGold font-bold mb-4 block">People</span>
                <h3 className="text-3xl font-serif text-tlg-midnight mb-6">Leadership</h3>
                <div className="mt-auto pt-8 border-t border-tlg-stone group-hover:border-tlg-signatureGold flex justify-between items-center transition-colors">
                  <span className="text-sm font-medium">Meet the Board</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>

              <Link href="/about/global-presence" className="group bg-white p-12 border border-tlg-stone hover:border-tlg-signatureGold transition-colors flex flex-col h-full">
                <span className="text-xs uppercase tracking-widest text-tlg-signatureGold font-bold mb-4 block">Markets</span>
                <h3 className="text-3xl font-serif text-tlg-midnight mb-6">Global Presence</h3>
                <div className="mt-auto pt-8 border-t border-tlg-stone group-hover:border-tlg-signatureGold flex justify-between items-center transition-colors">
                  <span className="text-sm font-medium">View Map</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>

              <Link href="/about/partners" className="group bg-white p-12 border border-tlg-stone hover:border-tlg-signatureGold transition-colors flex flex-col h-full">
                <span className="text-xs uppercase tracking-widest text-tlg-signatureGold font-bold mb-4 block">Network</span>
                <h3 className="text-3xl font-serif text-tlg-midnight mb-6">Partners</h3>
                <div className="mt-auto pt-8 border-t border-tlg-stone group-hover:border-tlg-signatureGold flex justify-between items-center transition-colors">
                  <span className="text-sm font-medium">View Affiliations</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
