import { Heart } from "lucide-react";

export const ThankYouRSVP = () => {
  return (
    <div className="w-full rounded-lg bg-white p-6 text-center shadow-2xl">
      <Heart className="mx-auto mb-4 h-12 w-12 text-primary-400" />
      <h2 className="mb-4 text-2xl font-bold text-primary-400">
        Thank You for Your RSVP!
      </h2>
      <p className="mb-6 font-bold text-primary-400">
        We&apos;re thrilled that you&apos;ll be joining us on our special day.
        Your presence will make our celebration even more memorable.
      </p>
      <div className="text-sm text-gray-500">
        <p>If you need to make any changes to your RSVP,</p>
        <p>please contact us at jjgetsmarried.2025@gmail.com</p>
      </div>
    </div>
  );
};
