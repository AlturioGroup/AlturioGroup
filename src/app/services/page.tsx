import type { Metadata } from "next";
import ServicesPageClient from "@/app/services/service-page-client";

export const metadata: Metadata = {
  title: "Business Consulting Services",

  description:
    "Explore Alturio Group's consulting and advisory services including Virtual CFO, Virtual COO, internal audit, tax planning, business process reengineering, AI transformation, and strategic business consulting.",

  keywords: [
    "Business Consulting Services",
    "Virtual CFO",
    "Virtual COO",
    "Internal Audit",
    "Tax Planning",
    "Business Advisory",
    "AI Transformation",
    "Process Improvement",
    "Financial Consulting",
  ],

  alternates: {
    canonical: "https://alturiogroup.com/services",
  },

  openGraph: {
    title: "Business Consulting Services | Alturio Group",

    description:
      "Explore Alturio Group's consulting, finance, operations, audit, tax, and AI transformation services.",

    url: "https://alturiogroup.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}