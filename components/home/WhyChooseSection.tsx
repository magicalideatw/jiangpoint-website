import { whyChooseItems } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseSection() {
  return (
    <section className="border-t border-border-subtle bg-surface-primary py-24 lg:py-36">
      <Container wide as="div">
        <Reveal>
          <SectionHeading
            label="Why Us"
            title="為什麼選擇匠點？"
            align="center"
            className="mx-auto text-center"
          />
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-20 grid gap-px bg-border-subtle sm:grid-cols-2 lg:grid-cols-5">
            {whyChooseItems.map((item, index) => (
              <li
                key={item.id}
                className="flex flex-col items-center bg-surface-primary px-6 py-12 text-center"
              >
                <span className="font-display text-[11px] tracking-[0.24em] text-accent">
                  0{index + 1}
                </span>
                <p className="mt-5 text-[14px] font-medium leading-relaxed tracking-[0.02em] text-foreground">
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
