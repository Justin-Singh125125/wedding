export type CountdownItemProps = {
  label: string;
  value: string;
};

export const CountdownItem = ({ label, value }: CountdownItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-md bg-primary-400 px-1 py-3 sm:px-2 sm:py-4">
      <span className="text-[0.9rem] sm:text-xl">{value}</span>
      <span className="text-[0.9rem] sm:text-xl">{label}</span>
    </div>
  );
};
