import { Typography } from "../ui/typography";

export type CountdownItemProps = {
  label: string;
  value: string;
};

export const CountdownItem = ({ label, value }: CountdownItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-primary-400 p-4">
      <Typography variant="h2" className="text-white">
        {value}
      </Typography>
      <Typography variant="h2" className="text-base text-white">
        {label}
      </Typography>
    </div>
  );
};
