import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Clock, Globe, Video } from "lucide-react";

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
      <section className="pt-40 pb-24 bg-tlg-midnight text-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-tlg-signatureGold text-[10px] font-bold uppercase tracking-[0.3em] mb-6 block">Advisory Consultation</span>
            <h1 className="text-5xl md:text-6xl font-serif leading-[1.05] mb-6">
              Book a Consultation.
            </h1>
            <p className="text-white/60 font-light text-lg leading-relaxed">
              Speak directly with a senior advisor across HR, Real Estate, Global Mobility, Education, Technology, or Digital Learning.
            </p>
          </div>
          <div className="space-y-5">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-5 items-start">
                <span className="text-tlg-signatureGold font-serif text-2xl shrink-0 leading-none mt-1">{s.num}</span>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">{s.title}</p>
                  <p className="text-white/50 font-light text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Types */}
      <section className="py-16 bg-tlg-ivory border-b border-tlg-stone">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-tlg-stone border border-tlg-stone">
            <div className="p-8 flex gap-4 items-start">
              <Video size={18} className="text-tlg-signatureGold shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-tlg-midnight text-sm mb-1">Video Call</p>
                <p className="text-gray-500 font-light text-xs leading-relaxed">Zoom or Microsoft Teams, at your convenience from anywhere.</p>
              </div>
            </div>
            <div className="p-8 flex gap-4 items-start">
              <Globe size={18} className="text-tlg-signatureGold shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-tlg-midnight text-sm mb-1">Phone Call</p>
                <p className="text-gray-500 font-light text-xs leading-relaxed">A direct call with one of our advisors at your preferred time.</p>
              </div>
            </div>
            <div className="p-8 flex gap-4 items-start">
              <CheckCircle size={18} className="text-tlg-signatureGold shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-tlg-midnight text-sm mb-1">In-Person</p>
                <p className="text-gray-500 font-light text-xs leading-relaxed">Available at participating offices in Lagos, Dubai, and Toronto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-4 block">Request Form</span>
            <h2 className="text-3xl md:text-4xl font-serif text-tlg-midnight">Consultation Request</h2>
          </div>

          <div className="bg-tlg-ivory border border-tlg-stone p-8 md:p-14">
            <form className="space-y-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-tlg-midnight mb-2">Full Name</label>
                  <input type="text" className="w-full border border-tlg-stone p-3 bg-white focus:outline-none focus:border-tlg-midnight transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-tlg-midnight mb-2">Email Address</label>
                  <input type="email" className="w-full border border-tlg-stone p-3 bg-white focus:outline-none focus:border-tlg-midnight transition-colors text-sm" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-tlg-midnight mb-2">Phone Number</label>
                  <input type="tel" className="w-full border border-tlg-stone p-3 bg-white focus:outline-none focus:border-tlg-midnight transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-tlg-midnight mb-2">Country of Residence</label>
                  <input type="text" className="w-full border border-tlg-stone p-3 bg-white focus:outline-none focus:border-tlg-midnight transition-colors text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-tlg-midnight mb-2">Division / Area of Interest</label>
                <select className="w-full border border-tlg-stone p-3 bg-white focus:outline-none focus:border-tlg-midnight transition-colors text-gray-600 text-sm">
                  <option>HR &amp; Business Consulting</option>
                  <option>Real Estate Advisory</option>
                  <option>Global Mobility</option>
                  <option>Education Advisory</option>
                  <option>Information Technology</option>
                  <option>Digital Products &amp; Learning</option>
                  <option>General / I am not sure yet</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-tlg-midnight mb-2">Preferred Date</label>
                  <input type="date" className="w-full border border-tlg-stone p-3 bg-white focus:outline-none focus:border-tlg-midnight transition-colors text-gray-600 text-sm" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-tlg-midnight mb-2">Preferred Time</label>
                  <input type="time" className="w-full border border-tlg-stone p-3 bg-white focus:outline-none focus:border-tlg-midnight transition-colors text-gray-600 text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-tlg-midnight mb-2">Preferred Format</label>
                <select className="w-full border border-tlg-stone p-3 bg-white focus:outline-none focus:border-tlg-midnight transition-colors text-gray-600 text-sm">
                  <option>Video Call (Zoom or Teams)</option>
                  <option>Phone Call</option>
                  <option>In-Person (Lagos / Dubai / Toronto)</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-tlg-midnight mb-2">Brief Message</label>
                <textarea rows={4} placeholder="Briefly describe what you would like to discuss..." className="w-full border border-tlg-stone p-3 bg-white focus:outline-none focus:border-tlg-midnight transition-colors text-sm text-gray-600 placeholder:text-gray-300"></textarea>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" id="consent-book" className="mt-1 accent-tlg-midnight" />
                <label htmlFor="consent-book" className="text-xs text-gray-500 font-light leading-relaxed">
                  I consent to Triumphal Lifetime Group processing my personal information in accordance with the{" "}
                  <Link href="/privacy" className="underline underline-offset-4 hover:text-tlg-signatureGold transition-colors">Privacy Policy</Link>{" "}
                  to facilitate this consultation request.
                </label>
              </div>
              <div className="pt-4 border-t border-tlg-stone">
                <button type="button" className="w-full bg-tlg-midnight text-white p-5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-tlg-signatureGold transition-colors">
                  Request Consultation
                </button>
                <div className="flex items-center justify-center gap-2 mt-5">
                  <Clock size={13} className="text-gray-400" />
                  <p className="text-center text-xs text-gray-400 italic">Our team will confirm your session within two business days.</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
