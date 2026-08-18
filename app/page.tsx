import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import SmartNeedFinder from "@/components/home/SmartNeedFinder";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-tlg-ivory">
        <Hero />
        
        {/* Philosophy / Intro Section (Inspired by Alethia/Praxis4) */}
        <section className="py-32 md:py-48 bg-tlg-ivory relative border-b border-tlg-stone">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-4">
                <p className="text-tlg-signatureGold font-semibold tracking-widest text-xs uppercase mb-6 flex items-center">
                  <span className="w-12 h-[2px] bg-tlg-signatureGold mr-6 animate-draw-line"></span>
                  Our Philosophy
                </p>
                <p className="text-xl text-gray-500 font-light leading-relaxed">
                  Established in 2024, Triumphal Lifetime Group was built on a singular premise: true growth requires a holistic ecosystem, not fragmented services.
                </p>
              </div>
              <div className="lg:col-span-8">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-tlg-midnight leading-[1.2] animate-reveal-up">
                  We integrate human potential, strategic capital, and physical infrastructure across three continents to forge sustainable legacy value.
                </h2>
                
                <div className="mt-16 pt-12 border-t border-tlg-stone flex flex-col sm:flex-row gap-8 justify-between">
                  <div className="max-w-md">
                    <h3 className="text-xl font-serif text-tlg-midnight mb-4">A Multi-Disciplinary Approach</h3>
                    <p className="text-gray-500 font-light leading-relaxed mb-6">
                      From structuring your corporate workforce in Nigeria, to acquiring premium real estate in the UAE, to managing global education pathways in Canada—our seven specialised divisions operate as one cohesive entity.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <Link href="/about" className="inline-flex items-center justify-center w-32 h-32 rounded-full border border-tlg-stone text-tlg-midnight font-medium uppercase tracking-widest text-[10px] hover:border-tlg-signatureGold hover:bg-tlg-signatureGold hover:text-white transition-all duration-500 group">
                      <span className="group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-500">Discover</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Need Finder embedded seamlessly */}
        <SmartNeedFinder />
        
        {/* Immersive Global Footprint Section */}
        <section className="py-32 md:py-48 bg-white relative overflow-hidden border-t border-tlg-stone">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
            
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 animate-reveal-up">
              <div className="max-w-3xl">
                <h2 className="text-5xl md:text-7xl font-serif text-tlg-midnight font-semibold leading-[0.9]">
                  Three Markets.<br />
                  <span className="italic font-light text-gray-400">One Connected Ecosystem.</span>
                </h2>
              </div>
              <p className="text-lg text-gray-500 max-w-sm mt-8 md:mt-0 font-light leading-relaxed">
                We bridge the gap between emerging markets and established global economies, providing seamless transitions for capital and talent.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Nigeria Card */}
              <div className="group relative overflow-hidden lg:row-span-2 h-[600px] lg:h-auto lg:min-h-[800px] hover-trigger cursor-pointer bg-tlg-midnight">
                <div 
                  className="absolute inset-0 bg-cover bg-center hover-zoom transition-transform duration-[2s] ease-out opacity-80"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=2070&auto=format&fit=crop')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-12 w-full transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]">
                  <span className="text-tlg-signatureGold text-xs font-bold tracking-widest uppercase mb-4 block">Strategic Hub</span>
                  <h3 className="text-5xl font-serif text-white mb-6">Nigeria</h3>
                  <div className="w-0 h-[1px] bg-tlg-signatureGold mb-8 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"></div>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    <p className="text-gray-300 mb-8 text-base leading-relaxed font-light pr-8">
                      The core of our West African operations. Delivering high-impact business growth consulting, workforce structuring, premium property acquisitions, global education pathways, and deeply rooted community outreach.
                    </p>
                    <Link href="/ng" className="text-white hover:text-tlg-signatureGold font-medium tracking-widest text-xs uppercase flex items-center group/link">
                      Explore Nigeria Gateway 
                      <ArrowRight size={16} className="ml-4 group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* UAE Card */}
              <div className="group relative overflow-hidden h-[500px] lg:col-span-2 hover-trigger cursor-pointer bg-tlg-midnight">
                <div 
                  className="absolute inset-0 bg-cover bg-center hover-zoom transition-transform duration-[2s] ease-out opacity-80"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-12 w-full transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]">
                  <span className="text-tlg-signatureGold text-xs font-bold tracking-widest uppercase mb-4 block">Commercial Hub</span>
                  <h3 className="text-5xl font-serif text-white mb-6">UAE</h3>
                  <div className="w-0 h-[1px] bg-tlg-signatureGold mb-8 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"></div>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 flex flex-col md:flex-row md:items-end justify-between">
                    <p className="text-gray-300 text-base leading-relaxed font-light max-w-xl mb-8 md:mb-0">
                      Our Middle Eastern nucleus for elite business setups, executive employment advisory, premium property investments, professional growth, and international mobility strategies.
                    </p>
                    <Link href="/ae" className="text-white hover:text-tlg-signatureGold font-medium tracking-widest text-xs uppercase flex items-center group/link shrink-0">
                      Explore UAE Gateway 
                      <ArrowRight size={16} className="ml-4 group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Canada Card */}
              <div className="group relative overflow-hidden h-[500px] lg:col-span-2 hover-trigger cursor-pointer bg-tlg-midnight">
                <div 
                  className="absolute inset-0 bg-cover bg-center hover-zoom transition-transform duration-[2s] ease-out opacity-80"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1490623970972-ae8bb3da443e?q=80&w=2059&auto=format&fit=crop')" }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-12 w-full transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]">
                  <span className="text-tlg-signatureGold text-xs font-bold tracking-widest uppercase mb-4 block">Opportunity Hub</span>
                  <h3 className="text-5xl font-serif text-white mb-6">Canada</h3>
                  <div className="w-0 h-[1px] bg-tlg-signatureGold mb-8 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"></div>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 flex flex-col md:flex-row md:items-end justify-between">
                    <p className="text-gray-300 text-base leading-relaxed font-light max-w-xl mb-8 md:mb-0">
                      Our North American bridge providing comprehensive education pathways, career advisory, strategic business expansion, and robust settlement resources.
                    </p>
                    <Link href="/ca" className="text-white hover:text-tlg-signatureGold font-medium tracking-widest text-xs uppercase flex items-center group/link shrink-0">
                      Explore Canada Gateway 
                      <ArrowRight size={16} className="ml-4 group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* The Corporate Ecosystem (7 Divisions) */}
        <section className="py-32 bg-tlg-ivory relative border-t border-tlg-stone">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 animate-reveal-up">
              <h2 className="text-4xl md:text-6xl font-serif text-tlg-midnight">The Ecosystem</h2>
              <Link href="/companies" className="text-xs uppercase tracking-widest font-bold text-tlg-midnight border-b border-tlg-midnight pb-1 hover:text-tlg-signatureGold hover:border-tlg-signatureGold transition-colors mt-6 md:mt-0">
                View All Companies
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* HR & Consulting */}
              <Link href="/companies/hr-business-consulting" className="group bg-white p-10 border border-tlg-stone shadow-sm hover:border-tlg-signatureGold transition-colors flex flex-col h-full">
                <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-4 block">01</span>
                <h3 className="text-2xl font-serif text-tlg-midnight mb-4 group-hover:text-tlg-signatureGold transition-colors">HR & Business Consulting</h3>
                <p className="text-gray-500 font-light text-sm mb-8 flex-1">Executive search, workforce structuring, and corporate governance.</p>
                <ArrowRight size={16} className="text-tlg-signatureGold group-hover:translate-x-2 transition-transform" />
              </Link>
              {/* Real Estate */}
              <Link href="/companies/real-estate" className="group bg-white p-10 border border-tlg-stone shadow-sm hover:border-tlg-signatureGold transition-colors flex flex-col h-full">
                <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-4 block">02</span>
                <h3 className="text-2xl font-serif text-tlg-midnight mb-4 group-hover:text-tlg-signatureGold transition-colors">Real Estate Services</h3>
                <p className="text-gray-500 font-light text-sm mb-8 flex-1">Commercial leasing, luxury off-plan acquisitions, and property management.</p>
                <ArrowRight size={16} className="text-tlg-signatureGold group-hover:translate-x-2 transition-transform" />
              </Link>
              {/* Education Advisory */}
              <Link href="/companies/education-advisory" className="group bg-white p-10 border border-tlg-stone shadow-sm hover:border-tlg-signatureGold transition-colors flex flex-col h-full">
                <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-4 block">03</span>
                <h3 className="text-2xl font-serif text-tlg-midnight mb-4 group-hover:text-tlg-signatureGold transition-colors">Education Advisory</h3>
                <p className="text-gray-500 font-light text-sm mb-8 flex-1">Global university placements, study permits, and academic profiling.</p>
                <ArrowRight size={16} className="text-tlg-signatureGold group-hover:translate-x-2 transition-transform" />
              </Link>
              {/* Global Visa */}
              <Link href="/companies/global-visa-immigration" className="group bg-white p-10 border border-tlg-stone shadow-sm hover:border-tlg-signatureGold transition-colors flex flex-col h-full">
                <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-4 block">04</span>
                <h3 className="text-2xl font-serif text-tlg-midnight mb-4 group-hover:text-tlg-signatureGold transition-colors">Visa & Immigration</h3>
                <p className="text-gray-500 font-light text-sm mb-8 flex-1">Golden Visas, second citizenship, and corporate intra-company transfers.</p>
                <ArrowRight size={16} className="text-tlg-signatureGold group-hover:translate-x-2 transition-transform" />
              </Link>
              {/* Digital Products */}
              <Link href="/companies/digital-products-learning" className="group bg-white p-10 border border-tlg-stone shadow-sm hover:border-tlg-signatureGold transition-colors flex flex-col h-full">
                <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-4 block">05</span>
                <h3 className="text-2xl font-serif text-tlg-midnight mb-4 group-hover:text-tlg-signatureGold transition-colors">Digital & Learning</h3>
                <p className="text-gray-500 font-light text-sm mb-8 flex-1">E-learning frameworks, corporate training, and digital enterprise tools.</p>
                <ArrowRight size={16} className="text-tlg-signatureGold group-hover:translate-x-2 transition-transform" />
              </Link>
              {/* Information Technology */}
              <Link href="/companies/information-technology" className="group bg-white p-10 border border-tlg-stone shadow-sm hover:border-tlg-signatureGold transition-colors flex flex-col h-full">
                <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-4 block">06</span>
                <h3 className="text-2xl font-serif text-tlg-midnight mb-4 group-hover:text-tlg-signatureGold transition-colors">Information Technology</h3>
                <p className="text-gray-500 font-light text-sm mb-8 flex-1">Cloud infrastructure, enterprise cybersecurity, and digital transformation.</p>
                <ArrowRight size={16} className="text-tlg-signatureGold group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Global Impact Metrics */}
        <section className="py-24 bg-tlg-midnight relative border-y border-tlg-midnight">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <h4 className="text-4xl md:text-5xl font-serif text-white mb-2">3</h4>
              <p className="text-[10px] uppercase tracking-widest text-tlg-signatureGold font-bold">Continents Operated</p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-serif text-white mb-2">$500M+</h4>
              <p className="text-[10px] uppercase tracking-widest text-tlg-signatureGold font-bold">Capital Advised</p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-serif text-white mb-2">7</h4>
              <p className="text-[10px] uppercase tracking-widest text-tlg-signatureGold font-bold">Specialised Divisions</p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-serif text-white mb-2">24/7</h4>
              <p className="text-[10px] uppercase tracking-widest text-tlg-signatureGold font-bold">Global Support</p>
            </div>
          </div>
        </section>

        {/* Latest Insights & Intelligence */}
        <section className="py-32 bg-white relative">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 animate-reveal-up">
              <h2 className="text-4xl md:text-6xl font-serif text-tlg-midnight">Intelligence</h2>
              <Link href="/insights" className="text-xs uppercase tracking-widest font-bold text-tlg-midnight border-b border-tlg-midnight pb-1 hover:text-tlg-signatureGold hover:border-tlg-signatureGold transition-colors mt-6 md:mt-0">
                View All Insights
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Insight 1 */}
              <Link href="/insights/uae-golden-visa" className="group bg-tlg-ivory border border-tlg-stone overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all">
                <div className="h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}></div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-4 block">Real Estate • August 2026</span>
                  <h3 className="text-2xl font-serif text-tlg-midnight mb-4 line-clamp-2 group-hover:text-tlg-signatureGold transition-colors">The UAE Golden Visa Impact</h3>
                  <p className="text-gray-500 font-light text-sm line-clamp-3 mb-8 flex-1">How institutional capital is reshaping Dubai's skyline and driving off-plan acquisition strategies for African investors.</p>
                  <span className="text-xs uppercase tracking-widest font-bold text-tlg-midnight flex items-center group-hover:translate-x-2 transition-transform">Read Report <ArrowRight size={14} className="ml-2"/></span>
                </div>
              </Link>
              
              {/* Insight 2 */}
              <Link href="/insights/tax-compliance" className="group bg-tlg-ivory border border-tlg-stone overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all">
                <div className="h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop')" }}></div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-4 block">Corporate • July 2026</span>
                  <h3 className="text-2xl font-serif text-tlg-midnight mb-4 line-clamp-2 group-hover:text-tlg-signatureGold transition-colors">Cross-Border Tax Compliance</h3>
                  <p className="text-gray-500 font-light text-sm line-clamp-3 mb-8 flex-1">Structuring corporate governance across multiple jurisdictions requires a proactive approach to evolving tax codes in Nigeria and Canada.</p>
                  <span className="text-xs uppercase tracking-widest font-bold text-tlg-midnight flex items-center group-hover:translate-x-2 transition-transform">Read Report <ArrowRight size={14} className="ml-2"/></span>
                </div>
              </Link>
              
              {/* Insight 3 */}
              <Link href="/insights/express-entry" className="group bg-tlg-ivory border border-tlg-stone overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all hidden lg:flex">
                <div className="h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop')" }}></div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-4 block">Immigration • July 2026</span>
                  <h3 className="text-2xl font-serif text-tlg-midnight mb-4 line-clamp-2 group-hover:text-tlg-signatureGold transition-colors">The Future of Express Entry</h3>
                  <p className="text-gray-500 font-light text-sm line-clamp-3 mb-8 flex-1">An overview of recent IRCC policy shifts and how they impact corporate secondments and executive mobility.</p>
                  <span className="text-xs uppercase tracking-widest font-bold text-tlg-midnight flex items-center group-hover:translate-x-2 transition-transform">Read Report <ArrowRight size={14} className="ml-2"/></span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Executive Leadership Preview */}
        <section className="py-32 bg-tlg-ivory relative border-t border-tlg-stone">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6 animate-reveal-up">Corporate Governance</span>
                <h2 className="text-4xl md:text-6xl font-serif text-tlg-midnight mb-8">Architects of Capital & Culture.</h2>
                <p className="text-gray-500 font-light leading-relaxed mb-10 text-lg max-w-xl">
                  Our executive board comprises seasoned veterans in international law, institutional real estate, and macroeconomic strategy. We do not outsource our advisory; you deal directly with the architects of the firm.
                </p>
                <Link href="/about/leadership" className="inline-flex items-center gap-4 bg-tlg-midnight text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-tlg-signatureGold transition-colors">
                  Meet The Directors <ArrowRight size={14} />
                </Link>
              </div>
              <div className="relative h-[600px] w-full">
                <div className="absolute inset-0 bg-cover bg-top" style={{ backgroundImage: "url('/Adekemi Arike Adedayo.jpeg')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight/60 via-transparent to-transparent"></div>
                {/* CEO Name Tag */}
                <div className="absolute bottom-8 left-8 z-10">
                  <p className="text-white font-serif text-xl">Adekemi Arike Adedayo</p>
                  <p className="text-tlg-signatureGold text-xs uppercase tracking-widest font-bold">Founder & CEO</p>
                </div>
                {/* Abstract overlay element */}
                <div className="absolute -bottom-8 -left-8 w-64 h-64 border border-tlg-signatureGold z-10 hidden md:block"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Exclusive Digital Products */}
        <section className="py-32 bg-white relative">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20">
              <div>
                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest block mb-4">Digital Ecosystem</span>
                <h2 className="text-4xl md:text-5xl font-serif text-tlg-midnight">Masterclasses & Frameworks</h2>
              </div>
              <Link href="/store" className="text-xs uppercase tracking-widest font-bold text-tlg-midnight border-b border-tlg-midnight pb-1 hover:text-tlg-signatureGold hover:border-tlg-signatureGold transition-colors mt-6 md:mt-0">
                Enter Digital Store
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product 1 */}
              <div className="group border border-tlg-stone flex flex-col sm:flex-row items-center hover:border-tlg-signatureGold transition-colors bg-tlg-ivory">
                <div className="w-full sm:w-1/2 h-[300px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')" }}></div>
                </div>
                <div className="w-full sm:w-1/2 p-8 md:p-12">
                  <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-3 block">Corporate Blueprint</span>
                  <h3 className="text-2xl font-serif text-tlg-midnight mb-4">The Dubai Structuring Masterclass</h3>
                  <p className="text-gray-500 font-light text-sm mb-8">A comprehensive 4-hour video framework detailing exact Free Zone setups, Golden Visa acquisition, and corporate tax structuring.</p>
                  <Link href="/store" className="text-xs font-bold uppercase tracking-widest text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">Acquire Access <ArrowRight size={14} className="ml-2"/></Link>
                </div>
              </div>
              
              {/* Product 2 */}
              <div className="group border border-tlg-stone flex flex-col sm:flex-row items-center hover:border-tlg-signatureGold transition-colors bg-tlg-ivory">
                <div className="w-full sm:w-1/2 h-[300px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-1000" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')" }}></div>
                </div>
                <div className="w-full sm:w-1/2 p-8 md:p-12">
                  <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-3 block">Academic Framework</span>
                  <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Ivy League Admissions Protocol</h3>
                  <p className="text-gray-500 font-light text-sm mb-8">Proprietary templates and admission essays used by our Education Advisory division to secure placements in elite North American universities.</p>
                  <Link href="/store" className="text-xs font-bold uppercase tracking-widest text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">Acquire Access <ArrowRight size={14} className="ml-2"/></Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Authority (Testimonials) */}
        <section className="py-32 bg-tlg-midnight relative">
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 text-center">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-12">Client Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-relaxed max-w-4xl mx-auto mb-12">
              "Triumphal Lifetime Group successfully migrated our entire corporate headquarters from Lagos to Dubai while simultaneously securing Canadian study permits for our directors' families. Their execution is absolutely flawless."
            </h2>
            <div className="flex flex-col items-center">
              <p className="text-white font-bold tracking-widest uppercase text-sm mb-1">O. Adebayo</p>
              <p className="text-tlg-signatureGold font-light text-xs uppercase tracking-widest">CEO, Pan-African Logistics</p>
            </div>
          </div>
        </section>

        {/* Strategic Partners Strip */}
        <section className="py-16 bg-white border-b border-tlg-stone">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-10">Trusted Global Partners & Authorities</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
              {/* Partner Placeholders - Using text for minimal luxury look instead of massive images */}
              <span className="font-serif text-2xl">EMAAR</span>
              <span className="font-serif text-2xl font-bold tracking-tight">DAMAC</span>
              <span className="font-sans text-xl font-bold tracking-widest">IRCC</span>
              <span className="font-serif text-2xl italic">DIFC</span>
              <span className="font-sans text-xl font-bold tracking-widest">GDRFA</span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
