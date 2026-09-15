import { eventTypes } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function EventTypesSection() {
  return (
    <section className="border-t border-border-subtle bg-surface-secondary py-20 lg:py-28">
      <Container wide as="div">
        <Reveal>
          <div className="flex flex-col gap-8 border-b border-border-subtle pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-display text-[11px] tracking-[0.32em] text-muted uppercase">
                Event Types
              </p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.01em] text-foreground sm:text-3xl">
                我們可以協助哪些活動？
              </h2>
            </div>
            <p className="max-w-md text-[15px] leading-[1.85] text-muted">
              依活動性質、場地條件與規模，評估最合適的設備配置方案。
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <ul className="mt-12 grid grid-cols-2 gap-px bg-border-subtle sm:grid-cols-3 lg:grid-cols-5">
            {eventTypes.map((type) => (
              <li
                key={type}
                className="bg-surface-secondary px-4 py-7 text-center text-[14px] tracking-[0.02em] text-muted transition-colors duration-300 hover:bg-surface-primary hover:text-foreground"
              >
                {type}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
