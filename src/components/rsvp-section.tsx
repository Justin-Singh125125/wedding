/* eslint-disable @next/next/no-img-element */
import { RSVPForm } from "./rsvp-form";
import { ImageCarousel } from "./ui/image-carousel";

const IMAGES = [
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHTPBu79zSdJc9aLA3yzgrZ8o1CEtMeOj7puQ5",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGH3o2vHFZiShtRIFquex16daKbzvVWmnXPBk0A",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHrxaKOoJhd9Pp2g4Y6lXxtm3fDzkr5BsVOCZI",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHmeMqFXB9OrJ3DTta2eAdzCqmc6XRSEnNbFxo",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHHR1Y6m7NrPZn8fAM2CkcaqYGevxs7oUilTN1",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHx58dyrvujE831MN0iKBmJc75ngOeaIwRAlV6",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHxhqWmXvujE831MN0iKBmJc75ngOeaIwRAlV6",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGH5bLeccRxgNu5fW9QkJmoT3DqjbEln82XFVUZ",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGH1rrjfMJwH4MWVzXemqRwvluibCofnF30k2P7",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHXOfO0pl33QztV2L80fTn9ZyERoDuWqj57OkN",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHieH2iR76J3DoMlgA1IXkK7C0wtauxeq4EHhL",
];

export const RSVPSection = () => {
  return (
    <section
      id="rsvp"
      className="grid grid-cols-1 items-start gap-10 md:gap-20 lg:grid-cols-2"
    >
      <RSVPForm />

      <ImageCarousel
        images={IMAGES}
        interval={5000}
        className="h-[20rem] w-full sm:h-[30rem] md:h-[40rem] lg:h-[50rem]"
        alt="RSVP Image"
      />
    </section>
  );
};
