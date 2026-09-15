import Link from "next/link";
import { Button } from "@/components/ui/Button";
import type { GuideArticle } from "@/lib/guide/types";

export function GuideRelatedReading({ articles }: { articles: GuideArticle[] }) {
  if (articles.length === 0) return null;

  return (
    <div className="mt-16 border-t border-border-subtle pt-12 lg:mt-20 lg:pt-14">
      <p className="font-display text-[11px] font-medium tracking-[0.28em] text-muted uppercase">
        相關閱讀
      </p>
      <ul className="mt-6 space-y-4">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/guide/${article.slug}`}
              className="text-[15px] text-foreground underline-offset-4 hover:underline"
            >
              {article.h1}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function GuideInquiryCTA() {
  return (
    <div className="mt-14 border-t border-border-subtle pt-12 lg:mt-16 lg:pt-14">
      <p className="text-lg font-medium tracking-[0.02em] text-foreground">
        有活動燈光音響需求？
      </p>
      <p className="mt-4 max-w-lg text-[15px] leading-[1.9] text-muted">
        提供活動日期、地點與基本需求，匠點娛樂會依活動條件協助評估適合的方案。
      </p>
      <Button href="/#contact" variant="primary" className="mt-8 w-full sm:w-auto">
        立即詢價 →
      </Button>
    </div>
  );
}
