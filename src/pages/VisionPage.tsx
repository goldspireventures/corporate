import { PageHeader } from "@/components/PageHeader";
import { Vision2035Section } from "@/components/home/Vision2035Section";
import { MetricsSection } from "@/components/home/MetricsSection";

export function VisionPage() {
  return (
    <>
      <PageHeader
        label="VISION 2035"
        title="Where the portfolio is headed"
        description="Where we are putting sustained effort over the next decade — across Europe, Africa, and global markets."
      />
      <Vision2035Section />
      <MetricsSection />
    </>
  );
}
