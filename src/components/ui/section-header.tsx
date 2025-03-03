import type { ReactNode } from "react";

type SectionHeaderProps = {
  children: ReactNode;
};

export const SectionHeader = ({ children }: SectionHeaderProps) => {
  return (
    <h2 className="text-center text-2xl font-bold text-gray-900 md:text-4xl">
      {children}
    </h2>
  );
};
