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

export type GuideSectionAction = {
  href: string;
  label: string;
  variant?: "button" | "link";
};

export type GuideSubsection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  links?: GuideSectionLink[];
};

export type GuideSection = {
  heading: string;
  paragraphs?: string[];
  /** 顯示在 subsections 之後的段落 */
  tailParagraphs?: string[];
  list?: string[];
  links?: GuideSectionLink[];
  subsections?: GuideSubsection[];
  actions?: GuideSectionAction[];
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
  /** 文章更新日（Article Schema dateModified） */
  updatedAt?: string;
  intro: string[];
  sections: GuideSection[];
  relatedSlugs: string[];
};
