import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { Navbar } from "@/components/Navbar";
import { Analytics } from "@/components/Analytics";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";
import { site, keywords } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "China Sourcing for Businesses | Vesta Sourcing & Procurement",
    template: "%s | Vesta Sourcing & Procurement",
  },
  description: site.description,
  keywords: [...keywords],
  authors: [{ name: site.name }],
  creator: site.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "China sourcing, made simpler.",
    description: site.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "China sourcing, made simpler.",
    description: site.description,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [{ url: "/brand/logo_no-bg_no-tagline.png", type: "image/png" }],
    apple: [{ url: "/brand/logo_no-bg_no-tagline.png" }],
    shortcut: "/brand/logo_no-bg_no-tagline.png",
  },
  alternates: { canonical: site.url },
};

export const viewport: Viewport = {
  themeColor: "#121420",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--background-primary)] text-[var(--text-primary)]">
        <JsonLd />
        <Analytics />
        <AnalyticsEvents />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <MobileStickyCta />
      </body>
    </html>
  );
}
