"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";

import { Button } from "./ui/button";
import { Form, FormField } from "./ui/form";
import { FormInputField } from "./ui/form-input-field";
import { Fragment } from "react";

const rsvpMemberSchema = z.object({
  firstName: z.string().min(1, "Required."),
  lastName: z.string().min(1, "Required."),
  email: z.string().email(),
  phone: z.string().min(1, "Required."),
});

const rsvpFormSchema = z.object({
  members: z.array(rsvpMemberSchema),
});

type RSVPFormValues = z.infer<typeof rsvpFormSchema>;

const defaultValues: RSVPFormValues = {
  members: [
    {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  ],
};

export function RSVPForm() {
  const form = useForm<RSVPFormValues>({
    resolver: zodResolver(rsvpFormSchema),
    mode: "onBlur",
    defaultValues,
  });

  const { fields, append } = useFieldArray({
    control: form.control,
    name: "members",
  });

  const onSubmit: SubmitHandler<RSVPFormValues> = (data) => console.log(data);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-1/2 grid-cols-4 gap-4"
      >
        <div className="col-span-full flex justify-between">
          <Button
            type="button"
            onClick={() =>
              append({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
              })
            }
            className="bg-slate-500"
          >
            Add Member
          </Button>
          <Button type="submit">Submit</Button>
        </div>

        {fields.map((field, index) => (
          <Fragment key={field.id}>
            <FormField
              control={form.control}
              name={`members.${index}.firstName`}
              render={({ field }) => (
                <FormInputField
                  label="First Name"
                  placeholder="Justin"
                  {...field}
                />
              )}
            />

            <FormField
              control={form.control}
              name={`members.${index}.lastName`}
              render={({ field }) => (
                <FormInputField
                  label="Last Name"
                  placeholder="Singh"
                  {...field}
                />
              )}
            />

            <FormField
              control={form.control}
              name={`members.${index}.phone`}
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
              name={`members.${index}.email`}
              render={({ field }) => (
                <FormInputField
                  label="Email"
                  placeholder="example@gmail.com"
                  {...field}
                />
              )}
            />
          </Fragment>
        ))}
      </form>
    </Form>
  );
}
