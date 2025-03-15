/* eslint-disable @next/next/no-img-element */
import { Suspense } from "react";
import { RSVPForm } from "./rsvp-form/rsvp-form";
import { ImageCarousel } from "./ui/image-carousel";

const IMAGES = [
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHfFxvDI0bNMGHs8aet9gKmdDvS1VJhQuCRiAE",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHTiTuhvzSdJc9aLA3yzgrZ8o1CEtMeOj7puQ5",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHY0KLcTbovjzBxVaKi5l21UNCf7WQJbFch4su",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGH5nzmUkRxgNu5fW9QkJmoT3DqjbEln82XFVUZ",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHTU2Q9ozSdJc9aLA3yzgrZ8o1CEtMeOj7puQ5",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHzzGul9mQrmInvDUdOTqiu3Kg5MSERB9XhGFj",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHxiqdyZvujE831MN0iKBmJc75ngOeaIwRAlV6",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHgsJzMgiZdkc0CqUj6VRAetKuf32JlL5Yp1ry",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGH4oQjnnPNG9eM1ZJHsV6B2dugvqDpUAmTnPQi",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHIXCOQhvlYdM7JUaXLpfc8g4bjyomTHKIEAS2",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGH4DSSb5PNG9eM1ZJHsV6B2dugvqDpUAmTnPQi",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHlUOkVryi7jOeyCNkRFt5UcXoBf391gEZrdpD",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHd4O3LCnFvTSDhzNxCrBVobiy89HgEswcd5tR",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHBkuLsuGyD6WsIE2UM0kYXQntBC7rlLAGZ4vN",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHUAnQXQ1sp6BCyhuF2dETxASLG4ean0o9YXQb",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHJlDEmLqSWLMlTgVcjXit18UdvwoFNeas2HID",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHzMpeOWmQrmInvDUdOTqiu3Kg5MSERB9XhGFj",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHvllPeyTyCD09QVWYL7wos1Xjp5aRqPrltU26",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHfFogmllbNMGHs8aet9gKmdDvS1VJhQuCRiAE",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGH72qkOxUDvdwYs2XI1ouZHQ60mbnh3eLA8jGp",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHatHsZJjN57finKuz8xTLyqpZmEXkVAwD1M2l",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHRTAC1R0xrDZzIWdJkKmR2MAXvCeV8QFoiGj9",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHdMQ9x3nFvTSDhzNxCrBVobiy89HgEswcd5tR",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHIqLV6TlYdM7JUaXLpfc8g4bjyomTHKIEAS2x",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHzeovPEmQrmInvDUdOTqiu3Kg5MSERB9XhGFj",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHA7if4WrKDv9njp8iXrsOhUMalBZe7ybW2dtL",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHBhnifbGyD6WsIE2UM0kYXQntBC7rlLAGZ4vN",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGH4Zl1S1PNG9eM1ZJHsV6B2dugvqDpUAmTnPQi",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHMSbRYXcIRPacB9wkL1qr5oFEgflKxDbe3tuG",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHFLHKJsxYDuPxOaNipGygmSIjzWqlt06ho3rJ",
];

function shuffleArray<T>(array: Array<T>) {
  const shuffled = [...array]; // Create a copy of the array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    // @ts-expect-error - don't care.
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
  }
  return shuffled;
}

export const RSVPSection = () => {
  return (
    <section
      id="rsvp"
      className="grid grid-cols-1 items-start gap-10 md:gap-20 lg:grid-cols-2"
    >
      <Suspense fallback={<p>loading...</p>}>
        <RSVPForm />
      </Suspense>

      <ImageCarousel
        images={shuffleArray(IMAGES)}
        interval={3000}
        className="h-[20rem] w-full object-cover sm:h-[30rem] md:h-[40rem] lg:h-[50rem]"
        alt="RSVP Image"
      />
    </section>
  );
};
