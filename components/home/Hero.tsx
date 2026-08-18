import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] w-full flex flex-col justify-end overflow-hidden bg-tlg-midnight">
      {/* Edge-to-edge Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>
        
        {/* Soft gradient overlay for text readability without obscuring the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight/95 via-tlg-midnight/40 to-tlg-midnight/80"></div>
      </div>
      
      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10 pt-40 pb-12 md:pb-16 flex flex-col md:flex-row md:items-end justify-between gap-12 mt-auto">
        
        {/* Left: Massive Typography */}
        <div className="max-w-4xl animate-reveal-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[6.5rem] font-serif text-white leading-[1] tracking-tight mb-6">
            Empowering People,<br />
            Elevating <span className="italic font-light opacity-90">Business</span>.
          </h1>
          <p className="text-lg md:text-2xl text-white/80 font-light max-w-2xl leading-relaxed">
            Welcome to Triumphal Lifetime Group. A unified ecosystem driving international growth across Nigeria, the UAE, and Canada.
          </p>
        </div>
        
        {/* Right: Floating Glass Action Card (Similar to Praxis4 15-Jahre Card) */}
        <div className="md:w-96 shrink-0 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-sm shadow-2xl animate-reveal-up-delayed hover:bg-white/15 transition-colors group cursor-pointer relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tlg-signatureGold to-tlg-champagne transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          
          <div className="flex justify-between items-start mb-6">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest">Global Ecosystem</span>
            <ArrowRight size={18} className="text-white group-hover:translate-x-1 transition-transform" />
          </div>
          
          <h3 className="text-xl font-serif text-white mb-3">Discover the Master Platform</h3>
          <p className="text-sm text-white/70 font-light leading-relaxed mb-6">
            From HR structuring to real estate, explore how our seven specialist companies operate under one vision.
          </p>
          
          <Link href="#need-finder" className="inline-flex bg-white text-tlg-midnight px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-tlg-signatureGold transition-colors w-full justify-center">
            Find Your Service
          </Link>
        </div>
        
      </div>
    </section>
  );
}
