import { Navbar } from "~/components/navbar";
import { HydrateClient } from "~/trpc/server";
import { Hero } from "~/components/hero";
import { RSVPSection } from "~/components/rsvp-section";
import { InvitationSection } from "~/components/invitation-section";
import { RegistrySection } from "~/components/registry-section";
import { FAQSection } from "~/components/faq-section";
import { TimelineSection } from "~/components/timeline-section";
import { Footer } from "~/components/ui/footer";

export default async function Home() {
  return (
    <HydrateClient>
      <main id="#home">
        <Navbar />

        <Hero />

        <div className="space-y-10 bg-secondary-400 p-10 sm:p-20 md:space-y-20">
          <TimelineSection />
          <InvitationSection />
          <RSVPSection />
          <RegistrySection />
          <FAQSection />
        </div>
        <Footer />
      </main>
    </HydrateClient>
  );
}
