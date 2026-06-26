import { PageHeader } from "@/components/PageHeader";
import { PortfolioSection } from "@/components/home/PortfolioSection";

export function PortfolioPage() {
  return (
    <>
      <PageHeader
        label="PORTFOLIO"
        title="Companies under the Ventures umbrella"
        description="Live products first — then ventures in development across Europe and Africa."
      />
      <PortfolioSection />
    </>
  );
}
