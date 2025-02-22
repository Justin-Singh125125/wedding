import BaseLink, { type LinkProps as BaseLinkProps } from "next/link";
import { type HTMLAttributes } from "react";
import { cn } from "~/lib/utils";

export type LinkProps = BaseLinkProps & HTMLAttributes<HTMLAnchorElement>;

export const Link = ({ children, className, ...props }: LinkProps) => {
  return (
    <BaseLink
      className={cn(
        "text-[0.8rem] underline-offset-4 hover:underline sm:text-base",
        className,
      )}
      {...props}
    >
      {children}
    </BaseLink>
  );
};
