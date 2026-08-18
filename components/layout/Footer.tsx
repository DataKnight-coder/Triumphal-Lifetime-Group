import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Instagram, Linkedin, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-tlg-midnight text-white pt-24 md:pt-32 relative overflow-hidden">
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top Section: Newsletter & Brand Massive Typo */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b border-white/10 pb-16 md:pb-24 gap-12">
          
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
              Empowering People.<br />
              <span className="italic font-light text-white/70">Elevating Businesses.</span>
            </h2>
            <p className="text-white/60 font-light leading-relaxed mb-8">
              Join the Triumphal Lifetime Group global network. Subscribe to our insights on international mobility, business growth, and market opportunities.
            </p>
            <form className="flex border-b border-white/30 focus-within:border-tlg-signatureGold transition-colors pb-2">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-transparent border-none outline-none w-full text-white placeholder:text-white/30 text-sm font-light"
                required
              />
              <button type="submit" className="text-xs uppercase tracking-widest font-semibold hover:text-tlg-signatureGold transition-colors pl-4 shrink-0">
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex items-center gap-6 shrink-0">
            <div className="w-16 h-16 md:w-24 md:h-24 relative overflow-hidden rounded-sm mix-blend-screen bg-white">
              {/* Note: In production, the logo.jpeg should be a transparent PNG. We use mix-blend trick here as fallback for jpeg */}
              <Image src="/logo.jpeg" alt="Triumphal Lifetime Group Crest" fill className="object-contain p-2" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl md:text-3xl tracking-tight leading-none">Triumphal</span>
              <span className="text-[0.55rem] md:text-[0.65rem] tracking-[0.3em] uppercase text-tlg-signatureGold font-sans mt-1">Lifetime Group</span>
            </div>
          </div>
          
        </div>

        {/* Middle Section: Links (5 Columns) */}
        <div className="py-16 md:py-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 md:gap-8">
          
          {/* Column 1: Brand Info & Contact */}
          <div className="col-span-2 md:col-span-1 flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-8">Global Contacts</h4>
            <div className="flex flex-col gap-6 text-sm text-white/60 font-light">
              <div>
                <strong className="text-white font-medium block mb-1">Nigeria HQ</strong>
                <a href="mailto:ng@triumphallifetimegroup.com" className="hover:text-tlg-signatureGold transition-colors">ng@triumphallifetimegroup.com</a>
              </div>
              <div>
                <strong className="text-white font-medium block mb-1">UAE Office</strong>
                <a href="mailto:ae@triumphallifetimegroup.com" className="hover:text-tlg-signatureGold transition-colors">ae@triumphallifetimegroup.com</a>
              </div>
              <div>
                <strong className="text-white font-medium block mb-1">Canada Desk</strong>
                <a href="mailto:ca@triumphallifetimegroup.com" className="hover:text-tlg-signatureGold transition-colors">ca@triumphallifetimegroup.com</a>
              </div>
            </div>
          </div>

          {/* Column 2: Our Companies */}
          <div className="flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-8">Our Companies</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/70 font-light">
              <li><Link href="/companies/hr-business-consulting" className="hover:text-tlg-signatureGold transition-colors">HR & Business Consulting</Link></li>
              <li><Link href="/companies/real-estate" className="hover:text-tlg-signatureGold transition-colors">Real Estate Services</Link></li>
              <li><Link href="/companies/education-advisory" className="hover:text-tlg-signatureGold transition-colors">Education Advisory</Link></li>
              <li><Link href="/companies/global-visa-immigration" className="hover:text-tlg-signatureGold transition-colors">Global Visa & Immigration</Link></li>
              <li><Link href="/companies/digital-products-learning" className="hover:text-tlg-signatureGold transition-colors">Digital Products & Learning</Link></li>
              {/* IT conditionally rendered in full production based on config, shown here for structure */}
              <li><Link href="/companies/information-technology" className="hover:text-tlg-signatureGold transition-colors">Information Technology</Link></li>
            </ul>
          </div>

          {/* Column 3: Countries */}
          <div className="flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-8">Gateways</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/70 font-light">
              <li><Link href="/ng" className="hover:text-tlg-signatureGold transition-colors">Nigeria</Link></li>
              <li><Link href="/ae" className="hover:text-tlg-signatureGold transition-colors">United Arab Emirates</Link></li>
              <li><Link href="/ca" className="hover:text-tlg-signatureGold transition-colors">Canada</Link></li>
            </ul>
          </div>

          {/* Column 4: Explore */}
          <div className="flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-8">Explore</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/70 font-light">
              <li><Link href="/about" className="hover:text-tlg-signatureGold transition-colors">About the Group</Link></li>
              <li><Link href="/foundation" className="hover:text-tlg-signatureGold transition-colors">Charity Foundation</Link></li>
              <li><Link href="/insights" className="hover:text-tlg-signatureGold transition-colors">Insights & News</Link></li>
              <li><Link href="/careers" className="hover:text-tlg-signatureGold transition-colors">Careers</Link></li>
              <li><Link href="/about/partners" className="hover:text-tlg-signatureGold transition-colors">Partnerships</Link></li>
              <li><Link href="/contact" className="hover:text-tlg-signatureGold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 5: Get Started */}
          <div className="flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-8">Get Started</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/70 font-light">
              <li><Link href="/find-a-service" className="hover:text-tlg-signatureGold transition-colors flex items-center gap-2">Find the Right Service <ArrowRight size={12}/></Link></li>
              <li><Link href="/book" className="hover:text-tlg-signatureGold transition-colors">Book Consultation</Link></li>
              <li><a href="https://wa.me/16477740409" target="_blank" rel="noopener noreferrer" className="hover:text-tlg-signatureGold transition-colors">WhatsApp Support</a></li>
              <li><Link href="/store" className="hover:text-tlg-signatureGold transition-colors">Digital Store</Link></li>
              <li><Link href="/foundation/donate" className="hover:text-tlg-signatureGold transition-colors">Donate to Foundation</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Legal & Social */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8 text-[10px] md:text-xs text-white/40 uppercase tracking-wider font-semibold">
            <span>&copy; {new Date().getFullYear()} Triumphal Lifetime Group</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
          </div>

          <div className="flex items-center gap-6 text-white/40">
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Youtube size={18} /></a>
          </div>

        </div>
        
      </div>
    </footer>
  );
}
