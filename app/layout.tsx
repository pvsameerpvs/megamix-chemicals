import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.megamixchemicals.com"),
  title: {
    default: "Megamix Chemicals | Premium Construction Chemical Solutions",
    template: "%s | Megamix Chemicals"
  },
  description:
    "Megamix Chemicals manufactures high-performance construction chemicals engineered for strength, durability, and job-site performance.",
  keywords: [
    "construction chemicals",
    "admixture",
    "waterproofing",
    "precast",
    "ready mix",
    "Kerala",
    "India"
  ],
  openGraph: {
    title: "Megamix Chemicals",
    description:
      "Advanced construction chemical solutions for strength, durability, and performance.",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
