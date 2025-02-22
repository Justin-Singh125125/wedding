import { Navbar } from "~/components/navbar";
import { HydrateClient } from "~/trpc/server";
import { Hero } from "~/components/hero";
import { RSVPSection } from "~/components/rsvp-section";
import { InvitationSection } from "~/components/invitation-section";

export default async function Home() {
  return (
    <HydrateClient>
      <main id="#home">
        <Navbar />

        <Hero />

        <InvitationSection />
        {/* <RSVPSection /> */}
      </main>
    </HydrateClient>
  );
}
