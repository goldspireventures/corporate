import { PageHeader } from "@/components/PageHeader";
import { PartnershipSection } from "@/components/home/PartnershipSection";

export function PartnerPage() {
  return (
    <>
      <PageHeader
        label="PARTNERSHIP"
        title="Partner with Goldspire"
        description="For investors, enterprises, and institutions interested in a company in the portfolio."
      />
      <PartnershipSection />
    </>
  );
}
