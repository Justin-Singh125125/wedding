export type CountdownItemProps = {
  label: string;
  value: string;
};

export const CountdownItem = ({ label, value }: CountdownItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-md bg-primary-400 p-2 sm:p-4">
      <span>{value}</span>
      <span>{label}</span>
    </div>
  );
};
