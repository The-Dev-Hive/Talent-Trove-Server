import { z } from "zod";

// creating zod schema
const createEmployeeProfile = z.object({
  data: z.object({
    email: z.string().email(),
    fullName: z.string(),
    bio: z.string(),
    password: z.string(),
    profilePictureUrl: z.string().optional(),
  }),
});
const createJobSeekerProfile = z.object({
  data: z.object({
    gender: z.enum(["female", "male", "others"]),
    resumeUrl: z.string(),
    portfolioUrl: z.string(),
  }),
});

// exporting typescript tyeps here...

// exporting..
export const profleValidationSchema = {
  createJobSeekerProfile,
};
