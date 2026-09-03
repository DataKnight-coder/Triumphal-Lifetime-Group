import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { getGlobalSettings } from "@/lib/content/settings";

export const metadata: Metadata = {
 title: "Contact Us",
 description: "Direct your inquiry to the relevant regional office or operating division of Triumphal Lifetime Group.",
};

export default async function ContactPage() {
 const settings = await getGlobalSettings();
 const whatsapp = settings.whatsapp;
 const generalEmail = settings.general_email;
 const africaEmail = "africa@triumphallifetimegroup.com";
 const menaEmail = "mena@triumphallifetimegroup.com";
 const naEmail = "na@triumphallifetimegroup.com";

 return (
 <main className="bg-white min-h-screen">
 {/* Hero */}
 <section className="pt-40 pb-24 bg-tlg-midnight text-white">
 <div className="max-w-[1200px] mx-auto px-6 md:px-12">
 <span className="text-tlg-signatureGold text-[11px] font-bold uppercase tracking-[0.3em] mb-6 block">Get In Touch</span>
 <h1 className="text-5xl md:text-7xl font-serif leading-[1.05] mb-6 max-w-2xl">
 Let&rsquo;s Start a Conversation.
 </h1>
 <p className="text-white/90 font-normal text-lg max-w-xl leading-relaxed">
 Reach the team directly - by regional office, or send a general inquiry and we will route it to the right division.
 </p>
 </div>
 </section>

 {/* Regional Offices */}
 <section className="py-20 bg-tlg-ivory border-b border-tlg-stone">
 <div className="max-w-[1200px] mx-auto px-6 md:px-12">
 <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-800 mb-12">Regional Offices</p>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-tlg-stone border border-tlg-stone">

 {/* Nigeria */}
 <div className="p-10 hover:bg-white transition-colors group">
 <span className="text-[11px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-4 block">Nigeria</span>
 <h3 className="text-2xl font-serif text-tlg-midnight mb-1">Abuja</h3>
 <p className="text-sm text-gray-800 font-normal mb-6">Serving Africa</p>
 <div className="space-y-3">
 <a href={`mailto:${africaEmail}`} className="flex items-center gap-3 text-sm text-gray-800 hover:text-tlg-signatureGold transition-colors font-normal">
 <Mail size={14} className="shrink-0 text-tlg-signatureGold" />
 {africaEmail}
 </a>
 {whatsapp && <a href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-gray-800 hover:text-tlg-signatureGold transition-colors font-normal">
 <Phone size={14} className="shrink-0 text-tlg-signatureGold" />
 WhatsApp Us
 </a>}
 </div>
 </div>

 {/* UAE */}
 <div className="p-10 hover:bg-white transition-colors group">
 <span className="text-[11px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-4 block">United Arab Emirates</span>
 <h3 className="text-2xl font-serif text-tlg-midnight mb-1">Dubai</h3>
 <p className="text-sm text-gray-800 font-normal mb-6">Serving the Middle East</p>
 <div className="space-y-3">
 <a href={`mailto:${menaEmail}`} className="flex items-center gap-3 text-sm text-gray-800 hover:text-tlg-signatureGold transition-colors font-normal">
 <Mail size={14} className="shrink-0 text-tlg-signatureGold" />
 {menaEmail}
 </a>
 </div>
 </div>

 {/* Canada */}
 <div className="p-10 hover:bg-white transition-colors group">
 <span className="text-[11px] font-bold uppercase tracking-widest text-tlg-signatureGold mb-4 block">Canada</span>
 <h3 className="text-2xl font-serif text-tlg-midnight mb-1">Toronto</h3>
 <p className="text-sm text-gray-800 font-normal mb-6">Serving North America</p>
 <div className="space-y-3">
 <a href={`mailto:${naEmail}`} className="flex items-center gap-3 text-sm text-gray-800 hover:text-tlg-signatureGold transition-colors font-normal">
 <Mail size={14} className="shrink-0 text-tlg-signatureGold" />
 {naEmail}
 </a>
 </div>
 </div>

 </div>
 </div>
 </section>

 {/* Inquiry Form */}
 <section className="py-24">
 <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

 {/* Left - Context */}
 <div className="lg:col-span-2">
 <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-6 block">General Inquiry</span>
 <h2 className="text-3xl md:text-4xl font-serif text-tlg-midnight mb-6 leading-[1.2]">Send Us a Message</h2>
 <p className="text-gray-700 font-normal leading-relaxed mb-10 text-sm">
 For a structured consultation, use the <Link href="?book=true" className="underline underline-offset-4 hover:text-tlg-signatureGold transition-colors">Book a Consultation</Link> page. For all other inquiries, use this form and we will respond within two business days.
 </p>
 <div className="space-y-4 text-sm text-gray-700 font-normal">
 {generalEmail && <p className="flex items-center gap-3"><Mail size={14} className="text-tlg-signatureGold shrink-0" /> {generalEmail}</p>}
 </div>
 </div>

 {/* Right - Form */}
 <div className="lg:col-span-3 bg-tlg-ivory border border-tlg-stone p-8 md:p-12">
 <form className="space-y-6">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <label className="block text-xs font-bold uppercase tracking-widest text-tlg-midnight mb-2">Full Name</label>
 <input type="text" className="w-full border border-tlg-stone p-3 bg-white focus:outline-none focus:border-tlg-midnight transition-colors text-sm" />
 </div>
 <div>
 <label className="block text-xs font-bold uppercase tracking-widest text-tlg-midnight mb-2">Email Address</label>
 <input type="email" className="w-full border border-tlg-stone p-3 bg-white focus:outline-none focus:border-tlg-midnight transition-colors text-sm" />
 </div>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <label className="block text-xs font-bold uppercase tracking-widest text-tlg-midnight mb-2">Phone (Optional)</label>
 <input type="tel" className="w-full border border-tlg-stone p-3 bg-white focus:outline-none focus:border-tlg-midnight transition-colors text-sm" />
 </div>
 <div>
 <label className="block text-xs font-bold uppercase tracking-widest text-tlg-midnight mb-2">Country</label>
 <input type="text" className="w-full border border-tlg-stone p-3 bg-white focus:outline-none focus:border-tlg-midnight transition-colors text-sm" />
 </div>
 </div>
 <div>
 <label className="block text-xs font-bold uppercase tracking-widest text-tlg-midnight mb-2">Division / Subject</label>
 <select className="w-full border border-tlg-stone p-3 bg-white focus:outline-none focus:border-tlg-midnight transition-colors text-gray-800 text-sm">
 <option>HR &amp; Business Consulting</option>
 <option>Real Estate Advisory</option>
 <option>Global Mobility</option>
 <option>Education Advisory</option>
 <option>Information Technology</option>
 <option>Digital Products &amp; Learning</option>
 <option>Social Impact / Foundation</option>
 <option>General / Other</option>
 </select>
 </div>
 <div>
 <label className="block text-xs font-bold uppercase tracking-widest text-tlg-midnight mb-2">Message</label>
 <textarea rows={5} className="w-full border border-tlg-stone p-3 bg-white focus:outline-none focus:border-tlg-midnight transition-colors text-sm text-gray-800"></textarea>
 </div>
 <div className="flex items-start gap-3">
 <input type="checkbox" id="privacy" className="mt-1 accent-tlg-midnight" />
 <label htmlFor="privacy" className="text-xs text-gray-800 font-normal leading-relaxed">
 I agree to the processing of my personal data in accordance with the <Link href="/privacy" className="underline underline-offset-4 hover:text-tlg-signatureGold transition-colors">Privacy Policy</Link>.
 </label>
 </div>
 <button type="button" className="w-full bg-tlg-midnight text-white p-4 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-tlg-signatureGold transition-colors">
 Send Message
 </button>
 <p className="text-center text-xs text-gray-800 italic">We aim to respond within two business days.</p>
 </form>
 </div>

 </div>
 </section>
 </main>
 );
}
