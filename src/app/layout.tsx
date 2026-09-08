import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/constants";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  alternates: { canonical: SITE.url },
  description: SITE.description,
  keywords: [
    "homestay Kuantan",
    "THE LAMAN",
    "Somai Homes",
    "homestay premium Pahang",
    "homestay keluarga Kuantan",
    "homestay Kg Padang Jaya",
    "penginapan UIA Kuantan",
    "homestay tetamu majlis",
  ],
  authors: [{ name: "Somai Homes" }],
  creator: "Somai Homes",
  openGraph: {
    type: "website",
    locale: "ms_MY",
    url: SITE.url,
    siteName: `${SITE.name} ${SITE.tagline}`,
    title: SITE.title,
    description: "Ruang yang selesa untuk keluarga, urusan kerja dan percutian anda di Kuantan.",
    images: [
      {
        url: "/images/hero.jpg",
        alt: "THE LAMAN — Homestay Premium di Kg Padang Jaya, Kuantan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-body overflow-x-hidden">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
