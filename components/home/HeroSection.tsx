import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { heroImage } from "@/lib/images";

export function HeroSection() {
  const { brand } = siteConfig;

  return (
    <section className="relative w-full pt-16 lg:pt-[72px]">
      <div className="relative h-[580px] w-full overflow-hidden sm:h-[620px] lg:h-[680px]">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          className="object-cover animate-fade-up"
          style={{ objectPosition: "65% 52%" }}
          sizes="100vw"
        />

        {/* 整體降低亮度約 22%，右側仍保留現場細節 */}
        <div
          className="pointer-events-none absolute inset-0 bg-black/[0.22]"
          aria-hidden="true"
        />

        {/* 左側 50～60% 明顯暗部，右側接近透明 */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.46)_15%,rgba(0,0,0,0.34)_30%,rgba(0,0,0,0.2)_45%,rgba(0,0,0,0.08)_55%,transparent_62%)]"
          aria-hidden="true"
        />

        {/* 左下方強化閱讀區，確保標題清晰 */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_12%_92%,rgba(0,0,0,0.52)_0%,rgba(0,0,0,0.3)_38%,transparent_72%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.18)_28%,transparent_48%)] sm:bg-[linear-gradient(to_top,rgba(0,0,0,0.34)_0%,rgba(0,0,0,0.12)_24%,transparent_42%)]"
          aria-hidden="true"
        />

        <div className="absolute inset-x-[7%] bottom-[12%] max-w-lg sm:max-w-xl lg:max-w-2xl">
          <p className="mb-5 text-[18px] font-medium leading-none text-white sm:mb-6 lg:text-[22px]">
            <span>{brand.nameZh}</span>
            <span aria-hidden="true">｜</span>
            <span className="font-display tracking-[0.14em]">{brand.nameEn}</span>
          </p>

          <h1 className="text-[2rem] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl lg:text-[3.5rem]">
            {brand.headline}
          </h1>

          <p className="mt-5 text-sm leading-relaxed tracking-[0.02em] text-white sm:text-base">
            {brand.tagline}
          </p>

          <p className="mt-4 text-[14px] tracking-[0.14em] text-white/70 sm:text-[15px]">
            全台接案
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Link
              href="/#contact"
              className="inline-flex w-fit items-center justify-center bg-white px-6 py-2.5 text-[13px] font-medium tracking-[0.06em] text-foreground transition-colors duration-300 hover:bg-white/90"
            >
              立即詢價
            </Link>
            <Link
              href="/#projects"
              className="inline-flex w-fit items-center text-[13px] tracking-[0.04em] text-white transition-colors duration-300 hover:text-white/90"
            >
              查看案例 →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
