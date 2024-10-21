import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { jobSeekerProfile } from './jobSeekerProfile';
import { skill } from './skill';

export const seekerSkill = pgTable('seeker_skills', {
  jobSeekerProfileId: serial('job_seeker_profile').references(
    () => jobSeekerProfile.id,
  ),
  skillId: serial('skill_id').references(() => skill.id),
  // primaryKey: ['jobSeekerProfileId', 'skillId'],
});
