import { createPageMetadata } from "@/lib/metadata";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { EventTypesSection } from "@/components/home/EventTypesSection";
import { AboutSection } from "@/components/home/AboutSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { FaqSection } from "@/components/home/FaqSection";
import { ServiceAreaSection } from "@/components/home/ServiceAreaSection";
import { ContactSection } from "@/components/home/ContactSection";

export const metadata = createPageMetadata({
  titleAbsolute:
    "活動燈光音響｜音響出租・舞台燈光・現場技術服務｜匠點娛樂",
  description:
    "匠點娛樂 JIANG POINT 提供活動燈光音響、音響出租、舞台燈光、現場技術服務與活動整合，服務台北、新北、桃園、新竹及全台各地，承接企業活動、校園活動、尾牙春酒、表演、選舉造勢與政見發表等活動。",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <ServicesSection />
      <EventTypesSection />
      <AboutSection />
      <WhyChooseSection />
      <FaqSection />
      <ServiceAreaSection />
      <ContactSection />
    </>
  );
}
