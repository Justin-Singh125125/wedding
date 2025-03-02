import React from "react";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "./ui/section-header";

type RegistryItem = { id: number; label: string; url: string };

const registryItems: RegistryItem[] = [
  {
    id: 1,
    label: "Crate And Barrel",
    url: "https://www.crateandbarrel.com/gift-registry/justin%20and%20jenna-singh/r7283902",
  },
  {
    id: 2,
    label: "Amazon",
    url: "https://www.amazon.com/wedding/share/jjgetsmarried",
  },
  { id: 2, label: "Venmo", url: "https://account.venmo.com/u/jjgetsmarried" },
];

type RegistryItemProps = Pick<RegistryItem, "label" | "url">;

const RegistryItem = ({ label, url }: RegistryItemProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full flex-1 justify-between rounded-md bg-white p-4 shadow-md hover:fill-orange-400 hover:text-primary-400"
    >
      <span className="text-xl">{label}</span>
      <ExternalLink size={28} />
    </a>
  );
};

export function RegistrySection() {
  return (
    <section id="registry" className="space-y-10">
      <SectionHeader>Registry</SectionHeader>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {registryItems.map((item) => (
          <RegistryItem key={item.id} label={item.label} url={item.url} />
        ))}
      </div>
    </section>
  );
}
