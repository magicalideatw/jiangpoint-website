import type { Metadata } from "next";
import { Inter, Noto_Sans_TC } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { defaultMetadata } from "@/lib/metadata";
import { serviceAreas, siteConfig } from "@/lib/site-config";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

function OrganizationJsonLd() {
  const { brand, url, contact } = siteConfig;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.nameZh,
    alternateName: brand.nameEn,
    url,
    description: brand.description,
    areaServed: [
      { "@type": "Country", name: "Taiwan" },
      ...serviceAreas.map((area) => ({
        "@type": "AdministrativeArea",
        name: area,
      })),
    ],
    email: contact.email.startsWith("[") ? undefined : contact.email,
    telephone: contact.phone.startsWith("[") ? undefined : contact.phone,
    address: contact.address.startsWith("[")
      ? undefined
      : {
          "@type": "PostalAddress",
          streetAddress: contact.address,
        },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteConfig.locale}
      className={`${notoSansTC.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <OrganizationJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
