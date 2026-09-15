import Image from "next/image";
import { cn } from "@/lib/utils";
import type { GuideImageAsset } from "@/lib/guide/types";

type GuideFigureProps = {
  image: GuideImageAsset;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function GuideFigure({
  image,
  priority = false,
  className,
  sizes = "(max-width: 820px) 100vw, 820px",
}: GuideFigureProps) {
  return (
    <figure className={cn("min-w-0", className)}>
      <div className="relative aspect-video w-full overflow-hidden bg-surface-elevated">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
          style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
        />
      </div>
      {image.caption && (
        <figcaption className="mt-3 text-[13px] leading-relaxed text-muted-light">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}
