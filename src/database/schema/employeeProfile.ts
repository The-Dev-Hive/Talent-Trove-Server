import { file } from "bun";
import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { users } from "./user";

export const employeeProfiles = pgTable("employee_profiles", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .unique()
    .notNull()
    .references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" }),
  position: text("position"),
  contactNumber: text("contact_number"),
  linkedinUrl: text("linkedin_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const emplyeeProfileRelations = relations(
  employeeProfiles,
  ({ one }) => ({
    user: one(users, {
      fields: [employeeProfiles.userId],
      references: [users.id],
    }),
  }),
);
