"use client";
import {
  useForm,
  useFieldArray,
  Controller,
  type Control,
  type FieldErrors,
  type UseFormRegister,
  type FieldArrayWithId,
} from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Heart, XIcon } from "lucide-react";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { ErrorCaption } from "../ui/error-caption";
import { api } from "../../trpc/react";
import { useToast } from "~/hooks/use-toast";
import { ThankYouRSVP } from "../thank-you-rsvp";
import { useGuestPermissions } from "./hooks/use-guest-permissions";
import { InfoBanner } from "../ui/info-banner";
import { RSVPCountdown } from "./rsvp-countdown";
import { RSVP_TARGET_DATE } from "~/constants";

type FormValues = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  canAttend: boolean | null;
  guestType: "none" | "plus1" | "family";
  plusOne: {
    firstName: string;
    lastName: string;
  };
  familyMembers: Array<{ firstName: string; lastName: string }>;
};

const formSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  phone: Yup.string()
    .min(14, "Phone number must be 10 digits")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  canAttend: Yup.boolean().required("Please indicate if you can attend"),
  guestType: Yup.string()
    .oneOf(["none", "plus1", "family"], "Invalid guest type")
    .required("Guest type is required"),
  // Only validate plusOne if the user can attend and guestType is "plus1".
  plusOne: Yup.object().when(["canAttend", "guestType"], {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    is: (canAttend: boolean, guestType: FormValues["guestType"]) =>
      canAttend && guestType === "plus1",
    then: () =>
      Yup.object({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
      }),
    otherwise: () => Yup.object().notRequired(),
  }),
  // Only validate familyMembers if the user can attend and guestType is "family".
  familyMembers: Yup.array().when(["canAttend", "guestType"], {
    is: (canAttend: boolean, guestType: FormValues["guestType"]) =>
      canAttend && guestType === "family",
    then: () =>
      Yup.array()
        .of(
          Yup.object().shape({
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
          }),
        )
        .min(
          1,
          'At least 1 guest is required. Press the "Add Family Member" button. If you do not have any guests select the "None" option',
        ),
    otherwise: () => Yup.array().notRequired(),
  }),
});

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

const defaultValues: FormValues = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  canAttend: null,
  guestType: "none",
  plusOne: { firstName: "", lastName: "" },
  familyMembers: [],
};

interface GuestSectionProps {
  guestPermission: "none" | "guest" | "guest+family";
  control: Control<FormValues>;
  errors: FieldErrors<FormValues>;
  watchGuestType: FormValues["guestType"];
  register: UseFormRegister<FormValues>;
  fields: FieldArrayWithId<FormValues, "familyMembers", "id">[];
  remove: (index: number) => void;
  append: (value: { firstName: string; lastName: string }) => void;
}

