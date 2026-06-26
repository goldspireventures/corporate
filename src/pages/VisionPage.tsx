import { PageHeader } from "@/components/PageHeader";
import { Vision2035Section } from "@/components/home/Vision2035Section";
import { MetricsSection } from "@/components/home/MetricsSection";

export function VisionPage() {
  return (
    <>
      <PageHeader
        label="VISION 2035"
        title="Where the portfolio is headed"
        description="Long-range focus areas across Africa and global markets — not a forecast, a direction."
      />
      <Vision2035Section />
      <MetricsSection />
    </>
  );
}
