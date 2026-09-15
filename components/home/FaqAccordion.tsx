"use client";

import { useState } from "react";
import { faqItems } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="border-b border-border-subtle">
      {faqItems.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id} className="border-t border-border-subtle">
            <h3 className="m-0">
              <button
                type="button"
                id={`faq-trigger-${item.id}`}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${item.id}`}
                className="flex w-full items-start gap-4 py-6 text-left transition-colors duration-300 hover:text-foreground sm:gap-6 sm:py-7"
                onClick={() => setOpenId(isOpen ? null : item.id)}
              >
                <span className="w-8 shrink-0 pt-0.5 font-display text-[12px] tracking-[0.18em] text-muted sm:w-10 sm:text-[13px]">
                  {item.number}
                </span>
                <span className="flex-1 text-[16px] font-medium leading-snug text-foreground sm:text-lg lg:text-xl">
                  {item.question}
                </span>
                <span
                  className="w-6 shrink-0 pt-0.5 text-center text-lg leading-none text-muted"
                  aria-hidden="true"
                >
                  {isOpen ? "−" : "＋"}
                </span>
              </button>
            </h3>

            <div
              id={`faq-panel-${item.id}`}
              role="region"
              aria-labelledby={`faq-trigger-${item.id}`}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-7 pl-12 pr-2 text-[14px] leading-[1.85] text-muted sm:pl-16 sm:pb-8 sm:text-[15px] lg:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
