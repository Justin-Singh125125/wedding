import { RSVPForm } from "./rsvp-form";

export const RSVPSection = () => {
  return (
    <section id="rsvp" className="bg-secondary-400 p-12">
      <h1 className="text-center text-3xl font-bold text-gray-800">
        Jenna and Justin&apos;s Wedding
      </h1>
      <p className="text-center text-xl text-gray-600">
        We can&apos;t wait to celebrate with you!
      </p>
      <div className="mt-2 flex justify-center">
        <div className="w-3/4">
          <RSVPForm />
        </div>
      </div>
    </section>
  );
};
