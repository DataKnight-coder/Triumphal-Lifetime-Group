"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, Globe, Building, Briefcase, GraduationCap, Map, RotateCcw } from "lucide-react";

export default function SmartNeedFinder() {
  const [step, setStep] = useState(1);
  const [need, setNeed] = useState("");
  const [country, setCountry] = useState("");
  const [goal, setGoal] = useState("");

  const handleReset = () => {
    setStep(1);
    setNeed("");
    setCountry("");
    setGoal("");
  };

  const renderRecommendation = () => {
    // Simple logic engine based on selections
    let recommendedCompany = "HR & Business Consulting";
    let link = "/companies/hr-business-consulting";
    let desc = "Strategic workforce solutions and corporate advisory.";

    if (need === "Real Estate" || goal === "Invest") {
      recommendedCompany = "Real Estate Services";
      link = "/companies/real-estate";
      desc = "Premium property acquisition, portfolio management, and investment advisory.";
    } else if (need === "Education") {
      recommendedCompany = "Education Advisory";
      link = "/companies/education-advisory";
      desc = "Global study pathways, university placements, and career mapping.";
    } else if (need === "Relocation") {
      recommendedCompany = "Global Visa & Immigration";
      link = "/companies/global-visa-immigration";
      desc = "Seamless cross-border mobility, residency processing, and compliance.";
    } else if (goal === "Tech") {
      recommendedCompany = "Information Technology";
      link = "/companies/information-technology";
      desc = "Digital transformation, robust infrastructure, and custom systems.";
    }

    return (
      <div className="animate-reveal-up text-center max-w-2xl mx-auto">
        <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-4">Recommended Pathway</span>
        <h3 className="text-4xl md:text-5xl font-serif text-tlg-midnight mb-6">{recommendedCompany}</h3>
        <p className="text-xl text-gray-500 font-light mb-12">
          Based on your goal to <strong className="font-semibold text-tlg-midnight">{goal || need}</strong> in <strong className="font-semibold text-tlg-midnight">{country || "our global markets"}</strong>, this division is best equipped to execute your vision. {desc}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href={link} className="inline-flex items-center justify-center gap-4 bg-tlg-midnight text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-tlg-signatureGold transition-colors">
            Explore Service <ArrowRight size={14} />
          </Link>
          <button onClick={handleReset} className="inline-flex items-center justify-center gap-4 bg-transparent border border-tlg-stone text-tlg-midnight px-8 py-4 text-xs font-bold uppercase tracking-widest hover:border-tlg-signatureGold transition-colors">
            Start Over <RotateCcw size={14} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header />
      <main className="bg-tlg-ivory min-h-screen">
        
        <section className="relative pt-48 pb-16 w-full bg-tlg-midnight text-center">
          <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6 animate-reveal-up">Triumphal Intelligence</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-[0.9] tracking-tight mb-8 animate-reveal-up-delayed">
              Smart Need <span className="italic font-light text-tlg-signatureGold">Finder</span>.
            </h1>
          </div>
        </section>

        <section className="py-24 bg-white min-h-[600px] flex items-center justify-center border-t border-tlg-stone">
          <div className="max-w-[1000px] w-full mx-auto px-6">
            
            {/* Step Indicators */}
            <div className="flex justify-center items-center gap-4 mb-24">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold border transition-colors duration-500 ${step === i ? 'border-tlg-signatureGold bg-tlg-signatureGold text-white' : step > i ? 'border-tlg-midnight bg-tlg-midnight text-white' : 'border-tlg-stone text-gray-400'}`}>
                    {step > i ? <ArrowRight size={14}/> : i}
                  </div>
                  {i < 4 && <div className={`w-16 h-[1px] transition-colors duration-500 ${step > i ? 'bg-tlg-midnight' : 'bg-tlg-stone'}`}></div>}
                </div>
              ))}
            </div>

            {/* STEP 1: Core Need */}
            {step === 1 && (
              <div className="animate-reveal-up text-center">
                <h2 className="text-3xl font-serif text-tlg-midnight mb-12">What is your primary objective?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <button onClick={() => { setNeed("Corporate"); setStep(2); }} className="bg-tlg-ivory border border-tlg-stone p-8 hover:border-tlg-signatureGold hover:shadow-xl transition-all duration-300 flex flex-col items-center group">
                    <Briefcase size={32} className="text-tlg-midnight mb-6 group-hover:text-tlg-signatureGold transition-colors"/>
                    <span className="font-serif text-lg text-tlg-midnight">Corporate Growth</span>
                  </button>
                  <button onClick={() => { setNeed("Real Estate"); setStep(2); }} className="bg-tlg-ivory border border-tlg-stone p-8 hover:border-tlg-signatureGold hover:shadow-xl transition-all duration-300 flex flex-col items-center group">
                    <Building size={32} className="text-tlg-midnight mb-6 group-hover:text-tlg-signatureGold transition-colors"/>
                    <span className="font-serif text-lg text-tlg-midnight">Real Estate</span>
                  </button>
                  <button onClick={() => { setNeed("Education"); setStep(2); }} className="bg-tlg-ivory border border-tlg-stone p-8 hover:border-tlg-signatureGold hover:shadow-xl transition-all duration-300 flex flex-col items-center group">
                    <GraduationCap size={32} className="text-tlg-midnight mb-6 group-hover:text-tlg-signatureGold transition-colors"/>
                    <span className="font-serif text-lg text-tlg-midnight">Education & Study</span>
                  </button>
                  <button onClick={() => { setNeed("Relocation"); setStep(2); }} className="bg-tlg-ivory border border-tlg-stone p-8 hover:border-tlg-signatureGold hover:shadow-xl transition-all duration-300 flex flex-col items-center group">
                    <Globe size={32} className="text-tlg-midnight mb-6 group-hover:text-tlg-signatureGold transition-colors"/>
                    <span className="font-serif text-lg text-tlg-midnight">Global Mobility</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Country Selection */}
            {step === 2 && (
              <div className="animate-reveal-up text-center">
                <h2 className="text-3xl font-serif text-tlg-midnight mb-12">Which market are you targeting?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <button onClick={() => { setCountry("Nigeria"); setStep(3); }} className="bg-tlg-ivory border border-tlg-stone p-12 hover:border-tlg-signatureGold hover:shadow-xl transition-all duration-300 flex flex-col items-center group">
                    <Map size={32} className="text-tlg-midnight mb-6 group-hover:text-tlg-signatureGold transition-colors"/>
                    <span className="font-serif text-2xl text-tlg-midnight">Nigeria</span>
                  </button>
                  <button onClick={() => { setCountry("UAE"); setStep(3); }} className="bg-tlg-ivory border border-tlg-stone p-12 hover:border-tlg-signatureGold hover:shadow-xl transition-all duration-300 flex flex-col items-center group">
                    <Map size={32} className="text-tlg-midnight mb-6 group-hover:text-tlg-signatureGold transition-colors"/>
                    <span className="font-serif text-2xl text-tlg-midnight">UAE</span>
                  </button>
                  <button onClick={() => { setCountry("Canada"); setStep(3); }} className="bg-tlg-ivory border border-tlg-stone p-12 hover:border-tlg-signatureGold hover:shadow-xl transition-all duration-300 flex flex-col items-center group">
                    <Map size={32} className="text-tlg-midnight mb-6 group-hover:text-tlg-signatureGold transition-colors"/>
                    <span className="font-serif text-2xl text-tlg-midnight">Canada</span>
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Goal Question based on Need */}
            {step === 3 && (
              <div className="animate-reveal-up text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-serif text-tlg-midnight mb-12">Refine your requirement</h2>
                
                {need === "Corporate" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button onClick={() => { setGoal("Setup Business"); setStep(4); }} className="border border-tlg-stone p-6 hover:border-tlg-signatureGold transition-colors text-lg text-tlg-midnight">Establish a new company</button>
                    <button onClick={() => { setGoal("Hire Team"); setStep(4); }} className="border border-tlg-stone p-6 hover:border-tlg-signatureGold transition-colors text-lg text-tlg-midnight">Recruit & manage talent</button>
                    <button onClick={() => { setGoal("Tech"); setStep(4); }} className="border border-tlg-stone p-6 hover:border-tlg-signatureGold transition-colors text-lg text-tlg-midnight">Upgrade IT systems</button>
                    <button onClick={() => { setGoal("Audit HR"); setStep(4); }} className="border border-tlg-stone p-6 hover:border-tlg-signatureGold transition-colors text-lg text-tlg-midnight">Audit current HR policies</button>
                  </div>
                )}

                {(need === "Real Estate" || need === "Education" || need === "Relocation") && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button onClick={() => { setGoal("Invest"); setStep(4); }} className="border border-tlg-stone p-6 hover:border-tlg-signatureGold transition-colors text-lg text-tlg-midnight">Long-term investment</button>
                    <button onClick={() => { setGoal("Personal"); setStep(4); }} className="border border-tlg-stone p-6 hover:border-tlg-signatureGold transition-colors text-lg text-tlg-midnight">Personal use / Family</button>
                  </div>
                )}
              </div>
            )}

            {/* STEP 4: Results */}
            {step === 4 && renderRecommendation()}

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
