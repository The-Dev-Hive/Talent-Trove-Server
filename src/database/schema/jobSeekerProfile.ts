import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { address } from "./address";
import { education } from "./education";
import { experience } from "./experience";
import { user } from "./user";

export const jobSeekerProfile = pgTable("job_seaker_profiles", {
  id: serial("id").primaryKey(),
  userId: serial("user_id").references(() => user.id),
  resumeUrl: text("resume_url"),
  linkedinUrl: text("linkedin_url"),
  portfolioUrl: text("portfolio_url"),
  educationDetail: serial("education_detail").references(() => education.id),
  experienceDetail: serial("experience_detail").references(() => experience.id),
  address: serial("address").references(() => address.id),
  gender: text("gender"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
