/*
  Warnings:

  - Added the required column `created_date` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "created_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL;
