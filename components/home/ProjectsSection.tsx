import Image from "next/image";
import { featuredProject } from "@/lib/site-config";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProjectsSection() {
  const projectImage = images.featuredProject;

  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-surface-primary py-24 lg:py-36"
    >
      <Container wide as="div">
        <Reveal>
          <SectionHeading label="Projects" title="精選案例" />
        </Reveal>

        <Reveal delay={80}>
          <article className="mt-20 lg:mt-28">
            <div className="grid lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14">
              {/* 左側大型照片 65～70% */}
              <div className="lg:col-span-8">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-elevated sm:aspect-[3/2]">
                  <Image
                    src={projectImage.src}
                    alt={projectImage.alt}
                    fill
                    className="image-hover object-cover"
                    style={{ objectPosition: projectImage.objectPosition }}
                    sizes="(max-width: 1024px) 100vw, 68vw"
                  />
                </div>
              </div>

              {/* 右側案例資訊 30～35%，略向下錯開 */}
              <div className="mt-10 lg:col-span-4 lg:mt-20 lg:pl-2 xl:mt-24">
                <p className="font-display text-[11px] tracking-[0.28em] text-muted uppercase">
                  {featuredProject.number}
                </p>

                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.01em] text-foreground sm:text-[1.75rem] lg:text-2xl">
                  {featuredProject.category}
                </h3>

                <p className="mt-2 text-xl font-medium tracking-[-0.01em] text-foreground sm:text-2xl">
                  {featuredProject.title}
                </p>

                <div className="mt-6 h-px w-8 bg-border" aria-hidden="true" />

                <p className="mt-6 text-[15px] leading-[1.85] text-muted">
                  {featuredProject.services}
                </p>

                <span className="mt-10 inline-block text-[13px] tracking-[0.04em] text-foreground">
                  查看案例 →
                </span>
              </div>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
