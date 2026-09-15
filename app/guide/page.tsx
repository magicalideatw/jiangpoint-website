import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GuideIndexList } from "@/components/guide/GuideIndexList";
import { GuideCollectionJsonLd } from "@/components/guide/GuideJsonLd";

export const metadata = createPageMetadata({
  title: "活動指南",
  description:
    "從活動音響、舞台燈光、設備出租到現場音控，整理活動規劃中常見的設備與技術問題，協助主辦單位在活動前了解需求，找到適合的燈光音響方案。",
  path: "/guide",
});

export default function GuideIndexPage() {
  return (
    <>
      <GuideCollectionJsonLd />
      <div className="border-b border-border-subtle bg-surface-primary pt-24 lg:pt-28">
        <Container as="div" className="max-w-3xl pb-20 lg:pb-24">
          <SectionHeading
            label="Guide"
            title="活動指南"
            description="活動燈光音響規劃指南"
          />
          <p className="mt-8 max-w-2xl text-[15px] leading-[1.9] text-muted lg:text-[16px]">
            從活動音響、舞台燈光、設備出租到現場音控，整理活動規劃中常見的設備與技術問題，
            協助主辦單位在活動前了解需求，找到適合的燈光音響方案。
          </p>
        </Container>
      </div>
      <Container as="div" className="max-w-3xl bg-surface-primary pb-24 lg:pb-32">
        <GuideIndexList />
      </Container>
    </>
  );
}
