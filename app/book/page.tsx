import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Clock, Globe, Video, ArrowRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description: "Request a structured consultation with a senior advisor from Triumphal Lifetime Group.",
};

export default function BookConsultationPage() {
  const steps = [
    { num: "01", title: "Submit Your Request", body: "Complete the form with your preferred date, time, and the division most relevant to your needs." },
    { num: "02", title: "We Review & Confirm", body: "A member of our team will review your request and confirm your session within two business days." },
    { num: "03", title: "Your Consultation", body: "Meet directly with an advisor by video, phone, or in person at a participating office." },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-24 bg-tlg-midnight text-white relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
        
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <Reveal>
              <span className="text-tlg-signatureGold text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">Advisory Consultation</span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05] mb-6">
                Book a<br />Consultation.
              </h1>
              <p className="text-white/60 font-light text-lg leading-relaxed max-w-md">
                Speak directly with a senior advisor across HR, Real Estate, Global Mobility, Education, Technology, or Digital Learning.
              </p>
            </Reveal>
          </div>
          <div className="space-y-6">
            {steps.map((s, idx) => (
              <Reveal key={s.num} delay={0.1 * idx}>
                <div className="flex gap-6 items-start bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <span className="text-tlg-signatureGold font-serif text-3xl shrink-0 leading-none">{s.num}</span>
                  <div>
                    <p className="text-white font-semibold text-base mb-2 tracking-wide">{s.title}</p>
                    <p className="text-white/60 font-light text-sm leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Types */}
      <section className="py-16 bg-tlg-ivory">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={0.1}>
              <div className="p-8 flex gap-5 items-start bg-white rounded-2xl shadow-sm border border-tlg-stone hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-tlg-ivory flex items-center justify-center shrink-0 group-hover:bg-tlg-signatureGold/10 transition-colors">
                  <Video size={20} className="text-tlg-signatureGold" />
                </div>
                <div>
                  <p className="font-semibold text-tlg-midnight text-base mb-2">Video Call</p>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">Zoom or Microsoft Teams, at your convenience from anywhere.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="p-8 flex gap-5 items-start bg-white rounded-2xl shadow-sm border border-tlg-stone hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-tlg-ivory flex items-center justify-center shrink-0 group-hover:bg-tlg-signatureGold/10 transition-colors">
                  <Globe size={20} className="text-tlg-signatureGold" />
                </div>
                <div>
                  <p className="font-semibold text-tlg-midnight text-base mb-2">Phone Call</p>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">A direct call with one of our advisors at your preferred time.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="p-8 flex gap-5 items-start bg-white rounded-2xl shadow-sm border border-tlg-stone hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-full bg-tlg-ivory flex items-center justify-center shrink-0 group-hover:bg-tlg-signatureGold/10 transition-colors">
                  <CheckCircle size={20} className="text-tlg-signatureGold" />
                </div>
                <div>
                  <p className="font-semibold text-tlg-midnight text-base mb-2">In-Person</p>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">Available at participating offices in Lagos, Dubai, and Toronto.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-tlg-ivory relative">
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="max-w-[900px] mx-auto px-6 md:px-12 relative z-10">
          <Reveal>
            <div className="text-center mb-14">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Request Form</span>
              <h2 className="text-3xl md:text-5xl font-serif text-tlg-midnight">Consultation Request</h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-white shadow-xl rounded-2xl border border-gray-100 overflow-hidden relative">
              {/* Decorative top accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tlg-signatureGold to-tlg-champagne"></div>
              
              <div className="p-8 md:p-14">
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">Full Name <span className="text-tlg-signatureGold">*</span></label>
                      <input type="text" className="w-full border-b border-gray-200 py-3 bg-transparent focus:outline-none focus:border-tlg-signatureGold transition-colors text-base text-tlg-midnight" placeholder="Jane Doe" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">Email Address <span className="text-tlg-signatureGold">*</span></label>
                      <input type="email" className="w-full border-b border-gray-200 py-3 bg-transparent focus:outline-none focus:border-tlg-signatureGold transition-colors text-base text-tlg-midnight" placeholder="jane@example.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">Phone Number</label>
                      <input type="tel" className="w-full border-b border-gray-200 py-3 bg-transparent focus:outline-none focus:border-tlg-signatureGold transition-colors text-base text-tlg-midnight" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">Country of Residence</label>
                      <input type="text" className="w-full border-b border-gray-200 py-3 bg-transparent focus:outline-none focus:border-tlg-signatureGold transition-colors text-base text-tlg-midnight" placeholder="e.g. Canada" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">Division / Service Needed <span className="text-tlg-signatureGold">*</span></label>
                    <select className="w-full border-b border-gray-200 py-3 bg-transparent focus:outline-none focus:border-tlg-signatureGold transition-colors text-gray-700 text-base appearance-none cursor-pointer">
                      <option>HR &amp; Business Consulting</option>
                      <option>Real Estate Advisory</option>
                      <option>Global Mobility</option>
                      <option>Education Advisory</option>
                      <option>Information Technology</option>
                      <option>Digital Products &amp; Learning</option>
                      <option>Charity Foundation / Grants</option>
                      <option>General / I am not sure yet</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">Preferred Date</label>
                      <input type="date" className="w-full border-b border-gray-200 py-3 bg-transparent focus:outline-none focus:border-tlg-signatureGold transition-colors text-gray-700 text-base" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">Preferred Time</label>
                      <input type="time" className="w-full border-b border-gray-200 py-3 bg-transparent focus:outline-none focus:border-tlg-signatureGold transition-colors text-gray-700 text-base" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">Time Zone</label>
                      <select className="w-full border-b border-gray-200 py-3 bg-transparent focus:outline-none focus:border-tlg-signatureGold transition-colors text-gray-700 text-base appearance-none cursor-pointer">
                        <option>GMT / UTC</option>
                        <option>EST / EDT (Toronto)</option>
                        <option>WAT (Lagos)</option>
                        <option>GST (Dubai)</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">Preferred Format</label>
                    <div className="flex flex-col sm:flex-row gap-4 mb-3">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="format" className="w-4 h-4 accent-tlg-signatureGold" defaultChecked />
                        <span className="text-sm text-tlg-midnight group-hover:text-tlg-signatureGold transition-colors">Video Call</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="format" className="w-4 h-4 accent-tlg-signatureGold" />
                        <span className="text-sm text-tlg-midnight group-hover:text-tlg-signatureGold transition-colors">Phone Call</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="format" className="w-4 h-4 accent-tlg-signatureGold" />
                        <span className="text-sm text-tlg-midnight group-hover:text-tlg-signatureGold transition-colors">In-Person</span>
                      </label>
                    </div>
                    <p className="text-xs text-tlg-signatureGold font-semibold italic mt-2">
                      * For in-person meetings: Available by appointment only. Location details provided after confirmation.
                    </p>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">Brief Message</label>
                    <textarea rows={4} placeholder="Briefly describe what you would like to discuss..." className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50 focus:bg-white focus:outline-none focus:border-tlg-signatureGold focus:ring-1 focus:ring-tlg-signatureGold transition-all text-base text-tlg-midnight placeholder:text-gray-400 resize-none"></textarea>
                  </div>
                  
                  <div className="pt-8">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 mb-8">
                      <input type="checkbox" id="consent-book" className="mt-1 w-4 h-4 accent-tlg-midnight shrink-0 cursor-pointer" />
                      <label htmlFor="consent-book" className="text-xs text-gray-600 font-light leading-relaxed cursor-pointer">
                        I consent to Triumphal Lifetime Group processing my personal information in accordance with the{" "}
                        <Link href="/privacy" className="font-semibold text-tlg-midnight hover:text-tlg-signatureGold transition-colors">Privacy Policy</Link>{" "}
                        to facilitate this consultation request.
                      </label>
                    </div>
                    
                    <button type="button" className="w-full group relative overflow-hidden bg-tlg-midnight text-white p-5 rounded-xl hover:bg-tlg-signatureGold transition-all duration-300 shadow-lg shadow-tlg-midnight/20 hover:shadow-tlg-signatureGold/20">
                      <div className="relative z-10 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em]">
                        <span>Submit Request</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </button>
                    
                    <div className="flex items-center justify-center gap-2 mt-6">
                      <Clock size={14} className="text-gray-400" />
                      <p className="text-center text-xs text-gray-500 font-medium">Our team will confirm your session within two business days.</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
