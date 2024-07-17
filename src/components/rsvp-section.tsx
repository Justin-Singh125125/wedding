import { Typography } from "./ui/typography";
import { RSVPForm } from "./rsvp-form";

export const RSVPSection = () => {
  return (
    <section id="#RSVP" className="bg-secondary-400 p-4">
      <Typography variant="h2" className="text-center text-white">
        RSVP
      </Typography>

      <div className="grid grid-cols-2">
        <RSVPForm />
      </div>
    </section>
  );
};
