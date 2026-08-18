import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function BookConsultation() {
  return (
    <>
      <Header />
      <main className="bg-tlg-ivory">
        
        <section className="relative pt-48 pb-32 w-full bg-tlg-midnight">
          <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6 animate-reveal-up">Schedule</span>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tight mb-8 animate-reveal-up-delayed">
              Book <span className="italic font-light">Consultation</span>.
            </h1>
          </div>
        </section>

        <section className="py-32 bg-white relative border-t border-tlg-stone">
          <div className="max-w-[1000px] mx-auto px-6 md:px-12">
            
            <div className="mb-16">
              <h2 className="text-3xl font-serif text-tlg-midnight mb-6">Consultation Request Form</h2>
              <p className="text-gray-500 font-light leading-relaxed">
                Please complete the details below. This information will be sent securely to our central advisory team, and a specialist from the relevant division will contact you to confirm your appointment.
              </p>
            </div>

            <form action="mailto:consult@triumphallifetimegroup.com" method="POST" encType="text/plain" className="bg-tlg-ivory p-8 md:p-16 border border-tlg-stone shadow-sm">
              
              <div className="mb-12">
                <h3 className="text-xs uppercase tracking-widest font-bold text-tlg-signatureGold mb-8 border-b border-tlg-stone pb-4">1. Select Pathway</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest font-semibold text-tlg-midnight">Target Market / Country</label>
                    <select name="country" className="bg-transparent border-b border-tlg-stone py-3 outline-none focus:border-tlg-signatureGold transition-colors text-tlg-midnight cursor-pointer">
                      <option value="Global">Global / General Inquiry</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="UAE">United Arab Emirates</option>
                      <option value="Canada">Canada</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest font-semibold text-tlg-midnight">Relevant Company Division</label>
                    <select name="division" className="bg-transparent border-b border-tlg-stone py-3 outline-none focus:border-tlg-signatureGold transition-colors text-tlg-midnight cursor-pointer">
                      <option value="HR">HR & Business Consulting</option>
                      <option value="Real Estate">Real Estate Services</option>
                      <option value="Education">Education Advisory</option>
                      <option value="Immigration">Global Visa & Immigration</option>
                      <option value="Technology">Information Technology</option>
                      <option value="Foundation">Charity Foundation</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-xs uppercase tracking-widest font-bold text-tlg-signatureGold mb-8 border-b border-tlg-stone pb-4">2. Appointment Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest font-semibold text-tlg-midnight">Consultation Type</label>
                    <select name="type" className="bg-transparent border-b border-tlg-stone py-3 outline-none focus:border-tlg-signatureGold transition-colors text-tlg-midnight cursor-pointer">
                      <option value="Virtual (Zoom/Teams)">Virtual (Zoom/Teams)</option>
                      <option value="Phone Call">Phone Call</option>
                      <option value="In-Person (HQ)">In-Person (Office)</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest font-semibold text-tlg-midnight">Preferred Date</label>
                    <input type="date" name="preferred_date" className="bg-transparent border-b border-tlg-stone py-3 outline-none focus:border-tlg-signatureGold transition-colors text-gray-500 font-light" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest font-semibold text-tlg-midnight">Preferred Time</label>
                    <input type="time" name="preferred_time" className="bg-transparent border-b border-tlg-stone py-3 outline-none focus:border-tlg-signatureGold transition-colors text-gray-500 font-light" />
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-xs uppercase tracking-widest font-bold text-tlg-signatureGold mb-8 border-b border-tlg-stone pb-4">3. Client Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest font-semibold text-tlg-midnight">First Name</label>
                    <input type="text" name="first_name" required className="bg-transparent border-b border-tlg-stone py-3 outline-none focus:border-tlg-signatureGold transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest font-semibold text-tlg-midnight">Last Name</label>
                    <input type="text" name="last_name" required className="bg-transparent border-b border-tlg-stone py-3 outline-none focus:border-tlg-signatureGold transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest font-semibold text-tlg-midnight">Email Address</label>
                    <input type="email" name="email" required className="bg-transparent border-b border-tlg-stone py-3 outline-none focus:border-tlg-signatureGold transition-colors" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase tracking-widest font-semibold text-tlg-midnight">Phone / WhatsApp</label>
                    <input type="tel" name="phone" required className="bg-transparent border-b border-tlg-stone py-3 outline-none focus:border-tlg-signatureGold transition-colors" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-tlg-midnight">Briefly describe your requirements</label>
                  <textarea name="requirements" rows={4} className="bg-transparent border-b border-tlg-stone py-3 outline-none focus:border-tlg-signatureGold transition-colors resize-none"></textarea>
                </div>
              </div>

              <button type="submit" className="w-full bg-tlg-midnight text-white py-5 text-xs font-bold uppercase tracking-widest hover:bg-tlg-signatureGold transition-colors mt-4">
                Submit Consultation Request
              </button>
              <p className="text-[10px] text-gray-400 mt-6 text-center tracking-widest uppercase">
                By submitting this form, your request will be emailed securely to consult@triumphallifetimegroup.com
              </p>

            </form>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
