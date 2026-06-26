import { HeroSection } from "@/components/home/HeroSection";
import { ProofStrip } from "@/components/home/ProofStrip";
import { PortfolioTeaser } from "@/components/home/PortfolioTeaser";
import { PhilosophyBlurb } from "@/components/home/PhilosophyBlurb";
import { PartnershipSection } from "@/components/home/PartnershipSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ProofStrip />
      <PortfolioTeaser />
      <PhilosophyBlurb />
      <PartnershipSection />
    </>
  );
}
