import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
 title: "Cookie Policy",
 description: "Information about how Triumphal Lifetime Group uses cookies and tracking technologies.",
};

export default function CookiePolicyPage() {
 return (
 <main className="bg-white min-h-screen">
 {/* Hero */}
 <section className="pt-40 pb-16 bg-tlg-ivory border-b border-tlg-stone">
 <div className="max-w-[800px] mx-auto px-6 md:px-12">
 <span className="text-tlg-signatureGold text-[11px] font-bold uppercase tracking-[0.3em] mb-6 block">Legal</span>
 <h1 className="text-4xl md:text-5xl font-serif text-tlg-midnight leading-[1.1] mb-4">Cookie Policy</h1>
 <p className="text-sm text-gray-800 font-normal">Last updated: August 2026</p>
 </div>
 </section>

 {/* Body */}
 <section className="py-20">
 <div className="max-w-[800px] mx-auto px-6 md:px-12">
 <div className="space-y-12 text-[15px] text-gray-800 font-normal leading-[1.85]">

 <p>
 Triumphal Lifetime Group uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our audience is coming from. This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use.
 </p>

 <div>
 <h2 className="text-xl font-serif text-tlg-midnight mb-4 pb-3 border-b border-tlg-stone">1. What are Cookies?</h2>
 <p>
 Cookies are small text files that are placed on your computer or mobile device by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
 </p>
 </div>

 <div>
 <h2 className="text-xl font-serif text-tlg-midnight mb-4 pb-3 border-b border-tlg-stone">2. How We Use Cookies</h2>
 <p className="mb-4">We use cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our website.</p>
 
 <ul className="space-y-4 list-none mt-6">
 <li className="bg-tlg-ivory p-6 border border-tlg-stone">
 <h3 className="font-semibold text-tlg-midnight mb-2">Essential Cookies</h3>
 <p className="text-sm">These cookies are strictly necessary to provide you with services available through our website and to use some of its features, such as access to secure areas.</p>
 </li>
 <li className="bg-tlg-ivory p-6 border border-tlg-stone">
 <h3 className="font-semibold text-tlg-midnight mb-2">Analytics and Performance Cookies</h3>
 <p className="text-sm">These cookies collect information that is used either in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are, or to help us customize our website for you.</p>
 </li>
 <li className="bg-tlg-ivory p-6 border border-tlg-stone">
 <h3 className="font-semibold text-tlg-midnight mb-2">Functionality Cookies</h3>
 <p className="text-sm">These cookies are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences (for example, your choice of language or region).</p>
 </li>
 </ul>
 </div>

 <div>
 <h2 className="text-xl font-serif text-tlg-midnight mb-4 pb-3 border-b border-tlg-stone">3. Managing Cookies</h2>
 <p>
 Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you. It may also stop you from saving customized settings like login information.
 </p>
 <p className="mt-4">
 To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-tlg-signatureGold hover:text-tlg-midnight underline underline-offset-4">allaboutcookies.org</a>.
 </p>
 </div>

 <div>
 <h2 className="text-xl font-serif text-tlg-midnight mb-4 pb-3 border-b border-tlg-stone">4. Changes to This Policy</h2>
 <p>
 We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
 </p>
 </div>

 {/* Contact Box */}
 <div className="bg-tlg-ivory border border-tlg-stone p-8 mt-4">
 <p className="text-sm text-tlg-midnight font-semibold mb-2">Questions?</p>
 <p className="text-sm text-gray-700 font-normal mb-3">If you have any questions about our use of cookies or other technologies, please contact us.</p>
 <a href="mailto:privacy@triumphallifetimegroup.com" className="text-sm text-tlg-signatureGold hover:text-tlg-midnight transition-colors font-medium">
 privacy@triumphallifetimegroup.com
 </a>
 </div>

 </div>
 </div>
 </section>

 {/* Footer Nav */}
 <section className="py-10 border-t border-tlg-stone bg-tlg-ivory">
 <div className="max-w-[800px] mx-auto px-6 md:px-12 flex flex-wrap gap-6 text-xs font-bold uppercase tracking-widest text-gray-800">
 <Link href="/privacy" className="hover:text-tlg-midnight transition-colors">Privacy Policy</Link>
 <Link href="/terms" className="hover:text-tlg-midnight transition-colors">Terms &amp; Conditions</Link>
 <Link href="/contact" className="hover:text-tlg-midnight transition-colors">Contact Us</Link>
 </div>
 </section>
 </main>
 );
}
