import Link from "next/link";
import { faqItems } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/home/FaqAccordion";

function FaqPageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function FaqSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 border-t border-border-subtle bg-surface-primary py-24 lg:py-36"
    >
      <FaqPageJsonLd />
      <Container wide as="div" className="max-w-3xl">
        <SectionHeading label="FAQ" title="常見問題" />

        <div className="mt-16 lg:mt-20">
          <FaqAccordion />
        </div>

        <div className="mt-16 border-t border-border-subtle pt-12 lg:mt-20 lg:pt-14">
          <p className="text-lg font-medium tracking-[-0.01em] text-foreground">
            還有其他活動需求？
          </p>
          <p className="mt-4 max-w-lg text-[15px] leading-[1.85] text-muted">
            歡迎提供活動日期、地點與需求，我們會依活動狀況協助評估適合的方案。
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex items-center bg-foreground px-7 py-3 text-[13px] font-medium tracking-[0.06em] text-surface-primary transition-colors duration-300 hover:bg-foreground/90"
          >
            立即詢價 →
          </Link>
        </div>
      </Container>
    </section>
  );
}
