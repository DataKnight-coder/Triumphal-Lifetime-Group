import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Share2, Linkedin, Twitter } from "lucide-react";

export default function UAEGoldenVisaReport() {
  return (
    <>
      <Header />
      <main className="bg-tlg-ivory">
        
        {/* Editorial Hero */}
        <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-tlg-midnight border-b border-tlg-stone">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight to-transparent"></div>
          </div>
          
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
            <Link href="/insights" className="inline-flex items-center text-xs uppercase tracking-widest font-bold text-tlg-signatureGold mb-12 hover:text-white transition-colors">
              <ArrowLeft size={14} className="mr-2" /> Back to Intelligence
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/50 mb-8">
              <span className="bg-white/10 px-3 py-1">Real Estate</span>
              <span>•</span>
              <span>August 2026</span>
              <span>•</span>
              <span>12 Min Read</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-8 max-w-4xl">
              The UAE Golden Visa Impact: How Institutional Capital is Reshaping Dubai's Skyline
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 font-light max-w-3xl leading-relaxed">
              An in-depth analysis of Q3 capital inflows into the UAE real estate sector, driven by new regulatory frameworks and the increasing demand for ultra-luxury off-plan acquisitions among African and North American investors.
            </p>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-24 bg-white relative">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
            
            {/* Left Column: Metadata & Sharing (Sticky) */}
            <div className="lg:w-1/4">
              <div className="sticky top-32">
                <div className="mb-12">
                  <span className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-2">Authored By</span>
                  <p className="text-tlg-midnight font-serif text-lg">TLG Strategic Advisory Board</p>
                  <p className="text-gray-500 font-light text-sm">Dubai International Financial Centre</p>
                </div>
                
                <div className="mb-12">
                  <span className="block text-xs uppercase tracking-widest font-bold text-gray-400 mb-4">Share Intelligence</span>
                  <div className="flex gap-4">
                    <button className="w-10 h-10 border border-tlg-stone flex items-center justify-center text-tlg-midnight hover:border-tlg-signatureGold hover:text-tlg-signatureGold transition-colors">
                      <Linkedin size={18} />
                    </button>
                    <button className="w-10 h-10 border border-tlg-stone flex items-center justify-center text-tlg-midnight hover:border-tlg-signatureGold hover:text-tlg-signatureGold transition-colors">
                      <Twitter size={18} />
                    </button>
                    <button className="w-10 h-10 border border-tlg-stone flex items-center justify-center text-tlg-midnight hover:border-tlg-signatureGold hover:text-tlg-signatureGold transition-colors">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>

                <div className="bg-tlg-ivory p-6 border border-tlg-stone">
                  <span className="block text-[10px] uppercase tracking-widest font-bold text-tlg-signatureGold mb-3">Executive Summary</span>
                  <ul className="text-sm text-gray-600 font-light space-y-3">
                    <li className="flex gap-2"><span>•</span> 42% YoY increase in African HNWI capital migration to Dubai.</li>
                    <li className="flex gap-2"><span>•</span> Golden Visa minimum investment thresholds acting as a catalyst, not a barrier.</li>
                    <li className="flex gap-2"><span>•</span> High-yield off-plan properties outperforming mature global markets.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Main Content */}
            <div className="lg:w-3/4 max-w-none prose prose-lg prose-gray prose-headings:font-serif prose-headings:text-tlg-midnight prose-a:text-tlg-signatureGold hover:prose-a:text-tlg-midnight">
              
              <p className="text-2xl font-light text-gray-500 leading-relaxed mb-12 first-letter:text-7xl first-letter:font-serif first-letter:text-tlg-midnight first-letter:mr-3 first-letter:float-left">
                The global macroeconomic landscape is undergoing a profound structural shift. As traditional safe-haven markets in North America and Western Europe grapple with high inflation, shifting tax regimes, and regulatory uncertainty, a new nexus of institutional wealth has emerged: the United Arab Emirates.
              </p>

              <h2>The Regulatory Catalyst</h2>
              <p>
                The expansion of the UAE Golden Visa program has fundamentally altered the trajectory of Dubai’s real estate market. Previously viewed as a high-yield, short-term holding destination, the implementation of long-term residency frameworks has transformed the emirate into a foundational pillar for generational wealth preservation.
              </p>
              <p>
                By lowering the minimum real estate investment threshold to AED 2 million (approximately USD 545,000) and removing the requirement for a specific down payment percentage to qualify, the UAE government has successfully engineered a frictionless corridor for High-Net-Worth Individuals (HNWIs) across Africa and North America.
              </p>

              <blockquote className="border-l-2 border-tlg-signatureGold pl-8 my-12 italic text-2xl font-serif text-tlg-midnight">
                "We are no longer just seeing capital flight; we are seeing strategic capital deployment. Investors are buying infrastructure, security, and a 10-year horizon of zero personal income tax."
              </blockquote>

              <h2>Off-Plan Acquisitions: The Institutional Play</h2>
              <p>
                Our Q3 analysis indicates a massive pivot toward ultra-luxury off-plan acquisitions. Unlike secondary markets, which are subject to immediate yield fluctuations, off-plan developments by tier-one developers (such as Emaar, DAMAC, and Nakheel) offer staggered payment plans that align perfectly with corporate liquidity strategies.
              </p>
              
              <div className="my-12 relative h-[400px] w-full overflow-hidden border border-tlg-stone">
                 <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')" }}></div>
                 <div className="absolute bottom-0 left-0 bg-white p-4 text-xs font-bold uppercase tracking-widest text-gray-500">Dubai Marina • Q3 Acquisitions Focus</div>
              </div>

              <h3>Key Drivers for African and Canadian Investors</h3>
              <ul>
                <li><strong>Currency Hedging:</strong> For investors in emerging markets (particularly West Africa), AED-denominated assets provide a highly stable, dollar-pegged hedge against domestic currency devaluation.</li>
                <li><strong>Tax Efficiency:</strong> Canadian executives are increasingly utilizing UAE corporate structures (Free Zones) in tandem with Golden Visa real estate investments to optimize cross-border tax liabilities legally and effectively.</li>
                <li><strong>Generational Structuring:</strong> The ability to sponsor spouses, children, and domestic staff on a 10-year horizon allows families to effectively relocate their entire base of operations.</li>
              </ul>

              <h2>Triumphal Lifetime Group's Strategic Outlook</h2>
              <p>
                As we move into the final quarter of the year, we anticipate inventory constraints in the ultra-luxury bracket (properties exceeding AED 15M). Capital is moving faster than tier-one developers can bring premium stock to market.
              </p>
              <p>
                For our clients, the mandate remains clear: target off-plan communities with integrated infrastructure (schools, retail, healthcare) rather than isolated towers. The Golden Visa has ensured that Dubai is no longer a transient city; it is a permanent global headquarters.
              </p>

              {/* In-article CTA */}
              <div className="mt-16 bg-tlg-midnight p-10 text-center border-t-4 border-tlg-signatureGold">
                <h4 className="text-2xl font-serif text-white mb-4">Acquire Your Dubai Asset</h4>
                <p className="text-white/70 font-light mb-8 text-sm max-w-xl mx-auto">
                  Consult with our Real Estate Advisory division to build a bespoke portfolio that guarantees your UAE Golden Visa and secures generational wealth.
                </p>
                <Link href="/book" className="inline-flex items-center gap-4 bg-white text-tlg-midnight px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-tlg-signatureGold hover:text-white transition-colors">
                  Schedule Consultation <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
