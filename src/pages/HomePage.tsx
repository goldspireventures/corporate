import { HeroSection } from "@/components/home/HeroSection";
import { PortfolioTeaser } from "@/components/home/PortfolioTeaser";
import { PhilosophyBlurb } from "@/components/home/PhilosophyBlurb";
import { StudioShowcaseTeaser } from "@/components/home/StudioShowcaseTeaser";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <PortfolioTeaser />
      <PhilosophyBlurb />
      <StudioShowcaseTeaser />
    </>
  );
}
