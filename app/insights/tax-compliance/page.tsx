import Link from "next/link";
import { ArrowLeft, ArrowRight, Share2, Linkedin, Twitter } from "lucide-react";

export default function TaxComplianceReport() {
  return (
    <>
            <main className="bg-tlg-ivory">
        
        {/* Editorial Hero */}
        <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-tlg-midnight border-b border-tlg-stone">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight to-transparent"></div>
          </div>
          
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
            <Link href="/insights" className="inline-flex items-center text-xs uppercase tracking-widest font-bold text-tlg-signatureGold mb-12 hover:text-white transition-colors">
              <ArrowLeft size={14} className="mr-2" /> Back to Intelligence
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/50 mb-8">
              <span className="bg-white/10 px-3 py-1">Corporate</span>
              <span>•</span>
              <span>July 2026</span>
              <span>•</span>
              <span>18 Min Read</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-8 max-w-4xl">
              Navigating Tax Compliance for Cross-Border Subsidiaries
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 font-light max-w-3xl leading-relaxed">
              Structuring corporate governance across multiple jurisdictions requires a proactive approach to evolving tax codes in Nigeria, the UAE, and Canada.
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
                  <p className="text-tlg-midnight font-serif text-lg">TLG Corporate Governance Unit</p>
                  <p className="text-gray-500 font-light text-sm">Toronto / Lagos HQ</p>
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
                    <li className="flex gap-2"><span>•</span> Implementation of the UAE 9% Corporate Tax framework.</li>
                    <li className="flex gap-2"><span>•</span> Repatriation strategies for Canadian parent companies.</li>
                    <li className="flex gap-2"><span>•</span> Mitigating double taxation across West African operations.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Main Content */}
            <div className="lg:w-3/4 max-w-none prose prose-lg prose-gray prose-headings:font-serif prose-headings:text-tlg-midnight prose-a:text-tlg-signatureGold hover:prose-a:text-tlg-midnight">
              
              <p className="text-2xl font-light text-gray-500 leading-relaxed mb-12 first-letter:text-7xl first-letter:font-serif first-letter:text-tlg-midnight first-letter:mr-3 first-letter:float-left">
                The era of frictionless, unregulated offshore capital structuring has ended. As global economic blocs introduce stricter regulatory oversight, multinational corporations must adopt sophisticated, highly compliant tax architectures. For enterprises bridging operations between emerging markets and established Western economies, this transition is particularly complex.
              </p>

              <h2>The UAE 9% Corporate Tax Paradigm</h2>
              <p>
                The introduction of a 9% federal corporate tax in the UAE on profits exceeding AED 375,000 marked a historic shift for the region. Historically utilized as a pure zero-tax jurisdiction, the UAE is now aligning itself with global OECD standards. 
              </p>
              <p>
                However, strategic opportunities remain robust. Companies operating within designated Free Zones (such as DIFC or DMCC) that derive "Qualifying Income" can still benefit from a 0% corporate tax rate, provided they maintain adequate economic substance within the UAE.
              </p>

              <blockquote className="border-l-2 border-tlg-signatureGold pl-8 my-12 italic text-2xl font-serif text-tlg-midnight">
                "Compliance is no longer a localized accounting function; it is a critical component of international corporate strategy. A misaligned subsidiary structure can decimate operating margins."
              </blockquote>

              <h2>Bridging North America and West Africa</h2>
              <p>
                For our clients operating out of Nigeria and expanding into Canada (or vice versa), managing the flow of dividends and intellectual property royalties requires meticulous planning. 
              </p>
              
              <div className="my-12 relative h-[400px] w-full overflow-hidden border border-tlg-stone">
                 <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2036&auto=format&fit=crop')" }}></div>
                 <div className="absolute bottom-0 left-0 bg-white p-4 text-xs font-bold uppercase tracking-widest text-gray-500">Global Financial Analysis • Triumphal HQ</div>
              </div>

              <h3>Critical Structuring Vectors</h3>
              <ul>
                <li><strong>Transfer Pricing:</strong> Regulatory bodies in Canada (CRA) and Nigeria (FIRS) are increasingly auditing intercompany transactions. Robust documentation proving "arm's length" pricing is now mandatory.</li>
                <li><strong>Double Taxation Agreements (DTAs):</strong> Leveraging existing DTAs between the UAE and Canada can significantly reduce withholding taxes on dividends.</li>
                <li><strong>Economic Substance Requirements (ESR):</strong> Shell companies are obsolete. Subsidiaries must demonstrate physical offices, local staff, and board meetings conducted within the jurisdiction of incorporation.</li>
              </ul>

              <h2>Triumphal Lifetime Group's Advisory Stance</h2>
              <p>
                We advise all cross-border enterprises to conduct a bi-annual structural audit. Our HR & Business Consulting division frequently identifies legacy corporate structures—established five to ten years ago—that are now severely misaligned with current international tax laws, exposing directors to significant personal liability.
              </p>
              <p>
                The optimal structure today is a decentralized, yet highly compliant, triad: A stable operational base in West Africa, a tax-efficient holding or trading hub in the UAE, and an institutional parent or intellectual property vehicle in Canada.
              </p>

              {/* In-article CTA */}
              <div className="mt-16 bg-tlg-midnight p-10 text-center border-t-4 border-tlg-signatureGold">
                <h4 className="text-2xl font-serif text-white mb-4">Audit Your Corporate Structure</h4>
                <p className="text-white/70 font-light mb-8 text-sm max-w-xl mx-auto">
                  Engage our Corporate Governance unit to review your cross-border operations and optimize your international tax strategy.
                </p>
                <Link href="/book" className="inline-flex items-center gap-4 bg-white text-tlg-midnight px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-tlg-signatureGold hover:text-white transition-colors">
                  Schedule Corporate Audit <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          </div>
        </section>

      </main>
          </>
  );
}
