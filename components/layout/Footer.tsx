import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Instagram, Linkedin, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-tlg-midnight text-white pt-24 md:pt-32 pb-8 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b border-white/10 pb-16 md:pb-24 gap-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight text-white tracking-tight">
              Building Businesses.<br />
              Empowering People.<br />
              <span className="italic font-light text-white/70">Creating Lasting Value.</span>
            </h2>
          </div>

          <div className="flex items-center gap-6 shrink-0">
            <div className="w-16 h-16 md:w-24 md:h-24 relative overflow-hidden rounded-full shadow-lg border border-tlg-signatureGold/20">
              <Image src="/logo.jpeg" alt="Triumphal Lifetime Group Crest" fill className="object-cover scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl md:text-3xl tracking-tight leading-none text-white">Triumphal</span>
              <span className="text-[0.55rem] md:text-[0.65rem] tracking-[0.3em] uppercase text-tlg-signatureGold font-sans mt-1">Lifetime Group</span>
            </div>
          </div>
        </div>

        {/* Middle Section: Links */}
        <div className="py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8">
          
          {/* Column 1: Companies */}
          <div className="flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-widest text-tlg-signatureGold mb-8">Companies</h4>
            <ul className="flex flex-col gap-5 text-sm text-white/70 font-light">
              <li><Link href="/solutions/hr-consulting" className="hover:text-tlg-signatureGold transition-colors">HR & Business Consulting</Link></li>
              <li><Link href="/solutions/real-estate" className="hover:text-tlg-signatureGold transition-colors">Real Estate</Link></li>
              <li><Link href="/solutions/education" className="hover:text-tlg-signatureGold transition-colors">Education</Link></li>
              <li><Link href="/solutions/global-mobility" className="hover:text-tlg-signatureGold transition-colors">Global Mobility</Link></li>
              <li><Link href="/solutions/digital-learning" className="hover:text-tlg-signatureGold transition-colors">Digital Products & Learning</Link></li>
              <li><Link href="/solutions/technology" className="hover:text-tlg-signatureGold transition-colors">Information Technology</Link></li>
            </ul>
          </div>

          {/* Column 2: Group */}
          <div className="flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-widest text-tlg-signatureGold mb-8">Group</h4>
            <ul className="flex flex-col gap-5 text-sm text-white/70 font-light">
              <li><Link href="/about" className="hover:text-tlg-signatureGold transition-colors">About Us</Link></li>
              <li><Link href="/about/leadership" className="hover:text-tlg-signatureGold transition-colors">Leadership</Link></li>
              <li><Link href="/partnerships" className="hover:text-tlg-signatureGold transition-colors">Partnerships</Link></li>
              <li><Link href="/careers" className="hover:text-tlg-signatureGold transition-colors">Careers</Link></li>
              <li><Link href="/impact" className="hover:text-tlg-signatureGold transition-colors">Social Impact</Link></li>
              <li><Link href="/insights" className="hover:text-tlg-signatureGold transition-colors">Insights</Link></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-widest text-tlg-signatureGold mb-8">Support</h4>
            <ul className="flex flex-col gap-5 text-sm text-white/70 font-light">
              <li><Link href="/contact" className="hover:text-tlg-signatureGold transition-colors">Contact</Link></li>
              <li><Link href="/book" className="hover:text-tlg-signatureGold transition-colors text-white font-medium">Book a Consultation</Link></li>
              <li><Link href="/privacy" className="hover:text-tlg-signatureGold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-tlg-signatureGold transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/cookies" className="hover:text-tlg-signatureGold transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Socials */}
          <div className="flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-widest text-tlg-signatureGold mb-8">Stay Informed</h4>
            <p className="text-white/60 font-light leading-relaxed mb-6 text-sm">
              Subscribe to our insights on international mobility, business growth, and market opportunities.
            </p>
            <form className="flex items-center bg-white/5 rounded-full border border-white/10 focus-within:border-tlg-signatureGold focus-within:bg-white/10 transition-all p-1 pl-5 mb-10 group">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-none outline-none w-full text-white placeholder:text-white/40 text-sm font-light py-2"
                required
              />
              <button type="submit" className="w-10 h-10 rounded-full bg-white/10 group-focus-within:bg-tlg-signatureGold flex items-center justify-center text-white group-focus-within:text-tlg-midnight hover:bg-white transition-colors shrink-0">
                <ArrowRight size={16} />
              </button>
            </form>
            
            <div className="flex items-center gap-6 text-white/40">
              <a href="#" className="hover:text-tlg-signatureGold transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-tlg-signatureGold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-tlg-signatureGold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-tlg-signatureGold transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm font-serif text-white/50 tracking-widest uppercase">
            Nigeria <span className="mx-2 text-tlg-signatureGold">•</span> United Arab Emirates <span className="mx-2 text-tlg-signatureGold">•</span> Canada
          </div>
          <div className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest font-semibold">
            &copy; {new Date().getFullYear()} Triumphal Lifetime Group. All rights reserved.
          </div>
        </div>
        
      </div>
    </footer>
  );
}
