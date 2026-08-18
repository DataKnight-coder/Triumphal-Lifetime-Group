import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-[100vh] w-full flex flex-col justify-center overflow-hidden bg-tlg-ivory pt-32 pb-20">
      
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Text Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          
          <span className="text-tlg-signatureGold text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-8 md:mb-12 animate-reveal-up">
            Triumphal Lifetime Group
          </span>
          
          <div className="animate-reveal-up-delayed w-full">
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif text-tlg-midnight leading-[1.05] tracking-tight mb-8">
              Building Businesses.<br />
              Empowering People.<br />
              <span className="italic text-gray-500 font-light">Creating Lasting Value.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-xl leading-relaxed mb-12">
              A diversified business group delivering practical solutions across human resources, business consulting, real estate, education, global mobility, digital learning and technology.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-16 animate-reveal-up-delayed-more w-full sm:w-auto">
            <Link 
              href="/book" 
              className="w-full sm:w-auto inline-flex items-center justify-center bg-tlg-midnight text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-tlg-signatureGold transition-colors"
            >
              Book a Consultation
            </Link>
            <Link 
              href="/companies" 
              className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-tlg-stone text-tlg-midnight px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:border-tlg-midnight transition-colors"
            >
              Explore Our Companies
            </Link>
          </div>
          
          <div className="w-full border-t border-tlg-stone/60 pt-8 animate-reveal-up-delayed-more">
            <p className="text-xs font-serif text-gray-500 tracking-[0.2em] uppercase flex flex-wrap justify-start gap-4">
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
          <div 
            className="absolute inset-0 bg-cover bg-center rounded-sm shadow-xl"
            style={{ backgroundImage: "url('/images/hero.jpg')" }}
          ></div>
        </div>
        
      </div>
    </section>
  );
}
