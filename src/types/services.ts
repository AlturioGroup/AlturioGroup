// types/service.ts

export type CornerVariant = "tl-br" | "tr-bl";

export interface ServiceFullContent {
  heroSubtitle: string;
  description: string;
  keyBenefits: string[];
  outcomes: string;
}

export interface Service {
  id: number;
  slug: string;                    // Important for routing: e.g. "virtual-cfo"
  category: string;
  tag: string;
  title: string;
  shortDesc: string;
  image: string;
  imageAlt: string;
  roundedCorners: CornerVariant;
  gridClassFull: string;           // Keep this for the bento grid
  fullContent: ServiceFullContent;
}