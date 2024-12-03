CREATE TABLE IF NOT EXISTS "address" (
	"id" serial PRIMARY KEY NOT NULL,
	"street" text,
	"city" text,
	"state" text,
	"postal_code" text,
	"country" text,
	"latitude" text,
	"longitude" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "education" (
	"id" serial PRIMARY KEY NOT NULL,
	"institution_name" text NOT NULL,
	"degree" text,
	"field_of_study" text,
	"start_date" timestamp NOT NULL,
	"end_date" timestamp,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "experiences" (
	"id" serial PRIMARY KEY NOT NULL,
	"company_name" text NOT NULL,
	"job_title" text NOT NULL,
	"description" text,
	"start_date" timestamp NOT NULL,
	"end_date" timestamp,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "social_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"linkedin" text,
	"x" text,
	"instagram" text,
	"facebook" text,
	"github" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "job_seeker_profiles" ADD COLUMN "socialLink" integer;--> statement-breakpoint
ALTER TABLE "job_seeker_profiles" ADD COLUMN "experience" integer;--> statement-breakpoint
ALTER TABLE "job_seeker_profiles" ADD COLUMN "education" integer;--> statement-breakpoint
ALTER TABLE "job_seeker_profiles" ADD COLUMN "address" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "job_seeker_profiles" ADD CONSTRAINT "job_seeker_profiles_socialLink_social_links_id_fk" FOREIGN KEY ("socialLink") REFERENCES "public"."social_links"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "job_seeker_profiles" ADD CONSTRAINT "job_seeker_profiles_experience_experiences_id_fk" FOREIGN KEY ("experience") REFERENCES "public"."experiences"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "job_seeker_profiles" ADD CONSTRAINT "job_seeker_profiles_education_education_id_fk" FOREIGN KEY ("education") REFERENCES "public"."education"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "job_seeker_profiles" ADD CONSTRAINT "job_seeker_profiles_address_address_id_fk" FOREIGN KEY ("address") REFERENCES "public"."address"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "job_seeker_profiles" DROP COLUMN IF EXISTS "linkedin_url";