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
        canAttend: z.boolean(),
        phoneNumber: z.string().min(1),
        guestType: z.enum(["none", "plus1", "family"]),
        plusOne: z
          .object({
            firstName: z.string().min(1),
            lastName: z.string().min(1),
          })
          .optional(),
        familyMembers: z.array(
          z.object({
            firstName: z.string().min(1),
            lastName: z.string().min(1),
          }),
        ),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.guest.create({
        data: {
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
          phoneNumber: input.phoneNumber,
          canAttend: input.canAttend,
          plusOne: {
            create:
              input.canAttend && input.guestType === "plus1" && input.plusOne
                ? {
                    firstName: input.plusOne.firstName,
                    lastName: input.plusOne.lastName,
                  }
                : undefined,
          },
          familyMembers: {
            createMany: {
              data:
                input.canAttend && input.guestType === "family"
                  ? input.familyMembers.map((member) => member)
                  : [],
            },
          },
        },
      });
    }),
});
