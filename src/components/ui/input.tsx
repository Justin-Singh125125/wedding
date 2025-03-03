"use client";

import * as React from "react";

import { cn } from "~/lib/utils";
import { Label } from "./label";
import { ErrorCaption } from "./error-caption";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", id, label, error, ...props }, ref) => {
    return (
      <div className="flex w-full flex-col gap-2">
        {label && (
          <Label
            htmlFor={id}
            className="text-xs font-bold text-primary-400 sm:text-sm"
          >
            {label}
          </Label>
        )}
        <input
          id={id}
          autoComplete="off"
          type={type}
          className={cn(
            "h-8 rounded-md border border-slate-200 bg-white px-2 py-1 text-xs placeholder:text-slate-500",
            "sm:h-10 sm:px-3 sm:py-2 sm:text-sm",
            `border-primary-300 focus:ring-primary-400 ${error ? "border-red-500" : ""}`,
            className,
          )}
          ref={ref}
          {...props}
        />

        <ErrorCaption error={error} />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
