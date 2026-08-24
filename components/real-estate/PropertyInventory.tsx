"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, ArrowRight, BedDouble, Calendar, Building2 } from "lucide-react";

type PropertyCategory = "All" | "UAE" | "Nigeria" | "Commercial" | "Fractional" | "Holiday";

interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  categories: PropertyCategory[];
  tags: string[];
  stats: { label: string; value: string }[];
}

const properties: Property[] = [
  {
    id: "binghatti-jvc-1",
    title: "Binghatti Onyx",
    location: "Jumeirah Village Circle, Dubai",
    price: "From $460,000",
    image: "https://egtzvtwnlhedxsqxcmja.supabase.co/storage/v1/object/public/property-photos/1779903082727-z9l9j8.avif",
    categories: ["All", "UAE"],
    tags: ["Off-Plan", "High Yield"],
    stats: [
      { label: "Completion", value: "Completed" },
      { label: "Type", value: "1 & 2 Bed" }
    ]
  },
  {
    id: "binghatti-motorcity",
    title: "Binghatti Hills",
    location: "Motor City, Dubai",
    price: "From $460,000",
    image: "https://egtzvtwnlhedxsqxcmja.supabase.co/storage/v1/object/public/property-photos/1779903358716-u9gfab.avif",
    categories: ["All", "UAE", "Fractional"],
    tags: ["Fractional Shares Available", "Exclusive"],
    stats: [
      { label: "Share Price", value: "From $40,000" },
      { label: "Target Yield", value: "7-9%" }
    ]
  },
  {
    id: "binghatti-majan",
    title: "Binghatti Phantom",
    location: "Majan, Dubai",
    price: "From $240,000",
    image: "https://egtzvtwnlhedxsqxcmja.supabase.co/storage/v1/object/public/property-photos/1781396378298-2kqck9.avif",
    categories: ["All", "UAE"],
    tags: ["Off-Plan"],
    stats: [
      { label: "Completion", value: "Completed" },
      { label: "Type", value: "Studios & 1 Bed" }
    ]
  },
  {
    id: "binghatti-meydan",
    title: "Binghatti Ghost",
    location: "Meydan, Dubai",
    price: "From $450,000",
    image: "https://egtzvtwnlhedxsqxcmja.supabase.co/storage/v1/object/public/property-photos/1781535586741-i7lov3.jpg",
    categories: ["All", "UAE"],
    tags: ["Premium"],
    stats: [
      { label: "Completion", value: "Completed" },
      { label: "Type", value: "1 & 2 Bed" }
    ]
  },
  {
    id: "binghatti-businessbay",
    title: "Burj Binghatti Jacob & Co Residences",
    location: "Business Bay, Dubai",
    price: "From $1,080,000",
    image: "https://egtzvtwnlhedxsqxcmja.supabase.co/storage/v1/object/public/property-photos/1779902706371-4cssaw.jpg",
    categories: ["All", "UAE"],
    tags: ["Ultra-Luxury"],
    stats: [
      { label: "Completion", value: "Q2 2026" },
      { label: "Type", value: "2, 3 & Penthouse" }
    ]
  },
  {
    id: "holiday-jvc",
    title: "Luxury Short Let - Binghatti House",
    location: "Jumeirah Village Circle, Dubai",
    price: "From $250 / night",
    image: "https://egtzvtwnlhedxsqxcmja.supabase.co/storage/v1/object/public/property-photos/1781537537107-uy3zt2.avif",
    categories: ["All", "Holiday"],
    tags: ["Available Now", "Serviced"],
    stats: [
      { label: "Minimum Stay", value: "3 Nights" },
      { label: "Capacity", value: "4 Guests" }
    ]
  },
  {
    id: "commercial-lagos",
    title: "Grade-A Commercial Office",
    location: "Abuja, FCT, Nigeria",
    price: "Price on Application",
    image: "/visuals/real-estate.jpg",
    categories: ["All", "Nigeria", "Commercial"],
    tags: ["Commercial", "Ready"],
    stats: [
      { label: "Floor Space", value: "500 - 2,000 sqm" },
      { label: "Status", value: "Ready to Move" }
    ]
  }
];

export default function PropertyInventory() {
  const [activeFilter, setActiveFilter] = useState<PropertyCategory>("All");

  const filteredProperties = properties.filter((p) => p.categories.includes(activeFilter));

  const filters: PropertyCategory[] = ["All", "UAE", "Nigeria", "Commercial", "Fractional", "Holiday"];

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Curated Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight">The Property Collection</h2>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-colors ${
                activeFilter === filter
                  ? "bg-tlg-signatureGold border-tlg-signatureGold text-white"
                  : "border-tlg-stone text-gray-700 hover:border-tlg-midnight hover:text-tlg-midnight"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.map((property) => (
          <a
            key={property.id}
            href={activeFilter === 'Holiday' ? 'https://wa.me/2349117777759' : '/book'}
            target={activeFilter === 'Holiday' ? '_blank' : undefined}
            rel={activeFilter === 'Holiday' ? 'noopener noreferrer' : undefined}
            className="bg-tlg-ivory text-tlg-midnight rounded-[24px] overflow-hidden flex flex-col group w-full border border-tlg-stone hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <Image src={property.image} alt={property.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 flex gap-2">
                {property.tags.map(tag => (
                  <span key={tag} className="bg-white/95 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-widest rounded-full shadow-sm text-tlg-midnight">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-8 flex flex-col flex-1">
              <div className="flex items-center gap-2 text-xs text-gray-700 uppercase tracking-widest font-bold mb-3">
                <MapPin size={12} /> {property.location}
              </div>
              <h3 className="text-2xl font-serif mb-2">{property.title}</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6 pt-6 mt-6 border-t border-tlg-stone">
                <div>
                  <p className="text-[11px] text-gray-700 uppercase tracking-widest font-bold mb-1">Price</p>
                  <p className="font-serif text-lg text-tlg-signatureGold">{property.price}</p>
                </div>
                {property.stats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-[11px] text-gray-700 uppercase tracking-widest font-bold mb-1">{stat.label}</p>
                    <p className="font-serif text-lg">{stat.value}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-tlg-midnight flex items-center group-hover:text-tlg-signatureGold transition-colors">
                  {activeFilter === 'Holiday' ? 'Book Now' : 'View Property'} <ArrowRight size={14} className="ml-2" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
      
      {filteredProperties.length === 0 && (
        <div className="text-center py-20 text-gray-700">
          <p>No properties found in this category.</p>
        </div>
      )}

      <div className="mt-16 text-center">
        <a href="/contact" className="inline-block bg-white border border-tlg-stone text-tlg-midnight px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-tlg-midnight hover:text-white transition-colors">
          Request Full Inventory List
        </a>
      </div>
    </div>
  );
}
