import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Building2 } from "lucide-react";
import { getServices } from "@/lib/wordpress/client";

export const metadata: Metadata = {
  title: "Our Companies & Divisions",
  description: "Explore the primary operating divisions of Triumphal Lifetime Group.",
};

export default async function CompaniesDirectoryPage() {
  const services = await getServices();

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
            {services.map((service) => (
              <div key={service.slug} className="border border-tlg-stone rounded-[24px] p-10 flex flex-col hover:border-tlg-midnight transition-colors">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-tlg-signatureGold mb-3 block">Service Division</span>
                <h3 className="text-2xl font-serif text-tlg-midnight mb-2">{service.title}</h3>
                <p className="text-sm text-gray-800 font-normal leading-relaxed mb-6 border-b border-tlg-stone pb-6">
                  {service.short_description}
                </p>

                <div className="space-y-3 mb-8 flex-1">
                  {service.location_text && (
                    <div className="flex items-start text-sm text-gray-700">
                      <MapPin size={16} className="text-tlg-signatureGold mr-3 mt-0.5 shrink-0" />
                      <span>{service.location_text}</span>
                    </div>
                  )}
                  {service.entity_text && (
                    <div className="flex items-start text-sm text-gray-700">
                      <Building2 size={16} className="text-tlg-signatureGold mr-3 mt-0.5 shrink-0" />
                      <span>{service.entity_text}</span>
                    </div>
                  )}
                  {service.contact_text && (
                    <div className="flex items-start text-sm text-gray-700">
                      <Phone size={16} className="text-tlg-signatureGold mr-3 mt-0.5 shrink-0" />
                      <span>{service.contact_text}</span>
                    </div>
                  )}
                </div>

                {service.cta_url && (
                  <Link href={service.cta_url} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-tlg-midnight hover:text-tlg-signatureGold transition-colors">
                    {service.cta_text || "Learn More"} <ArrowRight size={14} className="ml-2" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
