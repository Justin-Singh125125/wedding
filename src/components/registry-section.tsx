import React from "react";
import { ExternalLink } from "lucide-react";

type RegistryItem = { id: number; label: string; url: string };

const registryItems: RegistryItem[] = [
  { id: 1, label: "Crate And Barrel", url: "https://www.google.com" },
  { id: 2, label: "Amazon", url: "https://github.com" },
  { id: 2, label: "Venmo", url: "https://github.com" },
];

type RegistryItemProps = Pick<RegistryItem, "label" | "url">;

const RegistryItem = ({ label, url }: RegistryItemProps) => {
  return (
    <div className="flex">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-4 hover:fill-orange-400 hover:text-primary-400"
      >
        <span className="text-xl">{label}</span>
        <ExternalLink size={28} />
      </a>
    </div>
  );
};

export function RegistrySection() {
  return (
    <div className="space-y-10">
      <h2 className="text-center text-3xl">Registry</h2>
      <div className="grid w-full grid-cols-4 gap-4">
        {registryItems.map((item) => (
          <RegistryItem key={item.id} label={item.label} url={item.url} />
        ))}
      </div>
    </div>
  );
}
