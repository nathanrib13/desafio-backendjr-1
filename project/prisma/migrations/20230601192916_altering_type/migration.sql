/*
  Warnings:

  - You are about to alter the column `altura` on the `characteristics` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `characteristics` MODIFY `altura` VARCHAR(191) NOT NULL;
