import { z } from "zod";

const registerBodySchema = z.object({
  email: z.string().email(),
  fullName: z.string(),
  bio: z.string(),
  password: z.string(),
  profilePictureUrl: z.string().optional(),
});
export type TRegisterBodySchema = z.infer<typeof registerBodySchema>;

export const authValidationSchema = {
  registerBodySchema,
};
