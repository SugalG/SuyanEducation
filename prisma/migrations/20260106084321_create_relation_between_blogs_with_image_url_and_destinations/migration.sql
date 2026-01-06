/*
  Warnings:

  - Added the required column `countryId` to the `BlogPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `BlogPost` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "BlogPost_publishedAt_idx";

-- AlterTable
ALTER TABLE "BlogPost" ADD COLUMN     "countryId" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "BlogPost_publishedAt_countryId_idx" ON "BlogPost"("publishedAt", "countryId");

-- AddForeignKey
ALTER TABLE "BlogPost" ADD CONSTRAINT "BlogPost_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Destination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
