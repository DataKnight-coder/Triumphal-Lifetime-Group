import Link from "next/link";
import { ArrowLeft, ArrowRight, Share2, Linkedin, Twitter } from "lucide-react";

export default function ExpressEntryReport() {
  return (
    <>
            <main className="bg-tlg-ivory">
        
        {/* Editorial Hero */}
        <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 bg-tlg-midnight border-b border-tlg-stone">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight to-transparent"></div>
          </div>
          
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
            <Link href="/insights" className="inline-flex items-center text-xs uppercase tracking-widest font-bold text-tlg-signatureGold mb-12 hover:text-white transition-colors">
              <ArrowLeft size={14} className="mr-2" /> Back to Intelligence
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/50 mb-8">
              <span className="bg-white/10 px-3 py-1">Immigration</span>
              <span>•</span>
              <span>July 2026</span>
              <span>•</span>
              <span>10 Min Read</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-8 max-w-4xl">
              The Future of Canadian Express Entry: What Executives Need to Know
            </h1>
            
            <p className="text-xl md:text-2xl text-white/70 font-light max-w-3xl leading-relaxed">
              An overview of recent IRCC policy shifts, Category-Based Selection draws, and how they impact corporate secondments and executive mobility from emerging markets.
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
                  <p className="text-tlg-midnight font-serif text-lg">Global Mobility Division</p>
                  <p className="text-gray-500 font-light text-sm">Toronto, Canada</p>
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
                    <li className="flex gap-2"><span>•</span> Shift from broad CRS score draws to targeted, occupation-specific selections.</li>
                    <li className="flex gap-2"><span>•</span> The rising importance of French language proficiency in securing PR.</li>
                    <li className="flex gap-2"><span>•</span> Strategies for Intra-Company Transferees (ICTs) navigating the transition to Permanent Residency.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Main Content */}
            <div className="lg:w-3/4 max-w-none prose prose-lg prose-gray prose-headings:font-serif prose-headings:text-tlg-midnight prose-a:text-tlg-signatureGold hover:prose-a:text-tlg-midnight">
              
              <p className="text-2xl font-light text-gray-500 leading-relaxed mb-12 first-letter:text-7xl first-letter:font-serif first-letter:text-tlg-midnight first-letter:mr-3 first-letter:float-left">
                Canada’s immigration landscape has evolved from a pure human-capital scoring model to a highly targeted, macroeconomic-driven selection system. For corporate executives, senior managers, and skilled professionals looking to establish a North American base, understanding the strategic shift in Immigration, Refugees and Citizenship Canada (IRCC) policy is critical.
              </p>

              <h2>The Shift to Category-Based Selection</h2>
              <p>
                Historically, the Comprehensive Ranking System (CRS) rewarded youth, advanced degrees, and strong English proficiency. While these factors remain foundational, IRCC’s implementation of Category-Based Selection has fundamentally changed the calculus.
              </p>
              <p>
                Draws are now heavily weighted toward specific labor shortages. Executives with backgrounds in healthcare management, STEM (Science, Technology, Engineering, and Math), and the trades are experiencing significantly lower CRS cut-off requirements compared to general "all-program" draws.
              </p>

              <blockquote className="border-l-2 border-tlg-signatureGold pl-8 my-12 italic text-2xl font-serif text-tlg-midnight">
                "The era of 'apply and wait' is over. Global mobility is now an active, highly strategic endeavor. Candidates must align their professional profiles directly with Canada’s macroeconomic deficits."
              </blockquote>

              <h2>The Intra-Company Transfer (ICT) Pathway</h2>
              <p>
                For established businesses in Nigeria and the UAE looking to expand into North America, the Intra-Company Transfer (ICT) pathway remains the most robust avenue for C-suite executives and specialized knowledge workers.
              </p>
              
              <div className="my-12 relative h-[400px] w-full overflow-hidden border border-tlg-stone">
                 <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2070&auto=format&fit=crop')" }}></div>
                 <div className="absolute bottom-0 left-0 bg-white p-4 text-xs font-bold uppercase tracking-widest text-gray-500">Toronto • Global Mobility & Strategy Hub</div>
              </div>

              <h3>Maximizing ICT for Permanent Residency</h3>
              <ul>
                <li><strong>Arranged Employment Points:</strong> Working in Canada under an LMIA-exempt ICT visa for at least one year allows the executive to claim 50 or 200 additional CRS points (depending on NOC level), often guaranteeing an Invitation to Apply (ITA) for Permanent Residency.</li>
                <li><strong>Provincial Nominee Programs (PNPs):</strong> Corporate expansion into provinces outside of Ontario and British Columbia (such as Alberta or Nova Scotia) can unlock aggressive, employer-driven PNP streams.</li>
              </ul>

              <h2>The Francophone Advantage</h2>
              <p>
                Perhaps the most profound recent policy shift is the heavy prioritization of French-speaking applicants outside of Quebec. Candidates capable of demonstrating NCLC level 7 or higher in French are being invited at drastically lower CRS scores. For ambitious professionals, intensive French language acquisition is currently the highest-ROI investment for securing Canadian PR.
              </p>

              <h2>Triumphal Lifetime Group's Advisory Stance</h2>
              <p>
                We do not view immigration as a standalone transaction. Our Global Visa & Immigration division works in tandem with our HR & Business Consulting arm to ensure that executive relocation is structurally sound for the underlying business entity.
              </p>

              {/* In-article CTA */}
              <div className="mt-16 bg-tlg-midnight p-10 text-center border-t-4 border-tlg-signatureGold">
                <h4 className="text-2xl font-serif text-white mb-4">Structure Your Mobility Pathway</h4>
                <p className="text-white/70 font-light mb-8 text-sm max-w-xl mx-auto">
                  Engage our Global Visa division to design a compliant, high-probability immigration or corporate expansion strategy into North America.
                </p>
                <Link href="/book" className="inline-flex items-center gap-4 bg-white text-tlg-midnight px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-tlg-signatureGold hover:text-white transition-colors">
                  Schedule Consultation <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          </div>
        </section>

      </main>
          </>
  );
}
