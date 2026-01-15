-- CreateTable
CREATE TABLE "LifeInCountry" (
    "id" TEXT NOT NULL,
    "destinationId" TEXT NOT NULL,
    "title" TEXT DEFAULT 'Life in the Country',
    "livingCost" TEXT,
    "accommodation" TEXT,
    "insurance" TEXT,
    "transportation" TEXT,
    "foodLifestyle" TEXT,
    "safety" TEXT,
    "workLifeBalance" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LifeInCountry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobsAndCareer" (
    "id" TEXT NOT NULL,
    "destinationId" TEXT NOT NULL,
    "title" TEXT DEFAULT 'Jobs and Career Opportunities',
    "partTimeRules" TEXT,
    "partTimeSectors" TEXT,
    "avgWage" TEXT,
    "internshipInfo" TEXT,
    "postStudyWork" TEXT,
    "prPathways" TEXT,
    "demandJobs" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JobsAndCareer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LifeInCountry_destinationId_key" ON "LifeInCountry"("destinationId");

-- CreateIndex
CREATE UNIQUE INDEX "JobsAndCareer_destinationId_key" ON "JobsAndCareer"("destinationId");

-- AddForeignKey
ALTER TABLE "LifeInCountry" ADD CONSTRAINT "LifeInCountry_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Destination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobsAndCareer" ADD CONSTRAINT "JobsAndCareer_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Destination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
