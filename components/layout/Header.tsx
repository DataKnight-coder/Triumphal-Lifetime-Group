"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <>
      {/* 1. Announcement / Utility Bar */}
      <div className={`w-full bg-tlg-midnight text-white border-b border-white/10 transition-all duration-500 hidden lg:block ${scrolled ? 'h-0 overflow-hidden opacity-0' : 'h-10 opacity-100'}`}>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-full flex justify-between items-center text-[10px] uppercase tracking-widest font-semibold text-white/70">
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <MapPin size={12} />
              <span>Global HQ</span>
            </div>
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <Phone size={12} />
              <span>+1 647 774 0409</span>
            </div>
            <a href="https://wa.me/16477740409" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <MessageCircle size={12} />
              <span>WhatsApp Support</span>
            </a>
            <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
              <Mail size={12} />
              <span>info@triumphallifetimegroup.com</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="text-tlg-signatureGold font-medium">An Integrated Ecosystem</span>
            <Link href="/book" className="hover:text-white transition-colors flex items-center gap-1">
              Book Consultation <ArrowRight size={10} />
            </Link>
          </div>

        </div>
      </div>

      {/* 2. Main Header / Navigation Bar */}
      <header 
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "py-4 top-0 bg-tlg-midnight/90 backdrop-blur-lg border-b border-white/10" : "py-8 top-10 lg:top-10 bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center text-white">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 relative z-[60] flex items-center gap-4">
            <Link 
              href="/" 
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 relative overflow-hidden rounded-sm mix-blend-screen">
                <Image src="/logo.jpeg" alt="TLG Crest" fill className="object-contain" />
              </div>
              <div className="flex flex-col items-start leading-none group-hover:opacity-80 transition-opacity">
                <span className="font-serif text-xl md:text-2xl font-medium tracking-tight">Triumphal</span>
                <span className="text-[0.55rem] md:text-[0.65em] tracking-[0.25em] uppercase text-tlg-signatureGold font-sans mt-1">Lifetime Group</span>
              </div>
            </Link>
          </div>

          {/* Header Actions & Menu Button */}
          <div className="relative z-[60] flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-widest">
              <Link href="/search" className="hover:text-tlg-signatureGold transition-colors">Search</Link>
              <Link href="/countries" className="hover:text-tlg-signatureGold transition-colors">Global Hubs</Link>
              <a href="https://wa.me/16477740409" target="_blank" rel="noopener noreferrer" className="hover:text-tlg-signatureGold transition-colors">WhatsApp</a>
            </div>
            
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-3 group outline-none"
            >
              <span className="text-xs font-semibold uppercase tracking-widest group-hover:text-tlg-signatureGold transition-colors">
                {menuOpen ? "Close" : "Menu"}
              </span>
              <div className="w-10 h-10 rounded-full border border-white/20 flex flex-col justify-center items-center gap-1.5 group-hover:border-tlg-signatureGold transition-colors relative overflow-hidden bg-transparent">
                <span className={`block w-4 h-[1px] bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`}></span>
                <span className={`block w-4 h-[1px] bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* 3. Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-tlg-midnight transition-transform duration-[0.8s] ease-[cubic-bezier(0.76,0,0.24,1)] overflow-y-auto ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 pt-40 pb-20 flex flex-col lg:flex-row justify-between min-h-screen">
          
          <nav className="flex flex-col gap-1 md:gap-2 mt-8 md:mt-0 flex-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-tlg-signatureGold mb-4 md:mb-8">Global Navigation</span>
            
            {[
              { name: "Home", path: "/" },
              { name: "About the Group", path: "/about" },
              { name: "Our Companies", path: "/companies" },
              { name: "Countries", path: "/countries" },
              { name: "Digital Store", path: "/store" },
              { name: "Charity Foundation", path: "/foundation" },
              { name: "Insights", path: "/insights" },
              { name: "Careers", path: "/careers" },
              { name: "Contact", path: "/contact" },
            ].map((link, i) => (
              <div key={link.name} className="overflow-hidden">
                <Link 
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-4xl md:text-6xl lg:text-[5.5rem] font-serif leading-[1] text-white hover:text-tlg-signatureGold transition-colors transform ${
                    menuOpen ? 'translate-y-0' : 'translate-y-full'
                  }`}
                  style={{ transitionDuration: '0.8s', transitionDelay: `${0.05 * i}s`, transitionTimingFunction: 'cubic-bezier(0.76,0,0.24,1)' }}
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </nav>

          <div className="flex flex-col justify-between mt-20 lg:mt-0 lg:max-w-md w-full shrink-0">
            
            <div className={`transition-opacity duration-1000 delay-500 mb-12 lg:mb-0 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-xs font-bold uppercase tracking-widest text-tlg-signatureGold block mb-6">Our Gateways</span>
              <div className="flex flex-col gap-4 text-white/80">
                <Link href="/ng" onClick={() => setMenuOpen(false)} className="text-xl md:text-2xl font-serif hover:text-tlg-signatureGold transition-colors">Nigeria</Link>
                <Link href="/ae" onClick={() => setMenuOpen(false)} className="text-xl md:text-2xl font-serif hover:text-tlg-signatureGold transition-colors">United Arab Emirates</Link>
                <Link href="/ca" onClick={() => setMenuOpen(false)} className="text-xl md:text-2xl font-serif hover:text-tlg-signatureGold transition-colors">Canada</Link>
              </div>
            </div>

            <div className={`transition-opacity duration-1000 delay-700 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-xs font-semibold uppercase tracking-widest text-tlg-signatureGold block mb-6">Global Contact</span>
              <p className="text-xl font-serif text-white mb-2">info@triumphallifetimegroup.com</p>
              <p className="text-white/60 font-light mb-12">Available worldwide for strategic partnerships and corporate advisory.</p>
              
              <Link 
                href="/book" 
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-4 bg-white text-tlg-midnight px-8 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-tlg-signatureGold hover:text-white transition-colors w-full justify-center md:w-auto"
              >
                Book Consultation <ArrowRight size={16} />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
