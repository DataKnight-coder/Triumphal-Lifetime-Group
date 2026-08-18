import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function DigitalProducts() {
  return (
    <>
      <Header />
      <main className="bg-tlg-ivory">
        
        {/* Cinematic Hero */}
        <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-end overflow-hidden bg-tlg-midnight">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center animate-slow-zoom scale-105 opacity-60"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070&auto=format&fit=crop')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/60 to-tlg-midnight/20"></div>
          </div>
          
          <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10 pb-24 md:pb-32">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6 animate-reveal-up">Triumphal Lifetime Group</span>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tight mb-8 animate-reveal-up-delayed">
              Digital Products<br />
              <span className="italic font-light text-white/80">& Learning.</span>
            </h1>
            <div className="w-24 h-[1px] bg-tlg-signatureGold mb-8 animate-draw-line"></div>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl leading-relaxed animate-reveal-up-delayed">
              Scalable knowledge architecture. We develop premium digital assets and enterprise learning systems to upskill modern workforces.
            </p>
          </div>
        </section>

        {/* Philosophy / Authority Quote */}
        <section className="py-24 md:py-32 bg-white relative border-b border-tlg-stone">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <span className="text-gray-400 text-xs font-bold uppercase tracking-widest block mb-8">The Core Thesis</span>
            <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight leading-[1.3]">
              "Intellectual capital must be scalable. We transform specialized corporate knowledge into accessible, high-yield digital platforms that drive continuous growth."
            </h2>
          </div>
        </section>

        {/* Asymmetric Services Grid */}
        <section className="py-32 bg-tlg-ivory relative">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            
            <div className="flex flex-col md:flex-row justify-between items-end mb-20">
              <h2 className="text-4xl md:text-6xl font-serif text-tlg-midnight">Our Expertise</h2>
              <p className="text-gray-500 font-light max-w-sm mt-6 md:mt-0">Engineering robust e-learning environments, premium digital products, and corporate certification architectures.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
              
              {/* Feature Block 1 (Large) */}
              <div className="md:col-span-8 group relative overflow-hidden bg-white shadow-sm border border-tlg-stone">
                <div className="h-[400px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[1.5s]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')" }}></div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700"></div>
                </div>
                <div className="p-12">
                  <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-4 block">01</span>
                  <h3 className="text-3xl font-serif text-tlg-midnight mb-6">Enterprise Learning Systems (LMS)</h3>
                  <p className="text-gray-500 font-light leading-relaxed mb-8 max-w-2xl">
                    We design and deploy custom Learning Management Systems tailored to your corporate structure. Centralize training, track compliance, and automate onboarding for thousands of employees simultaneously.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-semibold text-tlg-midnight">
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-tlg-signatureGold"/> Custom LMS Deployment</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-tlg-signatureGold"/> Automated Onboarding</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-tlg-signatureGold"/> Compliance Tracking</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-tlg-signatureGold"/> Multi-Language Support</li>
                  </ul>
                </div>
              </div>

              {/* Feature Block 2 (Small) */}
              <div className="md:col-span-4 group relative overflow-hidden bg-tlg-midnight text-white shadow-sm flex flex-col">
                <div className="h-[300px] relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[1.5s] opacity-70 mix-blend-luminosity" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop')" }}></div>
                </div>
                <div className="p-10 flex-1 flex flex-col justify-center border-t border-white/10">
                  <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-4 block">02</span>
                  <h3 className="text-2xl font-serif mb-4">Premium E-Courses</h3>
                  <p className="text-white/70 font-light leading-relaxed text-sm">
                    High-production-value video courses and interactive modules focusing on leadership, operational efficiency, and global business strategies.
                  </p>
                </div>
              </div>

              {/* Feature Block 3 (Small) */}
              <div className="md:col-span-5 group relative overflow-hidden bg-white shadow-sm border border-tlg-stone flex flex-col">
                <div className="p-10 flex-1 flex flex-col justify-center">
                  <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-4 block">03</span>
                  <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Digital Product Store</h3>
                  <p className="text-gray-500 font-light leading-relaxed text-sm mb-6">
                    Direct access to specialized toolkits, corporate templates, HR manuals, and legal frameworks designed by our global advisory board.
                  </p>
                  <Link href="/store" className="text-xs uppercase tracking-widest font-bold text-tlg-midnight hover:text-tlg-signatureGold transition-colors flex items-center group-hover:translate-x-2">Explore Store <ArrowRight size={14} className="ml-2"/></Link>
                </div>
              </div>

              {/* Feature Block 4 (Medium) */}
              <div className="md:col-span-7 group relative overflow-hidden bg-white shadow-sm border border-tlg-stone flex items-center">
                <div className="w-1/2 h-full absolute right-0 top-0 overflow-hidden hidden md:block">
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-[1.5s]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')" }}></div>
                </div>
                <div className="w-full md:w-1/2 p-10 md:p-12 relative z-10 bg-white md:bg-white/95 backdrop-blur-sm h-full flex flex-col justify-center">
                  <span className="text-tlg-signatureGold text-[10px] uppercase font-bold tracking-widest mb-4 block">04</span>
                  <h3 className="text-2xl font-serif text-tlg-midnight mb-4">Corporate Certification</h3>
                  <p className="text-gray-500 font-light leading-relaxed text-sm">
                    We develop accredited certification frameworks, ensuring your workforce not only learns but possesses verifiable credentials that elevate your company's market authority.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Global Impact Metrics */}
        <section className="py-24 bg-tlg-midnight relative border-y border-tlg-midnight">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <h4 className="text-4xl md:text-5xl font-serif text-white mb-2">10k+</h4>
              <p className="text-[10px] uppercase tracking-widest text-tlg-signatureGold font-bold">Active Learners</p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-serif text-white mb-2">50+</h4>
              <p className="text-[10px] uppercase tracking-widest text-tlg-signatureGold font-bold">Premium Modules</p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-serif text-white mb-2">100%</h4>
              <p className="text-[10px] uppercase tracking-widest text-tlg-signatureGold font-bold">Digital Delivery</p>
            </div>
            <div>
              <h4 className="text-4xl md:text-5xl font-serif text-white mb-2">24/7</h4>
              <p className="text-[10px] uppercase tracking-widest text-tlg-signatureGold font-bold">Platform Uptime</p>
            </div>
          </div>
        </section>

        {/* Action Section */}
        <section className="py-32 bg-white relative flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl px-6">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6">Take The Next Step</span>
            <h2 className="text-4xl md:text-5xl font-serif text-tlg-midnight mb-8">Scale Your Corporate Knowledge</h2>
            <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
              Consult with our digital architects to deploy an enterprise-grade learning system, or access our premium toolkits immediately.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/store" className="inline-flex justify-center items-center gap-4 bg-tlg-midnight text-white px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-tlg-signatureGold transition-colors">
                Browse Digital Store <ArrowRight size={14} />
              </Link>
              <Link href="/book" className="inline-flex justify-center items-center gap-4 bg-transparent border border-tlg-stone text-tlg-midnight px-10 py-5 text-xs font-bold uppercase tracking-widest hover:border-tlg-signatureGold transition-colors">
                Book Consultation <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
