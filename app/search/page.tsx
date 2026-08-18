import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Search as SearchIcon, ArrowRight, Building2, Briefcase, GraduationCap, Plane } from "lucide-react";

export default function SearchHub() {
  return (
    <>
      <Header />
      <main className="bg-tlg-ivory min-h-screen flex flex-col">
        
        {/* Search Hero Interface */}
        <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 w-full flex flex-col bg-tlg-midnight">
          <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 relative z-10 flex-1 flex flex-col justify-center">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6 animate-reveal-up">Global Index</span>
            <h1 className="text-4xl md:text-6xl font-serif text-white leading-[1.1] mb-12 animate-reveal-up-delayed">
              What are you looking for?
            </h1>
            
            <form className="relative w-full max-w-4xl group animate-reveal-up-delayed">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <SearchIcon className="h-6 w-6 text-tlg-signatureGold" />
              </div>
              <input 
                type="text" 
                placeholder="Search for properties, visas, corporate advisory..." 
                className="w-full bg-white/5 border border-white/20 text-white placeholder-white/40 text-xl md:text-2xl py-6 pl-16 pr-8 focus:outline-none focus:border-tlg-signatureGold focus:bg-white/10 transition-all font-light"
                autoFocus
              />
              <button type="submit" className="absolute inset-y-0 right-0 px-8 bg-tlg-signatureGold text-tlg-midnight font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">
                Search
              </button>
            </form>
          </div>
        </section>

        {/* Suggested Categories */}
        <section className="py-24 bg-white relative flex-1">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            
            <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-10">Suggested Categories</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              
              <Link href="/companies/real-estate" className="group border border-tlg-stone p-8 hover:border-tlg-signatureGold transition-colors flex flex-col">
                <Building2 className="text-tlg-midnight mb-6 group-hover:text-tlg-signatureGold transition-colors" size={28} />
                <h3 className="text-xl font-serif text-tlg-midnight mb-2">Real Estate</h3>
                <p className="text-xs text-gray-500 font-light mb-6 flex-1">Off-plan, commercial leasing, property management.</p>
                <ArrowRight size={16} className="text-tlg-signatureGold group-hover:translate-x-2 transition-transform"/>
              </Link>

              <Link href="/companies/global-visa-immigration" className="group border border-tlg-stone p-8 hover:border-tlg-signatureGold transition-colors flex flex-col">
                <Plane className="text-tlg-midnight mb-6 group-hover:text-tlg-signatureGold transition-colors" size={28} />
                <h3 className="text-xl font-serif text-tlg-midnight mb-2">Immigration</h3>
                <p className="text-xs text-gray-500 font-light mb-6 flex-1">Golden Visas, Express Entry, second citizenship.</p>
                <ArrowRight size={16} className="text-tlg-signatureGold group-hover:translate-x-2 transition-transform"/>
              </Link>

              <Link href="/companies/hr-business-consulting" className="group border border-tlg-stone p-8 hover:border-tlg-signatureGold transition-colors flex flex-col">
                <Briefcase className="text-tlg-midnight mb-6 group-hover:text-tlg-signatureGold transition-colors" size={28} />
                <h3 className="text-xl font-serif text-tlg-midnight mb-2">Corporate</h3>
                <p className="text-xs text-gray-500 font-light mb-6 flex-1">Company formation, HR consulting, tax advisory.</p>
                <ArrowRight size={16} className="text-tlg-signatureGold group-hover:translate-x-2 transition-transform"/>
              </Link>

              <Link href="/companies/education-advisory" className="group border border-tlg-stone p-8 hover:border-tlg-signatureGold transition-colors flex flex-col">
                <GraduationCap className="text-tlg-midnight mb-6 group-hover:text-tlg-signatureGold transition-colors" size={28} />
                <h3 className="text-xl font-serif text-tlg-midnight mb-2">Education</h3>
                <p className="text-xs text-gray-500 font-light mb-6 flex-1">Ivy League admissions, study permits, profiling.</p>
                <ArrowRight size={16} className="text-tlg-signatureGold group-hover:translate-x-2 transition-transform"/>
              </Link>

            </div>

            {/* Popular Searches */}
            <div className="mt-20">
               <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Popular Search Terms</h2>
               <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 border border-tlg-stone text-sm text-gray-600 hover:border-tlg-midnight hover:text-tlg-midnight cursor-pointer transition-colors">Dubai Golden Visa</span>
                  <span className="px-4 py-2 border border-tlg-stone text-sm text-gray-600 hover:border-tlg-midnight hover:text-tlg-midnight cursor-pointer transition-colors">Canada Express Entry</span>
                  <span className="px-4 py-2 border border-tlg-stone text-sm text-gray-600 hover:border-tlg-midnight hover:text-tlg-midnight cursor-pointer transition-colors">Off-Plan Dubai</span>
                  <span className="px-4 py-2 border border-tlg-stone text-sm text-gray-600 hover:border-tlg-midnight hover:text-tlg-midnight cursor-pointer transition-colors">Company Registration UAE</span>
                  <span className="px-4 py-2 border border-tlg-stone text-sm text-gray-600 hover:border-tlg-midnight hover:text-tlg-midnight cursor-pointer transition-colors">Digital Marketing Course</span>
                  <span className="px-4 py-2 border border-tlg-stone text-sm text-gray-600 hover:border-tlg-midnight hover:text-tlg-midnight cursor-pointer transition-colors">Lagos Real Estate</span>
               </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
