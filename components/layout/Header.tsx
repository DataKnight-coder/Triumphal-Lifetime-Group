"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

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
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-sm border-b border-tlg-stone py-4" : "bg-tlg-ivory py-6"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center text-tlg-midnight">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 relative z-[60] flex items-center">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 md:gap-4 group"
            >
              <div className="w-9 h-9 md:w-11 md:h-11 min-w-[36px] md:min-w-[44px] shrink-0 relative overflow-hidden rounded-full border border-tlg-stone/50 shadow-sm">
                <Image src="/logo.jpeg" alt="TLG Crest" fill className="object-cover scale-110" />
              </div>
              <div className="flex flex-col items-start leading-none group-hover:opacity-80 transition-opacity">
                <span className="font-serif text-lg md:text-xl font-medium tracking-tight text-tlg-midnight">Triumphal</span>
                <span className="text-[0.45rem] md:text-[0.6rem] tracking-[0.2em] md:tracking-[0.25em] uppercase text-gray-500 font-sans mt-1">Lifetime Group</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8 text-sm font-semibold tracking-wide text-tlg-charcoal">
            <Link href="/" className="hover:text-tlg-signatureGold transition-colors">Home</Link>
            <Link href="/about" className="hover:text-tlg-signatureGold transition-colors">About</Link>
            
            {/* Our Companies Dropdown */}
            <div 
              className="relative group h-full py-2"
              onMouseEnter={() => setActiveDropdown('companies')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1 transition-colors ${activeDropdown === 'companies' ? 'text-tlg-signatureGold' : 'hover:text-tlg-signatureGold'}`}>
                Our Companies <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'companies' ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full left-0 mt-2 w-72 bg-white border border-tlg-stone shadow-xl transition-all duration-200 flex flex-col py-2 z-50 ${activeDropdown === 'companies' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
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
              className="relative group h-full py-2"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1 transition-colors ${activeDropdown === 'solutions' ? 'text-tlg-signatureGold' : 'hover:text-tlg-signatureGold'}`}>
                Solutions <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full left-0 mt-2 w-72 bg-white border border-tlg-stone shadow-xl transition-all duration-200 flex flex-col py-2 z-50 ${activeDropdown === 'solutions' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
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

            <Link href="/insights" className="hover:text-tlg-signatureGold transition-colors">Insights</Link>
            <Link href="/impact" className="hover:text-tlg-signatureGold transition-colors">Impact</Link>
            <Link href="/careers" className="hover:text-tlg-signatureGold transition-colors">Careers</Link>
            <Link href="/contact" className="hover:text-tlg-signatureGold transition-colors">Contact</Link>
          </nav>

          {/* Header Actions & Mobile Toggle */}
          <div className="relative z-[60] flex items-center gap-6">
            <Link 
              href="/book" 
              className="hidden md:inline-flex items-center justify-center bg-tlg-midnight text-white px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-tlg-signatureGold transition-colors"
            >
              Book a Consultation
            </Link>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden flex items-center justify-center w-10 h-10 text-tlg-midnight hover:text-tlg-signatureGold transition-colors"
            >
              {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white transition-transform duration-[0.5s] ease-in-out overflow-y-auto xl:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="max-w-[1600px] w-full mx-auto px-6 pt-32 pb-20 min-h-screen flex flex-col">
          
          <nav className="flex flex-col gap-6">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-tlg-midnight">Home</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-tlg-midnight">About</Link>
            
            <div className="flex flex-col gap-4 border-l-2 border-tlg-ivory pl-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Our Companies</span>
              {companiesLinks.map(link => (
                <Link key={link.name} href={link.path} onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-600">
                  {link.name}
                </Link>
              ))}
            </div>

            <Link href="/insights" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-tlg-midnight">Insights</Link>
            <Link href="/impact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-tlg-midnight">Impact</Link>
            <Link href="/careers" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-tlg-midnight">Careers</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-serif text-tlg-midnight">Contact</Link>
          </nav>

          <div className="mt-auto pt-12">
            <Link 
              href="/book" 
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex w-full items-center justify-center bg-tlg-midnight text-white px-8 py-4 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-tlg-signatureGold transition-colors"
            >
              Book a Consultation
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
