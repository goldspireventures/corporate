import { PageHeader } from "@/components/PageHeader";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { FounderSection } from "@/components/home/FounderSection";

export function PhilosophyPage() {
  return (
    <>
      <PageHeader
        label="PHILOSOPHY"
        title="We build companies for the long run"
        description="How Goldspire finds problems worth solving and backs the teams that solve them."
      />
      <PhilosophySection />
      <FounderSection />
    </>
  );
}
