import { Button } from "../ui/button";
import HeroImage from "./hero.image.jpg";
import Image from "next/image";
import { Typography } from "../ui/typography";

export const Hero = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Image
        className="h-full w-full object-cover"
        src={HeroImage}
        layout="fill"
        alt="Picture of the author"
      />

      <div className="absolute grid h-full w-full items-start justify-center p-32">
        <div className="flex flex-col gap-4 text-center">
          <Typography variant="h1" className="text-white">
            SHE SAID YES!
          </Typography>
          <Typography variant="h2" className="font-light text-white">
            Sep 23, 2035, 7:00 PM St.| Peter&apos;s Hall
          </Typography>
          <div>
            <Button>RSVP</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
