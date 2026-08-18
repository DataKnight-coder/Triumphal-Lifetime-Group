import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

export default function Store() {
  const products = [
    { id: 1, title: "Global HR Policy Template Pack", category: "HR Resources", price: "$199", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" },
    { id: 2, title: "UAE Corporate Setup Guide", category: "Business Guides", price: "$299", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" },
    { id: 3, title: "Canadian Immigration Checklist", category: "Newcomer Resources", price: "$49", img: "https://images.unsplash.com/photo-1490623970972-ae8bb3da443e?q=80&w=2059&auto=format&fit=crop" },
    { id: 4, title: "Real Estate Due Diligence Framework", category: "Business Guides", price: "$149", img: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1973&auto=format&fit=crop" },
  ];

  return (
    <>
      <Header />
      <main className="bg-tlg-ivory">
        
        <section className="relative pt-48 pb-32 w-full bg-tlg-midnight">
          <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6 animate-reveal-up">Digital Store</span>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tight mb-8 animate-reveal-up-delayed">
              Corporate <span className="italic font-light">Resources</span>.
            </h1>
          </div>
        </section>

        <section className="py-12 bg-white border-b border-tlg-stone sticky top-0 z-30">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-wrap gap-8 items-center text-xs uppercase tracking-widest font-bold text-gray-400">
            <span className="text-tlg-midnight">All Products</span>
            <span className="hover:text-tlg-midnight cursor-pointer transition-colors">HR Resources</span>
            <span className="hover:text-tlg-midnight cursor-pointer transition-colors">Business Guides</span>
            <span className="hover:text-tlg-midnight cursor-pointer transition-colors">Newcomer Checklists</span>
            <span className="hover:text-tlg-midnight cursor-pointer transition-colors">Masterclasses</span>
          </div>
        </section>

        <section className="py-32 bg-tlg-ivory">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((prop) => (
                <Link key={prop.id} href={`/store/product-${prop.id}`} className="group bg-white border border-tlg-stone hover:border-tlg-signatureGold transition-colors flex flex-col h-full">
                  <div className="relative h-[250px] w-full overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url('${prop.img}')` }}
                    ></div>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <span className="text-xs uppercase tracking-widest font-bold text-tlg-signatureGold mb-3">{prop.category}</span>
                    <h3 className="text-xl font-serif text-tlg-midnight mb-6">{prop.title}</h3>
                    <div className="mt-auto pt-6 border-t border-tlg-stone flex justify-between items-center text-tlg-midnight">
                      <span className="font-serif text-xl">{prop.price}</span>
                      <ShoppingBag size={18} className="group-hover:text-tlg-signatureGold transition-colors" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
