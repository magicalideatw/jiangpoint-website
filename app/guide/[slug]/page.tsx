import { notFound } from "next/navigation";
import { createArticleMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import {
  getAllGuideSlugs,
  getGuideArticle,
  getRelatedGuideArticles,
} from "@/lib/guide/articles";
import { absoluteGuideImageUrl, getGuideArticleImages } from "@/lib/guide/images";
import { Container } from "@/components/ui/Container";
import { GuideFigure } from "@/components/guide/GuideFigure";
import { GuideArticleHeader } from "@/components/guide/GuideArticleHeader";
import { GuideArticleBody } from "@/components/guide/GuideArticleBody";
import {
  GuideInquiryCTA,
  GuideRelatedReading,
} from "@/components/guide/GuideArticleFooter";
import { GuideArticleJsonLd } from "@/components/guide/GuideJsonLd";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getGuideArticle(slug);
  if (!article) return {};

  const images = getGuideArticleImages(article.slug);

  return createArticleMetadata({
    seoTitle: article.seoTitle,
    description: article.metaDescription,
    path: `/guide/${article.slug}`,
    ogImage: images
      ? absoluteGuideImageUrl(images.hero.src, siteConfig.url)
      : undefined,
    ogImageAlt: images?.hero.alt,
  });
}

export default async function GuideArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getGuideArticle(slug);
  if (!article) notFound();

  const related = getRelatedGuideArticles(slug, 3);
  const images = getGuideArticleImages(slug);

  return (
    <>
      <GuideArticleJsonLd article={article} />
      <article className="bg-surface-primary pt-24 lg:pt-28">
        <Container as="div" className="max-w-[820px] pb-24 lg:pb-32">
          <GuideArticleHeader article={article} />
          {images?.hero && (
            <GuideFigure
              image={images.hero}
              priority
              className="mt-10 lg:mt-12"
            />
          )}
          <div className="mt-10 lg:mt-12">
            <GuideArticleBody
              intro={article.intro}
              sections={article.sections}
              inlineImages={images?.inline ?? []}
            />
          </div>
          {images?.closing && (
            <GuideFigure image={images.closing} className="mt-12 lg:mt-14" />
          )}
          <GuideRelatedReading articles={related} />
          <GuideInquiryCTA />
        </Container>
      </article>
    </>
  );
}
