import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TermsConditions() {
  return (
    <>
      <Header />
      <main className="bg-tlg-ivory">
        
        {/* Cinematic Hero */}
        <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-end overflow-hidden bg-tlg-midnight">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center animate-slow-zoom scale-105 opacity-40"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/80 to-tlg-midnight/20"></div>
          </div>
          
          <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10 pb-24 md:pb-32">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6 animate-reveal-up">Corporate Governance</span>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tight mb-8 animate-reveal-up-delayed">
              Terms &<br />
              <span className="italic font-light text-white/80">Conditions.</span>
            </h1>
            <div className="w-24 h-[1px] bg-tlg-signatureGold mb-8 animate-draw-line"></div>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl leading-relaxed animate-reveal-up-delayed">
              The binding legal framework governing your engagement with the Triumphal Lifetime Group network.
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
                    <li className="flex items-center gap-3 text-tlg-signatureGold"><div className="w-4 h-[1px] bg-tlg-signatureGold"></div> 1. Acceptance of Terms</li>
                    <li className="hover:text-tlg-signatureGold transition-colors cursor-pointer pl-7">2. Corporate Services</li>
                    <li className="hover:text-tlg-signatureGold transition-colors cursor-pointer pl-7">3. Client Obligations</li>
                    <li className="hover:text-tlg-signatureGold transition-colors cursor-pointer pl-7">4. Limitation of Liability</li>
                    <li className="hover:text-tlg-signatureGold transition-colors cursor-pointer pl-7">5. Intellectual Property</li>
                    <li className="hover:text-tlg-signatureGold transition-colors cursor-pointer pl-7">6. Governing Law</li>
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
                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">1. Acceptance of Terms</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    By accessing the websites, digital platforms, or retaining the corporate services of Triumphal Lifetime Group, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you are prohibited from utilizing our proprietary services or accessing this site.
                  </p>

                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">2. Corporate Services & Execution</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-4 text-lg">
                    Triumphal Lifetime Group acts as a strategic advisory firm providing services across Real Estate, HR, IT, and Global Immigration. Please note:
                  </p>
                  <ul className="list-disc pl-6 text-gray-500 font-light mb-12 text-lg space-y-2">
                    <li>We do not guarantee the final decisions of government immigration bodies regarding visa approvals.</li>
                    <li>Real estate market valuations provided by our advisors are estimates based on rigorous market data but do not constitute guaranteed financial returns.</li>
                    <li>Execution of services may be subject to third-party timelines (e.g., banking compliance checks, embassy processing).</li>
                  </ul>

                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">3. Client Obligations</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    Clients utilizing our advisory, legal, or acquisition services must provide completely accurate, unfalsified documentation. Any deliberate misrepresentation of financial standing, legal history, or corporate structure to our agents constitutes grounds for immediate termination of the service agreement without refund, and potential reporting to relevant jurisdictional authorities.
                  </p>

                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">4. Limitation of Liability</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    To the maximum extent permitted by applicable law, in no event shall Triumphal Lifetime Group, its directors, or its subsidiaries be liable for any indirect, punitive, incidental, special, or consequential damages arising out of or in any way connected with the use of our digital platforms or the delay/inability to use our services.
                  </p>

                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">5. Intellectual Property Rights</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    All content, including digital course materials, structural blueprints, legal frameworks, corporate design assets, and logos distributed via our platforms are the exclusive property of Triumphal Lifetime Group. You are granted a limited, non-exclusive license to use these materials solely for your internal corporate purposes. Unauthorized distribution or resale is strictly prohibited.
                  </p>

                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">6. Governing Law & Jurisdiction</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    These Terms & Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which the specific regional subsidiary is registered (e.g., the laws of the Federal Republic of Nigeria, the laws of the UAE/DIFC, or the laws of Ontario, Canada). Any disputes shall be exclusively resolved in the competent courts of the respective jurisdiction.
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* Action Section */}
        <section className="py-24 bg-tlg-ivory relative flex flex-col items-center justify-center text-center border-t border-tlg-stone">
          <div className="max-w-3xl px-6">
            <h2 className="text-3xl font-serif text-tlg-midnight mb-6">Legal Inquiries</h2>
            <Link href="/contact" className="inline-flex items-center gap-4 bg-tlg-midnight text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-tlg-signatureGold transition-colors">
              Contact General Counsel <ArrowRight size={14} />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
