import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import MeshGradient from "@/components/ui/MeshGradient";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-[100vh] w-full flex flex-col justify-center overflow-hidden bg-tlg-midnight pt-32 pb-20">
      
      {/* Interactive Aurora Background */}
      <MeshGradient />
      
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Text Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          
          <span className="text-tlg-signatureGold text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-8 md:mb-12 animate-reveal-up">
            Triumphal Lifetime Group
          </span>
          
          <div className="animate-reveal-up-delayed w-full">
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif text-white leading-[1.05] tracking-tight mb-8">
              Building Businesses.<br />
              Empowering People.<br />
              <span className="italic text-white/70 font-normal">Creating Lasting Value.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 font-normal max-w-xl leading-relaxed mb-12">
              A diversified business group delivering practical solutions across human resources, business consulting, real estate, education, global mobility, digital learning and technology.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-16 animate-reveal-up-delayed-more w-full sm:w-auto">
            <Link 
              href="?book=true" 
              className="w-full sm:w-auto inline-flex items-center justify-center bg-tlg-signatureGold text-tlg-midnight px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white transition-colors"
            >
              Book a Consultation
            </Link>
            <Link 
              href="/companies" 
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/20 text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:border-white hover:bg-white/10 transition-colors"
            >
              Explore Our Companies
            </Link>
          </div>
          
          <div className="w-full border-t border-white/10 pt-8 animate-reveal-up-delayed-more">
            <p className="text-xs font-serif text-white/70 tracking-[0.2em] uppercase flex flex-wrap justify-start gap-4">
              <span>Nigeria</span>
              <span className="text-tlg-signatureGold">•</span>
              <span>United Arab Emirates</span>
              <span className="text-tlg-signatureGold">•</span>
              <span>Canada</span>
            </p>
          </div>
          
        </div>

        {/* Right: Premium Imagery */}
        <div className="lg:col-span-6 hidden lg:block h-full min-h-[600px] relative animate-reveal-up-delayed">
          {/* Organic Shape Image Container */}
          <div className="absolute inset-0 shadow-2xl rounded-[40px] rounded-tl-[120px] rounded-br-[120px] border-[8px] border-white/20 overflow-hidden">
            <Image 
              src="/images/hero.jpg" 
              alt="Triumphal Lifetime Group" 
              fill 
              priority 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover" 
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}
