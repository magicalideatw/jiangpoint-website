import { createPageMetadata } from "@/lib/metadata";
import { PricingPageContent } from "@/components/pricing/PricingPageContent";

export const metadata = createPageMetadata({
  titleAbsolute: "活動燈光音響價格｜匠點娛樂",
  description:
    "了解匠點娛樂的活動燈光音響、活動音響、舞台燈光與整合方案起始價格。實際費用依活動日期、地點、規模、設備需求與服務時間評估。",
  path: "/pricing",
});

export default function PricingPage() {
  return <PricingPageContent />;
}
