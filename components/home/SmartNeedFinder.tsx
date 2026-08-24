"use client";

import { useState } from "react";
import { ArrowRight, Briefcase, Users, Home as HomeIcon, GraduationCap, Globe, BookOpen, Heart, Laptop } from "lucide-react";
import Link from "next/link";
import { getRecommendation, NeedType, CountryCode } from "@/lib/routing/need-router";

type Step = 1 | 2 | 3;

export default function SmartNeedFinder() {
 const [step, setStep] = useState<Step>(1);
 const [need, setNeed] = useState<NeedType | "">("");
 const [location, setLocation] = useState<CountryCode | "">("");
 const [hoveredNeed, setHoveredNeed] = useState<NeedType | "">("");

 const needs: { id: NeedType; label: string; icon: React.ReactNode; desc: string }[] = [
 { id: "grow", label: "Grow My Business", desc: "Corporate strategy, planning & restructuring", icon: <Briefcase size={28} strokeWidth={1.5} /> },
 { id: "talent", label: "Hire or Develop Talent", desc: "Recruitment, HR systems & training", icon: <Users size={28} strokeWidth={1.5} /> },
 { id: "property", label: "Property & Real Estate", desc: "Buy, sell, rent, invest or develop", icon: <HomeIcon size={28} strokeWidth={1.5} /> },
 { id: "study", label: "Global Education", desc: "University placements & advisory", icon: <GraduationCap size={28} strokeWidth={1.5} /> },
 { id: "relocate", label: "Immigration & Mobility", desc: "Visas, permits and settlement", icon: <Globe size={28} strokeWidth={1.5} /> },
 { id: "tech", label: "Information Technology", desc: "Digital transformation & software", icon: <Laptop size={28} strokeWidth={1.5} /> },
 { id: "resources", label: "Digital Store", desc: "Courses, templates & masterclasses", icon: <BookOpen size={28} strokeWidth={1.5} /> },
 { id: "community", label: "Community Impact", desc: "Foundation, donations & support", icon: <Heart size={28} strokeWidth={1.5} /> },
 ];

 const locations: { id: CountryCode; label: string }[] = [
 { id: "ng", label: "Nigeria" },
 { id: "ae", label: "United Arab Emirates" },
 { id: "ca", label: "Canada" },
 { id: "other", label: "Other / Global" },
 ];

 const handleNeedSelect = (id: NeedType) => {
 setNeed(id);
 setStep(2);
 };

 const handleLocationSelect = (id: CountryCode) => {
 setLocation(id);
 setStep(3);
 };

 const recommendation = need && location ? getRecommendation(need, location) : null;

 return (
 <section id="need-finder" className="py-24 bg-tlg-ivory relative">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 
 <div className="text-center mb-16 animate-reveal-up">
 <p className="text-tlg-signatureGold font-semibold tracking-widest text-xs uppercase mb-4">Start Your Journey</p>
 <h2 className="text-4xl md:text-5xl font-serif text-tlg-midnight mb-6">What are you trying to achieve?</h2>
 <p className="text-lg text-gray-700 max-w-2xl mx-auto font-normal">Select an area of interest and we will guide you to the right expertise across our global ecosystem.</p>
 </div>

 <div className="bg-white border-y border-tlg-stone md:border md:rounded-sm shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] relative overflow-hidden min-h-[500px] flex flex-col">
 
 {/* Elegant Progress Indicator */}
 <div className="bg-tlg-midnight px-8 py-6 flex items-center justify-between border-b-4 border-tlg-signatureGold">
 <h3 className="text-white font-serif text-xl">
 {step === 1 ? "1. Select Objective" : step === 2 ? "2. Select Location" : "3. Your Recommendation"}
 </h3>
 <div className="flex space-x-3">
 {[1, 2, 3].map((s) => (
 <div key={s} className="flex items-center">
 <div className={`h-2 rounded-full transition-all duration-500 ${s === step ? 'w-8 bg-tlg-signatureGold' : s < step ? 'w-2 bg-tlg-signatureGold opacity-50' : 'w-2 bg-gray-700'}`}></div>
 </div>
 ))}
 </div>
 </div>

 <div className="flex-1 p-8 md:p-12 relative bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">

 {step === 1 && (
 <div className="animate-reveal-up grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
 {needs.map((n) => (
 <button
 key={n.id}
 onClick={() => handleNeedSelect(n.id)}
 onMouseEnter={() => setHoveredNeed(n.id)}
 onMouseLeave={() => setHoveredNeed("")}
 className="flex flex-col text-left p-8 bg-white border border-tlg-stone hover:border-tlg-signatureGold hover:shadow-xl transition-all duration-300 group h-[220px] relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tlg-signatureGold"
 >
 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tlg-signatureGold to-tlg-champagne transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
 
 <div className="text-tlg-midnight group-hover:text-tlg-signatureGold transition-colors duration-300 mb-6 transform group-hover:-translate-y-1">
 {n.icon}
 </div>
 <span className="text-lg font-serif text-tlg-midnight mb-2">{n.label}</span>
 <span className="text-xs text-gray-700 font-normal leading-relaxed">{n.desc}</span>
 
 <div className={`absolute bottom-6 right-6 text-tlg-signatureGold opacity-0 transform translate-x-2 transition-all duration-300 ${hoveredNeed === n.id ? 'opacity-100 translate-x-0' : ''}`}>
 <ArrowRight size={20} />
 </div>
 </button>
 ))}
 </div>
 )}

 {step === 2 && (
 <div className="animate-reveal-up max-w-4xl mx-auto h-full flex flex-col justify-center py-12">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {locations.map((l) => (
 <button
 key={l.id}
 onClick={() => handleLocationSelect(l.id)}
 className="p-8 bg-white border border-tlg-stone hover:border-tlg-emerald hover:shadow-xl transition-all duration-300 text-left group relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tlg-emerald"
 >
 <div className="absolute top-0 left-0 w-1 h-full bg-tlg-emerald transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
 <span className="text-2xl font-serif text-tlg-midnight block mb-2">{l.label}</span>
 <span className="text-sm text-gray-800 font-normal uppercase tracking-widest flex items-center">
 Select Market <ArrowRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
 </span>
 </button>
 ))}
 </div>
 <button onClick={() => setStep(1)} className="mt-12 text-sm text-gray-800 hover:text-tlg-charcoal font-medium flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tlg-signatureGold rounded px-4 py-2 mx-auto w-max transition-colors">
 <ArrowRight size={14} className="mr-2 rotate-180" /> Back to Objectives
 </button>
 </div>
 )}

 {step === 3 && recommendation && (
 <div className="animate-reveal-up h-full flex items-center justify-center py-8">
 <div className="max-w-2xl w-full bg-white p-12 border border-tlg-stone shadow-2xl relative">
 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-tlg-emerald text-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
 <ArrowRight size={28} />
 </div>
 
 <div className="text-center pt-6">
 <p className="text-xs text-tlg-emerald font-bold uppercase tracking-[0.2em] mb-4">Recommended Pathway</p>
 <h3 className="text-3xl md:text-4xl font-serif text-tlg-midnight mb-4">{recommendation.companyName}</h3>
 <p className="text-gray-700 mb-10 text-lg font-normal">
 Specialising in <span className="font-medium text-tlg-charcoal">{recommendation.serviceName}</span> across <span className="font-medium text-tlg-charcoal">{locations.find(l => l.id === location)?.label}</span>.
 </p>
 
 <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
 <Link href={recommendation.url} className="w-full sm:w-auto bg-tlg-midnight text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-tlg-emerald transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tlg-emerald text-center">
 Explore Company
 </Link>
 <Link href={recommendation.contactType === 'donate' ? '/contact' : '/book'} className="w-full sm:w-auto border border-tlg-stone text-tlg-charcoal px-8 py-4 text-sm font-bold tracking-widest uppercase hover:border-tlg-signatureGold hover:text-tlg-signatureGold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tlg-signatureGold text-center">
 {recommendation.contactType === 'book' ? 'Book Consultation' : recommendation.contactType === 'donate' ? 'Donate Now' : 'Enquire Now'}
 </Link>
 </div>
 </div>
 
 <button onClick={() => setStep(1)} className="absolute top-6 right-6 text-xs text-gray-800 hover:text-tlg-charcoal uppercase tracking-widest font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tlg-signatureGold rounded">
 Restart
 </button>
 </div>
 </div>
 )}

 </div>
 </div>
 </div>
 </section>
 );
}
