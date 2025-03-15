/* eslint-disable @next/next/no-img-element */
import { Suspense } from "react";
import { RSVPForm } from "./rsvp-form/rsvp-form";
import { ImageCarousel } from "./ui/image-carousel";

const IMAGES: Array<string> = [
  // selected-rows (1).json
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHTew2eizSdJc9aLA3yzgrZ8o1CEtMeOj7puQ5",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHihtaDs76J3DoMlgA1IXkK7C0wtauxeq4EHhL",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHrNxbCsJhd9Pp2g4Y6lXxtm3fDzkr5BsVOCZI",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHFFyBvMYDuPxOaNipGygmSIjzWqlt06ho3rJ1",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHEoeqUgFxVGt0FBiD98uWLgzMrZp6AokN2UhJ",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHTpN35nzSdJc9aLA3yzgrZ8o1CEtMeOj7puQ5",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHrhplUCSJhd9Pp2g4Y6lXxtm3fDzkr5BsVOCZ",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHcg86z24zANW7kbLpKlJ58ry9T6sm4EteHd0U",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHGgq66Aq99DI1mxqjB6ZMaFVvXCtQ2ibhUydc",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHg9t5ziZdkc0CqUj6VRAetKuf32JlL5Yp1ryO",

  // selected-rows (2).json
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGH5QQno5RxgNu5fW9QkJmoT3DqjbEln82XFVUZ",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHZfiQfnOs1IH9SRPhcO0wVkug6oTxlLmaeAnp",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHOgpXpFCS8PstXvMKU4bDaJn1WfwTLYjmlzx7",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHADz0W8rKDv9njp8iXrsOhUMalBZe7ybW2dtL",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHgnZSU0iZdkc0CqUj6VRAetKuf32JlL5Yp1ry",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHjt1P7KdgdEcnAFDvoPkJqzf2Upbe30shBTL4",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHl3fRVNEyi7jOeyCNkRFt5UcXoBf391gEZrdp",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHnR9kBTfJQI1BbYhNHaARcx6UrEugLKZtOweM",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHW5m1f6gH3O1Bfi5w2ZxQMTrLNkFbjWaYXIvK",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHSRUSXtWjrV9Bns1Tc6ZDEf20FihO3MJGWmq5",

  // selected-rows (3).json
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHNy0zqA5Qprv7IH8sWZmMxOLJnkXhBc0Gt2g3",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHRYn3ZRxrDZzIWdJkKmR2MAXvCeV8QFoiGj9u",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHx18aUOvujE831MN0iKBmJc75ngOeaIwRAlV6",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHrhVM8MlJhd9Pp2g4Y6lXxtm3fDzkr5BsVOCZ",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHPFsEwmaNi7y80ELnpraWV5olwe31DHCczsAt",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHOsPLzzCS8PstXvMKU4bDaJn1WfwTLYjmlzx7",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHbGxsrDEBXuiDcC9jV7MQJTLAqo10KrwExefn",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHJMvpc1qSWLMlTgVcjXit18UdvwoFNeas2HID",

  // selected-rows.json
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHWCPeUZH3O1Bfi5w2ZxQMTrLNkFbjWaYXIvKh",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGH1cp5WFwH4MWVzXemqRwvluibCofnF30k2P7Q",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHZBEuKGOs1IH9SRPhcO0wVkug6oTxlLmaeAnp",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHaOadSGjN57finKuz8xTLyqpZmEXkVAwD1M2l",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHrFhMcmJhd9Pp2g4Y6lXxtm3fDzkr5BsVOCZI",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHx0YAeIvujE831MN0iKBmJc75ngOeaIwRAlV6",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHjfTscAdgdEcnAFDvoPkJqzf2Upbe30shBTL4",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHmSlzG7B9OrJ3DTta2eAdzCqmc6XRSEnNbFxo",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHiPWuPX76J3DoMlgA1IXkK7C0wtauxeq4EHhL",
  "https://cq8vqhybjf.ufs.sh/f/fFLpkrwbNMGHf79XBwbNMGHs8aet9gKmdDvS1VJhQuCRiAEB",
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
