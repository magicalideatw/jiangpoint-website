import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  number?: string;
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  number,
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="font-display text-[11px] font-medium tracking-[0.32em] text-muted uppercase">
        {number ? `${number} / ${label}` : label}
      </p>
      <h2 className="mt-5 text-3xl font-semibold tracking-[-0.01em] text-foreground sm:text-4xl lg:text-[2.625rem] lg:leading-[1.15]">
        {title}
      </h2>
      <div
        className={cn(
          "mt-6 h-px w-10 bg-foreground/20",
          align === "center" && "mx-auto",
        )}
        aria-hidden="true"
      />
      {description && (
        <p
          className={cn(
            "mt-6 text-[15px] leading-[1.85] text-muted",
            align === "center" ? "mx-auto max-w-lg" : "max-w-xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
