"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mainNav, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { brand } = siteConfig;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-surface-primary transition-shadow duration-300",
        scrolled ? "shadow-[0_1px_0_0_var(--border-subtle)]" : "",
      )}
    >
      <Container wide as="div" className="flex h-16 items-center justify-between lg:h-[72px]">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-[16px] font-semibold tracking-[0.05em] text-foreground lg:text-[17px]">
            {brand.nameZh}
          </span>
          <span className="mt-1.5 font-display text-[10px] font-normal tracking-[0.3em] text-muted uppercase lg:text-[11px]">
            {brand.nameEn}
          </span>
        </Link>

        <nav
          aria-label="主要導覽"
          className="hidden items-center gap-9 lg:flex"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] tracking-[0.04em] text-muted transition-colors duration-300 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Button href="/#contact" variant="primary" className="px-6 py-2.5">
            立即詢價
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-foreground lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "關閉選單" : "開啟選單"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 8h16M4 16h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      <nav
        id="mobile-nav"
        className={cn(
          "border-t border-border-subtle bg-surface-primary lg:hidden",
          menuOpen ? "block" : "hidden",
        )}
        aria-label="行動版導覽"
      >
        <Container wide as="div" className="flex flex-col py-6">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-border-subtle py-4 text-sm tracking-wide text-muted transition-colors hover:text-foreground"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/#contact" variant="primary" className="mt-6 w-full">
            立即詢價
          </Button>
        </Container>
      </nav>
    </header>
  );
}
