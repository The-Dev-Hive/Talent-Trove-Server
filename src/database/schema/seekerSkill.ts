import { integer, pgTable } from "drizzle-orm/pg-core";

export const seeker_skills = pgTable("seeker_skills", {
  userId: integer("user_id"),
  skillId: integer("skill_id"),
});
