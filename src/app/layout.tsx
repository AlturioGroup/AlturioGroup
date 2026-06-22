import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import WhatsAppButton from "@/components/layout/whatsappButton";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const calSans = localFont({
  src: "../app/fonts/CalSans-Regular.ttf",
  variable: "--font-calsans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alturiogroup.com"),

  title: {
    default: "Alturio Group",
    template: "%s | Alturio Group",
  },
  authors: [
    {
      name: "Alturio Group",
    },
  ],
  creator: "Alturio Group",
  publisher: "Alturio Group",
  category: "Business Consulting",
  description:
    "Alturio Group helps organizations achieve sustainable growth through business consulting, virtual CFO and COO services, operational excellence, tax planning, internal audit, and AI-driven transformation solutions.",

  keywords: [
    "Virtual Finance Director",
    "Business Advisory",
    "Strategic Planning",
    "Risk Management",
    "Financial Transformation",
    "Corporate Finance",
    "Process Improvement",
    "Performance Management",
    "AI Transformation",
    "Business Growth Consulting",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    siteName: "Alturio Group",
    locale: "en_US",
    url: "https://alturiogroup.com",
  },

  twitter: {
    card: "summary_large_image",
  },
  //   verification: {
  //   google: "code"
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable}
        ${calSans.variable}`}>
      <body>
        {children}
        <WhatsAppButton />
      </body>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CV2SX2JTSM"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-CV2SX2JTSM');
      `}
      </Script>
    </html>
  );
}
