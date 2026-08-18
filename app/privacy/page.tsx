import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="bg-tlg-ivory">
        
        {/* Cinematic Hero */}
        <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-end overflow-hidden bg-tlg-midnight">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center animate-slow-zoom scale-105 opacity-40"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=2070&auto=format&fit=crop')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/80 to-tlg-midnight/20"></div>
          </div>
          
          <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10 pb-24 md:pb-32">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6 animate-reveal-up">Corporate Governance</span>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tight mb-8 animate-reveal-up-delayed">
              Privacy<br />
              <span className="italic font-light text-white/80">Policy.</span>
            </h1>
            <div className="w-24 h-[1px] bg-tlg-signatureGold mb-8 animate-draw-line"></div>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl leading-relaxed animate-reveal-up-delayed">
              Transparency and data security are foundational to our operations across North America, Europe, and Africa.
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
                    <li className="flex items-center gap-3 text-tlg-signatureGold"><div className="w-4 h-[1px] bg-tlg-signatureGold"></div> 1. Information Collection</li>
                    <li className="hover:text-tlg-signatureGold transition-colors cursor-pointer pl-7">2. Use of Data</li>
                    <li className="hover:text-tlg-signatureGold transition-colors cursor-pointer pl-7">3. Data Sharing & Transfers</li>
                    <li className="hover:text-tlg-signatureGold transition-colors cursor-pointer pl-7">4. Security Protocols</li>
                    <li className="hover:text-tlg-signatureGold transition-colors cursor-pointer pl-7">5. Your Privacy Rights</li>
                    <li className="hover:text-tlg-signatureGold transition-colors cursor-pointer pl-7">6. Contact Information</li>
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
                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">1. Information We Collect</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-8 text-lg">
                    Triumphal Lifetime Group ("we," "our," or "us") is committed to protecting your privacy. As a multinational corporate advisory, real estate, and digital products entity operating across Nigeria, the UAE, and Canada, we collect personal data that is necessary to provide our premium services.
                  </p>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    This includes, but is not limited to: identity data (passport copies, government IDs), contact data, financial data (bank statements for property acquisitions or visa applications), and technical data (IP addresses, browser types) collected through our digital interfaces.
                  </p>

                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">2. How We Use Your Data</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-4 text-lg">
                    We utilize your personal information exclusively for the following corporate functions:
                  </p>
                  <ul className="list-disc pl-6 text-gray-500 font-light mb-12 text-lg space-y-2">
                    <li>Executing corporate contracts, real estate acquisitions, and immigration filings.</li>
                    <li>Conducting mandatory Due Diligence (DD), Know Your Customer (KYC), and Anti-Money Laundering (AML) checks required by UAE, Canadian, and Nigerian law.</li>
                    <li>Providing access to our Digital Products & Learning platforms.</li>
                    <li>Improving our global service delivery through analytical data processing.</li>
                  </ul>

                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">3. International Data Transfers</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    Because we are a global group, your data may be transferred between our operational hubs in Lagos, Dubai, and Toronto. We ensure that all cross-border data transfers comply with international data protection frameworks, including the GDPR (Europe), PIPEDA (Canada), NDPR (Nigeria), and UAE Data Protection Laws. Data is encrypted both in transit and at rest using enterprise-grade cryptographic protocols.
                  </p>

                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">4. Security Protocols</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    We have implemented rigorous technical and organizational security measures designed to secure your personal information from accidental loss, unauthorized access, or disclosure. Access to client data is strictly limited on a "need-to-know" basis to employees, contractors, and legal counsel subject to severe confidentiality obligations.
                  </p>

                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">5. Your Privacy Rights</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-4 text-lg">
                    Depending on your jurisdiction, you possess the right to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-500 font-light mb-12 text-lg space-y-2">
                    <li>Request access to your personal data held by the Group.</li>
                    <li>Request immediate correction of any inaccurate data.</li>
                    <li>Request the erasure of your personal data ("Right to be Forgotten"), subject to overriding legal retention requirements.</li>
                    <li>Object to the processing of your data for direct marketing.</li>
                  </ul>

                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">6. Contact Our Legal Team</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    For inquiries regarding this Privacy Policy or to exercise your data rights, please contact our Data Protection Officer at <strong>legal@triumphallifetimegroup.com</strong>.
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
              Contact Global HQ <ArrowRight size={14} />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
