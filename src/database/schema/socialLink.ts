import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const socialLinks = pgTable("social_links", {
  id: serial("id").primaryKey(),
  linkedin: text("linkedin"),
  x: text("x"),
  instagram: text("instagram"),
  facebook: text("facebook"),
  github: text("github"),
  createdAt: timestamp("created_at").defaultNow(),
});
