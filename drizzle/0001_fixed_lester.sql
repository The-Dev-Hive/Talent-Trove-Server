ALTER TABLE "job_seeker_profiles" DROP CONSTRAINT "job_seeker_profiles_socialLink_social_links_id_fk";
--> statement-breakpoint
ALTER TABLE "employee_profiles" ADD COLUMN "company" integer;--> statement-breakpoint
ALTER TABLE "employee_profiles" ADD COLUMN "address" integer;--> statement-breakpoint
ALTER TABLE "employee_profiles" ADD COLUMN "experience" integer;--> statement-breakpoint
ALTER TABLE "employee_profiles" ADD COLUMN "education" integer;--> statement-breakpoint
ALTER TABLE "employee_profiles" ADD COLUMN "social_link" integer;--> statement-breakpoint
ALTER TABLE "job_seeker_profiles" ADD COLUMN "social_link" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "employee_profiles" ADD CONSTRAINT "employee_profiles_company_companies_id_fk" FOREIGN KEY ("company") REFERENCES "public"."companies"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "employee_profiles" ADD CONSTRAINT "employee_profiles_address_address_id_fk" FOREIGN KEY ("address") REFERENCES "public"."address"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "employee_profiles" ADD CONSTRAINT "employee_profiles_experience_experiences_id_fk" FOREIGN KEY ("experience") REFERENCES "public"."experiences"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "employee_profiles" ADD CONSTRAINT "employee_profiles_education_educations_id_fk" FOREIGN KEY ("education") REFERENCES "public"."educations"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "employee_profiles" ADD CONSTRAINT "employee_profiles_social_link_social_links_id_fk" FOREIGN KEY ("social_link") REFERENCES "public"."social_links"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "job_seeker_profiles" ADD CONSTRAINT "job_seeker_profiles_social_link_social_links_id_fk" FOREIGN KEY ("social_link") REFERENCES "public"."social_links"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "employee_profiles" DROP COLUMN IF EXISTS "linkedin_url";--> statement-breakpoint
ALTER TABLE "job_seeker_profiles" DROP COLUMN IF EXISTS "socialLink";