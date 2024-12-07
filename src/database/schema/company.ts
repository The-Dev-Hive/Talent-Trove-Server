import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { address } from "./address";

export const companies = pgTable("companies", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  category: text("category"),
  employeeRange: integer("employee_range"),
  description: text("description"),
  websiteUrl: text("website_url"),
  address: serial("address").references(() => address.id),
  logoImage: text("logo_image"),
  coverImage: text("cover_image"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
