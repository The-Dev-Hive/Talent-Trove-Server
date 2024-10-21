import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { user } from './user';

export const employeeProfile = pgTable('employee_profiles', {
  id: serial('id').primaryKey(),
  userId: serial('user_id').references(() => user.id),
  position: text('position'),
  contactNumber: text('contact_number'),
  linkedinUrl: text('linkedin_url'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
