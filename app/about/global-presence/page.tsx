import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GlobalPresence() {
  return (
    <>
      <Header />
      <main className="bg-tlg-ivory">
        
        <section className="relative pt-48 pb-32 w-full bg-tlg-midnight">
          <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6 animate-reveal-up">Locations</span>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tight mb-8 animate-reveal-up-delayed">
              Global <span className="italic font-light">Presence</span>.
            </h1>
          </div>
        </section>

        <section className="py-32 bg-white relative">
          
          {/* Decorative Map BG (In production, replace with actual SVG/Interactive map component) */}
          <div 
            className="absolute inset-0 z-0 opacity-5 bg-center bg-no-repeat bg-contain mix-blend-multiply"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')` }}
          ></div>

          <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <Link href="/ng" className="group block bg-tlg-ivory p-12 border border-tlg-stone hover:border-tlg-signatureGold transition-colors">
                <span className="text-tlg-signatureGold text-xs font-bold tracking-widest uppercase mb-4 block">Strategic Hub</span>
                <h3 className="text-4xl font-serif text-tlg-midnight mb-6">Nigeria</h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed mb-12">
                  Headquarters for HR consulting, workforce structuring, and local market operations serving West Africa.
                </p>
                <div className="flex justify-between items-center text-tlg-midnight group-hover:text-tlg-signatureGold transition-colors border-t border-tlg-stone pt-6">
                  <span className="text-xs uppercase tracking-widest font-bold">Explore Market</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>

              <Link href="/ae" className="group block bg-tlg-ivory p-12 border border-tlg-stone hover:border-tlg-signatureGold transition-colors">
                <span className="text-tlg-signatureGold text-xs font-bold tracking-widest uppercase mb-4 block">Commercial Hub</span>
                <h3 className="text-4xl font-serif text-tlg-midnight mb-6">UAE</h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed mb-12">
                  The Middle Eastern nucleus for premium real estate investment, business setups, and elite global mobility.
                </p>
                <div className="flex justify-between items-center text-tlg-midnight group-hover:text-tlg-signatureGold transition-colors border-t border-tlg-stone pt-6">
                  <span className="text-xs uppercase tracking-widest font-bold">Explore Market</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>

              <Link href="/ca" className="group block bg-tlg-ivory p-12 border border-tlg-stone hover:border-tlg-signatureGold transition-colors">
                <span className="text-tlg-signatureGold text-xs font-bold tracking-widest uppercase mb-4 block">Opportunity Hub</span>
                <h3 className="text-4xl font-serif text-tlg-midnight mb-6">Canada</h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed mb-12">
                  The North American bridge providing comprehensive education pathways, career advisory, and robust settlement resources.
                </p>
                <div className="flex justify-between items-center text-tlg-midnight group-hover:text-tlg-signatureGold transition-colors border-t border-tlg-stone pt-6">
                  <span className="text-xs uppercase tracking-widest font-bold">Explore Market</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>

            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
