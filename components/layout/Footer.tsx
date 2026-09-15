import Link from "next/link";
import { mainNav, serviceCoverage, siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const { brand, contact } = siteConfig;
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
            <ul className="mt-6 space-y-3 text-[14px] text-muted">
              <li>{contact.phone}</li>
              <li>{contact.email}</li>
              <li>{contact.line}</li>
              <li>{contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border-subtle pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {brand.nameZh}（{brand.nameEn}）
          </p>
          <p>部分內容為 placeholder，待正式資料提供後更新。</p>
        </div>
      </Container>
    </footer>
  );
}
