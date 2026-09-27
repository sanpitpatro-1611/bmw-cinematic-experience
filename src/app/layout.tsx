import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";
import SoundToggle from "@/components/ui/SoundToggle";

export const metadata: Metadata = {
  title: "BMW | The Art of Motion — M8 Competition Gran Coupé",
  description:
    "An ultra-premium cinematic automotive storytelling experience showcasing the BMW M8 Competition Gran Coupé, full vehicle collection, bespoke configurator, and German engineering mastery.",
  keywords: [
    "BMW",
    "BMW M8",
    "M8 Gran Coupe",
    "BMW M Competition",
    "Luxury Automotive",
    "Cinematic Car Experience",
    "BMW Configurator",
  ],
  authors: [{ name: "BMW Experience Studio" }],
  openGraph: {
    title: "BMW | The Art of Motion — M8 Competition Gran Coupé",
    description:
      "Interactive cinematic reveal and digital vehicle showroom for the BMW M8 Competition Gran Coupé.",
    url: "https://www.bmw.com",
    siteName: "BMW Automotive",
    images: [
      {
        url: "/frames/ezgif-frame-269.jpg",
        width: 1920,
        height: 1080,
        alt: "BMW M8 Competition Gran Coupé Cinematic Reveal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BMW | The Art of Motion",
    description:
      "Interactive cinematic reveal of the BMW M8 Competition Gran Coupé.",
    images: ["/frames/ezgif-frame-269.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-[#050505] text-[#F5F5F5]">
      <body className="antialiased bg-[#050505] text-[#F5F5F5] min-h-screen selection:bg-bmw-blue selection:text-white">
        <SmoothScrollProvider>
          {children}
          <SoundToggle />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
