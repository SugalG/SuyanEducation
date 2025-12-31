/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Destination` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Destination` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Destination_country_key";

-- AlterTable
ALTER TABLE "Destination" ADD COLUMN     "education" TEXT,
ADD COLUMN     "popularFields" TEXT,
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "visaUpdates" TEXT,
ADD COLUMN     "whyPoints" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Destination_slug_key" ON "Destination"("slug");
