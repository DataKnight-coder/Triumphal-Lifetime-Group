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

import { getGlobalSettings } from "@/lib/content/settings";

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
import dynamic from "next/dynamic";
import AnimationProvider from "@/components/providers/AnimationProvider";

import ServerFooter from "@/components/layout/ServerFooter";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/layout/SmoothScroll";
import PwaRegistry from "@/components/providers/PwaRegistry";
import BookingModal from "@/components/ui/BookingModal";

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
 <html lang="en" suppressHydrationWarning>
 <body suppressHydrationWarning className={`${manrope.variable} ${cormorant.variable} bg-tlg-ivory text-tlg-charcoal flex flex-col min-h-screen safe-pb md:pb-0`}>
 <SmoothScroll>
 <AnimationProvider>
 <PwaRegistry />
 <CustomCursor />
 <Header />
 <div className="flex-1">
 {children}
 </div>
 <ServerFooter />
 <Suspense fallback={null}>
   <BookingModal />
 </Suspense>
 </AnimationProvider>
 </SmoothScroll>
 </body>
 </html>
 );
}
