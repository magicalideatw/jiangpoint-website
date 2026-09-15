import Link from "next/link";
import { GuideFigure } from "@/components/guide/GuideFigure";
import type { GuideImageAsset, GuideInlineImage, GuideSection } from "@/lib/guide/types";

function inlineAfterIndex(
  inlineImages: GuideInlineImage[],
  sectionIndex: number,
): GuideImageAsset[] {
  return inlineImages
    .filter((item) => item.afterSectionIndex === sectionIndex)
    .map((item) => item.image);
}

export function GuideArticleBody({
  intro,
  sections,
  inlineImages = [],
}: {
  intro: string[];
  sections: GuideSection[];
  inlineImages?: GuideInlineImage[];
}) {
  return (
    <div className="guide-prose">
      <div className="space-y-4">
        {intro.map((paragraph) => (
          <p key={paragraph} className="text-[15px] leading-[1.9] text-muted lg:text-[16px]">
            {paragraph}
          </p>
        ))}
      </div>

      {sections.map((section, sectionIndex) => (
        <section key={section.heading} className="mt-12 lg:mt-14">
          <h2 className="text-xl font-semibold tracking-[-0.01em] text-foreground lg:text-[1.375rem]">
            {section.heading}
          </h2>
          {section.paragraphs?.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 text-[15px] leading-[1.9] text-muted lg:mt-5 lg:text-[16px]"
            >
              {paragraph}
            </p>
          ))}
          {section.list && (
            <ul className="mt-4 list-inside list-disc space-y-2 text-[15px] leading-[1.85] text-muted marker:text-muted-light lg:mt-5 lg:text-[16px]">
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {section.links && section.links.length > 0 && (
            <ul className="mt-5 space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] tracking-[0.02em] text-foreground underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {inlineAfterIndex(inlineImages, sectionIndex).map((image) => (
            <GuideFigure key={image.src} image={image} className="mt-8 lg:mt-10" />
          ))}
        </section>
      ))}
    </div>
  );
}
