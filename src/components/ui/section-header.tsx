import type { ReactNode } from "react";

type SectionHeaderProps = {
  children: ReactNode;
};

export const SectionHeader = ({ children }: SectionHeaderProps) => {
  return <h2 className="text-center font-bold text-gray-900">{children}</h2>;
};
