import { z } from "zod";

const registerBodySchema = z.object({
  body: z.object({
    email: z.string().email(),
    fullName: z.string(),
    bio: z.string(),
    password: z.string(),
    role: z.string(),
    status: z.string(),
  }),
});

export const authValidationSchema = {
  registerBodySchema,
};
