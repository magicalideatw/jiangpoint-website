import Link from "next/link";
import { getGuideCategoryLabel } from "@/lib/guide/categories";
import type { GuideArticle } from "@/lib/guide/types";

function formatPublishedDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${y} 年 ${m} 月 ${d} 日`;
}

export function GuideArticleHeader({ article }: { article: GuideArticle }) {
  const categoryLabel = getGuideCategoryLabel(article.categoryId);

  return (
    <header>
      <Link
        href="/guide"
        className="font-display text-[11px] font-medium tracking-[0.32em] text-muted uppercase transition-colors hover:text-foreground"
      >
        Guide
      </Link>
      <p className="mt-6 text-[13px] tracking-[0.06em] text-muted">{categoryLabel}</p>
      <h1 className="mt-5 text-[1.75rem] font-semibold leading-[1.2] tracking-[-0.02em] text-foreground sm:text-[2rem] lg:text-[2.375rem]">
        {article.h1}
      </h1>
      <p className="mt-6 text-[15px] leading-[1.85] text-muted lg:text-[16px]">{article.excerpt}</p>
      <p className="mt-6 text-[13px] text-muted-light">
        發布日期：{formatPublishedDate(article.publishedAt)}
      </p>
      <div className="mt-10 h-px w-full bg-border-subtle" aria-hidden="true" />
    </header>
  );
}
