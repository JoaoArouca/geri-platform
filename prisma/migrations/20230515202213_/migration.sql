/*
  Warnings:

  - A unique constraint covering the columns `[key]` on the table `fund` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `key` to the `fund` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- DropIndex
ALTER TABLE [dbo].[fund] DROP CONSTRAINT [fund_title_key];

-- AlterTable
ALTER TABLE [dbo].[fund] ADD [key] NVARCHAR(1000) NOT NULL;

-- CreateIndex
ALTER TABLE [dbo].[fund] ADD CONSTRAINT [fund_key_key] UNIQUE NONCLUSTERED ([key]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
