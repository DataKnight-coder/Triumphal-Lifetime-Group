import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RefundPolicy() {
  return (
    <>
      <Header />
      <main className="bg-tlg-ivory">
        
        {/* Cinematic Hero */}
        <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-end overflow-hidden bg-tlg-midnight">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center animate-slow-zoom scale-105 opacity-40"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1628527304948-0615f585ed82?q=80&w=2070&auto=format&fit=crop')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/80 to-tlg-midnight/20"></div>
          </div>
          
          <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10 pb-24 md:pb-32">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6 animate-reveal-up">Corporate Governance</span>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tight mb-8 animate-reveal-up-delayed">
              Refund<br />
              <span className="italic font-light text-white/80">Policy.</span>
            </h1>
            <div className="w-24 h-[1px] bg-tlg-signatureGold mb-8 animate-draw-line"></div>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl leading-relaxed animate-reveal-up-delayed">
              Clear parameters defining financial transactions, advisory retainers, and digital product purchases.
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
                    <li className="flex items-center gap-3 text-tlg-signatureGold"><div className="w-4 h-[1px] bg-tlg-signatureGold"></div> 1. Advisory Retainers</li>
                    <li className="hover:text-tlg-signatureGold transition-colors cursor-pointer pl-7">2. Digital Products & Courses</li>
                    <li className="hover:text-tlg-signatureGold transition-colors cursor-pointer pl-7">3. Real Estate Deposits</li>
                    <li className="hover:text-tlg-signatureGold transition-colors cursor-pointer pl-7">4. Immigration Filings</li>
                    <li className="hover:text-tlg-signatureGold transition-colors cursor-pointer pl-7">5. Requesting a Refund</li>
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
                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">1. Advisory & Consulting Retainers</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    Triumphal Lifetime Group provides highly specialized corporate advisory services. Retainer fees paid for strategic consulting, HR audits, and IT infrastructure architecture are fundamentally <strong>non-refundable</strong> once the engagement has commenced and intellectual capital has been deployed. If an engagement is canceled prior to commencement, a refund may be issued minus a 15% administrative fee.
                  </p>

                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">2. Digital Products & E-Learning</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    Due to the immediate access to proprietary corporate knowledge, all sales of digital products, downloadable frameworks, and e-learning courses are <strong>final</strong>. We do not offer refunds on digital goods unless the file is proven to be technically defective and our IT department is unable to provide a working replacement within 7 business days.
                  </p>

                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">3. Real Estate Deposits & Acquisitions</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    Refunds concerning real estate transactions, off-plan deposits, and commercial leasing in Dubai, Nigeria, or Canada are governed exclusively by the specific Sales & Purchase Agreement (SPA) signed between the client and the developer/seller. Triumphal Lifetime Group advisory fees related to real estate acquisition are non-refundable upon the successful sourcing of a property.
                  </p>

                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">4. Immigration & Visa Filings</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    We charge advisory fees for the preparation and submission of immigration dossiers. Government processing fees are non-refundable under any circumstance. Furthermore, Triumphal Lifetime Group does not guarantee visa approval; therefore, a visa rejection by a government entity (e.g., IRCC Canada or UAE GDRFA) does not constitute grounds for a refund of our advisory fees.
                  </p>

                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">5. Requesting a Refund</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    If you believe your specific circumstance warrants an exception to this policy, you may submit a formal request to our financial controller at <strong>billing@triumphallifetimegroup.com</strong>. All requests must be submitted within 14 days of the initial transaction and include all relevant documentation.
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* Action Section */}
        <section className="py-24 bg-tlg-ivory relative flex flex-col items-center justify-center text-center border-t border-tlg-stone">
          <div className="max-w-3xl px-6">
            <h2 className="text-3xl font-serif text-tlg-midnight mb-6">Billing Inquiries</h2>
            <Link href="/contact" className="inline-flex items-center gap-4 bg-tlg-midnight text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-tlg-signatureGold transition-colors">
              Contact Billing <ArrowRight size={14} />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
