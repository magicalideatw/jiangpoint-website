import Image from "next/image";
import { aboutServiceHighlights, siteConfig } from "@/lib/site-config";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  const { brand } = siteConfig;
  const aboutPhoto = images.about;

  return (
    <section id="about" className="scroll-mt-24 border-t border-border-subtle bg-surface-primary py-24 lg:py-36">
      <Container wide as="div">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-20 xl:gap-24">
          <Reveal className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface-elevated sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src={aboutPhoto.src}
                alt={aboutPhoto.alt}
                fill
                className="object-cover"
                style={{ objectPosition: aboutPhoto.objectPosition }}
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-6 lg:col-start-1 lg:row-start-1">
            <SectionHeading number="04" label="About" title="關於匠點" />
            <div className="mt-10 border-t border-border-subtle pt-9 lg:mt-12 lg:pt-10">
              <p className="text-lg font-medium tracking-[0.02em] text-foreground">
                {brand.nameZh}
                <span className="mt-2 block font-display text-[11px] font-normal tracking-[0.28em] text-muted uppercase">
                  {brand.nameEn}
                </span>
              </p>
              <div className="mt-8 space-y-5 lg:mt-9 lg:space-y-6">
                {brand.about.map((paragraph) => (
                  <p key={paragraph} className="text-[15px] leading-[1.85] text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="mt-10 border-t border-border-subtle pt-8 text-[13px] leading-relaxed tracking-[0.04em] text-foreground/85 lg:mt-12 lg:pt-9">
                {aboutServiceHighlights.join("｜")}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
