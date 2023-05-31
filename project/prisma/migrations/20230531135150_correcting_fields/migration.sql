/*
  Warnings:

  - You are about to drop the column `sexo` on the `characteristics` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `clients` table. All the data in the column will be lost.
  - Added the required column `nome` to the `Clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sexo` to the `Clients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `characteristics` DROP COLUMN `sexo`;

-- AlterTable
ALTER TABLE `clients` DROP COLUMN `name`,
    ADD COLUMN `nome` VARCHAR(191) NOT NULL,
    ADD COLUMN `sexo` VARCHAR(191) NOT NULL;
