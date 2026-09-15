import { serviceCoverage } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
              title="立即詢價"
              description="告訴我們您的活動需求，我們將依活動規模、場地與設備需求協助評估。"
              align="left"
            />
            <div className="mt-10">
              <p className="text-[13px] tracking-[0.06em] text-foreground">
                {serviceCoverage.contactHeading}
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-muted">
                {serviceCoverage.contactNote}
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="min-w-0 lg:max-w-xl lg:justify-self-end lg:w-full">
            <InquiryForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
