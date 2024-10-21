import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { employeeProfile } from './employeeProfile';
import { address } from './address';

export const company = pgTable('companies', {
  id: serial('id').primaryKey(),
  employeeProfileId: serial('employee_profile_id').references(
    () => employeeProfile.id,
  ),
  name: text('name').notNull(),
  industry: text('industry'),
  employeeRange: text('employe_range'),
  description: text('description'),
  websiteUrl: text('website_url'),
  address: serial('address').references(() => address.id),
  logoImage: text('logo_image'),
  coverImage: text('cover_image'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
