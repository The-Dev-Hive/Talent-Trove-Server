import { z } from "zod";

// creating zod schema
const registerBodySchema = z.object({
  email: z.string().email(),
  fullName: z.string(),
  bio: z.string(),
  password: z.string(),
  profilePictureUrl: z.string().optional(),
});

const loginBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

// exporting typescript tyeps here
export type TRegisterBodySchema = z.infer<typeof registerBodySchema>;
export type TLoginBody = z.infer<typeof loginBodySchema>;

// exporting..
export const authValidationSchema = {
  registerBodySchema,
  loginBodySchema,
};
