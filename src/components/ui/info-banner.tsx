import type React from "react";
import { Info } from "lucide-react";
import { cn } from "~/lib/utils";

interface InfoBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
  icon?: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "tertiary" | "quatinary";
}

export const InfoBanner = ({
  message,
  icon = <Info className="h-5 w-5 flex-shrink-0" />,
  variant = "secondary",
  className,
  ...props
}: InfoBannerProps) => {
  const variantClasses = {
    default: "bg-muted",
    primary: "bg-primary-400",
    secondary: "bg-secondary-400",
    tertiary: "bg-tertiary-400",
    quatinary: "bg-quatinary-400",
  };

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-md p-4",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {icon}
      <p>{message}</p>
    </div>
  );
};
