import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Companies & Divisions",
  description: "Explore the primary operating divisions of Triumphal Lifetime Group.",
};

import Link from "next/link";
import { ArrowRight, MapPin, Phone, Building2 } from "lucide-react";

export default function CompaniesDirectoryPage() {
  return (
    <main className="bg-white pt-32 pb-24">
      <section className="relative pt-16 pb-24 border-b border-tlg-stone bg-tlg-ivory">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl animate-reveal-up">
            <span className="text-tlg-signatureGold text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Our Businesses</span>
            <h1 className="text-4xl md:text-6xl font-serif text-tlg-midnight leading-[1.1] mb-8">
              Companies & Divisions.
            </h1>
            <p className="text-xl text-gray-800 font-normal leading-relaxed">
              Triumphal Lifetime Group operates through specialised divisions and affiliated entities, providing targeted professional services while sharing common standards of service and integrity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* HR */}
            <div className="border border-tlg-stone rounded-[24px] p-10 flex flex-col hover:border-tlg-midnight transition-colors">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-tlg-signatureGold mb-3 block">Service Division</span>
              <h3 className="text-2xl font-serif text-tlg-midnight mb-2">HR & Business Consulting</h3>
              <p className="text-sm text-gray-800 font-normal leading-relaxed mb-6 border-b border-tlg-stone pb-6">
                Providing recruitment, organisational design, and workforce strategy support to businesses.
              </p>
              
              <div className="space-y-3 mb-8 flex-1">
                <div className="flex items-start text-sm text-gray-700">
                  <MapPin size={16} className="text-tlg-signatureGold mr-3 mt-0.5 shrink-0" />
                  <span>Nigeria</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Building2 size={16} className="text-tlg-signatureGold mr-3 mt-0.5 shrink-0" />
                  <span>Operating as a division of Triumphal Lifetime Group</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Phone size={16} className="text-tlg-signatureGold mr-3 mt-0.5 shrink-0" />
                  <span>Contact Nigeria Regional Office</span>
                </div>
              </div>

              <Link href="/solutions/hr-consulting" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-tlg-midnight hover:text-tlg-signatureGold transition-colors">
                Learn More <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>

            {/* Real Estate */}
            <div className="border border-tlg-stone rounded-[24px] p-10 flex flex-col hover:border-tlg-midnight transition-colors">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-tlg-signatureGold mb-3 block">Service Division</span>
              <h3 className="text-2xl font-serif text-tlg-midnight mb-2">Real Estate Advisory</h3>
              <p className="text-sm text-gray-800 font-normal leading-relaxed mb-6 border-b border-tlg-stone pb-6">
                Supporting clients with residential and commercial property sourcing and transaction coordination.
              </p>
              
              <div className="space-y-3 mb-8 flex-1">
                <div className="flex items-start text-sm text-gray-700">
                  <MapPin size={16} className="text-tlg-signatureGold mr-3 mt-0.5 shrink-0" />
                  <span>United Arab Emirates / Nigeria</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Building2 size={16} className="text-tlg-signatureGold mr-3 mt-0.5 shrink-0" />
                  <span>Transactions facilitated through appropriately licensed real estate entities and professionals.</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Phone size={16} className="text-tlg-signatureGold mr-3 mt-0.5 shrink-0" />
                  <span>Contact UAE or Nigeria Regional Office</span>
                </div>
              </div>

              <Link href="/solutions/real-estate" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-tlg-midnight hover:text-tlg-signatureGold transition-colors">
                Learn More <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>

            {/* Education */}
            <div className="border border-tlg-stone rounded-[24px] p-10 flex flex-col hover:border-tlg-midnight transition-colors">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-tlg-signatureGold mb-3 block">Service Division</span>
              <h3 className="text-2xl font-serif text-tlg-midnight mb-2">Education Advisory</h3>
              <p className="text-sm text-gray-800 font-normal leading-relaxed mb-6 border-b border-tlg-stone pb-6">
                Helping students and professionals research education opportunities and preparing applications.
              </p>
              
              <div className="space-y-3 mb-8 flex-1">
                <div className="flex items-start text-sm text-gray-700">
                  <MapPin size={16} className="text-tlg-signatureGold mr-3 mt-0.5 shrink-0" />
                  <span>Canada / Nigeria / UAE</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Building2 size={16} className="text-tlg-signatureGold mr-3 mt-0.5 shrink-0" />
                  <span>Operating as a division of Triumphal Lifetime Group</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Phone size={16} className="text-tlg-signatureGold mr-3 mt-0.5 shrink-0" />
                  <span>Contact Canadian or Regional Office</span>
                </div>
              </div>

              <Link href="/solutions/education" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-tlg-midnight hover:text-tlg-signatureGold transition-colors">
                Learn More <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>

            {/* Global Mobility */}
            <div className="border border-tlg-stone rounded-[24px] p-10 flex flex-col hover:border-tlg-midnight transition-colors">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-tlg-signatureGold mb-3 block">Service Division</span>
              <h3 className="text-2xl font-serif text-tlg-midnight mb-2">Global Mobility Support</h3>
              <p className="text-sm text-gray-800 font-normal leading-relaxed mb-6 border-b border-tlg-stone pb-6">
                Providing administrative and logistical support for international travel and relocation.
              </p>
              
              <div className="space-y-3 mb-8 flex-1">
                <div className="flex items-start text-sm text-gray-700">
                  <MapPin size={16} className="text-tlg-signatureGold mr-3 mt-0.5 shrink-0" />
                  <span>Canada / Nigeria</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Building2 size={16} className="text-tlg-signatureGold mr-3 mt-0.5 shrink-0" />
                  <span>Operating as a division of Triumphal Lifetime Group. Not an immigration law firm.</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Phone size={16} className="text-tlg-signatureGold mr-3 mt-0.5 shrink-0" />
                  <span>Contact Canadian or Regional Office</span>
                </div>
              </div>

              <Link href="/solutions/global-mobility" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-tlg-midnight hover:text-tlg-signatureGold transition-colors">
                Learn More <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>

            {/* Digital Learning */}
            <div className="border border-tlg-stone rounded-[24px] p-10 flex flex-col hover:border-tlg-midnight transition-colors">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-tlg-signatureGold mb-3 block">Service Division</span>
              <h3 className="text-2xl font-serif text-tlg-midnight mb-2">Digital Products & Learning</h3>
              <p className="text-sm text-gray-800 font-normal leading-relaxed mb-6 border-b border-tlg-stone pb-6">
                Creating practical learning resources and professional development programmes.
              </p>
              
              <div className="space-y-3 mb-8 flex-1">
                <div className="flex items-start text-sm text-gray-700">
                  <MapPin size={16} className="text-tlg-signatureGold mr-3 mt-0.5 shrink-0" />
                  <span>Global (Digital)</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Building2 size={16} className="text-tlg-signatureGold mr-3 mt-0.5 shrink-0" />
                  <span>Operating as a division of Triumphal Lifetime Group</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Phone size={16} className="text-tlg-signatureGold mr-3 mt-0.5 shrink-0" />
                  <span>Online Support</span>
                </div>
              </div>

              <Link href="/solutions/digital-learning" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-tlg-midnight hover:text-tlg-signatureGold transition-colors">
                Learn More <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>

            {/* Technology */}
            <div className="border border-tlg-stone rounded-[24px] p-10 flex flex-col hover:border-tlg-midnight transition-colors">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-tlg-signatureGold mb-3 block">Service Division</span>
              <h3 className="text-2xl font-serif text-tlg-midnight mb-2">Information Technology</h3>
              <p className="text-sm text-gray-800 font-normal leading-relaxed mb-6 border-b border-tlg-stone pb-6">
                Helping businesses improve digital operations and systems support.
              </p>
              
              <div className="space-y-3 mb-8 flex-1">
                <div className="flex items-start text-sm text-gray-700">
                  <MapPin size={16} className="text-tlg-signatureGold mr-3 mt-0.5 shrink-0" />
                  <span>Nigeria / UAE</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Building2 size={16} className="text-tlg-signatureGold mr-3 mt-0.5 shrink-0" />
                  <span>Operating as a division of Triumphal Lifetime Group</span>
                </div>
                <div className="flex items-start text-sm text-gray-700">
                  <Phone size={16} className="text-tlg-signatureGold mr-3 mt-0.5 shrink-0" />
                  <span>Contact Regional Office</span>
                </div>
              </div>

              <Link href="/solutions/technology" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-tlg-midnight hover:text-tlg-signatureGold transition-colors">
                Learn More <ArrowRight size={14} className="ml-2" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
