"use client";

import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";

export default function CountrySwitcher() {
 const [isOpen, setIsOpen] = useState(false);
 const [selected, setSelected] = useState("Global");

 const countries = [
 { name: "Global", code: "gl" },
 { name: "Nigeria", code: "ng" },
 { name: "UAE", code: "ae" },
 { name: "Canada", code: "ca" }
 ];

 return (
 <div className="relative">
 <button 
 onClick={() => setIsOpen(!isOpen)}
 className="flex items-center space-x-2 text-tlg-charcoal hover:text-tlg-signatureGold transition-colors text-sm font-medium"
 >
 <MapPin size={16} />
 <span>{selected}</span>
 <ChevronDown size={14} />
 </button>

 {isOpen && (
 <div className="absolute right-0 mt-2 w-40 bg-white border border-tlg-stone shadow-lg rounded-sm overflow-hidden z-50">
 {countries.map((country) => (
 <button
 key={country.code}
 onClick={() => {
 setSelected(country.name);
 setIsOpen(false);
 // Future: push route `/ng`, `/ae`, etc.
 }}
 className="w-full text-left px-4 py-2 text-sm text-tlg-charcoal hover:bg-tlg-ivory hover:text-tlg-signatureGold transition-colors"
 >
 {country.name}
 </button>
 ))}
 </div>
 )}
 </div>
 );
}