export const GuestSection: React.FC<GuestSectionProps> = ({
  guestPermission,
  control,
  errors,
  watchGuestType,
  register,
  fields,
  remove,
  append,
}) => {
  if (guestPermission === "none") return <></>;

  return (
    <>
      <div className="col-span-full">
        <Label className="mb-2 block font-bold text-primary-400">
          Guest Type
        </Label>
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
              {guestPermission === "guest+family" && (
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="family"
                    id="family"
                    className="text-primary-400"
                  />
                  <Label htmlFor="family">Family</Label>
                </div>
              )}
            </RadioGroup>
          )}
        />
        <ErrorCaption error={errors.guestType?.message} />
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
      {guestPermission === "guest+family" && watchGuestType === "family" && (
        <>
          <ErrorCaption error={errors.familyMembers?.message} />
          <div className="col-span-full space-y-4">
            {fields.map((field, index) => (
              <div key={field.id} className="space-y-4">
                <Label className="block font-bold text-primary-400">
                  Family Member {index + 1}
                </Label>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-[1fr_1fr_auto]">
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
          {fields.length < 6 && (
            <Button
              type="button"
              variant="outline"
              onClick={() => append({ firstName: "", lastName: "" })}
              className="col-span-full"
            >
              <Heart className="mr-2 h-4 w-4" />
              Add Family Member
            </Button>
          )}
        </>
      )}
    </>
  );
};

export const RSVPForm = () => {
  // Check if current date is past the RSVP deadline
  const currentDate = new Date();
  const rsvpTargetDate = new Date(RSVP_TARGET_DATE);
  const isRsvpClosed = currentDate.getTime() >= rsvpTargetDate.getTime();

  const { toast } = useToast();
  const guestPermission = useGuestPermissions();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormValues>({
    // @ts-expect-error - yup is literally so annoying to strongly type. You are just gonna have to trust me bro.
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "familyMembers",
  });

  const mutation = api.guest.create.useMutation();

  const onSubmit = (data: FormValues) => {
    mutation.mutate(
      {
        firstName: data.firstName,
        lastName: data.lastName,
        // canAttend will not be null here due to form validation
        canAttend: data.canAttend!,
        guestType: data.guestType,
        email: data.email,
        phoneNumber: data.phone,
        plusOne:
          data.canAttend && data.guestType === "plus1"
            ? {
                firstName: data.plusOne.firstName,
                lastName: data.plusOne.lastName,
              }
            : undefined,
        familyMembers:
          data.canAttend && data.guestType === "family"
            ? data.familyMembers
            : [],
      },
      {
        onError: () => {
          toast({
            variant: "destructive",
            title: "Oops! Justin did something wrong.",
            description:
              "There was an issue submitting your RSVP. Please try again or reach out to Justin at 916-955-8073 for assistance. \n",
          });
        },
      },
    );
  };

  const watchGuestType = watch("guestType");
  const watchPhone = watch("phone");

  useEffect(() => {
    setValue("phone", formatPhoneNumber(watchPhone));
  }, [setValue, watchPhone]);

  if (isRsvpClosed) {
    return (
      <div className="w-full space-y-4 rounded-lg bg-white p-6 text-center shadow-2xl">
        <h3 className="font-bold text-primary-400">RSVP</h3>
        <RSVPCountdown />
        <div>
          <p className="mb-4 text-lg">The date to RSVP has passed.</p>
          <p>
            Please contact us at{" "}
            <a
              href="mailto:jjgetsmarried.2025@gmail.com"
              className="text-primary-400 underline"
            >
              jjgetsmarried.2025@gmail.com
            </a>{" "}
            for assistance.
          </p>
        </div>
      </div>
    );
  }

  if (mutation.isSuccess) {
    return <ThankYouRSVP canAttend={mutation.variables.canAttend} />;
  }

  return (
    <div className="w-full space-y-4 rounded-lg bg-white p-6 shadow-2xl">
      <h3 className="text-center font-bold text-primary-400">RSVP</h3>
      <RSVPCountdown />
      {guestPermission === "guest" || guestPermission === "guest+family" ? (
        <InfoBanner
          variant="secondary"
          message="Do not share the link to this website and be mindful when adding guests."
        />
      ) : (
        <InfoBanner
          variant="secondary"
          message="Do not share the link to this website."
        />
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
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
          placeholder="(555) 555-5555"
          error={errors.phone?.message}
          {...register("phone")}
        />
        <Input
          id="email"
          label="Email"
          placeholder="jjgetsmarried.2025@gmail.com"
          error={errors.email?.message}
          {...register("email")}
        />

        <div className="col-span-full">
          <Label className="mb-2 block font-bold text-primary-400">
            Will you be able to attend?
          </Label>
          <Controller
            name="canAttend"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <RadioGroup
                onValueChange={(value) => field.onChange(value === "true")}
                value={
                  field.value === null ? "" : field.value ? "true" : "false"
                }
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="true"
                    id="attend-yes"
                    className="text-primary-400"
                  />
                  <Label htmlFor="attend-yes">Yes, I will attend</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="false"
                    id="attend-no"
                    className="text-primary-400"
                  />
                  <Label htmlFor="attend-no">No, I cannot attend</Label>
                </div>
              </RadioGroup>
            )}
          />
          <ErrorCaption error={errors.canAttend?.message} />
        </div>

        <GuestSection
          guestPermission={guestPermission}
          control={control}
          errors={errors}
          watchGuestType={watchGuestType}
          register={register}
          fields={fields}
          remove={remove}
          append={append}
        />

        <Button
          isLoading={mutation.isPending}
          type="submit"
          className="col-span-full w-full bg-primary-400 text-white hover:bg-primary-300"
        >
          Submit RSVP
        </Button>
      </form>
    </div>
  );
};
