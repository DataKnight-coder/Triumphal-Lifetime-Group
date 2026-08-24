"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { m, AnimatePresence } from "motion/react";
import { Search, Command, ArrowRight, X } from "lucide-react";
import { triggerHaptic } from "@/lib/utils/haptics";

const SEARCH_DATA = [
  { title: "Home", path: "/", category: "General" },
  { title: "About Us", path: "/about", category: "General" },
  { title: "Book Consultation", path: "/book", category: "Action" },
  { title: "All Companies", path: "/companies", category: "Divisions" },
  { title: "HR & Business Consulting", path: "/solutions/hr-consulting", category: "Divisions" },
  { title: "Real Estate", path: "/solutions/real-estate", category: "Divisions" },
  { title: "Education Advisory", path: "/solutions/education", category: "Divisions" },
  { title: "Global Mobility", path: "/solutions/global-mobility", category: "Divisions" },
  { title: "Digital Products & Learning", path: "/solutions/digital-learning", category: "Divisions" },
  { title: "Information Technology", path: "/solutions/technology", category: "Divisions" },
  { title: "Social Impact & Charity", path: "/impact", category: "Impact" },
  { title: "Insights & Ideas", path: "/insights", category: "Resources" },
  { title: "Careers", path: "/careers", category: "General" },
  { title: "Contact Us", path: "/contact", category: "General" },
];

export default function CommandMenu({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (v: boolean) => void }) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(!isOpen);
        triggerHaptic();
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      setQuery("");
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const filtered = SEARCH_DATA.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 sm:px-6">
          
          {/* Backdrop */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-tlg-midnight/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <m.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-2xl bg-white rounded-[24px] shadow-2xl overflow-hidden border border-tlg-stone/50"
          >
            {/* Search Input */}
            <div className="flex items-center px-6 py-4 border-b border-tlg-stone/50">
              <Search className="w-5 h-5 text-gray-800 mr-4 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search divisions, services, insights..."
                className="flex-1 bg-transparent border-none outline-none text-lg text-tlg-midnight placeholder:text-gray-800 font-medium"
              />
              <div className="hidden sm:flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-[11px] text-gray-700 font-bold tracking-widest ml-4">
                <Command size={10} /> K
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="sm:hidden p-2 -mr-2 text-gray-800 hover:text-tlg-midnight"
              >
                <X size={20} />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto p-2 hide-scrollbar">
              {filtered.length === 0 ? (
                <div className="py-12 text-center text-gray-700">
                  <p className="font-serif text-lg">No results found.</p>
                  <p className="text-xs mt-2">Try searching for "Real Estate" or "Consulting"</p>
                </div>
              ) : (
                <div className="flex flex-col gap-1">
                  {filtered.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        triggerHaptic();
                        setIsOpen(false);
                        router.push(item.path);
                      }}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-tlg-ivory text-left transition-colors group"
                    >
                      <div className="flex flex-col">
                        <span className="text-tlg-midnight font-medium">{item.title}</span>
                        <span className="text-[11px] uppercase tracking-widest text-tlg-signatureGold font-bold mt-1">{item.category}</span>
                      </div>
                      <ArrowRight size={16} className="text-gray-600 group-hover:text-tlg-signatureGold group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
}
