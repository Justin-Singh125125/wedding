import { Navbar } from "~/components/navbar";
import { HydrateClient } from "~/trpc/server";
import { Hero } from "~/components/hero";

export default async function Home() {
  return (
    <HydrateClient>
      <main id="#home">
        <Navbar />
        <Hero />
      </main>
    </HydrateClient>
  );
}
