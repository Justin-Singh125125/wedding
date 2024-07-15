import BaseLink, { type LinkProps as BaseLinkProps } from "next/link";
import { type HTMLAttributes } from "react";
import { cn } from "~/lib/utils";

export type LinkProps = BaseLinkProps & HTMLAttributes<HTMLAnchorElement>;

export const Link = ({ children, className, ...props }: LinkProps) => {
  return (
    <BaseLink
      className={cn("underline-offset-4 hover:underline", className)}
      {...props}
    >
      {children}
    </BaseLink>
  );
};
