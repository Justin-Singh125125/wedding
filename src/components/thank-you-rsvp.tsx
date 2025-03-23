import { Heart } from "lucide-react";

type ThankYouRSVPProps = {
  canAttend: boolean;
};

export const ThankYouRSVP = ({ canAttend }: ThankYouRSVPProps) => {
  return (
    <div className="w-full rounded-lg bg-white p-6 text-center shadow-2xl">
      <Heart className="mx-auto mb-4 h-12 w-12 text-primary-400" />
      <h2 className="mb-4 font-bold text-primary-400">
        Thank You for Your RSVP!
      </h2>
      {canAttend ? (
        <p className="mb-6 font-bold text-primary-400">
          We&apos;re thrilled that you&apos;ll be joining us on our special day.
          Your presence will make our celebration even more memorable.
        </p>
      ) : (
        <p className="mb-6 font-bold text-primary-400">
          We&apos;re sorry you won&apos;t be able to join us on our special day,
          but we appreciate you letting us know. You&apos;ll be missed!
        </p>
      )}
      <div className="text-gray-500">
        <p>If you need to make any changes to your RSVP,</p>
        <p>please contact us at jjgetsmarried.2025@gmail.com</p>
      </div>
    </div>
  );
};
