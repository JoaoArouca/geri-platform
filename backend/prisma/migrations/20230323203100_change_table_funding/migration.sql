/*
  Warnings:

  - You are about to drop the `fomento` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "fomento";

-- CreateTable
CREATE TABLE "funding" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "countries" TEXT[],
    "region" TEXT[],
    "institution" TEXT NOT NULL,
    "program" TEXT NOT NULL,
    "call" TEXT,
    "supportType" TEXT NOT NULL,
    "organizations" TEXT[],
    "sector" TEXT[],
    "requiresPartner" BOOLEAN,
    "partnerType" TEXT[],
    "TRLmin" TEXT NOT NULL,
    "TRLmax" TEXT NOT NULL,
    "technologies" TEXT[],
    "term" TEXT NOT NULL,
    "objective" TEXT NOT NULL,
    "elegibility" TEXT NOT NULL,
    "expenses" TEXT NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'BRL',
    "minValueReembolsaveis" TEXT NOT NULL,
    "maxValueReembolsaveis" TEXT NOT NULL,
    "minValueSubvencao" TEXT NOT NULL,
    "maxValueSubvencao" TEXT NOT NULL,
    "supportTax" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "tax" TEXT NOT NULL,
    "shortage" TEXT NOT NULL,
    "amortization" TEXT NOT NULL,
    "isESG" BOOLEAN NOT NULL DEFAULT false,
    "link" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "lastRelease" TEXT NOT NULL,

    CONSTRAINT "funding_pkey" PRIMARY KEY ("id")
);
