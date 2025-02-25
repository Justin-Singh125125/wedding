import { Button } from "../ui/button";
import { Countdown } from "./countdown";

import { TARGET_DATE } from "~/constants";
import { Link } from "../ui/link";

const formattedDate = TARGET_DATE.toLocaleString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});

export const Hero = () => {
  return (
    <div
      className="relative h-screen w-screen overflow-hidden bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHm9hIMcbB9OrJ3DTta2eAdzCqmc6XRSEnNbFx)`,
      }}
    >
      <div className="grid h-full w-full items-start justify-center pt-24">
        <div className="flex flex-col gap-4 text-center">
          <Countdown />

          <h2 className="sm:text-3xl">{formattedDate} | Wolfe Heights</h2>

          <Link href="#rsvp">
            <Button>RSVP</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
