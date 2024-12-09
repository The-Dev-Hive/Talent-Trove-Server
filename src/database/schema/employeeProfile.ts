import { file } from "bun";
import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { address } from "./address";
import { companies } from "./company";
import { educations } from "./education";
import { experiences } from "./experience";
import { socialLinks } from "./socialLink";
import { users } from "./user";

export const employeeProfiles = pgTable("employee_profiles", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .unique()
    .notNull()
    .references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" }),
  position: text("position"),
  company: integer("company").references(() => companies.id),
  address: integer("address").references(() => address.id),
  experience: integer("experience").references(() => experiences.id),
  education: integer("education").references(() => educations.id),
  contactNumber: text("contact_number"),
  socialLink: integer("social_link").references(() => socialLinks.id, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }),
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
