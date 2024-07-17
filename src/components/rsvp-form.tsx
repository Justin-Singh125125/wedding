"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Checkbox } from "./ui/checkbox";
import { FormInputField } from "./ui/form-input-field";
import { Combobox } from "./ui/combo-box";

const rsvpFormSchema = z.object({
  name: z.string().min(1, "Required."),
  email: z.string().email().min(1, "Required."),
  phone: z.string().min(1, "Required."),
  isPlusOne: z.boolean(),
});

type RSVPFormValues = z.infer<typeof rsvpFormSchema>;

const defaultValues: RSVPFormValues = {
  name: "",
  email: "",
  phone: "",
  isPlusOne: false,
};

export function RSVPForm() {
  const form = useForm<RSVPFormValues>({
    resolver: zodResolver(rsvpFormSchema),
    mode: "onBlur",
    defaultValues,
  });

  const onSubmit: SubmitHandler<RSVPFormValues> = (data) => console.log(data);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4"
      >
        <Combobox />
        {/* <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormInputField label="Name" placeholder="Justin" {...field} />
          )}
        /> */}

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormInputField
              label="Phone"
              placeholder="555-555-5555"
              {...field}
            />
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormInputField
              label="Email"
              placeholder="example@gmail.com"
              {...field}
            />
          )}
        />

        <FormField
          control={form.control}
          name="isPlusOne"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Plus One ?</FormLabel>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <footer className="col-span-full">
          <Button type="submit">Submit</Button>
        </footer>
      </form>
    </Form>
  );
}
