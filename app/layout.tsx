import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://triumphallifetimegroup.com"),
  title: {
    template: "%s | Triumphal Lifetime Group",
    default: "Triumphal Lifetime Group | Integrated Global Advisory",
  },
  description: "A diversified business network providing structural, operational, and strategic support across multiple high-impact sectors globally.",
  openGraph: {
    title: "Triumphal Lifetime Group",
    description: "A diversified business network providing structural, operational, and strategic support across multiple high-impact sectors globally.",
    url: "https://triumphallifetimegroup.com",
    siteName: "Triumphal Lifetime Group",
    locale: "en_US",
    type: "website",
  },
};

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${cormorant.variable} bg-tlg-ivory text-tlg-charcoal flex flex-col min-h-screen`}>
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
