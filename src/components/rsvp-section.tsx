import { Typography } from "./ui/typography";
import { RSVPForm } from "./rsvp-form";

export const RSVPSection = () => {
  return (
    <section id="#RSVP" className="bg-secondary-400 p-12">
      <Typography variant="h2" className="text-center text-white">
        RSVP
      </Typography>

      <div className="mt-4 flex justify-center gap-4">
        <RSVPForm />
      </div>
    </section>
  );
};
