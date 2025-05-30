import type React from "react";
import { ExternalLink, Heart, Home, ShoppingCart } from "lucide-react";

type RegistryItem = {
  id: number;
  label: string;
  url: string;
  icon: React.ReactNode;
};

const registryItems: RegistryItem[] = [
  {
    id: 2,
    label: "Honeymoon",
    url: "https://account.venmo.com/u/jjgetsmarried",
    icon: <Heart size={24} />,
  },
  {
    id: 1,
    label: "Crate And Barrel",
    url: "https://www.crateandbarrel.com/gift-registry/justin%20and%20jenna-singh/r7283902",
    icon: <Home size={24} />,
  },
  {
    id: 3,
    label: "Amazon",
    url: "https://www.amazon.com/wedding/share/jjgetsmarried",
    icon: <ShoppingCart size={24} />,
  },
];

type RegistryItemProps = Pick<RegistryItem, "label" | "url" | "icon">;

const RegistryItem = ({ label, url, icon }: RegistryItemProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full flex-1 items-center justify-between rounded-md bg-white p-4 shadow-md hover:fill-orange-400 hover:text-primary-400"
    >
      <div className="flex items-center gap-3">
        <span className="group-hover:text-primary-400">{icon}</span>
        <span>{label}</span>
      </div>
      <ExternalLink size={28} />
    </a>
  );
};

export function RegistrySection() {
  return (
    <section id="registry" className="space-y-10">
      <h2 className="text-center">Registry</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {registryItems.map((item) => (
          <RegistryItem
            key={item.id}
            label={item.label}
            url={item.url}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}
