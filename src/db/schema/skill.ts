import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const skill = pgTable('skills', {
  id: serial('id').primaryKey(),
  name: text('name').notNull().unique(),
});
