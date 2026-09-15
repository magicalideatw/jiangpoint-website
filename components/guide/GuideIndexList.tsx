import Image from "next/image";
import Link from "next/link";
import { guideCategories } from "@/lib/guide/categories";
import { guideArticles } from "@/lib/guide/articles";
import { getGuideCategoryLabel } from "@/lib/guide/categories";
import { getGuideArticleImages } from "@/lib/guide/images";

export function GuideIndexList() {
  return (
    <div className="mt-16 lg:mt-20">
      <div className="mb-14 hidden gap-10 border-b border-border-subtle pb-10 lg:grid lg:grid-cols-4">
        {guideCategories.map((cat) => (
          <div key={cat.id}>
            <p className="font-display text-[11px] tracking-[0.28em] text-muted-light">
              {cat.number}
            </p>
            <p className="mt-2 text-[13px] tracking-[0.04em] text-muted">{cat.label}</p>
          </div>
        ))}
      </div>

      <ul className="divide-y divide-border-subtle border-t border-border-subtle">
        {guideArticles.map((article) => {
          const images = getGuideArticleImages(article.slug);
          const hero = images?.hero;

          return (
            <li key={article.slug}>
              <Link
                href={`/guide/${article.slug}`}
                className="group flex flex-col gap-8 py-10 lg:flex-row lg:items-start lg:gap-12 lg:py-12"
              >
                {hero && (
                  <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-surface-elevated lg:w-[300px] xl:w-[320px]">
                    <Image
                      src={hero.src}
                      alt={hero.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 320px"
                      className="object-cover transition-opacity duration-300 group-hover:opacity-95"
                      style={
                        hero.objectPosition
                          ? { objectPosition: hero.objectPosition }
                          : undefined
                      }
                    />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] tracking-[0.06em] text-muted">
                    {getGuideCategoryLabel(article.categoryId)}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold tracking-[-0.01em] text-foreground transition-colors group-hover:text-foreground/80 lg:text-[1.375rem]">
                    {article.h1}
                  </h2>
                  <p className="mt-4 max-w-2xl text-[15px] leading-[1.85] text-muted">
                    {article.excerpt}
                  </p>
                  <span className="mt-5 inline-block text-[13px] tracking-[0.06em] text-foreground">
                    閱讀文章 →
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
