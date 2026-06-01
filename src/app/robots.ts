import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",

        allow: [
          "/",
          "/services",
          "/services/",
        ],

        disallow: [
          "/api/",
        ],
      },
    ],

    sitemap: "https://alturiogroup.com/sitemap.xml",

    host: "https://alturiogroup.com",
  };
}