import { z } from "zod";

// creating zod schema
const createEmployeeProfile = z.object({
  data: z.object({
    position: z.string(),
    company: z.string(),
    address: z.string(),
    experience: z.string(),
    education: z.string(),
    contact_number: z.string(),
    socialLink: z.string(),
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
  createEmployeeProfile,
};
