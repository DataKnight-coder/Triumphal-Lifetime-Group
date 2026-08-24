"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { m, AnimatePresence } from "motion/react";
import { X, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { triggerHaptic } from "@/lib/utils/haptics";

function BookingModalContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isOpen = searchParams.get("book") === "true";
  const preselectedService = searchParams.get("service") || "";

  const [activeTab, setActiveTab] = useState<"direct" | "finder">("direct");
  
  // Direct Booking State
  const [formData, setFormData] = useState({ name: "", email: "", service: preselectedService, message: "" });
  const [submitted, setSubmitted] = useState(false);

  // Smart Needs Finder State
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  
  const questions = [
    {
      id: 1,
      title: "What is your primary objective?",
      options: [
        { label: "Expand Business Internationally", value: "global-mobility" },
        { label: "Optimize Workforce & Operations", value: "hr-consulting" },
        { label: "Invest in Premium Property", value: "real-estate" },
        { label: "Upgrade Digital Infrastructure", value: "technology" },
      ]
    },
    {
      id: 2,
      title: "What is your timeline?",
      options: [
        { label: "Immediately (0-3 months)", value: "immediate" },
        { label: "Short term (3-6 months)", value: "short" },
        { label: "Planning phase (6+ months)", value: "long" },
      ]
    }
  ];

  const closeModal = () => {
    triggerHaptic();
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete("book");
    newParams.delete("service");
    // Preserve existing path, just remove book params
    const currentPath = window.location.pathname;
    const queryStr = newParams.toString() ? `?${newParams.toString()}` : '';
    router.replace(`${currentPath}${queryStr}`, { scroll: false });
    
    setTimeout(() => {
      setSubmitted(false);
      setStep(1);
      setAnswers({});
      setActiveTab("direct");
    }, 500);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleFinderSelect = (qId: number, val: string) => {
    triggerHaptic();
    setAnswers(prev => ({ ...prev, [qId]: val }));
    if (qId < questions.length) {
      setStep(step + 1);
    } else {
      // Finished
      setFormData(prev => ({ ...prev, service: answers[1] || val }));
      setActiveTab("direct");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-tlg-midnight/60 backdrop-blur-md"
          />
          
          <m.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] max-h-[90vh]"
          >
            {/* Left Sidebar */}
            <div className="md:w-1/3 bg-tlg-ivory p-8 md:p-12 flex flex-col border-r border-tlg-stone">
              <span className="font-serif text-2xl text-tlg-midnight mb-12">TLG.</span>
              
              <div className="flex flex-col gap-6 mt-auto mb-auto">
                <button 
                  onClick={() => { triggerHaptic(); setActiveTab("direct"); }}
                  className={`text-left text-lg font-serif transition-colors ${activeTab === "direct" ? "text-tlg-signatureGold" : "text-gray-800 hover:text-tlg-midnight"}`}
                >
                  Direct Booking
                </button>
                <button 
                  onClick={() => { triggerHaptic(); setActiveTab("finder"); }}
                  className={`text-left text-lg font-serif transition-colors ${activeTab === "finder" ? "text-tlg-signatureGold" : "text-gray-800 hover:text-tlg-midnight"}`}
                >
                  Help Me Choose
                </button>
              </div>

              <div className="mt-auto">
                <p className="text-xs text-gray-700 leading-relaxed">
                  Confidential advisory across multiple high-impact sectors globally.
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className="md:w-2/3 p-8 md:p-12 overflow-y-auto relative bg-white">
              <button onClick={closeModal} className="absolute top-8 right-8 p-2 text-gray-800 hover:text-tlg-midnight transition-colors bg-gray-50 rounded-full">
                <X size={20} />
              </button>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <m.div 
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="h-full flex flex-col items-center justify-center text-center max-w-md mx-auto"
                  >
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-8">
                      <CheckCircle2 size={40} className="text-green-500" />
                    </div>
                    <h3 className="text-3xl font-serif text-tlg-midnight mb-4">Request Received</h3>
                    <p className="text-gray-700 mb-8">
                      An executive from the appropriate division will contact you shortly to confirm your consultation.
                    </p>
                    <button 
                      onClick={closeModal}
                      className="px-8 py-3 bg-tlg-midnight text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-tlg-signatureGold transition-colors"
                    >
                      Return to site
                    </button>
                  </m.div>
                ) : activeTab === "direct" ? (
                  <m.div 
                    key="direct"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="max-w-xl"
                  >
                    <h2 className="text-3xl font-serif text-tlg-midnight mb-2">Book Consultation</h2>
                    <p className="text-gray-700 mb-8">Secure a confidential session with our experts.</p>
                    
                    <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); triggerHaptic(); }}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[11px] font-bold uppercase tracking-widest text-gray-700">Full Name</label>
                          <input required type="text" className="w-full bg-tlg-ivory border border-tlg-stone rounded-xl px-4 py-3 outline-none focus:border-tlg-signatureGold transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[11px] font-bold uppercase tracking-widest text-gray-700">Email Address</label>
                          <input required type="email" className="w-full bg-tlg-ivory border border-tlg-stone rounded-xl px-4 py-3 outline-none focus:border-tlg-signatureGold transition-colors" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold uppercase tracking-widest text-gray-700">Service Required</label>
                        <select 
                          value={formData.service}
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                          className="w-full bg-tlg-ivory border border-tlg-stone rounded-xl px-4 py-3 outline-none focus:border-tlg-signatureGold transition-colors appearance-none"
                        >
                          <option value="">Select a division...</option>
                          <option value="hr-consulting">HR & Business Consulting</option>
                          <option value="real-estate">Real Estate & Property</option>
                          <option value="education">Education Advisory</option>
                          <option value="global-mobility">Global Mobility</option>
                          <option value="technology">Digital & Technology</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[11px] font-bold uppercase tracking-widest text-gray-700">Brief Message</label>
                        <textarea required rows={4} className="w-full bg-tlg-ivory border border-tlg-stone rounded-xl px-4 py-3 outline-none focus:border-tlg-signatureGold transition-colors resize-none"></textarea>
                      </div>

                      <button type="submit" className="w-full bg-tlg-midnight text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-tlg-signatureGold transition-colors">
                        Submit Request
                      </button>
                    </form>
                  </m.div>
                ) : (
                  <m.div 
                    key="finder"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="max-w-xl flex flex-col h-full justify-center"
                  >
                    <span className="text-tlg-signatureGold text-[11px] font-bold uppercase tracking-widest mb-4 block">Question {step} of {questions.length}</span>
                    <h2 className="text-3xl font-serif text-tlg-midnight mb-8">{questions[step-1].title}</h2>
                    
                    <div className="flex flex-col gap-3">
                      {questions[step-1].options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleFinderSelect(step, opt.value)}
                          className="flex items-center justify-between w-full p-5 rounded-2xl border border-tlg-stone hover:border-tlg-signatureGold hover:bg-tlg-ivory transition-all group text-left"
                        >
                          <span className="text-tlg-midnight font-medium">{opt.label}</span>
                          <ChevronRight size={18} className="text-gray-600 group-hover:text-tlg-signatureGold group-hover:translate-x-1 transition-all" />
                        </button>
                      ))}
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default function BookingModal() {
  return (
    <Suspense fallback={null}>
      <BookingModalContent />
    </Suspense>
  );
}
