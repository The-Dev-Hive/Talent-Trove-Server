import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const education = pgTable("education", {
  id: serial("id").primaryKey(),
  institutionName: text("institution_name").notNull(),
  degree: text("degree"),
  fieldOfStudy: text("field_of_study"),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date"),
  createdAt: timestamp("created_at").defaultNow(),
});
