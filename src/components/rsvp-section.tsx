import { RSVPForm } from "./rsvp-form";

export const RSVPSection = () => {
  return (
    <section
      id="rsvp"
      className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-20"
    >
      <RSVPForm />
    </section>
  );
};
