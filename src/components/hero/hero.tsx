import { Button } from "../ui/button";
import HeroImage from "./hero.image.jpg";
import Image from "next/image";
import { Typography } from "../ui/typography";
import { Countdown } from "./countdown";

import { TARGET_DATE } from "~/constants";

const formattedDate = TARGET_DATE.toLocaleString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
});


export const Hero = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Image
        className="h-full w-full object-cover"
        src={HeroImage}
        fill
        alt="Picture of the author"
        priority
      />

      <div className="absolute grid h-full w-full items-start justify-center p-14">
        <div className="flex flex-col gap-4 text-center">
          <Typography variant="h1" className="text-white">
            SHE SAID YES!
          </Typography>

          <Countdown />

          <Typography variant="h2" className="font-light text-white">
            {formattedDate} | Wolfe Heights
          </Typography>

          <div>
            <Button>RSVP</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
