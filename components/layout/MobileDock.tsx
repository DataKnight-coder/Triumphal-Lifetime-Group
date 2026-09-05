"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Home, Briefcase, Menu } from "lucide-react";
import { triggerHaptic } from "@/lib/utils/haptics";

function MobileDockView({ pathname, onOpenMenu }: { pathname: string; onOpenMenu: () => void }) {
 return (
 <div className="fixed bottom-0 left-0 w-full z-50 md:hidden pointer-events-none pb-[env(safe-area-inset-bottom)] px-4">
 <div className="pointer-events-auto bg-white/95 backdrop-blur-md shadow-2xl border border-tlg-stone/50 rounded-full mb-4 px-2 py-2 flex items-center justify-between">
 
 <Link 
 href="/" 
 onClick={() => triggerHaptic()}
 className={`flex flex-col items-center justify-center w-1/4 h-12 rounded-full transition-colors ${pathname === "/" ? "text-tlg-signatureGold" : "text-gray-800 hover:text-tlg-midnight"}`}
 >
 <Home size={20} strokeWidth={pathname === "/" ? 2.5 : 1.5} />
 <span className="text-[9px] font-bold mt-1">Home</span>
 </Link>
 
 <Link 
 href="/companies" 
 onClick={() => triggerHaptic()}
 className={`flex flex-col items-center justify-center w-1/4 h-12 rounded-full transition-colors ${pathname?.startsWith("/solutions") || pathname === "/companies" ? "text-tlg-signatureGold" : "text-gray-800 hover:text-tlg-midnight"}`}
 >
 <Briefcase size={20} strokeWidth={pathname?.startsWith("/solutions") || pathname === "/companies" ? 2.5 : 1.5} />
 <span className="text-[9px] font-bold mt-1">Companies</span>
 </Link>
 
 <button 
 id="mobile-menu-trigger"
 type="button"
 aria-label="Open navigation menu"
 onClick={() => {
 triggerHaptic();
 onOpenMenu();
 }}
 className="flex flex-col items-center justify-center w-1/4 h-12 rounded-full text-gray-800 hover:text-tlg-midnight transition-colors"
 >
 <Menu size={20} strokeWidth={1.5} />
 <span className="text-[9px] font-bold mt-1">Explore</span>
 </button>
 
 <div className="w-1/4 flex items-center justify-center pr-1">
 <Link 
 href="?book=true" 
 onClick={() => triggerHaptic()}
 className="flex items-center justify-center bg-tlg-midnight text-white text-[11px] font-bold uppercase tracking-wider rounded-full w-full h-10 shadow-sm hover:bg-tlg-signatureGold transition-colors"
 >
 Book
 </Link>
 </div>

 </div>
 </div>
 );
}

export function MobileDockFallback({ onOpenMenu }: { onOpenMenu: () => void }) {
 return <MobileDockView pathname="" onOpenMenu={onOpenMenu} />;
}

export default function MobileDock({ onOpenMenu }: { onOpenMenu: () => void }) {
 const pathname = usePathname();
 const searchParams = useSearchParams();

 if (searchParams.get("book") === "true" || pathname === "/contact") {
 return null;
 }

 return <MobileDockView pathname={pathname} onOpenMenu={onOpenMenu} />;
}
