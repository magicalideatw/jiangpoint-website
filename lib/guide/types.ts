export type GuideCategoryId = "sound" | "lighting" | "planning" | "election";

export type GuideCategory = {
  id: GuideCategoryId;
  number: string;
  label: string;
};

export type GuideSectionLink = {
  href: string;
  label: string;
};

export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  links?: GuideSectionLink[];
};

export type GuideImageAsset = {
  src: string;
  alt: string;
  caption?: string;
  objectPosition?: string;
};

export type GuideInlineImage = {
  afterSectionIndex: number;
  image: GuideImageAsset;
};

export type GuideArticleImages = {
  hero: GuideImageAsset;
  inline: GuideInlineImage[];
  closing?: GuideImageAsset;
};

export type GuideArticle = {
  slug: string;
  categoryId: GuideCategoryId;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  excerpt: string;
  publishedAt: string;
  intro: string[];
  sections: GuideSection[];
  relatedSlugs: string[];
};
