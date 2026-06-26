import { HeroSection } from "@/components/home/HeroSection";
import { MissionStrip } from "@/components/home/MissionStrip";
import { PortfolioTeaser } from "@/components/home/PortfolioTeaser";
import { PhilosophyBlurb } from "@/components/home/PhilosophyBlurb";
import { StudioShowcaseTeaser } from "@/components/home/StudioShowcaseTeaser";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionStrip />
      <PortfolioTeaser />
      <PhilosophyBlurb />
      <StudioShowcaseTeaser />
    </>
  );
}
