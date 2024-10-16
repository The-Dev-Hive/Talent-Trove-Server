-- CreateTable
CREATE TABLE "job_seeker_profiles" (
    "user_id" INTEGER NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "education_detail" INTEGER,
    "experience_detail" INTEGER,

    CONSTRAINT "job_seeker_profiles_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "employer_profiles" (
    "user_id" INTEGER NOT NULL,
    "company" INTEGER NOT NULL,

    CONSTRAINT "employer_profiles_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "company_profile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "establishment_date" TIMESTAMP(3) NOT NULL,
    "website_url" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "created_by" TEXT NOT NULL,

    CONSTRAINT "company_profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addresses" (
    "id" SERIAL NOT NULL,
    "street" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skills" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Skill" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "job_seeker_profiles_user_id_key" ON "job_seeker_profiles"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "employer_profiles_user_id_key" ON "employer_profiles"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "_Skill_AB_unique" ON "_Skill"("A", "B");

-- CreateIndex
CREATE INDEX "_Skill_B_index" ON "_Skill"("B");

-- AddForeignKey
ALTER TABLE "_Skill" ADD CONSTRAINT "_Skill_A_fkey" FOREIGN KEY ("A") REFERENCES "job_seeker_profiles"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Skill" ADD CONSTRAINT "_Skill_B_fkey" FOREIGN KEY ("B") REFERENCES "skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;
