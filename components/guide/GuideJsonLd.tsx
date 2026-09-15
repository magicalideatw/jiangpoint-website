import { siteConfig } from "@/lib/site-config";
import type { GuideArticle } from "@/lib/guide/types";
import { guideArticles } from "@/lib/guide/articles";
import { absoluteGuideImageUrl, getGuideArticleImages } from "@/lib/guide/images";

export function GuideCollectionJsonLd() {
  const { url, brand } = siteConfig;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "活動指南",
    description:
      "從活動音響、舞台燈光、設備出租到現場音控，整理活動規劃中常見的設備與技術問題。",
    url: `${url}/guide`,
    isPartOf: {
      "@type": "WebSite",
      name: brand.nameZh,
      url,
    },
    hasPart: guideArticles.map((article) => ({
      "@type": "Article",
      headline: article.h1,
      url: `${url}/guide/${article.slug}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function GuideArticleJsonLd({ article }: { article: GuideArticle }) {
  const { url, brand } = siteConfig;
  const pageUrl = `${url}/guide/${article.slug}`;
  const images = getGuideArticleImages(article.slug);
  const imageUrl = images
    ? absoluteGuideImageUrl(images.hero.src, url)
    : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.h1,
    description: article.metaDescription,
    datePublished: article.publishedAt,
    ...(imageUrl ? { image: [imageUrl] } : {}),
    author: {
      "@type": "Organization",
      name: brand.nameZh,
      url,
    },
    publisher: {
      "@type": "Organization",
      name: brand.nameZh,
      url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
