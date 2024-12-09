import { z } from "zod";

const createJobSchema = z.object({
  data: z.object({
    company: z.number(),
    title: z.string(),
    description: z.string(),
    salaryRange: z.number(),
    address: z.number(),
  }),
});

export const JobValidationSchema = {
  createJobSchema,
};
