import type { MetadataRoute } from "next";
import { getAllGuideSlugs } from "@/lib/guide/articles";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const guideEntries: MetadataRoute.Sitemap = [
    {
      url: `${base}/guide`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...getAllGuideSlugs().map((slug) => ({
      url: `${base}/guide/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...guideEntries,
  ];
}
