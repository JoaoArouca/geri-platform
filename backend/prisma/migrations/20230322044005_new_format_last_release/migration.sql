/*
  Warnings:

  - Made the column `lastRelease` on table `fomento` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "fomento" ALTER COLUMN "lastRelease" SET NOT NULL,
ALTER COLUMN "lastRelease" SET DATA TYPE TEXT;
