import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, MapPin, Bed, Bath, Square, Check } from "lucide-react";

export default function PropertyDetail({ params }: { params: { slug: string } }) {
  return (
    <>
      <Header />
      <main className="bg-tlg-ivory">
        
        {/* Immersive Property Gallery Hero */}
        <section className="relative h-[85vh] min-h-[700px] w-full flex flex-col justify-end overflow-hidden bg-tlg-midnight">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-transparent to-tlg-midnight/50"></div>
          </div>
          <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10 pb-16 flex justify-between items-end">
            <div>
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 text-white text-xs font-bold uppercase tracking-widest inline-block mb-4">For Sale</div>
              <h1 className="text-5xl md:text-7xl font-serif text-white leading-[0.9] tracking-tight mb-4 animate-reveal-up">
                Luxury Penthouse
              </h1>
              <p className="flex items-center gap-2 text-white/80 text-lg font-light animate-reveal-up-delayed">
                <MapPin size={18} className="text-tlg-signatureGold"/> Downtown Dubai, UAE
              </p>
            </div>
            <div className="text-right">
              <span className="text-white/60 text-sm block mb-2">Asking Price</span>
              <span className="text-4xl md:text-5xl font-serif text-white block">$4,500,000</span>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8">
              
              <div className="flex gap-8 border-b border-tlg-stone pb-12 mb-12 text-tlg-midnight">
                <div className="flex items-center gap-3"><Bed size={24} className="text-tlg-signatureGold"/> <span className="text-xl font-serif">4 Beds</span></div>
                <div className="flex items-center gap-3"><Bath size={24} className="text-tlg-signatureGold"/> <span className="text-xl font-serif">5 Baths</span></div>
                <div className="flex items-center gap-3"><Square size={24} className="text-tlg-signatureGold"/> <span className="text-xl font-serif">5,200 SqFt</span></div>
              </div>

              <div className="mb-16">
                <h3 className="text-2xl font-serif text-tlg-midnight mb-6">Property Description</h3>
                <div className="space-y-4 text-gray-500 font-light leading-relaxed">
                  <p>An exceptional penthouse offering panoramic views of the Dubai skyline. This property represents the pinnacle of luxury living, featuring bespoke finishes, floor-to-ceiling windows, and private elevator access.</p>
                  <p>The expansive terrace provides an unparalleled entertaining space, while the master suite includes dual walk-in wardrobes and a spa-inspired en-suite bathroom.</p>
                </div>
              </div>

              <div className="mb-16">
                <h3 className="text-2xl font-serif text-tlg-midnight mb-6">Key Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-500 font-light">
                  <span className="flex items-center gap-2"><Check size={16} className="text-tlg-signatureGold"/> Private Pool</span>
                  <span className="flex items-center gap-2"><Check size={16} className="text-tlg-signatureGold"/> Concierge Service</span>
                  <span className="flex items-center gap-2"><Check size={16} className="text-tlg-signatureGold"/> Smart Home Tech</span>
                  <span className="flex items-center gap-2"><Check size={16} className="text-tlg-signatureGold"/> Gym & Spa Access</span>
                  <span className="flex items-center gap-2"><Check size={16} className="text-tlg-signatureGold"/> 3 Parking Spaces</span>
                  <span className="flex items-center gap-2"><Check size={16} className="text-tlg-signatureGold"/> 24/7 Security</span>
                </div>
              </div>

            </div>

            <div className="lg:col-span-4">
              <div className="bg-tlg-ivory p-8 border border-tlg-stone sticky top-32">
                <h3 className="text-2xl font-serif text-tlg-midnight mb-6">Interested in this property?</h3>
                <p className="text-sm text-gray-500 font-light mb-8">Contact our real estate advisory team to schedule a private viewing or request the full investment prospectus.</p>
                
                <form className="flex flex-col gap-4 mb-6">
                  <input type="text" placeholder="Full Name" className="border-b border-tlg-stone bg-transparent py-3 outline-none text-sm focus:border-tlg-signatureGold" />
                  <input type="email" placeholder="Email Address" className="border-b border-tlg-stone bg-transparent py-3 outline-none text-sm focus:border-tlg-signatureGold" />
                  <input type="tel" placeholder="Phone Number" className="border-b border-tlg-stone bg-transparent py-3 outline-none text-sm focus:border-tlg-signatureGold" />
                  <button className="bg-tlg-midnight text-white py-4 text-xs font-bold tracking-widest uppercase hover:bg-tlg-signatureGold transition-colors mt-4">
                    Request Viewing
                  </button>
                </form>
                
                <Link href="#" className="flex justify-center items-center gap-2 text-xs font-bold tracking-widest uppercase text-tlg-midnight hover:text-tlg-signatureGold transition-colors">
                  Contact via WhatsApp <ArrowRight size={14}/>
                </Link>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
