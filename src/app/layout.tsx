import type { Metadata } from "next";
import { Inter, Fraunces, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jmstrading.co.uk"),
  title: {
    default: "JMS Trading — Better Products. Better Prices. Better Service.",
    template: "%s · JMS Trading",
  },
  description:
    "UK-based wholesale supplier of household, kitchenware and lifestyle products for retailers, distributors and trade buyers. Reliable everyday essentials, competitively priced.",
  openGraph: {
    title: "JMS Trading — Wholesale that works",
    description:
      "Delivering unbeatable value in wholesale and distribution — without compromising on quality, reliability or support.",
    url: "https://www.jmstrading.co.uk",
    siteName: "JMS Trading",
    type: "website",
    locale: "en_GB",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
