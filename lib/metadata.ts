import type { Metadata } from "next";
import { siteConfig } from "./site-config";

const { brand, url, locale } = siteConfig;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: `${brand.nameZh}｜${brand.nameEn}`,
    template: `%s｜${brand.nameZh}`,
  },
  description: brand.description,
  keywords: [
    "活動燈光音響",
    "設備出租",
    "現場技術服務",
    "活動整合",
    "全台接案",
    "全台音響出租",
    "全台活動燈光音響",
    "台北活動音響",
    "台北音響出租",
    "新北活動音響",
    "新北音響出租",
    "桃園活動音響",
    "桃園音響出租",
    "新竹活動音響",
    "新竹音響出租",
    "匠點娛樂",
    "JIANG POINT",
  ],
  authors: [{ name: brand.nameZh }],
  creator: brand.nameZh,
  openGraph: {
    type: "website",
    locale,
    url,
    siteName: brand.nameZh,
    title: `${brand.nameZh}｜${brand.nameEn}`,
    description: brand.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.nameZh}｜${brand.nameEn}`,
    description: brand.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export function createPageMetadata({
  title,
  description,
  path = "",
  titleAbsolute,
}: {
  title?: string;
  description?: string;
  path?: string;
  /** 完整 title，略過 layout template（首頁 SEO 用） */
  titleAbsolute?: string;
}): Metadata {
  const baseUrl = url.replace(/\/$/, "");
  const canonical = path === "/" ? `${baseUrl}/` : `${baseUrl}${path}`;
  const pageDescription = description ?? brand.description;
  const ogTitle = titleAbsolute ?? `${title}｜${brand.nameZh}`;

  return {
    title: titleAbsolute ? { absolute: titleAbsolute } : title,
    description: pageDescription,
    alternates: {
      canonical,
    },
    openGraph: {
      title: ogTitle,
      description: pageDescription,
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: pageDescription,
    },
  };
}

export function createArticleMetadata({
  seoTitle,
  description,
  path,
  ogImage,
  ogImageAlt,
}: {
  seoTitle: string;
  description: string;
  path: string;
  ogImage?: string;
  ogImageAlt?: string;
}): Metadata {
  const canonical = `${url}${path}`;
  const ogImages = ogImage
    ? [{ url: ogImage, width: 1200, height: 675, alt: ogImageAlt ?? seoTitle }]
    : undefined;

  return {
    title: { absolute: seoTitle },
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: seoTitle,
      description,
      url: canonical,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}
