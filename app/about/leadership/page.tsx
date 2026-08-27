import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Leadership",
 description: "Guided by experience across North America, the Middle East, and Africa.",
};

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function LeadershipPage() {
 return (
 <main className="bg-white pt-32 pb-24">
 <section className="relative pt-16 pb-24 border-b border-tlg-stone bg-tlg-ivory">
 <div className="max-w-[1200px] mx-auto px-6 md:px-12">
 <Link href="/about" className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-gray-800 hover:text-tlg-midnight transition-colors mb-12">
 <ArrowRight size={14} className="mr-2 rotate-180" /> Back to About
 </Link>
 
 <div className="max-w-4xl animate-reveal-up">
 <span className="text-tlg-signatureGold text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Leadership</span>
 <h1 className="text-4xl md:text-6xl font-serif text-tlg-midnight leading-[1.1] mb-8">
 Guided by Experience.
 </h1>
 <p className="text-xl text-gray-800 font-normal leading-relaxed">
 Our executive board brings together decades of rigorous cross-sector experience in international markets.
 </p>
 </div>
 </div>
 </section>

 {/* CEO - Featured */}
 <section className="py-24 border-b border-tlg-stone">
 <div className="max-w-[1200px] mx-auto px-6 md:px-12">
 <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold mb-16 block">Founder & Group Chief Executive</span>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
 
 {/* Photo */}
 <div className="relative w-full aspect-[3/4] max-w-sm overflow-hidden bg-tlg-stone/20">
 <Image
 src="/images/team/ARIKE_ADEBAYO.jpeg"
 alt="Arike Adedayo - Founder & Group CEO"
 fill
 className="object-cover object-top"
 priority
 />
 </div>

 {/* Bio */}
 <div>
 <h2 className="text-4xl md:text-5xl font-serif text-tlg-midnight mb-2">
 Arike Adedayo
 </h2>
 <p className="text-xs text-tlg-signatureGold font-bold uppercase tracking-[0.25em] mb-8">
 Founder & Group Chief Executive Officer
 </p>
 <div className="space-y-5 text-gray-800 font-normal leading-relaxed text-[15px]">
 <p>
 Arike Adedayo is the Founder and Group Chief Executive Officer of Triumphal Lifetime Group, an integrated ecosystem of companies delivering solutions across human resources and business consulting, information technology, real estate, student advisory, global visa services, digital commerce, and community impact.
 </p>
 <p>
 As Group CEO, she provides strategic leadership across the Group, shaping its vision, corporate strategy, governance, partnerships, and long-term growth. Working alongside the executive leadership team, she is focused on building sustainable businesses, strengthening operational excellence, and creating opportunities for people, businesses, and communities.
 </p>
 <p>
 Her leadership is grounded in integrity, innovation, professionalism, and service, with a commitment to ensuring that each company maintains its distinct purpose while contributing to the Group's shared vision and long-term value creation.
 </p>
 <blockquote className="border-l-2 border-tlg-signatureGold pl-4 mt-6 text-sm italic text-gray-800">
 "Leadership is about creating opportunities, empowering people, building sustainable institutions, and creating lasting value for future generations."
 </blockquote>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Executive Team */}
 <section className="py-24">
 <div className="max-w-[1200px] mx-auto px-6 md:px-12">
 <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-800 mb-12 block">Executive Board</span>
 <div className="space-y-24">
          
 {/* Peace Emem */}
 <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
 <div className="md:col-span-4 relative aspect-[3/4] overflow-hidden bg-tlg-stone/20">
 <Image src="/images/team/ENEM.jpeg" alt="Peace Emem" fill className="object-cover object-top" />
 </div>
 <div className="md:col-span-8">
 <h3 className="text-3xl font-serif text-tlg-midnight mb-1">Peace Emem</h3>
 <p className="text-xs text-tlg-signatureGold font-bold uppercase tracking-widest mb-6">Group Chief Operating Officer (COO)</p>
 <div className="space-y-4 text-gray-700 font-normal text-sm leading-relaxed">
 <p>As Group Chief Operating Officer of Triumphal Lifetime Group, Peace Emem Olorunkunle oversees the Group's day-to-day operations and works closely with the Group CEO, President, and executive leadership team to translate strategic priorities into effective execution across the Group's companies.</p>
 <p>She provides operational leadership across business processes, service delivery, performance management, internal coordination, and organizational efficiency. Her role focuses on ensuring that each company operates effectively while maintaining the standards, values, and strategic direction of Triumphal Lifetime Group.</p>
 <p>With a strong commitment to operational excellence, accountability, and continuous improvement, Peace helps strengthen collaboration across the Group, improve performance, and build scalable systems that support sustainable growth.</p>
 <blockquote className="border-l-2 border-tlg-signatureGold pl-4 mt-6 text-sm italic text-gray-700">
 "Operational excellence is achieved when people, processes, and purpose work together to turn vision into measurable results."
 </blockquote>
 </div>
 </div>
 </div>

 {/* Olugbemiga Dada Ogedengbe */}
 <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
 <div className="md:col-span-4 relative aspect-[3/4] overflow-hidden bg-tlg-stone/20">
 <Image src="/images/team/DADA.jpeg" alt="Olugbemiga Dada Ogedengbe" fill className="object-cover object-top" />
 </div>
 <div className="md:col-span-8">
 <h3 className="text-3xl font-serif text-tlg-midnight mb-1">Olugbemiga Dada Ogedengbe</h3>
 <p className="text-xs text-tlg-signatureGold font-bold uppercase tracking-widest mb-6">Director, Information Technology</p>
 <div className="space-y-4 text-gray-700 font-normal text-sm leading-relaxed">
 <p>As Director of Information Technology at Triumphal Lifetime Group, Olugbemiga Dada Ogedengbe leads the Group's technology strategy and digital transformation agenda, driving innovative, secure, and scalable technology solutions that support long-term growth.</p>
 <p>His responsibilities span IT infrastructure, cybersecurity, cloud solutions, systems implementation, data management, and IT governance, ensuring that technology remains aligned with the Group's strategic objectives and supports operational excellence.</p>
 <p>Olugbemiga champions digital innovation across the Group, leveraging technology to enhance operational efficiency, strengthen data security, improve client experiences, and build organizational resilience.</p>
 <blockquote className="border-l-2 border-tlg-signatureGold pl-4 mt-6 text-sm italic text-gray-700">
 "Technology should empower people, simplify business, and create opportunities for innovation and sustainable growth."
 </blockquote>
 </div>
 </div>
 </div>

 {/* Kingsley Chukwuemeka Udenna */}
 <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
 <div className="md:col-span-4 relative aspect-[3/4] overflow-hidden bg-tlg-stone/20">
 <Image src="/images/team/KINGSLEY.jpeg" alt="Kingsley Chukwuemeka Udenna" fill className="object-cover object-top" />
 </div>
 <div className="md:col-span-8">
 <h3 className="text-3xl font-serif text-tlg-midnight mb-1">Kingsley Chukwuemeka Udenna</h3>
 <p className="text-xs text-tlg-signatureGold font-bold uppercase tracking-widest mb-6">Director, Human Resources & Business Advisory</p>
 <div className="space-y-4 text-gray-700 font-normal text-sm leading-relaxed">
 <p>Kingsley Chukwuemeka Udenna leads the Group's Human Resources and Business Advisory portfolio, driving people and performance strategies for clients across multiple industries. His role spans talent acquisition, workforce planning, performance management, organizational development, HR compliance, and business consulting services that support sustainable growth.</p>
 <p>With a strong commitment to professionalism, innovation, and excellence, Kingsley works closely with clients and internal stakeholders to develop tailored, people-centered strategies that enhance productivity, strengthen organizational capability, and build long-term business resilience.</p>
 <blockquote className="border-l-2 border-tlg-signatureGold pl-4 mt-6 text-sm italic text-gray-700">
 "Great organizations are built by investing in people, embracing innovation, and creating workplaces where people can thrive."
 </blockquote>
 </div>
 </div>
 </div>

 {/* Mr. Charles */}
 <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
 <div className="md:col-span-4 relative aspect-[3/4] overflow-hidden bg-tlg-stone/20">
 <Image src="/images/team/CHARLES.jpeg" alt="Mr. Charles" fill className="object-cover object-top" />
 </div>
 <div className="md:col-span-8">
 <h3 className="text-3xl font-serif text-tlg-midnight mb-1">Mr. Charles</h3>
 <p className="text-xs text-tlg-signatureGold font-bold uppercase tracking-widest mb-6">Director, Real Estate & Investment Advisory</p>
 <div className="space-y-4 text-gray-700 font-normal text-sm leading-relaxed">
 <p>Mr. Charles heads the Real Estate and Investment Advisory division, bringing extensive experience in property markets across our operational regions. He oversees portfolio strategy, market research, and client advisory services for both residential and commercial investments.</p>
 <p>His practical approach to property investment helps clients navigate complex transactions, ensuring that each decision is backed by robust data and clear strategic objectives.</p>
 <blockquote className="border-l-2 border-tlg-signatureGold pl-4 mt-6 text-sm italic text-gray-700">
 "Real estate remains a foundational asset class; our role is to provide the clarity required to invest with confidence."
 </blockquote>
 </div>
 </div>
 </div>

 </div>
 
 <div className="mt-24 border-t border-tlg-stone pt-16 text-center max-w-2xl mx-auto">
 <h4 className="text-2xl font-serif text-tlg-midnight mb-6">Join Our Global Team</h4>
 <p className="text-gray-700 font-normal mb-8">
 We are constantly seeking exceptional talent to drive our divisions forward. Explore current opportunities across our international offices.
 </p>
 <Link href="/careers" className="inline-flex items-center justify-center bg-transparent border border-tlg-stone text-tlg-midnight px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:border-tlg-midnight transition-colors">
 View Careers
 </Link>
 </div>
 </div>
 </section>
 </main>
 );
}
