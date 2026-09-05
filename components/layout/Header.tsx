"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, Suspense } from "react";
import { ChevronDown, Menu, X, Search, Command } from "lucide-react";
import { m, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { triggerHaptic } from "@/lib/utils/haptics";
import MobileDock, { MobileDockFallback } from "./MobileDock";
import CommandMenu from "@/components/ui/CommandMenu";
import type { PageLink } from "@/lib/wordpress/page-content";
import { trackEvent } from "@/lib/analytics";

type HeaderProps = { navigationLinks: PageLink[]; divisionLinks: PageLink[]; ctaText: string; ctaUrl: string };

export default function Header({ navigationLinks, divisionLinks, ctaText, ctaUrl }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [cmdOpen, setCmdOpen] = useState(false);
  const mobileCloseRef = useRef<HTMLButtonElement>(null);
  const mobileMenuWasOpen = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      mobileMenuWasOpen.current = true;
      requestAnimationFrame(() => mobileCloseRef.current?.focus());
    } else {
      document.body.style.overflow = previousOverflow;
      if (mobileMenuWasOpen.current) {
        document.getElementById("mobile-menu-trigger")?.focus();
        mobileMenuWasOpen.current = false;
      }
    }
    return () => { document.body.style.overflow = previousOverflow; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMobileMenuOpen(false);
      setActiveDropdown(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const companiesLinks = divisionLinks.map((link) => ({ name: link.label, path: link.url, image: link.image || "/images/hero.jpg", desc: "" }));
  const divisionsLabel = navigationLinks.find((link) => link.label === "Our Divisions")?.label || "Our Divisions";
  const searchItems = [...navigationLinks.map((link) => ({ title: link.label, path: link.url, category: "Navigation" })), ...divisionLinks.map((link) => ({ title: link.label, path: link.url, category: divisionsLabel }))];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 bg-tlg-midnight transition-shadow duration-300 flex items-center h-20 md:h-24 px-6 md:px-12 ${scrolled || activeDropdown ? 'shadow-2xl' : 'shadow-md'}`}>
        
        <div className="max-w-[1600px] w-full mx-auto flex items-center justify-between">
          
          {/* Logo - Left */}
          <m.div 
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-4 group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 min-w-[56px] shrink-0 relative overflow-hidden rounded-full border border-white/20 transition-all duration-300">
                <Image src="/logo.png" alt="TLG Crest" fill className="object-cover scale-110" />
              </div>
              <div className="flex flex-col items-start leading-none group-hover:opacity-80 transition-opacity">
                <span className="font-serif text-xl md:text-2xl font-medium tracking-tight text-white transition-colors duration-300">Triumphal</span>
                <span className="text-[0.65rem] tracking-[0.25em] uppercase text-tlg-signatureGold font-sans mt-1.5 font-bold">Lifetime Group</span>
              </div>
            </Link>
          </m.div>

          {/* Center Navigation - Desktop */}
          <m.nav 
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            aria-label="Primary navigation"
            className="hidden xl:flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-white/90"
          >
            {navigationLinks.filter((link) => link.label !== "Our Divisions").slice(0, 2).map((link) => <Link key={link.url} href={link.url} className="px-4 py-2 hover:text-tlg-signatureGold transition-colors">{link.label}</Link>)}
            
            {/* Our Companies Trigger */}
            <div 
              className="relative flex items-center h-full"
              onMouseEnter={() => { setActiveDropdown('companies'); setHoveredLink(companiesLinks[0].image); }}
            >
              <button
                type="button"
                aria-expanded={activeDropdown === "companies"}
                aria-controls="division-navigation-menu"
                aria-haspopup="true"
                onClick={() => setActiveDropdown((current) => current === "companies" ? null : "companies")}
                className={`flex items-center gap-1.5 px-4 py-2 transition-colors ${activeDropdown === 'companies' ? 'text-tlg-signatureGold' : 'hover:text-tlg-signatureGold'}`}
              >
                {divisionsLabel} <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'companies' ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {navigationLinks.filter((link) => link.label !== "Our Divisions").slice(2).map((link) => <Link key={link.url} href={link.url} className="px-4 py-2 hover:text-tlg-signatureGold transition-colors">{link.label}</Link>)}
          </m.nav>

          {/* Right CTA & Search - Desktop */}
          <m.div 
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="hidden xl:flex items-center gap-4"
          >
            <button 
              onClick={() => { triggerHaptic(); setCmdOpen(true); }}
              aria-label="Open site search"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full transition-colors border border-white/20 text-white hover:bg-white/10"
            >
              <Search size={14} />
              <div className="flex items-center gap-1 text-[9px] font-bold tracking-widest uppercase opacity-70">
                <Command size={10} /> K
              </div>
            </button>

            <Link 
              href={ctaUrl}
              onClick={() => trackEvent("consultation_click", { placement: "header" })}
              className="inline-flex items-center justify-center px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] rounded-full bg-tlg-signatureGold text-tlg-midnight transition-all duration-300 shadow-sm hover:bg-white hover:shadow-md"
            >
              {ctaText}
            </Link>
          </m.div>
          
        </div>

        {/* Mega Menu Full-Width Dropdown */}
        <AnimatePresence>
          {activeDropdown === 'companies' && (
            <m.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onMouseEnter={() => setActiveDropdown('companies')}
              onMouseLeave={() => setActiveDropdown(null)}
              id="division-navigation-menu"
              role="navigation"
              aria-label="Our divisions"
              className="absolute top-full left-0 w-full bg-white border-t border-tlg-stone shadow-2xl z-40 overflow-hidden"
            >
              <div className="max-w-[1600px] mx-auto px-12 py-12 flex gap-12 min-h-[400px]">
                
                {/* Left Side: Links Grid */}
                <div className="w-1/2 grid grid-cols-2 gap-x-8 gap-y-2">
                  {companiesLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.path}
                      onMouseEnter={() => setHoveredLink(link.image)}
                      onClick={() => setActiveDropdown(null)}
                      className={`group flex flex-col p-4 rounded-2xl transition-colors ${hoveredLink === link.image ? 'bg-tlg-ivory' : 'hover:bg-tlg-ivory'}`}
                    >
                      <span className={`font-serif text-xl mb-1 transition-colors ${hoveredLink === link.image ? 'text-tlg-signatureGold' : 'text-tlg-midnight'}`}>
                        {link.name}
                      </span>
                      {link.desc && (
                        <span className="text-xs text-gray-700 font-normal leading-relaxed">
                          {link.desc}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>

                {/* Right Side: Image Preview */}
                <div className="w-1/2 relative rounded-[32px] overflow-hidden bg-tlg-ivory border border-tlg-stone/50">
                  <AnimatePresence mode="wait">
                    {hoveredLink && (
                      <m.div
                        key={hoveredLink}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0"
                      >
                        <Image src={hoveredLink} alt="Preview" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight/60 to-transparent" />
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </m.div>
          )}
        </AnimatePresence>
      </header>

      {/* Command Menu */}
      <CommandMenu isOpen={cmdOpen} setIsOpen={setCmdOpen} items={searchItems} />

      {/* MobileDock */}
      <Suspense fallback={<MobileDockFallback onOpenMenu={() => setMobileMenuOpen(true)} />}>
        <MobileDock onOpenMenu={() => setMobileMenuOpen(true)} />
      </Suspense>

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
        aria-labelledby="mobile-menu-title"
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
      >
        {/* Drag Handle & Header */}
        <div className="shrink-0 pt-4 pb-2 px-6 flex justify-between items-center border-b border-tlg-stone/50">
          <div className="w-12 h-1.5 bg-gray-200 rounded-full absolute top-3 left-1/2 -translate-x-1/2"></div>
          <span id="mobile-menu-title" className="font-serif text-lg text-tlg-midnight mt-4">Menu</span>
          <button 
            ref={mobileCloseRef}
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 -mr-2 mt-4 text-gray-800 hover:text-tlg-midnight transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto hide-scrollbar flex-1 px-8 py-8 pb-[calc(100px+env(safe-area-inset-bottom,20px))]">
          
          <nav className="flex flex-col gap-6">
            {navigationLinks.filter((link) => link.label !== "Our Divisions").map((link) => <Link key={link.url} href={link.url} onClick={() => { triggerHaptic(); setMobileMenuOpen(false); }} className="text-2xl font-serif text-tlg-midnight hover:text-tlg-signatureGold transition-colors">{link.label}</Link>)}
            
            <div className="flex flex-col gap-4 border-l-2 border-tlg-ivory pl-4 py-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-tlg-signatureGold">{divisionsLabel}</span>
              {companiesLinks.map(link => (
                <Link key={link.name} href={link.path} onClick={() => { triggerHaptic(); setMobileMenuOpen(false); }} className="text-lg text-gray-700 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>

          </nav>

        </div>
      </div>
    </>
  );
}
