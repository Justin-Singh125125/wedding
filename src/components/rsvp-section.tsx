import { Typography } from "./ui/typography";
import { RSVPForm } from "./rsvp-form";

export const RSVPSection = () => {
  return (
    <section id="#RSVP" className="bg-secondary-400 p-4">
      <Typography variant="h2" className="text-quatinary text-center">
        RSVP
      </Typography>

      <RSVPForm />
    </section>
  );
};
