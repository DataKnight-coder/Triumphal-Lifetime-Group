import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Partners() {
 return (
 <>
 <main className="bg-tlg-ivory">
 
 <section className="relative pt-48 pb-32 w-full bg-tlg-midnight">
 <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10">
 <span className="text-tlg-signatureGold text-xs font-bold uppercase tracking-widest block mb-6 animate-reveal-up">Network</span>
 <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-white leading-[0.9] tracking-tight mb-8 animate-reveal-up-delayed">
 Strategic <span className="italic font-normal">Partners</span>.
 </h1>
 </div>
 </section>

 <section className="py-32 bg-white border-t border-tlg-stone">
 <div className="max-w-[1600px] mx-auto px-6 md:px-12">
 
 <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
 <div>
 <h2 className="text-4xl font-serif text-tlg-midnight mb-6">Our Professional Network</h2>
 <p className="text-xl text-gray-700 font-normal leading-relaxed">
 Our ability to execute seamlessly across borders is supported by our vetted network of institutional, strategic, and delivery partners.
 </p>
 </div>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 
 <div className="bg-tlg-ivory p-12">
 <h3 className="text-2xl font-serif text-tlg-midnight mb-6">Institutional Relationships</h3>
 <p className="text-sm text-gray-700 font-normal leading-relaxed mb-8">
 We work alongside established institutions, including legal and financial advisors across our jurisdictions, to ensure our clients receive compliant and effective support.
 </p>
 </div>

 <div className="bg-tlg-ivory p-12">
 <h3 className="text-2xl font-serif text-tlg-midnight mb-6">Professional Services</h3>
 <p className="text-sm text-gray-700 font-normal leading-relaxed mb-8">
 Where our clients require regulated legal, real estate, or immigration advice, we coordinate with appropriately authorised professionals.
 </p>
 </div>

 <div className="bg-tlg-ivory p-12">
 <h3 className="text-2xl font-serif text-tlg-midnight mb-6">Business Operations</h3>
 <p className="text-sm text-gray-700 font-normal leading-relaxed mb-8">
 Our network includes B2B referral partners who trust Triumphal Lifetime Group to handle their clients' strategic consulting and administrative needs.
 </p>
 </div>

 </div>

 <div className="mt-32">
 <h2 className="text-3xl font-serif text-tlg-midnight mb-12 border-b border-tlg-stone pb-4">Verified Partners</h2>
 <p className="text-gray-700 font-normal leading-relaxed mb-8">
 [Partner Name] - [Nature of Relationship] - [Country]
 </p>
 <p className="text-sm text-gray-500 italic">
 Note: Quality is more important than quantity. Only genuine, verified partnerships with explicit permission should be listed here.
 </p>
 </div>

 <div className="mt-32 pt-16 border-t border-tlg-stone flex flex-col md:flex-row justify-between items-center bg-tlg-midnight text-white p-16">
 <div className="max-w-xl mb-8 md:mb-0">
 <h3 className="text-3xl font-serif mb-4">Become a Strategic Partner</h3>
 <p className="text-white/90 font-normal">Join our ecosystem and provide your clients with direct access to international markets.</p>
 </div>
 <Link href="/contact" className="inline-flex items-center gap-4 bg-white text-tlg-midnight px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-tlg-signatureGold hover:text-white transition-colors shrink-0">
 Contact Partnership Team <ArrowRight size={14} />
 </Link>
 </div>

 </div>
 </section>

 </main>
 </>
 );
}
