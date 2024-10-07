import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const guestRouter = createTRPCRouter({
  get: publicProcedure.query(() => {
    return { test: "test" };
  }),
  create: publicProcedure
    .input(
      z.object({
        firstName: z.string().min(1),
        lastName: z.string().min(1),
        email: z.string().min(1),
        phoneNumber: z.string().min(1),
        guestType: z.enum(["none", "plus1", "family"]),
        plusOne: z
          .object({
            firstName: z.string().min(1),
            lastName: z.string().min(1),
          })
          .optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.guest.create({
        data: {
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
          phoneNumber: input.phoneNumber,
          plusOne: {
            create:
              input.guestType === "plus1"
                ? {
                    firstName: input.plusOne?.firstName ?? "",
                    lastName: input.plusOne?.lastName ?? "",
                  }
                : undefined,
          },
        },
      });
    }),
});
