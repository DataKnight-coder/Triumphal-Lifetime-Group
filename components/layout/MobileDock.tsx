"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Menu } from "lucide-react";

export default function MobileDock({ onOpenMenu }: { onOpenMenu: () => void }) {
  const pathname = usePathname();

  // Hide the dock on these pages
  if (pathname === "/book" || pathname === "/contact") {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden pointer-events-none pb-[env(safe-area-inset-bottom)] px-4">
      <div className="pointer-events-auto bg-white/95 backdrop-blur-md shadow-2xl border border-tlg-stone/50 rounded-full mb-4 px-2 py-2 flex items-center justify-between">
        
        <Link 
          href="/" 
          className={`flex flex-col items-center justify-center w-1/4 h-12 rounded-full transition-colors ${pathname === "/" ? "text-tlg-signatureGold" : "text-gray-400 hover:text-tlg-midnight"}`}
        >
          <Home size={20} strokeWidth={pathname === "/" ? 2.5 : 1.5} />
          <span className="text-[9px] font-bold mt-1">Home</span>
        </Link>
        
        <Link 
          href="/companies" 
          className={`flex flex-col items-center justify-center w-1/4 h-12 rounded-full transition-colors ${pathname?.startsWith("/solutions") || pathname === "/companies" ? "text-tlg-signatureGold" : "text-gray-400 hover:text-tlg-midnight"}`}
        >
          <Briefcase size={20} strokeWidth={pathname?.startsWith("/solutions") || pathname === "/companies" ? 2.5 : 1.5} />
          <span className="text-[9px] font-bold mt-1">Companies</span>
        </Link>
        
        <button 
          onClick={onOpenMenu}
          className="flex flex-col items-center justify-center w-1/4 h-12 rounded-full text-gray-400 hover:text-tlg-midnight transition-colors"
        >
          <Menu size={20} strokeWidth={1.5} />
          <span className="text-[9px] font-bold mt-1">Explore</span>
        </button>
        
        <div className="w-1/4 flex items-center justify-center pr-1">
          <Link 
            href="/book" 
            className="flex items-center justify-center bg-tlg-midnight text-white text-[10px] font-bold uppercase tracking-wider rounded-full w-full h-10 shadow-sm hover:bg-tlg-signatureGold transition-colors"
          >
            Book
          </Link>
        </div>

      </div>
    </div>
  );
}
