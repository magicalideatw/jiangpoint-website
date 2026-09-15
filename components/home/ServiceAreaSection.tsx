import { seoContentArticles } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type SeoArticleProps = {
  title: string;
  subtitle: string;
  paragraphs: readonly string[];
  featured?: boolean;
  className?: string;
};

function SeoArticle({ title, subtitle, paragraphs, featured, className }: SeoArticleProps) {
  return (
    <article className={cn("min-w-0", className)}>
      <h2
        className={cn(
          "font-semibold tracking-[-0.01em] text-foreground",
          featured
            ? "text-[2rem] leading-[1.2] sm:text-[2.25rem] lg:text-[2.5rem]"
            : "text-2xl leading-[1.25] lg:text-[1.75rem]",
        )}
      >
        {title}
      </h2>
      <h3 className="mt-4 text-[13px] font-normal tracking-[0.06em] text-muted">
        {subtitle}
      </h3>
      <div className="mt-5 space-y-4 lg:mt-6">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-[15px] leading-[1.9] text-muted lg:text-[16px]">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}

export function ServiceAreaSection() {
  const [featured, ...rest] = seoContentArticles;
  const gridArticles = rest.slice(0, 4);
  const closing = rest[4];

  return (
    <section
      aria-label="SEO 服務內容"
      className="border-t border-border-subtle bg-surface-primary py-24 lg:py-32"
    >
      <Container wide as="div" className="max-w-6xl">
        <SeoArticle
          featured
          title={featured.title}
          subtitle={featured.subtitle}
          paragraphs={featured.paragraphs}
          className="max-w-3xl border-b border-border-subtle pb-14 lg:pb-16"
        />

        <div className="mt-14 divide-y divide-border-subtle lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-x-20 lg:gap-y-16 lg:divide-y-0 xl:grid-cols-3">
          {gridArticles.map((article) => (
            <SeoArticle
              key={article.id}
              title={article.title}
              subtitle={article.subtitle}
              paragraphs={article.paragraphs}
              className="max-w-xl py-14 first:pt-0 lg:py-0 lg:pr-4"
            />
          ))}
        </div>

        {closing && (
          <SeoArticle
            title={closing.title}
            subtitle={closing.subtitle}
            paragraphs={closing.paragraphs}
            className="max-w-3xl border-t border-border-subtle pt-14 lg:pt-16"
          />
        )}
      </Container>
    </section>
  );
}
