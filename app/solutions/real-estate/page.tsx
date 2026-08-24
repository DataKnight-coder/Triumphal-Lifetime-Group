import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, MapPin, Target, Landmark, Home, Phone, Map, ShieldCheck, AreaChart, Search, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import PropertyInventory from "@/components/real-estate/PropertyInventory";
export const metadata: Metadata = {
  title: "Real Estate & Investment Advisory — Dubai, UAE & Nigeria | Triumphal Lifetime Group",
  description: "Invest in Dubai property from Nigeria with Triumphal Lifetime Group. We offer fractional ownership from $40,000, holiday homes, residential, and commercial real estate advisory across UAE and Nigeria.",
};

export default function RealEstatePage() {
  return (
    <main className="bg-white pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white border-b border-tlg-stone overflow-hidden">
        
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="w-full lg:w-7/12">
            <Link href="/companies" className="inline-flex items-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700 hover:text-tlg-signatureGold transition-colors mb-10">
              <ArrowRight size={12} className="mr-2 rotate-180" /> Back to Divisions
            </Link>
            <Reveal><span className="text-tlg-signatureGold text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4 block">REAL ESTATE & INVESTMENT ADVISORY</span></Reveal>
            <Reveal delay={0.1}><h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.1] text-tlg-midnight mb-6">
              Make Property Decisions With Better Information.
            </h1></Reveal>
            <Reveal delay={0.2}><p className="text-lg md:text-xl text-gray-800 leading-relaxed max-w-2xl mb-10">
              Whether you are buying, renting, investing, managing a property or marketing a development, we help you define your requirements, research suitable opportunities and coordinate the next steps.
            </p></Reveal>
            
            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-tlg-signatureGold mb-10">
                <span className="flex items-center gap-2"><MapPin size={14} /> Nigeria</span> &middot;
                <span className="flex items-center gap-2"><MapPin size={14} /> UAE</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#inventory" className="bg-tlg-midnight text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-tlg-signatureGold hover:text-tlg-midnight hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  Explore Opportunities
                </a>
                <Link href="?book=true&service=real-estate" className="bg-transparent border border-tlg-stone text-tlg-midnight px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:border-tlg-midnight hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  Book a Consultation
                </Link>
              </div>
            </Reveal>
          </div>
          
          <div className="w-full lg:w-5/12">
             <Reveal delay={0.2} className="relative h-[400px] lg:h-[600px] w-full rounded-[24px] overflow-hidden shadow-xl border border-tlg-stone">
               <Image src="/visuals/real-estate.jpg" alt="Modern Architecture" fill className="object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4 Pathways Section */}
      <section className="py-24 bg-tlg-ivory border-b border-tlg-stone">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Reveal><div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight mb-6">What are you looking for?</h2>
            <p className="text-gray-800 text-lg">We structure our advisory around your specific objectives.</p>
          </div></Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pathway 1 */}
            <Reveal delay={0.1} className="flex"><div className="bg-white p-8 rounded-[24px] border border-tlg-stone hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col w-full group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <Landmark size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">Property Search & Investment Research</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-6 flex-1">Research and identify suitable residential or commercial properties based on your requirements and budget.</p>
              <a href="#inventory" className="text-xs font-bold uppercase tracking-widest text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors pt-4 border-t border-tlg-stone">
                View Inventory <ArrowRight size={14} className="ml-2" />
              </a>
            </div></Reveal>
            
            {/* Pathway 2 */}
            <Reveal delay={0.2} className="flex"><div className="bg-white p-8 rounded-[24px] border border-tlg-stone hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col w-full group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <Building2 size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">Expand Your Business</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-6 flex-1">Commercial locations, offices, site selection and comprehensive corporate relocation support.</p>
              <Link href="?book=true&service=real-estate" className="text-xs font-bold uppercase tracking-widest text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors pt-4 border-t border-tlg-stone">
                Corporate Advisory <ArrowRight size={14} className="ml-2" />
              </Link>
            </div></Reveal>

            {/* Pathway 3 */}
            <Reveal delay={0.3} className="flex"><div className="bg-white p-8 rounded-[24px] border border-tlg-stone hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col w-full group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <Search size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">Evaluate an Opportunity</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-6 flex-1">Market research, feasibility assessment, due diligence coordination and risk analysis.</p>
              <Link href="?book=true&service=real-estate" className="text-xs font-bold uppercase tracking-widest text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors pt-4 border-t border-tlg-stone">
                Request Research <ArrowRight size={14} className="ml-2" />
              </Link>
            </div></Reveal>

            {/* Pathway 4 */}
            <Reveal delay={0.4} className="flex"><div className="bg-white p-8 rounded-[24px] border border-tlg-stone hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col w-full group">
              <div className="w-12 h-12 bg-tlg-ivory rounded-full flex items-center justify-center mb-6 text-tlg-signatureGold group-hover:scale-110 transition-transform">
                <AreaChart size={20} />
              </div>
              <h3 className="text-xl font-serif text-tlg-midnight mb-3">Manage Your Strategy</h3>
              <p className="text-gray-800 text-sm leading-relaxed mb-6 flex-1">Portfolio reviews, facility strategy, operational optimisation and vendor coordination.</p>
              <Link href="?book=true&service=real-estate" className="text-xs font-bold uppercase tracking-widest text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors pt-4 border-t border-tlg-stone">
                Optimize Portfolio <ArrowRight size={14} className="ml-2" />
              </Link>
            </div></Reveal>
          </div>
        </div>
      </section>

      {/* Property Inventory Showcase */}
      <section id="inventory" className="py-24 bg-white border-b border-tlg-stone scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <Reveal>
            <PropertyInventory />
          </Reveal>
        </div>
      </section>

      {/* Fractional Ownership Section */}
      <section id="fractional" className="py-24 bg-tlg-ivory border-b border-tlg-stone scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <Reveal><span className="text-[11px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Co-Invest Smartly</span></Reveal>
            <Reveal delay={0.1}><h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight mb-6">Fractional Ownership</h2></Reveal>
            <Reveal delay={0.2}><p className="text-lg text-gray-800 leading-relaxed mb-8">
              Co-own a premium Dubai apartment alongside verified investors. Enter the world's most dynamic real estate market without bearing the full capital cost.
            </p></Reveal>

            <div className="space-y-6">
              <Reveal delay={0.3}><div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-tlg-stone text-tlg-signatureGold font-bold text-xs">01</div>
                <div>
                  <h4 className="text-xl font-serif text-tlg-midnight mb-2">Lower Barrier to Entry</h4>
                  <p className="text-sm text-gray-800">Acquire registered ownership shares starting from $40,000, fully documented by the Dubai Land Department.</p>
                </div>
              </div></Reveal>
              
              <Reveal delay={0.4}><div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-tlg-stone text-tlg-signatureGold font-bold text-xs">02</div>
                <div>
                  <h4 className="text-xl font-serif text-tlg-midnight mb-2">Passive Rental Income</h4>
                  <p className="text-sm text-gray-800">Your proportional rental yield is calculated and distributed quarterly directly to your account.</p>
                </div>
              </div></Reveal>
              
              <Reveal delay={0.5}><div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-tlg-stone text-tlg-signatureGold font-bold text-xs">03</div>
                <div>
                  <h4 className="text-xl font-serif text-tlg-midnight mb-2">Clear Exit Strategy</h4>
                  <p className="text-sm text-gray-800">Trade or sell your shares after a holding period, benefiting from Dubai's strong capital appreciation and 0% capital gains tax.</p>
                </div>
              </div></Reveal>
            </div>
            
            <Reveal delay={0.6}><div className="mt-10">
              <Link href="/contact" className="bg-tlg-midnight text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-tlg-signatureGold hover:text-tlg-midnight hover:-translate-y-1 hover:shadow-lg transition-all duration-300 inline-block">
                Enquire About Shares
              </Link>
            </div></Reveal>
          </div>

          <div className="w-full lg:w-1/2">
            <Reveal className="relative h-[450px] w-full rounded-[24px] overflow-hidden shadow-md border border-tlg-stone">
              <Image src="https://egtzvtwnlhedxsqxcmja.supabase.co/storage/v1/object/public/property-photos/1779903358716-u9gfab.avif" alt="Fractional Investment Property" fill className="object-cover" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-6 rounded-2xl shadow-lg flex justify-between items-center">
                <div>
                  <p className="text-[11px] uppercase font-bold tracking-widest text-gray-800 mb-1">Target Yield</p>
                  <p className="text-2xl font-serif text-tlg-midnight">7% - 9%</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] uppercase font-bold tracking-widest text-gray-800 mb-1">Tax on Gains</p>
                  <p className="text-2xl font-serif text-tlg-signatureGold">0%</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Holiday Homes Section */}
      <section id="holiday-homes" className="py-24 bg-white border-b border-tlg-stone scroll-mt-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <Reveal delay={0.1} className="relative h-[300px] rounded-2xl overflow-hidden shadow-sm border border-tlg-stone">
                <Image src="https://egtzvtwnlhedxsqxcmja.supabase.co/storage/v1/object/public/property-photos/1781537537107-uy3zt2.avif" alt="Luxury Living Room" fill className="object-cover" />
              </Reveal>
              <Reveal delay={0.2} className="relative h-[300px] rounded-2xl overflow-hidden shadow-sm border border-tlg-stone mt-12">
                <Image src="https://egtzvtwnlhedxsqxcmja.supabase.co/storage/v1/object/public/property-photos/1781541507385-tqex9l.avif" alt="Premium Bedroom" fill className="object-cover" />
              </Reveal>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <Reveal><span className="text-[11px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Short Lets</span></Reveal>
            <Reveal delay={0.1}><h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight mb-6">Holiday Homes</h2></Reveal>
            <Reveal delay={0.2}><p className="text-lg text-gray-800 leading-relaxed mb-8">
              Stay like royalty when you visit Dubai. Our Abuja team manages a curated selection of short-let apartments offering iconic views, hotel-grade amenities, and the comforts of home.
            </p></Reveal>

            <ul className="space-y-4 mb-10">
              <Reveal delay={0.3}><li className="flex items-center gap-3">
                <CheckCircle2 className="text-tlg-signatureGold shrink-0" size={20} />
                <span className="text-gray-800">Fully serviced premium apartments in prime locations</span>
              </li></Reveal>
              <Reveal delay={0.4}><li className="flex items-center gap-3">
                <CheckCircle2 className="text-tlg-signatureGold shrink-0" size={20} />
                <span className="text-gray-800">Book seamlessly through our Nigerian office via WhatsApp</span>
              </li></Reveal>
              <Reveal delay={0.5}><li className="flex items-center gap-3">
                <CheckCircle2 className="text-tlg-signatureGold shrink-0" size={20} />
                <span className="text-gray-800">Flexible payment options (Naira or USD)</span>
              </li></Reveal>
            </ul>
            
            <Reveal delay={0.6}>
              <a href="https://wa.me/2349117777759" target="_blank" className="bg-transparent border border-tlg-stone text-tlg-midnight px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:border-tlg-midnight hover:-translate-y-1 hover:shadow-lg transition-all duration-300 inline-flex items-center">
                <Phone size={14} className="mr-2" /> Book via WhatsApp
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Corporate Advisory Infrastructure */}
      <section className="py-24 bg-tlg-ivory border-b border-tlg-stone">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <Reveal><div className="relative h-[500px] rounded-[24px] overflow-hidden shadow-sm border border-tlg-stone">
              <Image src="/visuals/real-estate.jpg" alt="Corporate Real Estate Advisory" fill className="object-cover" />
            </div></Reveal>
          </div>

          <div className="w-full lg:w-1/2">
            <Reveal><span className="text-[11px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Corporate Real Estate</span></Reveal>
            <Reveal delay={0.1}><h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight mb-6">Strategic Expansion & Market Entry</h2></Reveal>
            <Reveal delay={0.2}><p className="text-lg text-gray-800 leading-relaxed mb-10">
              We provide institutional investors, multinational franchises, and corporate headquarters with the decision intelligence required to navigate complex real estate markets.
            </p></Reveal>

            <div className="space-y-6">
              <Reveal delay={0.3}><div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-tlg-stone">
                  <Map className="text-tlg-signatureGold" size={18} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-tlg-midnight mb-2">Market Research</h4>
                  <p className="text-sm text-gray-800">In-depth demographic analysis, location viability, and general market conditions.</p>
                </div>
              </div></Reveal>
              
              <Reveal delay={0.4}><div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-tlg-stone">
                  <Building2 className="text-tlg-signatureGold" size={18} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-tlg-midnight mb-2">Sales and Leasing Support</h4>
                  <p className="text-sm text-gray-800">Support with property search, viewing coordination, and administrative requirements.</p>
                </div>
              </div></Reveal>
              
              <Reveal delay={0.5}><div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-tlg-stone">
                  <ShieldCheck className="text-tlg-signatureGold" size={18} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-tlg-midnight mb-2">Property Management Coordination</h4>
                  <p className="text-sm text-gray-800">Vendor coordination and operational support for maintaining property portfolios.</p>
                </div>
              </div></Reveal>
            </div>
            
            <Reveal delay={0.6}><div className="mt-10">
              <Link href="?book=true&service=real-estate" className="inline-flex items-center text-[11px] font-bold uppercase tracking-widest text-tlg-midnight hover:text-tlg-signatureGold transition-colors">
                Book Corporate Advisory <ArrowRight size={14} className="ml-2" />
              </Link>
            </div></Reveal>

          </div>
        </div>
      </section>

      {/* Trust & Methodology (Our Consulting Process) */}
      <section className="py-24 bg-white border-b border-tlg-stone">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <Reveal><span className="text-[11px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Methodology</span></Reveal>
          <Reveal delay={0.1}><h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight mb-16">Data-Backed Decision Intelligence</h2></Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <Reveal delay={0.2}><div className="bg-tlg-ivory p-8 border border-tlg-stone rounded-[24px] relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-bl-[48px] -mr-4 -mt-4 border-l border-b border-tlg-stone transition-transform group-hover:scale-110"></div>
              <h4 className="text-xl font-serif text-tlg-midnight mb-3 relative z-10">1. Scoping</h4>
              <p className="text-sm text-gray-800 relative z-10">Defining your exact requirements, risk profile, and investment objectives.</p>
            </div></Reveal>
            
            <Reveal delay={0.3}><div className="bg-tlg-ivory p-8 border border-tlg-stone rounded-[24px] relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-bl-[48px] -mr-4 -mt-4 border-l border-b border-tlg-stone transition-transform group-hover:scale-110"></div>
              <h4 className="text-xl font-serif text-tlg-midnight mb-3 relative z-10">2. Research</h4>
              <p className="text-sm text-gray-800 relative z-10">Evaluating off-market opportunities, due diligence, and regulatory compliance.</p>
            </div></Reveal>
            
            <Reveal delay={0.4}><div className="bg-tlg-ivory p-8 border border-tlg-stone rounded-[24px] relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-bl-[48px] -mr-4 -mt-4 border-l border-b border-tlg-stone transition-transform group-hover:scale-110"></div>
              <h4 className="text-xl font-serif text-tlg-midnight mb-3 relative z-10">3. Strategy</h4>
              <p className="text-sm text-gray-800 relative z-10">Structuring the acquisition, negotiating terms, and managing closing logistics.</p>
            </div></Reveal>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-tlg-ivory border-y border-tlg-stone">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <Reveal><div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Common Questions</span>
            <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight">Real Estate FAQs</h2>
          </div></Reveal>
          <div className="space-y-0">
            {[
              { q: "How do I invest in Dubai property from Nigeria?", a: "You don't need to travel to Dubai to invest. We manage the process remotely — from property selection and price negotiation to documentation and legal verification. Payment can often be structured in installments, and we guide you through Dubai Land Department (DLD) registration requirements." },
              { q: "What does 'fractional ownership' mean?", a: "Fractional ownership allows multiple investors to co-own a premium property by each purchasing a registered ownership share. Your share entitles you to proportional rental income and capital appreciation. You are listed on the Dubai Land Department title deed and can exit by selling your shares after the agreed holding period." },
              { q: "What is the minimum investment to start?", a: "Fractional ownership shares in Dubai start from approximately $40,000 USD. Full property purchases begin from $240,000. Nigeria commercial properties are priced on application. Contact us with your budget and we will identify the most suitable opportunities." },
              { q: "Are there taxes on Dubai property gains?", a: "Dubai currently levies 0% capital gains tax on property disposals, which is one of the primary reasons it attracts international investors. You will need to factor in the one-time 4% Dubai Land Department registration fee on purchase." },
              { q: "What is the holiday homes / short let service?", a: "We manage a curated portfolio of fully-serviced luxury apartments in Dubai available for short-term stays. Bookings are handled through our Nigerian office via WhatsApp, and payment is accepted in Naira or USD. Minimum stays typically start at 3 nights." },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <details className="group border-b border-tlg-stone py-6 cursor-pointer">
                  <summary className="flex justify-between items-center font-serif text-lg text-tlg-midnight list-none">
                    {item.q}
                    <span className="text-tlg-signatureGold text-2xl font-normal group-open:rotate-45 transition-transform duration-200 ml-4 shrink-0">+</span>
                  </summary>
                  <p className="mt-4 text-sm text-gray-700 leading-relaxed max-w-3xl">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Details & Final CTA */}
      <section className="py-24 bg-tlg-midnight text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <Reveal><div>
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Discuss Your Real Estate Strategy</h2>
            <p className="text-white/90 text-lg mb-10 max-w-lg">
              Whether you are acquiring commercial property, expanding your franchise, or investing in residential real estate, our team is ready to assist.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-tlg-signatureGold shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-widest text-white mb-1">Corporate Headquarters</h4>
                  <p className="text-sm text-white/80">Abuja, FCT, Nigeria</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-tlg-signatureGold shrink-0" size={20} />
                <p className="text-sm text-white/80">+234 (0) 800 TLG INFO</p>
              </div>
            </div>
          </div></Reveal>
          
          <Reveal delay={0.2}><div className="bg-white text-tlg-midnight p-10 md:p-12 rounded-[24px]">
            <h3 className="text-2xl font-serif mb-6">Request a Consultation</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-800 mb-2">Name</label>
                  <input type="text" className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-tlg-signatureGold text-sm" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-800 mb-2">WhatsApp / Phone</label>
                  <input type="text" className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-tlg-signatureGold text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-800 mb-2">Email</label>
                <input type="email" className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-tlg-signatureGold text-sm" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-800 mb-2">Area of Interest</label>
                <select className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-tlg-signatureGold text-sm cursor-pointer">
                  <option>Corporate Advisory (Commercial/Relocation)</option>
                  <option>Dubai Property Investment</option>
                  <option>Nigeria Property Investment</option>
                  <option>Market Research / Due Diligence</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-gray-800 mb-2">Estimated Budget (Optional)</label>
                <input type="text" className="w-full border-b border-gray-300 py-3 bg-transparent focus:outline-none focus:border-tlg-signatureGold text-sm" />
              </div>
              
              <button type="button" className="w-full bg-tlg-midnight text-white py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-tlg-signatureGold hover:text-tlg-midnight hover:-translate-y-1 hover:shadow-lg transition-all duration-300 mt-4">
                Submit Enquiry
              </button>
            </form>
          </div></Reveal>

        </div>
      </section>
      
    </main>
  );
}
