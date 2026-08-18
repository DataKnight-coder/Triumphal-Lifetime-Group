import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Insights() {
  return (
    <>
      <Header />
      <main className="bg-tlg-ivory">
        
        {/* Cinematic Hero */}
        <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-end overflow-hidden bg-tlg-midnight">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center animate-slow-zoom scale-105 opacity-40"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/80 to-tlg-midnight/20"></div>
          </div>
          
          <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10 pb-24 md:pb-32">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6 animate-reveal-up">Global Intelligence</span>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tight mb-8 animate-reveal-up-delayed">
              Insights &<br />
              <span className="italic font-light text-white/80">News.</span>
            </h1>
            <div className="w-24 h-[1px] bg-tlg-signatureGold mb-8 animate-draw-line"></div>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl leading-relaxed animate-reveal-up-delayed">
              Macroeconomic analysis, real estate market reports, and strategic corporate intelligence from our global advisory board.
            </p>
          </div>
        </section>

        {/* Featured Insight */}
        <section className="py-24 bg-white relative border-b border-tlg-stone">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[500px] overflow-hidden group">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[2s]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-6 left-6 bg-tlg-signatureGold text-tlg-midnight text-[10px] uppercase tracking-widest font-bold px-4 py-2">
                  Featured Report
                </div>
              </div>
              <div>
                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest block mb-6">Real Estate • August 2026</span>
                <h2 className="text-4xl md:text-5xl font-serif text-tlg-midnight leading-[1.2] mb-6">
                  The UAE Golden Visa Impact: How Institutional Capital is Reshaping Dubai's Skyline
                </h2>
                <p className="text-gray-500 font-light leading-relaxed mb-10 text-lg">
                  An in-depth analysis of Q3 capital inflows into the UAE real estate sector, driven by new regulatory frameworks and the increasing demand for ultra-luxury off-plan acquisitions among African and North American investors.
                </p>
                <Link href="/insights/uae-golden-visa" className="inline-flex items-center gap-4 border-b border-tlg-midnight pb-2 text-sm font-bold uppercase tracking-widest text-tlg-midnight hover:text-tlg-signatureGold hover:border-tlg-signatureGold transition-colors">
                  Read Full Report <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Article Grid */}
        <section className="py-32 bg-tlg-ivory relative">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-tlg-midnight">Latest Intelligence</h2>
              <div className="flex gap-4 mt-6 md:mt-0 overflow-x-auto pb-4 md:pb-0">
                <button className="text-xs uppercase tracking-widest font-bold border border-tlg-midnight px-6 py-2 bg-tlg-midnight text-white">All</button>
                <button className="text-xs uppercase tracking-widest font-bold border border-tlg-stone px-6 py-2 text-gray-500 hover:border-tlg-midnight transition-colors">Corporate</button>
                <button className="text-xs uppercase tracking-widest font-bold border border-tlg-stone px-6 py-2 text-gray-500 hover:border-tlg-midnight transition-colors">Real Estate</button>
                <button className="text-xs uppercase tracking-widest font-bold border border-tlg-stone px-6 py-2 text-gray-500 hover:border-tlg-midnight transition-colors">Immigration</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Article 1 */}
              <Link href="/insights/tax-compliance" className="group bg-white border border-tlg-stone overflow-hidden flex flex-col h-full shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop')" }}></div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-4 block">Corporate • July 2026</span>
                  <h3 className="text-2xl font-serif text-tlg-midnight mb-4 line-clamp-2 group-hover:text-tlg-signatureGold transition-colors">Navigating Tax Compliance for Cross-Border Subsidiaries</h3>
                  <p className="text-gray-500 font-light text-sm line-clamp-3 mb-8 flex-1">
                    Structuring corporate governance across multiple jurisdictions requires a proactive approach to evolving tax codes in Nigeria and Canada.
                  </p>
                  <span className="text-xs uppercase tracking-widest font-bold text-tlg-midnight flex items-center group-hover:translate-x-2 transition-transform">Read Article <ArrowRight size={14} className="ml-2"/></span>
                </div>
              </Link>

              {/* Article 2 */}
              <Link href="/insights/express-entry" className="group bg-white border border-tlg-stone overflow-hidden flex flex-col h-full shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')" }}></div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-4 block">Immigration • July 2026</span>
                  <h3 className="text-2xl font-serif text-tlg-midnight mb-4 line-clamp-2 group-hover:text-tlg-signatureGold transition-colors">The Future of Canadian Express Entry: What Executives Need to Know</h3>
                  <p className="text-gray-500 font-light text-sm line-clamp-3 mb-8 flex-1">
                    An overview of the recent IRCC policy shifts and how they impact corporate secondments and skilled worker streams.
                  </p>
                  <span className="text-xs uppercase tracking-widest font-bold text-tlg-midnight flex items-center group-hover:translate-x-2 transition-transform">Read Article <ArrowRight size={14} className="ml-2"/></span>
                </div>
              </Link>

              {/* Article 3 */}
              <Link href="#" className="group bg-white border border-tlg-stone overflow-hidden flex flex-col h-full shadow-sm hover:shadow-lg transition-shadow">
                <div className="h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')" }}></div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-4 block">Education • June 2026</span>
                  <h3 className="text-2xl font-serif text-tlg-midnight mb-4 line-clamp-2 group-hover:text-tlg-signatureGold transition-colors">Ivy League Admissions: The Data Behind Successful Global Applicants</h3>
                  <p className="text-gray-500 font-light text-sm line-clamp-3 mb-8 flex-1">
                    Statistical breakdown of the profiles that successfully navigated the most recent highly competitive North American admissions cycle.
                  </p>
                  <span className="text-xs uppercase tracking-widest font-bold text-tlg-midnight flex items-center group-hover:translate-x-2 transition-transform">Read Article <ArrowRight size={14} className="ml-2"/></span>
                </div>
              </Link>

            </div>

            <div className="mt-16 text-center">
              <button className="text-xs uppercase tracking-widest font-bold border border-tlg-stone px-8 py-4 text-gray-500 hover:border-tlg-midnight hover:text-tlg-midnight transition-colors">
                Load More Articles
              </button>
            </div>

          </div>
        </section>

        {/* Action Section */}
        <section className="py-24 bg-white relative flex flex-col items-center justify-center text-center border-t border-tlg-stone">
          <div className="max-w-3xl px-6">
            <h2 className="text-3xl md:text-4xl font-serif text-tlg-midnight mb-6">Subscribe to Our Private Briefing</h2>
            <p className="text-gray-500 font-light leading-relaxed mb-10">
              Receive exclusive macroeconomic reports, off-market real estate listings, and global policy updates directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto w-full">
              <input type="email" placeholder="Corporate Email Address" className="flex-1 bg-tlg-ivory border border-tlg-stone px-6 py-4 focus:outline-none focus:border-tlg-signatureGold" required />
              <button type="submit" className="bg-tlg-midnight text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-tlg-signatureGold transition-colors shrink-0">
                Subscribe
              </button>
            </form>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
