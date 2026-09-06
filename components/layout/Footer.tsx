"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import type { GlobalSettings, Location, PageContent } from "@/lib/wordpress/client";
import { pageField, pageLinks } from "@/lib/wordpress/page-content";

export default function Footer({ settings, footer, locations }: { settings: GlobalSettings; footer: PageContent; locations: Location[] }) {
  const columns = [
    { heading: "Divisions", links: pageLinks(footer, "footer_divisions") },
    { heading: "Company", links: pageLinks(footer, "footer_company") },
    { heading: "Resources", links: pageLinks(footer, "footer_resources") },
  ];
  const socials = [
    { url: settings.linkedin, label: "LinkedIn", Icon: Linkedin },
    { url: settings.instagram, label: "Instagram", Icon: Instagram },
    { url: settings.facebook, label: "Facebook", Icon: Facebook },
  ].filter((item) => item.url);

  return (
    <footer className="bg-white px-2 pb-3 pt-12 md:px-6 md:pt-24">
      <div className="rounded-[40px] bg-tlg-midnight px-6 py-16 text-white md:rounded-[70px] md:px-16 md:py-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid grid-cols-1 gap-14 border-b border-white/15 pb-16 lg:grid-cols-[1.3fr_2fr]">
            <div>
              <h2 className="font-serif text-3xl leading-tight text-white md:text-5xl">{pageField(footer, "cta_heading")}</h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/80">{pageField(footer, "intro_body")}</p>
              <Link href={pageField(footer, "cta_url")} className="mt-8 inline-flex rounded-full bg-tlg-signatureGold px-7 py-3 text-xs font-bold uppercase tracking-widest text-tlg-midnight">{pageField(footer, "cta_text")}</Link>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              {columns.map((column) => (
                <div key={column.heading}>
                  <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-white/75">{column.heading}</h3>
                  <ul className="space-y-4 text-[15px] leading-relaxed">
                    {column.links.map((link) => <li key={link.url}><Link href={link.url} className="text-white/90 hover:text-tlg-signatureGold">{link.label}</Link></li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 pt-10 text-[15px] leading-relaxed text-white/80 md:grid-cols-3">
            <div>
              {settings.general_email && <a href={`mailto:${settings.general_email}`}>{settings.general_email}</a>}
              {settings.primary_phone && <a className="mt-2 block" href={`tel:${settings.primary_phone.replace(/[^+\d]/g, "")}`}>{settings.primary_phone}</a>}
            </div>
            <div>
              {locations.filter((location) => location.client_facing).map((location) => <address key={location.slug} className="mb-3 not-italic"><strong className="text-white">{location.public_label ? `${location.city} ${location.public_label}` : location.name}</strong><br />{location.address}</address>)}
            </div>
            <div className="md:text-right">
              <div className="mb-5 flex gap-3 md:justify-end">
                {socials.map(({ url, label, Icon }) => <a key={label} href={url} aria-label={label} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/15 p-2 text-white hover:bg-white/25"><Icon size={17} /></a>)}
              </div>
              <p className="text-white/80">© {new Date().getFullYear()} {settings.company_name}</p>
              <p className="text-white/80">{settings.copyright_text}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
