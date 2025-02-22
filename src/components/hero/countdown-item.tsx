export type CountdownItemProps = {
  label: string;
  value: string;
};

export const CountdownItem = ({ label, value }: CountdownItemProps) => {
  return (
    <div className="flex h-[4rem] w-[4rem] flex-col items-center justify-center rounded-md bg-primary-400 sm:h-[5.5rem] sm:w-[5.5rem]">
      <span className="text-[0.9rem] sm:text-xl">{value}</span>
      <span className="text-[0.9rem] sm:text-xl">{label}</span>
    </div>
  );
};
