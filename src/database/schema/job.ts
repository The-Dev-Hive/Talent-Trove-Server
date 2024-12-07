import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { companies } from "./company";
import { users } from "./user";

export const jobs = pgTable("jobs", {
  id: serial("id").primaryKey(),
  company: integer("company")
    .notNull()
    .references(() => companies.id),
  title: text("title"),
  description: text("description"),
  salaryRange: integer("salary_range"),
  address: integer("address"),
  status: varchar("status"),
  createdBy: integer("createdBy")
    .notNull()
    .references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
});
