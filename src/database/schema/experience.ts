import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { jobSeekerProfile } from "./jobSeekerProfile";

export const experience = pgTable("experiences", {
  id: serial("id").primaryKey(),
  jobSeekerProfileId: serial("job_seeker_profile").references(
    () => jobSeekerProfile.id,
  ),
  jobTitle: text("job_title").notNull(),
  companyName: text("company_name").notNull(),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date"),
  description: text("description"),
});
