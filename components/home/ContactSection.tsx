import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { InquiryForm } from "@/components/home/InquiryForm";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border-subtle bg-surface-primary py-24 lg:py-36"
    >
      <Container wide as="div">
        <div className="grid min-w-0 gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-28">
          <Reveal className="min-w-0 lg:max-w-md">
            <SectionHeading
              number="05"
              label="Contact"
              title="開始規劃你的活動"
              description="告訴我們活動日期、場地、人數與需求，匠點娛樂將依活動條件提供燈光、音響與現場技術方案。"
              align="left"
            />
            <div className="mt-10">
              <Button href="#inquiry-form" variant="primary" className="w-full sm:w-auto">
                立即詢價 →
              </Button>
              <p className="mt-8 text-[13px] tracking-[0.06em] text-muted">
                服務地區：台北・新北・桃園・新竹・全台接案
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="min-w-0 lg:max-w-xl lg:justify-self-end lg:w-full">
            <div id="inquiry-form" className="scroll-mt-24">
              <InquiryForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
