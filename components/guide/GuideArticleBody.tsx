import Link from "next/link";
import { GuideFigure } from "@/components/guide/GuideFigure";
import { Button } from "@/components/ui/Button";
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
          {section.subsections?.map((subsection) => (
            <div key={subsection.heading} className="mt-8 lg:mt-10">
              <h3 className="text-lg font-medium tracking-[-0.01em] text-foreground lg:text-xl">
                {subsection.heading}
              </h3>
              {subsection.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-[15px] leading-[1.9] text-muted lg:mt-5 lg:text-[16px]"
                >
                  {paragraph}
                </p>
              ))}
              {subsection.list && (
                <ul className="mt-4 list-inside list-disc space-y-2 text-[15px] leading-[1.85] text-muted marker:text-muted-light lg:mt-5 lg:text-[16px]">
                  {subsection.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {subsection.links && subsection.links.length > 0 && (
                <ul className="mt-5 space-y-2">
                  {subsection.links.map((link) => (
                    <li key={`${link.href}-${link.label}`}>
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
            </div>
          ))}
          {section.tailParagraphs?.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 text-[15px] leading-[1.9] text-muted lg:mt-5 lg:text-[16px]"
            >
              {paragraph}
            </p>
          ))}
          {section.links && section.links.length > 0 && (
            <ul className="mt-5 space-y-2">
              {section.links.map((link) => (
                <li key={`${link.href}-${link.label}`}>
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
          {section.actions && section.actions.length > 0 && (
            <div className="mt-8 flex flex-col items-start gap-6 lg:mt-10">
              {section.actions.map((action) =>
                action.variant === "button" ? (
                  <Button
                    key={`${action.href}-${action.label}`}
                    href={action.href}
                    variant="primary"
                    className="w-full sm:w-auto"
                  >
                    {action.label}
                  </Button>
                ) : (
                  <Link
                    key={`${action.href}-${action.label}`}
                    href={action.href}
                    className="text-[14px] tracking-[0.02em] text-foreground underline-offset-4 hover:underline"
                  >
                    {action.label}
                  </Link>
                ),
              )}
            </div>
          )}
          {inlineAfterIndex(inlineImages, sectionIndex).map((image) => (
            <GuideFigure key={image.src} image={image} className="mt-8 lg:mt-10" />
          ))}
        </section>
      ))}
    </div>
  );
}
