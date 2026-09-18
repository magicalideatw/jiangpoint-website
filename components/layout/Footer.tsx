import Link from "next/link";
import { mainNav, serviceCoverage, siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Footer() {
  const { brand } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-surface-primary">
      <Container wide as="div" className="py-16 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="text-xl font-semibold tracking-[0.02em] text-foreground">
              {brand.nameZh}
            </p>
            <p className="mt-2 font-display text-[11px] tracking-[0.28em] text-muted uppercase">
              {brand.nameEn}
            </p>
            <p className="mt-8 max-w-sm text-[14px] leading-[1.85] text-muted">
              {brand.headline}
              <br />
              {brand.tagline}
            </p>
            <p className="mt-5 text-[14px] text-muted-light">
              服務地區｜{serviceCoverage.scope}
              <br />
              主要服務台北、新北、桃園、新竹
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="font-display text-[11px] tracking-[0.28em] text-muted uppercase">
              Navigation
            </p>
            <ul className="mt-6 space-y-3">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[14px] text-muted transition-colors duration-300 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="font-display text-[11px] tracking-[0.28em] text-muted uppercase">
              Contact
            </p>
            <p className="mt-6 text-lg font-medium tracking-[0.02em] text-foreground">
              開始規劃你的活動
            </p>
            <p className="mt-4 max-w-sm text-[14px] leading-[1.85] text-muted">
              告訴我們活動日期、場地、人數與需求，
              <br className="hidden sm:inline" />
              匠點娛樂將依活動條件提供燈光、音響與現場技術方案。
            </p>
            <Button href="/#inquiry-form" variant="primary" className="mt-8 w-full sm:w-auto">
              立即詢價 →
            </Button>
          </div>
        </div>

        <div className="mt-16 border-t border-border-subtle pt-8 text-xs text-muted">
          <p>
            © {year} {brand.nameZh}（{brand.nameEn}）
          </p>
        </div>

        <p className="mt-6 text-center text-[11px] tracking-[0.04em] text-muted-light">
          網站製作｜
          <Link
            href="https://www.sitecraft.com.tw/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-light underline-offset-4 transition-colors hover:text-muted hover:underline"
          >
            好站製所 SITECRAFT
          </Link>
        </p>
      </Container>
    </footer>
  );
}
