import { services } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-t border-border-subtle bg-surface-primary py-24 lg:py-36"
    >
      <Container wide as="div">
        <SectionHeading label="Services" title="服務項目" />

        <div className="mx-auto mt-16 max-w-[1280px] lg:mt-24">
          <ul className="border-b border-border-subtle">
            {services.map((service) => (
              <li key={service.id}>
                <article className="group flex min-h-[100px] flex-col justify-center border-t border-border-subtle py-8 transition-[transform,color] duration-300 hover:translate-x-1 lg:min-h-[120px] lg:grid lg:grid-cols-[5rem_minmax(0,1fr)_3rem] lg:items-center lg:gap-x-10 lg:py-10">
                  <p className="font-display text-[13px] tracking-[0.2em] text-muted lg:text-sm">
                    {service.number}
                  </p>

                  <div className="mt-3 lg:mt-0">
                    <h3 className="text-[1.5rem] font-medium leading-tight tracking-[-0.01em] text-foreground transition-colors duration-300 group-hover:text-foreground sm:text-[1.625rem] lg:text-[2rem] lg:font-semibold">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-muted transition-colors duration-300 group-hover:text-muted-light sm:text-[15px] lg:mt-2 lg:text-base">
                      {service.summary}
                    </p>
                  </div>

                  <span
                    className="mt-5 self-end text-lg text-muted transition-[transform,color] duration-300 group-hover:translate-x-1 group-hover:text-foreground lg:mt-0 lg:justify-self-end lg:text-xl"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
