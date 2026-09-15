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
  title: "首頁",
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
