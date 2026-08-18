import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, MapPin, Bed, Bath, Square } from "lucide-react";

export default function Properties() {
  // Mock data for the dynamic grid
  const properties = [
    { id: 1, title: "Luxury Penthouse", location: "Downtown Dubai, UAE", price: "$4,500,000", beds: 4, baths: 5, sqft: "5,200", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" },
    { id: 2, title: "Commercial Plaza", location: "Victoria Island, Lagos", price: "$2,100,000", beds: 0, baths: 8, sqft: "12,000", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" },
    { id: 3, title: "Modern Estate", location: "Toronto, Canada", price: "$3,200,000", beds: 5, baths: 4, sqft: "4,800", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" },
    { id: 4, title: "Waterfront Villa", location: "Palm Jumeirah, UAE", price: "$8,900,000", beds: 6, baths: 7, sqft: "8,500", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" },
  ];

  return (
    <>
      <Header />
      <main className="bg-tlg-ivory">
        
        <section className="relative pt-48 pb-32 w-full bg-tlg-midnight">
          <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6 animate-reveal-up">Real Estate Network</span>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tight mb-8 animate-reveal-up-delayed">
              Featured <span className="italic font-light">Properties</span>.
            </h1>
          </div>
        </section>

        <section className="py-12 bg-white border-b border-tlg-stone sticky top-0 z-30">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-wrap gap-4 items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-tlg-midnight mr-4">Filters:</span>
            <select className="border border-tlg-stone bg-transparent text-sm py-2 px-4 outline-none focus:border-tlg-signatureGold">
              <option>Any Country</option><option>Nigeria</option><option>UAE</option><option>Canada</option>
            </select>
            <select className="border border-tlg-stone bg-transparent text-sm py-2 px-4 outline-none focus:border-tlg-signatureGold">
              <option>Buy or Rent</option><option>Buy</option><option>Rent</option>
            </select>
            <select className="border border-tlg-stone bg-transparent text-sm py-2 px-4 outline-none focus:border-tlg-signatureGold">
              <option>Property Type</option><option>Residential</option><option>Commercial</option>
            </select>
          </div>
        </section>

        <section className="py-32 bg-tlg-ivory">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {properties.map((prop) => (
                <Link key={prop.id} href={`/properties/property-${prop.id}`} className="group bg-white border border-tlg-stone hover:border-tlg-signatureGold transition-colors">
                  <div className="relative h-[400px] w-full overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url('${prop.img}')` }}
                    ></div>
                    <div className="absolute top-4 right-4 bg-tlg-midnight text-white px-4 py-2 text-xs font-bold tracking-widest uppercase">
                      For Sale
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-serif text-tlg-midnight mb-2">{prop.title}</h3>
                    <p className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                      <MapPin size={14} className="text-tlg-signatureGold"/> {prop.location}
                    </p>
                    <div className="text-2xl font-serif text-tlg-midnight mb-8">{prop.price}</div>
                    
                    <div className="flex gap-6 border-t border-tlg-stone pt-6 text-sm text-gray-500">
                      <span className="flex items-center gap-2"><Bed size={16}/> {prop.beds} Beds</span>
                      <span className="flex items-center gap-2"><Bath size={16}/> {prop.baths} Baths</span>
                      <span className="flex items-center gap-2"><Square size={16}/> {prop.sqft} SqFt</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-24 text-center">
              <button className="border border-tlg-stone px-12 py-4 text-xs font-bold tracking-widest uppercase hover:border-tlg-signatureGold transition-colors text-tlg-midnight">
                Load More Properties
              </button>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
