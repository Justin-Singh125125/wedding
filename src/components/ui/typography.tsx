import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "~/lib/utils";

export type TypographyVariantLiterals = "h1" | "h2";

export const typographyVariants = cva("!leading-none font-arial", {
  variants: {
    variant: {
      h1: "text-4xl",
      h2: "text-3xl",
    } as Record<TypographyVariantLiterals, string>,
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  variant: TypographyVariantLiterals;
}

export const Typography = ({
  variant,
  className,
  ...props
}: TypographyProps) => {
  const Comp = variant;

  return (
    <Comp
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    />
  );
};

Typography.displayName = "Typography";
