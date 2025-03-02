import { SectionHeader } from "./ui/section-header";
import { WeddingTimeline } from "./ui/timeline";

export const TimelineSection = () => {
  return (
    <section id="timeline" className="flex">
      <SectionHeader>Wedding Day Timeline</SectionHeader>
      <WeddingTimeline />
    </section>
  );
};
