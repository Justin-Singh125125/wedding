import { RSVPForm } from "./rsvp-form";

export const RSVPSection = () => {
  return (
    <section id="rsvp" className="bg-secondary-400 p-12">
      <div className="mt-4 flex justify-center gap-4">
        <RSVPForm />
      </div>
    </section>
  );
};
