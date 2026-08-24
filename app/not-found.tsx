import Link from "next/link";
import MeshGradient from "@/components/ui/MeshGradient";

export default function NotFound() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-tlg-midnight pt-32 pb-20">
      
      {/* Interactive Aurora Background */}
      <MeshGradient />
      
      <div className="max-w-[800px] w-full mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <span className="text-tlg-signatureGold text-[12px] font-bold uppercase tracking-[0.4em] mb-6 animate-reveal-up">
          404 Error
        </span>
        
        <div className="animate-reveal-up-delayed w-full">
          <h1 className="text-6xl md:text-8xl font-serif text-white leading-[1.05] tracking-tight mb-8">
            Page Not Found.
          </h1>
          
          <p className="text-lg text-white/70 font-normal max-w-lg mx-auto leading-relaxed mb-12">
            The page you are looking for has been moved or no longer exists. Return to our homepage to explore the Triumphal ecosystem.
          </p>
        </div>
        
        <div className="animate-reveal-up-delayed-more">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center bg-white text-tlg-midnight px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-tlg-signatureGold hover:text-white transition-colors shadow-[0_0_40px_rgba(208,154,58,0.2)] hover:shadow-[0_0_60px_rgba(208,154,58,0.4)]"
          >
            Return to Homepage
          </Link>
        </div>
        
      </div>
    </section>
  );
}
