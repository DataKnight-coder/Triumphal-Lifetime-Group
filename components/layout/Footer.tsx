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
  const socials = [{ url: settings.linkedin, label: "LinkedIn", Icon: Linkedin }, { url: settings.instagram, label: "Instagram", Icon: Instagram }, { url: settings.facebook, label: "Facebook", Icon: Facebook }].filter((item) => item.url);
  return <footer className="bg-white px-2 md:px-6 pb-3 pt-12 md:pt-24"><div className="rounded-[40px] md:rounded-[70px] bg-tlg-midnight text-white px-6 md:px-16 py-16 md:py-24"><div className="max-w-[1500px] mx-auto"><div className="grid grid-cols-1 lg:grid-cols-[1.3fr_2fr] gap-14 pb-16 border-b border-white/10"><div><h2 className="text-3xl md:text-5xl font-serif leading-tight">{pageField(footer, "cta_heading")}</h2><p className="text-white/70 text-sm leading-relaxed mt-6 max-w-md">{pageField(footer, "intro_body")}</p><Link href={pageField(footer, "cta_url")} className="inline-flex mt-8 bg-tlg-signatureGold text-tlg-midnight px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest">{pageField(footer, "cta_text")}</Link></div><div className="grid grid-cols-2 md:grid-cols-3 gap-8">{columns.map((column) => <div key={column.heading}><h3 className="text-xs uppercase tracking-widest text-white/60 font-bold mb-6">{column.heading}</h3><ul className="space-y-4 text-sm">{column.links.map((link) => <li key={link.url}><Link href={link.url} className="text-white/85 hover:text-tlg-signatureGold">{link.label}</Link></li>)}</ul></div>)}</div></div><div className="pt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-white/70"><div>{settings.general_email && <a href={`mailto:${settings.general_email}`}>{settings.general_email}</a>}{settings.primary_phone && <a className="block mt-2" href={`tel:${settings.primary_phone.replace(/[^+\d]/g, "")}`}>{settings.primary_phone}</a>}</div><div>{locations.filter((location) => location.client_facing).map((location) => <address key={location.slug} className="not-italic mb-3"><strong className="text-white">{location.public_label}</strong><br />{location.address}</address>)}</div><div className="md:text-right"><div className="flex md:justify-end gap-3 mb-5">{socials.map(({url,label,Icon}) => <a key={label} href={url} aria-label={label} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/10"><Icon size={17} /></a>)}</div><p>© {new Date().getFullYear()} {settings.company_name}</p><p>{settings.copyright_text}</p></div></div></div></div></footer>;
}
