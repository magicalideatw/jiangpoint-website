import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { avBasicTiers, priceFactors } from "@/lib/pricing-content";

function PriceBlock({
  title,
  price,
  children,
}: {
  title: string;
  price?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border-subtle pt-14 lg:pt-16">
      <h2 className="text-xl font-semibold tracking-[-0.01em] text-foreground lg:text-[1.375rem]">
        {title}
      </h2>
      {price && (
        <p className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-foreground lg:text-[1.75rem]">
          {price}
        </p>
      )}
      <div className="mt-5 space-y-4 text-[15px] leading-[1.9] text-muted lg:text-[16px]">
        {children}
      </div>
    </section>
  );
}

function TierList({ items }: { items: readonly { duration: string; price: string }[] }) {
  return (
    <ul className="mt-6 divide-y divide-border-subtle border-y border-border-subtle">
      {items.map((item) => (
        <li
          key={item.duration}
          className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
        >
          <span className="text-[15px] text-foreground">{item.duration}</span>
          <span className="text-xl font-semibold tracking-[-0.02em] text-foreground sm:text-2xl">
            {item.price}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function PricingPageContent() {
  return (
    <div className="bg-surface-primary">
      <header className="border-b border-border-subtle pt-24 lg:pt-28">
        <Container as="div" className="max-w-3xl pb-16 lg:pb-20">
          <SectionHeading
            label="Pricing"
            title="活動燈光音響價格"
            description="了解匠點娛樂的服務價格與基本方案。"
          />
          <p className="mt-6 max-w-2xl text-[15px] leading-[1.9] text-muted lg:text-[16px]">
            實際費用將依活動日期、地點、規模、設備需求與服務時間評估。
          </p>
        </Container>
      </header>

      <Container as="div" className="max-w-3xl pb-24 lg:pb-32">
        <section className="pt-14 lg:pt-16">
          <h2 className="text-xl font-semibold tracking-[-0.01em] text-foreground lg:text-[1.375rem]">
            活動燈光音響
          </h2>
          <p className="mt-3 text-[13px] tracking-[0.06em] text-muted">基本服務價格</p>
          <TierList items={avBasicTiers} />
          <p className="mt-6 text-[15px] leading-[1.9] text-muted lg:text-[16px]">
            基本方案可依活動需求配置音響、燈光及相關設備。
            若需要現場音控、架設、測試或技術人員，將依實際需求評估。
          </p>
        </section>

        <PriceBlock title="活動音響" price="NT$5,000 起">
          <p>企業活動、校園活動、講座、社區活動、小型表演。</p>
          <p>
            包含可依需求配置活動音響、麥克風、混音設備、喇叭配置、現場音控、設備架設與測試。
          </p>
        </PriceBlock>

        <PriceBlock title="活動燈光" price="基本燈光方案｜NT$5,000 起">
          <p>提供基本舞台照明服務，包含：</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>基本面光燈具</li>
            <li>燈光控制器</li>
            <li>現場燈光控制人員</li>
          </ul>
          <p>價格：</p>
          <TierList items={avBasicTiers} />
          <p>
            適合講座、企業活動、校園活動、小型表演等基本舞台照明需求。
          </p>
          <p>
            若需要效果燈、LED PAR、追光或其他燈光設備，將依活動需求另外規劃。
          </p>
        </PriceBlock>

        <PriceBlock title="燈光＋音響整合" price="NT$10,000 起">
          <p>依現場條件整合音響、燈光與現場技術服務。</p>
        </PriceBlock>

        <section className="border-t border-border-subtle pt-14 lg:pt-16">
          <h2 className="text-xl font-semibold tracking-[-0.01em] text-foreground lg:text-[1.375rem]">
            大型活動／選舉活動
          </h2>
          <p className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-foreground lg:text-[1.75rem]">
            依需求報價
          </p>
          <p className="mt-5 text-[15px] leading-[1.9] text-muted lg:text-[16px]">
            大型活動、選舉造勢、政見發表等案件，將依人數、場地、舞台、設備與技術需求個別規劃。
          </p>
        </section>

        <section className="border-t border-border-subtle pt-14 lg:pt-16">
          <h2 className="text-xl font-semibold tracking-[-0.01em] text-foreground lg:text-[1.375rem]">
            影響價格的因素
          </h2>
          <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-muted lg:text-[16px]">
            {priceFactors.map((factor) => (
              <li key={factor} className="border-b border-border-subtle pb-3 last:border-0">
                {factor}
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-border-subtle pt-14 lg:pt-16">
          <h2 className="text-xl font-semibold tracking-[-0.01em] text-foreground lg:text-[1.375rem]">
            價格說明
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-[1.9] text-muted lg:text-[16px]">
            <p>以上價格為基本服務起始價格，並非所有活動皆適用固定方案。</p>
            <p>
              實際報價依活動日期、地點、參與人數、設備需求、服務時間及現場條件評估。
            </p>
            <p>
              大型活動、選舉造勢、政見發表及特殊場地，依實際需求提供客製化報價。
            </p>
          </div>
        </section>

        <section className="border-t border-border-subtle pt-14 lg:pt-16">
          <h2 className="text-lg font-medium tracking-[0.02em] text-foreground">
            不確定你的活動需要什麼？
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-[1.9] text-muted lg:text-[16px]">
            提供活動日期、地點、人數與需求，我們會協助你評估適合的燈光音響方案。
          </p>
          <Button href="/#inquiry-form" variant="primary" className="mt-8 w-full sm:w-auto">
            立即詢價 →
          </Button>
        </section>
      </Container>
    </div>
  );
}
