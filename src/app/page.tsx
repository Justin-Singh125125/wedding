import { Navbar } from "~/components/navbar";
import { HydrateClient } from "~/trpc/server";
import { Hero } from "~/components/hero";
import { RSVPSection } from "~/components/rsvp-section";
import { InvitationSection } from "~/components/invitation-section";
import { RegistrySection } from "~/components/registry-section";

export default async function Home() {
  return (
    <HydrateClient>
      <main id="#home">
        <Navbar />

        <Hero />

        <div className="space-y-10 bg-secondary-400 p-10 sm:p-20 md:space-y-20">
          <InvitationSection />
          <RSVPSection />
          <RegistrySection />
        </div>
      </main>
    </HydrateClient>
  );
}
