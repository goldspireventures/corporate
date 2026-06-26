import { PageHeader } from "@/components/PageHeader";
import { PartnershipSection } from "@/components/home/PartnershipSection";

export function PartnerPage() {
  return (
    <>
      <PageHeader
        label="PARTNERSHIP"
        title="Partner with Goldspire"
        description="Work with Goldspire Studio on a fixed-scope product, or partner with us on ventures in the portfolio."
      />
      <PartnershipSection />
    </>
  );
}
