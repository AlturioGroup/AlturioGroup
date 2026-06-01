import { MetadataRoute } from "next";
import { ALL_SERVICES } from "@/lib/services";

const BASE_URL = "https://alturiogroup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },

    ...ALL_SERVICES.map((service) => ({
      url:
        service.seo?.canonical ??
        `${BASE_URL}/services/${service.slug}`,

      lastModified: now,

      changeFrequency: "monthly" as const,

      priority: 0.9,
    })),
  ];

  return routes;
}