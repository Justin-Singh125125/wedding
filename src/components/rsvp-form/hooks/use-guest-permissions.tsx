import { useSearchParams } from "next/navigation";

type GuestPermissions = "none" | "guest" | "guest+family";

const GUEST_PERMISSIONS_MAP: Record<
  string,
  Extract<GuestPermissions, "guest" | "guest+family">
> = {
  "9291f5a9-1109-40a5-a236-ed0b681fb830": "guest",
  "2281f9f8-46f3-4bdc-a953-662e665ef1f6": "guest+family",
} as const;

export const useGuestPermissions = (): GuestPermissions => {
  const searchParams = useSearchParams();

  const roleId = searchParams.get("guestId");

  if (!roleId) {
    return "none";
  }

  const guestPermission = GUEST_PERMISSIONS_MAP[roleId];

  if (!guestPermission) {
    return "none";
  }

  return guestPermission;
};
