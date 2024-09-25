"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";

import { Button } from "./ui/button";
import { Form, FormField } from "./ui/form";
import { FormInputField } from "./ui/form-input-field";
import { Fragment } from "react";

const errorMessage = "Required";

const rsvpFormSchema = z.object({
  member: z.object({
    firstName: z.string().min(1, errorMessage),
    lastName: z.string().min(1, errorMessage),
    email: z.string().email().min(1, errorMessage),
    phone: z.string().min(1, errorMessage),
  }),
  additionalMembers: z
    .object({
      firstName: z.string().min(1, errorMessage),
      lastName: z.string().min(1, errorMessage),
      email: z
        .string()
        .refine(
          (value) =>
            value === "" || z.string().email().safeParse(value).success,
          {
            message: "Invalid email format",
          },
        ),
      phone: z.string(),
    })
    .array(),
});

type RSVPFormValues = z.infer<typeof rsvpFormSchema>;

const defaultValues: RSVPFormValues = {
  member: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
  additionalMembers: [],
};

export function RSVPForm() {
  const form = useForm<RSVPFormValues>({
    resolver: zodResolver(rsvpFormSchema),
    mode: "onBlur",
    defaultValues,
  });

  const fieldArray = useFieldArray({
    control: form.control,
    name: "additionalMembers",
  });

  const onSubmit: SubmitHandler<RSVPFormValues> = (data) => console.log(data);

  const addAdditionalMember = () => {
    fieldArray.append({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-1/2 grid-cols-4 gap-4"
      >
        <div className="col-span-full flex justify-between">
          <Button
            type="button"
            onClick={addAdditionalMember}
            className="bg-slate-500"
          >
            Add Member
          </Button>
          <Button type="submit">Submit</Button>
        </div>

        <FormField
          control={form.control}
          name={`member.firstName`}
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
          name={`member.lastName`}
          render={({ field }) => (
            <FormInputField label="Last Name" placeholder="Singh" {...field} />
          )}
        />

        <FormField
          control={form.control}
          name={`member.phone`}
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
          name={`member.email`}
          render={({ field }) => (
            <FormInputField
              label="Email"
              placeholder="example@gmail.com"
              {...field}
            />
          )}
        />

        {fieldArray.fields.map((field, index) => (
          <Fragment key={field.id}>
            <FormField
              control={form.control}
              name={`additionalMembers.${index}.firstName`}
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
              name={`additionalMembers.${index}.lastName`}
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
              name={`additionalMembers.${index}.phone`}
              rules={{
                required: true,
                minLength: 1,
              }}
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
              name={`additionalMembers.${index}.email`}
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
