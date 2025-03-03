import { SectionHeader } from "./ui/section-header";
import { WeddingTimeline } from "./ui/timeline";

export const TimelineSection = () => {
  return (
    <section id="timeline" className="space-y-10">
      <SectionHeader>Timeline</SectionHeader>
      <WeddingTimeline />
    </section>
  );
};
