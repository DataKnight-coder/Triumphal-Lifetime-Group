"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { m } from "motion/react";
import MobileDock from "./MobileDock";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const companiesLinks = [
    { name: "HR & Business Consulting", path: "/solutions/hr-consulting" },
    { name: "Real Estate", path: "/solutions/real-estate" },
    { name: "Education Advisory", path: "/solutions/education" },
    { name: "Global Mobility", path: "/solutions/global-mobility" },
    { name: "Digital Products & Learning", path: "/solutions/digital-learning" },
    { name: "Information Technology", path: "/solutions/technology" },
    { name: "View All Companies", path: "/companies", isHighlight: true },
  ];

  const solutionsLinks = [
    { name: "Build a Stronger Business", path: "/solutions/hr-consulting" },
    { name: "Find Property Opportunities", path: "/solutions/real-estate" },
    { name: "Plan Your Education", path: "/solutions/education" },
    { name: "Explore Global Mobility", path: "/solutions/global-mobility" },
    { name: "Learn & Access Resources", path: "/solutions/digital-learning" },
    { name: "Transform With Technology", path: "/solutions/technology" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 pointer-events-none h-24">
        
        {/* Logo - Fixed Top Left */}
        <m.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="absolute top-6 left-6 md:left-12 pointer-events-auto"
        >
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-4 group bg-white/80 backdrop-blur-md px-2 py-2 pr-6 rounded-full shadow-sm border border-tlg-stone/50 hover:shadow-md transition-all"
          >
            <div className="w-10 h-10 min-w-[40px] shrink-0 relative overflow-hidden rounded-full border border-tlg-stone/50">
              <Image src="/logo.jpeg" alt="TLG Crest" fill className="object-cover scale-110" />
            </div>
            <div className="flex flex-col items-start leading-none group-hover:opacity-80 transition-opacity">
              <span className="font-serif text-lg font-medium tracking-tight text-tlg-midnight">Triumphal</span>
              <span className="text-[0.55rem] tracking-[0.25em] uppercase text-gray-500 font-sans mt-1">Lifetime Group</span>
            </div>
          </Link>
        </m.div>

        {/* Center Pill: Desktop Navigation */}
        <m.div 
          initial={{ opacity: 0, y: -20, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="absolute top-6 left-1/2 pointer-events-auto hidden xl:flex"
        >
          <nav className={`flex items-center bg-white/95 backdrop-blur-md border border-tlg-stone/50 rounded-full p-1.5 gap-1 text-sm font-semibold tracking-wide text-tlg-charcoal transition-all duration-500 ${scrolled ? 'shadow-xl -translate-y-1' : 'shadow-md'}`}>
            <Link href="/" className="px-5 py-2.5 rounded-full hover:bg-tlg-ivory hover:text-tlg-signatureGold transition-colors">Home</Link>
            <Link href="/about" className="px-5 py-2.5 rounded-full hover:bg-tlg-ivory hover:text-tlg-signatureGold transition-colors">About</Link>
            
            {/* Our Companies Dropdown */}
            <div 
              className="relative group flex items-center h-full"
              onMouseEnter={() => setActiveDropdown('companies')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full transition-colors ${activeDropdown === 'companies' ? 'bg-tlg-ivory text-tlg-signatureGold' : 'hover:bg-tlg-ivory hover:text-tlg-signatureGold'}`}>
                Our Companies <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'companies' ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white border border-tlg-stone rounded-[24px] shadow-2xl transition-all duration-300 flex flex-col py-2 z-50 overflow-hidden ${activeDropdown === 'companies' ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible translate-y-4 scale-95'}`}>
                {companiesLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.path}
                    className={`px-6 py-3 text-sm hover:bg-tlg-ivory hover:text-tlg-signatureGold transition-colors ${link.isHighlight ? 'border-t border-tlg-stone font-bold mt-2 pt-4' : 'text-gray-600'}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="relative group flex items-center h-full"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full transition-colors ${activeDropdown === 'solutions' ? 'bg-tlg-ivory text-tlg-signatureGold' : 'hover:bg-tlg-ivory hover:text-tlg-signatureGold'}`}>
                Solutions <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-white border border-tlg-stone rounded-[24px] shadow-2xl transition-all duration-300 flex flex-col py-2 z-50 overflow-hidden ${activeDropdown === 'solutions' ? 'opacity-100 visible translate-y-0 scale-100' : 'opacity-0 invisible translate-y-4 scale-95'}`}>
                <span className="px-6 py-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">By Outcome</span>
                {solutionsLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.path}
                    className="px-6 py-3 text-sm text-gray-600 hover:bg-tlg-ivory hover:text-tlg-signatureGold transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/insights" className="px-5 py-2.5 rounded-full hover:bg-tlg-ivory hover:text-tlg-signatureGold transition-colors">Insights</Link>
            
            <div className="ml-2 pl-2 border-l border-tlg-stone/60 flex items-center">
              <Link 
                href="/book" 
                className="inline-flex items-center justify-center bg-tlg-midnight text-white px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-tlg-signatureGold transition-colors shadow-md hover:shadow-lg"
              >
                Book a Consultation
              </Link>
            </div>
          </nav>
        </m.div>

        {/* Note: Mobile Top-Right Toggle removed in favor of MobileDock */}
      </header>

      {/* MobileDock */}
      <MobileDock onOpenMenu={() => setMobileMenuOpen(true)} />

      {/* Mobile Bottom Sheet Backdrop */}
      <div 
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all duration-500 xl:hidden ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Bottom Sheet */}
      <div 
        className={`fixed inset-x-0 bottom-0 z-50 bg-white/95 backdrop-blur-xl rounded-t-[40px] shadow-[0_-20px_40px_rgba(0,0,0,0.1)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] xl:hidden max-h-[85dvh] flex flex-col ${
          mobileMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-expanded={mobileMenuOpen}
      >
        {/* Drag Handle & Header */}
        <div className="shrink-0 pt-4 pb-2 px-6 flex justify-between items-center border-b border-tlg-stone/50">
          <div className="w-12 h-1.5 bg-gray-200 rounded-full absolute top-3 left-1/2 -translate-x-1/2"></div>
          <span className="font-serif text-lg text-tlg-midnight mt-4">Menu</span>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 -mr-2 mt-4 text-gray-400 hover:text-tlg-midnight transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto hide-scrollbar flex-1 px-8 py-8 pb-[calc(100px+env(safe-area-inset-bottom,20px))]">
          
          <nav className="flex flex-col gap-6">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-tlg-midnight hover:text-tlg-signatureGold transition-colors">Home</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-tlg-midnight hover:text-tlg-signatureGold transition-colors">About Us</Link>
            
            <div className="flex flex-col gap-4 border-l-2 border-tlg-ivory pl-4 py-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-tlg-signatureGold">Our Companies</span>
              {companiesLinks.map(link => (
                <Link key={link.name} href={link.path} onClick={() => setMobileMenuOpen(false)} className={`text-lg transition-colors ${link.isHighlight ? 'text-tlg-midnight font-medium mt-2' : 'text-gray-500'}`}>
                  {link.name}
                </Link>
              ))}
            </div>

            <Link href="/insights" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-tlg-midnight hover:text-tlg-signatureGold transition-colors">Insights & Ideas</Link>
            <Link href="/impact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-tlg-midnight hover:text-tlg-signatureGold transition-colors">Social Impact</Link>
            <Link href="/careers" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-tlg-midnight hover:text-tlg-signatureGold transition-colors">Careers</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-tlg-midnight hover:text-tlg-signatureGold transition-colors">Contact</Link>
          </nav>

        </div>
      </div>
    </>
  );
}
