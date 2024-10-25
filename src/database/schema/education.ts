import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { jobSeekerProfile } from "./jobSeekerProfile";

export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  jobSeekerProfileId: serial("job_seeker_profile").references(
    () => jobSeekerProfile.id,
  ),
  institutionName: text("institution_name").notNull(),
  degree: text("degree"),
  fieldOfStudy: text("field_of_study"),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date"),
});
