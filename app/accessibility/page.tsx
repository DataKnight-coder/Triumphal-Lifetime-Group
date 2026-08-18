import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Accessibility() {
  return (
    <>
      <Header />
      <main className="bg-tlg-ivory">
        
        {/* Cinematic Hero */}
        <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-end overflow-hidden bg-tlg-midnight">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center animate-slow-zoom scale-105 opacity-40"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/80 to-tlg-midnight/20"></div>
          </div>
          
          <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10 pb-24 md:pb-32">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6 animate-reveal-up">Corporate Governance</span>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tight mb-8 animate-reveal-up-delayed">
              Accessibility<br />
              <span className="italic font-light text-white/80">Statement.</span>
            </h1>
            <div className="w-24 h-[1px] bg-tlg-signatureGold mb-8 animate-draw-line"></div>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl leading-relaxed animate-reveal-up-delayed">
              Our commitment to providing a digitally inclusive corporate platform for all users globally.
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
                    <li className="flex items-center gap-3 text-tlg-signatureGold"><div className="w-4 h-[1px] bg-tlg-signatureGold"></div> 1. Our Commitment</li>
                    <li className="hover:text-tlg-signatureGold transition-colors cursor-pointer pl-7">2. Technical Standards</li>
                    <li className="hover:text-tlg-signatureGold transition-colors cursor-pointer pl-7">3. Ongoing Optimization</li>
                    <li className="hover:text-tlg-signatureGold transition-colors cursor-pointer pl-7">4. Feedback & Support</li>
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
                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">1. Our Commitment</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    Triumphal Lifetime Group is fundamentally committed to digital inclusion. We believe our premium corporate advisory services, real estate portfolios, and digital learning products must be accessible to all individuals, regardless of ability or technology. We view accessibility not merely as a compliance requirement, but as a core component of our luxury user experience.
                  </p>

                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">2. Technical Standards</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-4 text-lg">
                    To fulfill this commitment, we strive to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. Our digital architecture incorporates:
                  </p>
                  <ul className="list-disc pl-6 text-gray-500 font-light mb-12 text-lg space-y-2">
                    <li>Semantic HTML structuring for optimal screen reader compatibility.</li>
                    <li>High-contrast typography (Midnight Navy and Ivory) ensuring legibility for visually impaired users.</li>
                    <li>Keyboard-navigable menus and booking interfaces.</li>
                    <li>Scalable font architecture that responds accurately to user browser preferences.</li>
                  </ul>

                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">3. Ongoing Optimization</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    Digital accessibility is an iterative process. As our web platform evolves and we deploy new digital products, our engineering team conducts routine accessibility audits. We actively refine our codebases to patch any navigation barriers that may arise as web standards advance.
                  </p>

                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">4. Feedback & Support</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    If you encounter any barriers while attempting to access information on this website, or require assistance booking a consultation or accessing our Digital Store, please contact us. Our support team is trained to assist you via alternative communication methods.
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* Action Section */}
        <section className="py-24 bg-tlg-ivory relative flex flex-col items-center justify-center text-center border-t border-tlg-stone">
          <div className="max-w-3xl px-6">
            <h2 className="text-3xl font-serif text-tlg-midnight mb-6">Accessibility Support</h2>
            <Link href="/contact" className="inline-flex items-center gap-4 bg-tlg-midnight text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-tlg-signatureGold transition-colors">
              Contact Support <ArrowRight size={14} />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
