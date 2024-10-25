import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const user = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  fullName: text("full_name").notNull(),
  bio: text("bio"),
  password: text("password").notNull(),
  role: text("role").notNull(), // 'employer' or 'job_seeker'
  profilePictureUrl: text("profile_picture_url"),
  status: text("status"), // Active, Pending, etc.
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
