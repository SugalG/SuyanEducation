/*
  Warnings:

  - You are about to drop the column `country` on the `University` table. All the data in the column will be lost.
  - Added the required column `countryId` to the `University` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `University` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "University_country_idx";

-- AlterTable
ALTER TABLE "University" DROP COLUMN "country",
ADD COLUMN     "countryId" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "University_countryId_idx" ON "University"("countryId");

-- AddForeignKey
ALTER TABLE "University" ADD CONSTRAINT "University_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Destination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
