import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const cormorant = Cormorant_Garamond({ 
 subsets: ["latin"],
 weight: ["300", "400", "500", "600", "700"],
 variable: "--font-cormorant",
});

const manrope = Manrope({ 
 subsets: ["latin"],
 weight: ["300", "400", "500", "600", "700", "800"],
 variable: "--font-manrope",
});

import { getGlobalSettings, getLocations, getPageContent } from "@/lib/wordpress/client";
import { pageField, pageLinks } from "@/lib/wordpress/page-content";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getGlobalSettings();

  const titleTemplate = "%s | Triumphal Lifetime Group";
  const defaultTitle = settings?.company_name
    ? `${settings.company_name} | Integrated Global Advisory`
    : "Triumphal Lifetime Group | Integrated Global Advisory";

  const defaultDescription = settings?.seo_description || "A diversified business network providing structural, operational, and strategic support across multiple high-impact sectors globally.";

  const siteUrl = "https://triumphallifetimegroup.com";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      template: titleTemplate,
      default: defaultTitle,
    },
    description: defaultDescription,
    openGraph: {
      title: defaultTitle,
      description: defaultDescription,
      url: siteUrl,
      siteName: settings?.company_name || "Triumphal Lifetime Group",
      locale: "en_US",
      type: "website",
      images: settings?.seo_og_image ? [settings.seo_og_image] : [],
    },
    manifest: "/manifest.json",
  };
}

import Header from "@/components/layout/Header";
import AnimationProvider from "@/components/providers/AnimationProvider";

import ServerFooter from "@/components/layout/ServerFooter";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/layout/SmoothScroll";
import PwaRegistry from "@/components/providers/PwaRegistry";
import BookingModal from "@/components/ui/BookingModal";

export default async function RootLayout({
  children,
 }: Readonly<{
  children: React.ReactNode;
 }>) {
  const [settings, navigation, locations] = await Promise.all([getGlobalSettings(), getPageContent("site-navigation"), getLocations()]);
  const organizationSchema = {
    "@type": "Corporation",
    "@id": "https://triumphallifetimegroup.com/#corporation",
    name: settings.company_name || "Triumphal Lifetime Group",
    url: "https://triumphallifetimegroup.com",
    email: settings.general_email || undefined,
    telephone: settings.primary_phone || undefined,
    sameAs: [settings.facebook, settings.linkedin, settings.instagram].filter(Boolean),
    logo: "https://triumphallifetimegroup.com/images/logo.png",
    description: settings.seo_description || undefined
  };

  const graphNodes: Record<string, unknown>[] = [organizationSchema, {
    "@type": "WebSite",
    "@id": "https://triumphallifetimegroup.com/#website",
    name: settings.company_name || "Triumphal Lifetime Group",
    url: "https://triumphallifetimegroup.com",
  }];

  locations.forEach(loc => {
    if (loc.operational_status === "active" && loc.address && loc.client_facing) {
      graphNodes.push({
        "@type": "LocalBusiness",
        "@id": `https://triumphallifetimegroup.com/#localbusiness-${loc.slug}`,
        name: loc.name || "Triumphal Lifetime Group",
        url: "https://triumphallifetimegroup.com",
        telephone: loc.phone || settings.primary_phone || "",
        address: {
          "@type": "PostalAddress",
          addressLocality: loc.city,
          addressCountry: loc.country,
          streetAddress: loc.address
        }
      });
    }
  });

  return (
  <html lang="en" suppressHydrationWarning>
     <head>
       <script
         type="application/ld+json"
         dangerouslySetInnerHTML={{
           __html: JSON.stringify({
             "@context": "https://schema.org",
             "@graph": graphNodes
           })
         }}
       />
     </head>
 <body suppressHydrationWarning className={`${manrope.variable} ${cormorant.variable} bg-tlg-ivory text-tlg-charcoal flex flex-col min-h-screen safe-pb md:pb-0`}>
 <SmoothScroll>
 <AnimationProvider>
 <PwaRegistry />
 <CustomCursor />
 <Header navigationLinks={pageLinks(navigation, "navigation_items")} divisionLinks={pageLinks(navigation, "division_items")} ctaText={pageField(navigation, "cta_text")} ctaUrl={pageField(navigation, "cta_url")} />
 <div className="flex-1">
 {children}
 </div>
 <ServerFooter />
 <Suspense fallback={null}>
   <BookingModal siteKey={settings.turnstile_site_key} />
 </Suspense>
 </AnimationProvider>
 </SmoothScroll>
 </body>
 </html>
 );
}
