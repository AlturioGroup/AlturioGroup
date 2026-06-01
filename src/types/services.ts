// types/services.ts

export type CornerVariant = "tl-br" | "tr-bl";

export interface ServiceSEO {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
}

export interface ServiceOpenGraph {
  title: string;
  description: string;
  image: string;
}

export interface ServiceSearchIntent {
  primaryKeyword: string;
  secondaryKeywords: string[];
}

export interface ServiceFullContent {
  heroSubtitle: string;
  description: string;
  keyBenefits: string[];
  outcomes: string;
  whyItMatters?: string;
  challengesSolved?: string[];
  processOverview?: string;
  whyChooseAlturio?: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: number;
  slug: string;
  category: string;
  tag: string;
  title: string;
  shortDesc: string;
  image: string;
  imageAlt: string;
  roundedCorners: CornerVariant;
  gridClassFull: string;
  idealFor?: string[];
  industries?: string[];
  process?: string[];
  deliverables?: string[];
  relatedServices?: string[];
  faq?: ServiceFAQ[];
  breadcrumb?: { parent: string };
  seo: ServiceSEO;
  openGraph: ServiceOpenGraph;
  searchIntent: ServiceSearchIntent;
  fullContent: ServiceFullContent;
}