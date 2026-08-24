import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Apply | Careers",
 description: "Submit your application to join Triumphal Lifetime Group.",
};

import Link from "next/link";
import { ArrowRight, Upload } from "lucide-react";

export default function ApplyPage() {
 return (
 <main className="bg-white pt-32 pb-24">
 <section className="relative pt-16 pb-24 border-b border-tlg-stone bg-tlg-ivory">
 <div className="max-w-[1000px] mx-auto px-6 md:px-12">
 <Link href="/careers" className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-gray-800 hover:text-tlg-midnight transition-colors mb-12">
 <ArrowRight size={14} className="mr-2 rotate-180" /> Back to Careers
 </Link>
 <div className="max-w-3xl animate-reveal-up">
 <span className="text-tlg-signatureGold text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Join Our Network</span>
 <h1 className="text-4xl md:text-6xl font-serif text-tlg-midnight leading-[1.1] mb-8">
 Submit Your Application.
 </h1>
 <p className="text-xl text-gray-800 font-normal leading-relaxed">
 We are always looking for exceptional talent to join our global divisions across the UAE, Canada, and Nigeria.
 </p>
 </div>
 </div>
 </section>

 <section className="py-24">
 <div className="max-w-[800px] mx-auto px-6 md:px-12">
 <form className="space-y-12 animate-reveal-up-delayed">
 
 {/* Division Selection */}
 <div className="space-y-6">
 <h3 className="text-xl font-serif text-tlg-midnight border-b border-tlg-stone pb-4">1. Role & Division</h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <label htmlFor="division" className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Target Division</label>
 <select id="division" className="w-full bg-tlg-ivory border border-tlg-stone px-4 py-4 focus:outline-none focus:border-tlg-signatureGold transition-colors text-tlg-midnight">
 <option value="">Select Division</option>
 <option value="hr">HR & Business Consulting</option>
 <option value="real-estate">Real Estate Advisory</option>
 <option value="education">Education Advisory</option>
 <option value="mobility">Global Mobility</option>
 <option value="digital">Digital Learning</option>
 <option value="tech">Information Technology</option>
 <option value="foundation">Charity Foundation</option>
 </select>
 </div>
 <div>
 <label htmlFor="role" className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Role/Position</label>
 <input type="text" id="role" className="w-full bg-tlg-ivory border border-tlg-stone px-4 py-4 focus:outline-none focus:border-tlg-signatureGold transition-colors text-tlg-midnight placeholder:text-gray-800" />
 </div>
 </div>
 </div>

 {/* Personal Details */}
 <div className="space-y-6">
 <h3 className="text-xl font-serif text-tlg-midnight border-b border-tlg-stone pb-4">2. Applicant Details</h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 <div>
 <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">First Name</label>
 <input type="text" id="firstName" className="w-full bg-tlg-ivory border border-tlg-stone px-4 py-4 focus:outline-none focus:border-tlg-signatureGold transition-colors text-tlg-midnight" />
 </div>
 <div>
 <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Last Name</label>
 <input type="text" id="lastName" className="w-full bg-tlg-ivory border border-tlg-stone px-4 py-4 focus:outline-none focus:border-tlg-signatureGold transition-colors text-tlg-midnight" />
 </div>
 <div>
 <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Email Address</label>
 <input type="email" id="email" className="w-full bg-tlg-ivory border border-tlg-stone px-4 py-4 focus:outline-none focus:border-tlg-signatureGold transition-colors text-tlg-midnight" />
 </div>
 <div>
 <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Phone Number</label>
 <input type="tel" id="phone" className="w-full bg-tlg-ivory border border-tlg-stone px-4 py-4 focus:outline-none focus:border-tlg-signatureGold transition-colors text-tlg-midnight" />
 </div>
 <div>
 <label htmlFor="country" className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Country of Residence</label>
 <input type="text" id="country" className="w-full bg-tlg-ivory border border-tlg-stone px-4 py-4 focus:outline-none focus:border-tlg-signatureGold transition-colors text-tlg-midnight" />
 </div>
 <div>
 <label htmlFor="linkedin" className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">LinkedIn Profile URL</label>
 <input type="url" id="linkedin" className="w-full bg-tlg-ivory border border-tlg-stone px-4 py-4 focus:outline-none focus:border-tlg-signatureGold transition-colors text-tlg-midnight" />
 </div>
 </div>
 </div>

 {/* Documents */}
 <div className="space-y-6">
 <h3 className="text-xl font-serif text-tlg-midnight border-b border-tlg-stone pb-4">3. Documentation</h3>
 <div className="space-y-6">
 <div>
 <label className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">CV / Resume (PDF)</label>
 <div className="w-full border-2 border-dashed border-tlg-stone bg-tlg-ivory hover:border-tlg-signatureGold transition-colors flex flex-col items-center justify-center py-12 cursor-pointer group">
 <Upload className="text-gray-800 group-hover:text-tlg-signatureGold transition-colors mb-4" />
 <span className="text-sm font-semibold text-tlg-midnight">Click to upload file</span>
 <span className="text-xs text-gray-700 mt-2">Maximum file size: 5MB</span>
 </div>
 </div>
 <div>
 <label htmlFor="coverLetter" className="block text-xs font-bold uppercase tracking-widest text-gray-700 mb-2">Cover Letter / Statement of Purpose</label>
 <textarea id="coverLetter" rows={6} className="w-full bg-tlg-ivory border border-tlg-stone px-4 py-4 focus:outline-none focus:border-tlg-signatureGold transition-colors text-tlg-midnight resize-none"></textarea>
 </div>
 </div>
 </div>

 <button type="submit" className="w-full bg-tlg-midnight text-white py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-tlg-signatureGold transition-colors">
 Submit Application
 </button>
 
 <p className="text-xs text-gray-800 text-center">
 By submitting this application, you agree to our <Link href="/privacy" className="underline hover:text-tlg-midnight">Privacy Policy</Link> regarding the processing of candidate data.
 </p>

 </form>
 </div>
 </section>
 </main>
 );
}
