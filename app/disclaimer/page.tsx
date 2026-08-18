import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Disclaimer() {
  return (
    <>
      <Header />
      <main className="bg-tlg-ivory">
        
        {/* Cinematic Hero */}
        <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-end overflow-hidden bg-tlg-midnight">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center animate-slow-zoom scale-105 opacity-40"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/80 to-tlg-midnight/20"></div>
          </div>
          
          <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10 pb-24 md:pb-32">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6 animate-reveal-up">Corporate Governance</span>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tight mb-8 animate-reveal-up-delayed">
              Legal<br />
              <span className="italic font-light text-white/80">Disclaimer.</span>
            </h1>
            <div className="w-24 h-[1px] bg-tlg-signatureGold mb-8 animate-draw-line"></div>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl leading-relaxed animate-reveal-up-delayed">
              Important boundaries regarding our advisory services, digital products, and financial guidance.
            </p>
          </div>
        </section>

        {/* Legal Document Layout */}
        <section className="py-32 bg-white relative">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Sticky Table of Contents */}
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-8">Table of Contents</span>
                  <ul className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-widest text-tlg-midnight">
                    <li className="flex items-center gap-3 text-tlg-signatureGold"><div className="w-4 h-[1px] bg-tlg-signatureGold"></div> 1. General Information</li>
                    <li className="hover:text-tlg-signatureGold transition-colors cursor-pointer pl-7">2. Financial & Investment</li>
                    <li className="hover:text-tlg-signatureGold transition-colors cursor-pointer pl-7">3. Legal & Immigration</li>
                    <li className="hover:text-tlg-signatureGold transition-colors cursor-pointer pl-7">4. Educational Placements</li>
                    <li className="hover:text-tlg-signatureGold transition-colors cursor-pointer pl-7">5. Third-Party Links</li>
                  </ul>
                  
                  <div className="mt-16 p-8 bg-tlg-ivory border border-tlg-stone">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-tlg-signatureGold block mb-2">Last Updated</span>
                    <p className="font-serif text-xl text-tlg-midnight">August 2026</p>
                  </div>
                </div>
              </div>
              
              {/* Legal Text */}
              <div className="lg:col-span-8 max-w-3xl">
                
                <div className="prose prose-lg prose-gray">
                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">1. General Information</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    The information provided by Triumphal Lifetime Group on this website and our digital platforms is for general informational purposes only. All information is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, or completeness of any information on the site.
                  </p>

                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">2. Financial & Investment Disclaimer</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    Triumphal Lifetime Group provides strategic real estate and corporate advisory services. We are <strong>not</strong> a registered broker-dealer or a certified financial planner. Any insights regarding real estate yields, tax efficiencies, or market growth in the UAE, Nigeria, or Canada are estimations based on current market data. You must consult a licensed financial advisor or tax professional before making significant capital investments.
                  </p>

                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">3. Legal & Immigration Disclaimer</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    While we assist in processing Golden Visas, corporate structuring, and study permits, the content on our site does not constitute formal legal advice. Immigration policies frequently change without prior government notice. Our success rates are historical averages and do not guarantee the outcome of your specific application. Final adjudication rests solely with the respective government authorities.
                  </p>

                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">4. Educational Placements</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    Our Education Advisory division works diligently to secure placements in elite global universities. However, admission is strictly determined by the university's independent admissions board. Triumphal Lifetime Group cannot guarantee acceptance into any specific academic institution, regardless of a student's prior academic performance.
                  </p>

                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">5. Third-Party Links</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    Our website may contain links to external websites that are not provided or maintained by us. Please note that Triumphal Lifetime Group does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* Action Section */}
        <section className="py-24 bg-tlg-ivory relative flex flex-col items-center justify-center text-center border-t border-tlg-stone">
          <div className="max-w-3xl px-6">
            <h2 className="text-3xl font-serif text-tlg-midnight mb-6">Require Further Clarification?</h2>
            <Link href="/contact" className="inline-flex items-center gap-4 bg-tlg-midnight text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-tlg-signatureGold transition-colors">
              Contact Us <ArrowRight size={14} />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
