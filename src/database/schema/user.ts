import { relations } from "drizzle-orm";
import {
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { employeeProfiles } from "./employeeProfile";
import { jobSeekerProfiles } from "./jobSeekerProfile";

// Define the enums
// export const userRoleEnum = pgEnum("user_role", ["job_seeker", "employer"]);
// export const userStatusEnum = pgEnum("user_status", [
//   "active",
//   "pending",
//   "inactive",
// ]);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  fullName: varchar("full_name", { length: 256 }).notNull(),
  bio: varchar("bio", { length: 256 }),
  password: text("password").notNull(),
  role: varchar("role").default("job_seeker"), // 'employer' or 'job_seeker'
  profilePictureUrl: text("profile_picture_url"),
  status: varchar("status").default("active"), // Active, Pending, etc.
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const userRelations = relations(users, ({ one }) => ({
  employeeProfile: one(employeeProfiles),
  jobSeekerProfile: one(jobSeekerProfiles),
}));
