import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";

import EnquiryForm from "@/components/forms/EnquiryForm";
import {
  getGlobalSettings,
  getLocations,
  getPageContent,
} from "@/lib/wordpress/client";
import { pageField, pageMetadata } from "@/lib/wordpress/page-content";

export async function generateMetadata(): Promise<Metadata> {
  return pageMetadata(await getPageContent("contact"), "/contact");
}

type ContactPageProps = {
  searchParams: Promise<{ service?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const [page, settings, locations, query] = await Promise.all([
    getPageContent("contact"),
    getGlobalSettings(),
    getLocations(),
    searchParams,
  ]);

  const publicLocations = locations.filter(
    (location) => location.operational_status === "active" && location.client_facing,
  );

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-tlg-midnight pb-24 pt-40 text-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <span className="mb-6 block text-[11px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold">
            {pageField(page, "hero_eyebrow")}
          </span>
          <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] text-white md:text-7xl">
            {pageField(page, "hero_title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            {pageField(page, "hero_description")}
          </p>
        </div>
      </section>

      <section className="bg-tlg-ivory py-20">
        <div className="mx-auto grid max-w-[1200px] gap-14 px-6 md:grid-cols-[0.8fr_1.2fr] md:px-12">
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.3em] text-tlg-signatureGold">
              Contact
            </p>
            <h2 className="font-serif text-4xl text-tlg-midnight">
              {pageField(page, "intro_heading")}
            </h2>
            <p className="mt-5 leading-relaxed text-gray-700">
              {pageField(page, "intro_body")}
            </p>

            {settings.general_email ? (
              <a
                className="mt-8 flex items-center gap-3 text-sm text-tlg-midnight hover:text-tlg-signatureGold"
                href={`mailto:${settings.general_email}`}
              >
                <Mail aria-hidden="true" size={17} />
                {settings.general_email}
              </a>
            ) : null}

            {publicLocations.length ? (
              <div className="mt-10 space-y-5">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-tlg-midnight">
                  Verified locations
                </h3>
                {publicLocations.map((location) => (
                  <div key={location.slug} className="flex gap-3 text-sm text-gray-700">
                    <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-tlg-signatureGold" size={16} />
                    <div>
                      <p className="font-semibold text-tlg-midnight">{location.name}</p>
                      <p>{[location.city, location.country].filter(Boolean).join(", ")}</p>
                      {location.address ? <p>{location.address}</p> : null}
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div className="border border-tlg-stone bg-white p-7 shadow-sm md:p-10">
            <EnquiryForm
              initialService={query.service ?? ""}
              siteKey={settings.turnstile_site_key}
            />
          </div>
        </div>
      </section>

      {pageField(page, "disclaimer_body") ? (
        <section className="border-t border-tlg-stone bg-white py-12">
          <div className="mx-auto max-w-[1200px] px-6 md:px-12">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-tlg-midnight">
              {pageField(page, "disclaimer_heading")}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-700">
              {pageField(page, "disclaimer_body")}
            </p>
          </div>
        </section>
      ) : null}
    </main>
  );
}
