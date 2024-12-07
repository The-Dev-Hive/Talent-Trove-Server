import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  companyName: text("company_name").notNull(),
  jobTitle: text("job_title").notNull(),
  description: text("description"),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date"),
  createdAt: timestamp("created_at").defaultNow(),
});
