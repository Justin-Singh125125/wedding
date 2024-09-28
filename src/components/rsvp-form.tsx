"use client";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Heart, XIcon } from "lucide-react";
import { useEffect } from "react";

const guestSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
});

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().min(10, "Phone enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  guestType: z.enum(["none", "plus1", "family"]),
  plusOne: z
    .object({
      firstName: z.string().min(1, "First name is required"),
      lastName: z.string().min(1, "Last name is required"),
    })
    .optional(),
  familyMembers: z
    .array(guestSchema)
    .min(1, "At least one family member is required"),
});

type FormValues = z.infer<typeof formSchema>;

const formatPhoneNumber = (value: string) => {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
};

export const RSVPForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      familyMembers: [{ firstName: "", lastName: "" }],
      guestType: "none",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "familyMembers",
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Handle form submission here
  };

  const watchGuestType = watch("guestType");
  const watchPhone = watch("phone");

  useEffect(() => {
    setValue("phone", formatPhoneNumber(watchPhone));
  }, [setValue, watchPhone]);

  return (
    <div className="w-full rounded-lg bg-white p-6 shadow-2xl">
      <h2 className="mb-6 text-center text-2xl font-bold text-primary-400">
        RSVP
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4"
        noValidate
      >
        <Input
          id="firstName"
          label="First Name"
          placeholder="Justin"
          error={errors.firstName?.message}
          {...register("firstName")}
        />

        <Input
          id="lastName"
          label="Last Name"
          placeholder="Singh"
          error={errors.lastName?.message}
          {...register("lastName")}
        />

        <Input
          id="phone"
          label="Phone Number"
          placeholder="(916) 955-8073"
          error={errors.phone?.message}
          {...register("phone")}
        />

        <Input
          id="email"
          label="Email"
          placeholder="justin.singh125125@gmail.com"
          error={errors.email?.message}
          {...register("email")}
        />

        <div className="col-span-full">
          <Label className="mb-2 block text-secondary-400">Guest Type</Label>
          <Controller
            name="guestType"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="none"
                    id="none"
                    className="text-primary-400"
                  />
                  <Label htmlFor="none">None</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="plus1"
                    id="plus1"
                    className="text-primary-400"
                  />
                  <Label htmlFor="plus1">Plus One</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="family"
                    id="family"
                    className="text-primary-400"
                  />
                  <Label htmlFor="family">Family</Label>
                </div>
              </RadioGroup>
            )}
          />
          {errors.guestType && (
            <p className="text-sm text-red-500">{errors.guestType.message}</p>
          )}
        </div>
        {watchGuestType === "plus1" && (
          <div className="col-span-full grid grid-cols-2 gap-4">
            <Input
              id="plusOne.firstName"
              label="First Name"
              placeholder="Justin"
              error={errors.plusOne?.firstName?.message}
              {...register("plusOne.firstName")}
            />

            <Input
              id="plusOne.lastName"
              label="Last Name"
              placeholder="Singh"
              error={errors.plusOne?.lastName?.message}
              {...register("plusOne.lastName")}
            />
          </div>
        )}
        {watchGuestType === "family" && (
          <>
            <div className="col-span-full space-y-4">
              {fields.map((field, index) => (
                <div key={field.id} className="space-y-4">
                  <Label className="block text-secondary-400">
                    Family Member {index + 1}
                  </Label>

                  <div className="flex gap-4">
                    <Input
                      id={`familyMembers.${index}.firstName`}
                      placeholder="Justin"
                      error={errors.familyMembers?.[index]?.firstName?.message}
                      {...register(`familyMembers.${index}.firstName` as const)}
                    />

                    <Input
                      id={`familyMembers.${index}.lastName`}
                      placeholder="Singh"
                      error={errors.familyMembers?.[index]?.lastName?.message}
                      {...register(`familyMembers.${index}.lastName` as const)}
                    />

                    <Button
                      type="button"
                      variant="destructive"
                      onClick={() => remove(index)}
                      className="px-2"
                    >
                      <XIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => append({ firstName: "", lastName: "" })}
              className="col-span-full"
            >
              <Heart className="mr-2 h-4 w-4" />
              Add Guest
            </Button>
          </>
        )}

        <Button
          type="submit"
          className="col-span-full w-full bg-primary-400 text-white hover:bg-primary-300"
        >
          Submit RSVP
        </Button>
      </form>
    </div>
  );
};
