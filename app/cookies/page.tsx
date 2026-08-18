import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CookiePolicy() {
  return (
    <>
      <Header />
      <main className="bg-tlg-ivory">
        
        {/* Cinematic Hero */}
        <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-end overflow-hidden bg-tlg-midnight">
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center animate-slow-zoom scale-105 opacity-40"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-tlg-midnight via-tlg-midnight/80 to-tlg-midnight/20"></div>
          </div>
          
          <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10 pb-24 md:pb-32">
            <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6 animate-reveal-up">Corporate Governance</span>
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tight mb-8 animate-reveal-up-delayed">
              Cookie<br />
              <span className="italic font-light text-white/80">Policy.</span>
            </h1>
            <div className="w-24 h-[1px] bg-tlg-signatureGold mb-8 animate-draw-line"></div>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl leading-relaxed animate-reveal-up-delayed">
              How we deploy digital tracking technologies to enhance your experience across our global platforms.
            </p>
          </div>
        </section>

        {/* Legal Document Layout */}
        <section className="py-32 bg-white relative">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Sticky Table of Contents */}
              <div className="lg:col-span-4">
                <div className="sticky top-32">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400 block mb-8">Table of Contents</span>
                  <ul className="flex flex-col gap-4 text-sm font-semibold uppercase tracking-widest text-tlg-midnight">
                    <li className="flex items-center gap-3 text-tlg-signatureGold"><div className="w-4 h-[1px] bg-tlg-signatureGold"></div> 1. What Are Cookies?</li>
                    <li className="hover:text-tlg-signatureGold transition-colors cursor-pointer pl-7">2. How We Use Them</li>
                    <li className="hover:text-tlg-signatureGold transition-colors cursor-pointer pl-7">3. Types of Cookies</li>
                    <li className="hover:text-tlg-signatureGold transition-colors cursor-pointer pl-7">4. Third-Party Analytics</li>
                    <li className="hover:text-tlg-signatureGold transition-colors cursor-pointer pl-7">5. Managing Preferences</li>
                  </ul>
                  
                  <div className="mt-16 p-8 bg-tlg-ivory border border-tlg-stone">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-tlg-signatureGold block mb-2">Last Updated</span>
                    <p className="font-serif text-xl text-tlg-midnight">August 2026</p>
                  </div>
                </div>
              </div>
              
              {/* Legal Text */}
              <div className="lg:col-span-8 max-w-3xl">
                
                <div className="prose prose-lg prose-gray">
                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">1. What Are Cookies?</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    Cookies are small text files placed on your computer, smartphone, or other devices when you visit our websites. They allow our digital infrastructure to recognize your device, securely maintain your session, and remember your preferences across the Triumphal Lifetime Group network.
                  </p>

                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">2. How We Use Cookies</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-4 text-lg">
                    We deploy cookies strictly to elevate your user experience and secure our platforms. Specifically, we use them to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-500 font-light mb-12 text-lg space-y-2">
                    <li>Authenticate you when you log into the Digital Products & Learning portals.</li>
                    <li>Remember your region (e.g., Nigeria, UAE, Canada) to dynamically serve correct localized content and regulatory information.</li>
                    <li>Protect against malicious activity, including CSRF attacks and unauthorized access attempts.</li>
                    <li>Analyze macro traffic patterns to optimize our server routing and content delivery.</li>
                  </ul>

                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">3. Types of Cookies We Deploy</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-4 text-lg">
                    <strong>Strictly Necessary Cookies:</strong> These are essential for the operation of our websites. Without them, core functions like secure login and form submissions cannot operate. They cannot be disabled in our systems.
                  </p>
                  <p className="text-gray-500 font-light leading-relaxed mb-4 text-lg">
                    <strong>Performance & Analytical Cookies:</strong> These allow us to recognize and count the number of visitors and see how users move around our platforms. This helps us improve the structural logic of our websites.
                  </p>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    <strong>Functional Cookies:</strong> These enable the website to provide enhanced functionality and personalization, such as remembering your language or corporate gateway preference.
                  </p>

                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">4. Third-Party Analytics</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    We may partner with enterprise-grade analytics providers (such as Google Analytics) to assess platform performance. These third parties may set their own cookies on your device. We ensure that all third-party partners adhere strictly to global data protection laws (GDPR, PIPEDA) and do not use your data for unauthorized cross-site tracking.
                  </p>

                  <h2 className="text-3xl font-serif text-tlg-midnight mb-6">5. Managing Your Preferences</h2>
                  <p className="text-gray-500 font-light leading-relaxed mb-12 text-lg">
                    You maintain full control over your cookie preferences. You can configure your browser to block or alert you about all cookies. However, please note that blocking strictly necessary cookies will render portions of our digital platforms (specifically the booking interfaces and learning portals) completely inoperable.
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* Action Section */}
        <section className="py-24 bg-tlg-ivory relative flex flex-col items-center justify-center text-center border-t border-tlg-stone">
          <div className="max-w-3xl px-6">
            <h2 className="text-3xl font-serif text-tlg-midnight mb-6">Require Further Clarification?</h2>
            <Link href="/privacy" className="inline-flex items-center gap-4 bg-tlg-midnight text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-tlg-signatureGold transition-colors">
              Read Privacy Policy <ArrowRight size={14} />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
