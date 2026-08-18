import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="bg-tlg-ivory">
        
        {/* Cinematic Hero */}
        <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-end overflow-hidden bg-tlg-midnight">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center animate-slow-zoom scale-105 opacity-40"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/80 to-tlg-midnight/20"></div>
          </div>
          
          <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10 pb-24 md:pb-32">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6 animate-reveal-up">Global Network</span>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tight mb-8 animate-reveal-up-delayed">
              Contact<br />
              <span className="italic font-light text-white/80">Our Hubs.</span>
            </h1>
            <div className="w-24 h-[1px] bg-tlg-signatureGold mb-8 animate-draw-line"></div>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl leading-relaxed animate-reveal-up-delayed">
              Access our executive advisory teams across North America, the Middle East, and West Africa.
            </p>
          </div>
        </section>

        {/* Philosophy / Authority Quote */}
        <section className="py-24 md:py-32 bg-white relative border-b border-tlg-stone">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest block mb-8">Direct Access</span>
            <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight leading-[1.3]">
              "Time is the ultimate luxury. Our decentralized global communication infrastructure ensures immediate, secure access to our directors regardless of your time zone."
            </h2>
          </div>
        </section>

        {/* Global Hubs Grid */}
        <section className="py-24 md:py-32 bg-tlg-ivory relative">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            
            <div className="flex flex-col md:flex-row justify-between items-end mb-20">
              <h2 className="text-4xl md:text-6xl font-serif text-tlg-midnight">Operating Hubs</h2>
              <p className="text-gray-500 font-light max-w-sm mt-6 md:mt-0">Select your nearest regional headquarters to initiate a strategic partnership.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              
              {/* Hub 1: Dubai */}
              <div className="bg-white border border-tlg-stone group hover:border-tlg-signatureGold transition-colors">
                <div className="h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[2s]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')" }}></div>
                  <div className="absolute inset-0 bg-tlg-midnight/20 group-hover:bg-tlg-midnight/10 transition-colors"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="text-[10px] uppercase font-bold tracking-widest mb-1 block">Middle East HQ</span>
                    <h3 className="text-3xl font-serif">Dubai, UAE</h3>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="text-tlg-signatureGold shrink-0 mt-1" size={18} />
                    <p className="text-sm font-light text-gray-500 leading-relaxed">
                      Level 42, Emirates Towers<br />
                      Sheikh Zayed Road<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <Mail className="text-tlg-signatureGold shrink-0" size={18} />
                    <a href="mailto:uae@triumphallifetimegroup.com" className="text-sm font-light text-tlg-midnight hover:text-tlg-signatureGold transition-colors">uae@triumphallifetimegroup.com</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-tlg-signatureGold shrink-0" size={18} />
                    <p className="text-sm font-light text-tlg-midnight">+1 647 774 0409</p>
                  </div>
                </div>
              </div>

              {/* Hub 2: Toronto */}
              <div className="bg-white border border-tlg-stone group hover:border-tlg-signatureGold transition-colors">
                <div className="h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[2s]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2070&auto=format&fit=crop')" }}></div>
                  <div className="absolute inset-0 bg-tlg-midnight/20 group-hover:bg-tlg-midnight/10 transition-colors"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="text-[10px] uppercase font-bold tracking-widest mb-1 block">North America HQ</span>
                    <h3 className="text-3xl font-serif">Toronto, CA</h3>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="text-tlg-signatureGold shrink-0 mt-1" size={18} />
                    <p className="text-sm font-light text-gray-500 leading-relaxed">
                      First Canadian Place<br />
                      100 King St W<br />
                      Toronto, ON M5X 1A9, Canada
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <Mail className="text-tlg-signatureGold shrink-0" size={18} />
                    <a href="mailto:ca@triumphallifetimegroup.com" className="text-sm font-light text-tlg-midnight hover:text-tlg-signatureGold transition-colors">ca@triumphallifetimegroup.com</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-tlg-signatureGold shrink-0" size={18} />
                    <p className="text-sm font-light text-tlg-midnight">+1 647 774 0409</p>
                  </div>
                </div>
              </div>

              {/* Hub 3: Lagos */}
              <div className="bg-white border border-tlg-stone group hover:border-tlg-signatureGold transition-colors">
                <div className="h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[2s]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598257006458-087169a1f08d?q=80&w=2070&auto=format&fit=crop')" }}></div>
                  <div className="absolute inset-0 bg-tlg-midnight/20 group-hover:bg-tlg-midnight/10 transition-colors"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <span className="text-[10px] uppercase font-bold tracking-widest mb-1 block">West Africa HQ</span>
                    <h3 className="text-3xl font-serif">Lagos, NG</h3>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="text-tlg-signatureGold shrink-0 mt-1" size={18} />
                    <p className="text-sm font-light text-gray-500 leading-relaxed">
                      Heritage Place<br />
                      21 Lugard Ave, Ikoyi<br />
                      Lagos, Nigeria
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <Mail className="text-tlg-signatureGold shrink-0" size={18} />
                    <a href="mailto:ng@triumphallifetimegroup.com" className="text-sm font-light text-tlg-midnight hover:text-tlg-signatureGold transition-colors">ng@triumphallifetimegroup.com</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-tlg-signatureGold shrink-0" size={18} />
                    <p className="text-sm font-light text-tlg-midnight">+1 647 774 0409</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Global Directory / Departments */}
        <section className="py-24 bg-white relative border-y border-tlg-stone">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <h2 className="text-3xl font-serif text-tlg-midnight mb-12 text-center">Global Directory</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-tlg-signatureGold block mb-2">Corporate Advisory</span>
                <a href="mailto:advisory@triumphallifetimegroup.com" className="text-sm font-light text-tlg-midnight hover:text-tlg-signatureGold transition-colors">advisory@triumphallifetimegroup.com</a>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-tlg-signatureGold block mb-2">Real Estate Acquisitions</span>
                <a href="mailto:realestate@triumphallifetimegroup.com" className="text-sm font-light text-tlg-midnight hover:text-tlg-signatureGold transition-colors">realestate@triumphallifetimegroup.com</a>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-tlg-signatureGold block mb-2">Legal & Compliance</span>
                <a href="mailto:legal@triumphallifetimegroup.com" className="text-sm font-light text-tlg-midnight hover:text-tlg-signatureGold transition-colors">legal@triumphallifetimegroup.com</a>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-tlg-signatureGold block mb-2">Careers & HR</span>
                <a href="mailto:careers@triumphallifetimegroup.com" className="text-sm font-light text-tlg-midnight hover:text-tlg-signatureGold transition-colors">careers@triumphallifetimegroup.com</a>
              </div>
            </div>
          </div>
        </section>

        {/* Action Section / Booking Integration */}
        <section className="py-32 bg-tlg-midnight relative flex flex-col items-center justify-center text-center">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="max-w-3xl px-6 relative z-10">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6">Structured Engagement</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Schedule a Consultation</h2>
            <p className="text-white/70 font-light leading-relaxed mb-12 text-lg">
              To ensure the highest level of service, we require all new corporate and high-net-worth clients to submit an initial consultation request detailing their exact strategic requirements.
            </p>
            <Link href="/book" className="inline-flex items-center gap-4 bg-white text-tlg-midnight px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-tlg-signatureGold hover:text-white transition-colors">
              Access Booking Portal <ArrowRight size={14} />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
