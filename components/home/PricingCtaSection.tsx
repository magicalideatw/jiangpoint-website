import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const textLinkClass =
  "inline-block text-[13px] tracking-[0.04em] text-foreground transition-colors duration-300 hover:text-muted";

export function PricingCtaSection() {
  return (
    <section className="border-t border-border-subtle bg-surface-primary py-28 lg:py-40">
      <Container wide as="div">
        <Reveal>
          <SectionHeading
            label="PRICING"
            title="想先了解活動預算？"
            description="查看匠點娛樂的服務價格與基本方案，或直接提供活動資訊，我們協助評估適合的燈光音響方案。"
            align="center"
            className="mx-auto max-w-2xl"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-14 lg:mt-16">
            <Link href="/pricing" className={textLinkClass}>
              查看服務價格 →
            </Link>
            <Link href="/#contact" className={textLinkClass}>
              立即詢價 →
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
