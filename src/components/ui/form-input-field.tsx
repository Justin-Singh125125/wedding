"use client";

import { type ControllerRenderProps } from "react-hook-form";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "./form";
import { Input, type InputProps } from "./input";

type FormInputFieldProps = InputProps &
  ControllerRenderProps & { label: string };

export const FormInputField = ({ label, ...rest }: FormInputFieldProps) => {
  const { error } = useFormField();
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input
          {...rest}
          className={
            error ? "ring-2 ring-red-500 focus-visible:ring-red-500" : undefined
          }
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};
