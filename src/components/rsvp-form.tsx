"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm, Controller } from "react-hook-form";
import { z } from "zod";

import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";

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

  const watchedFields = form.watch();

  console.log(watchedFields);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>FirstName</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
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
