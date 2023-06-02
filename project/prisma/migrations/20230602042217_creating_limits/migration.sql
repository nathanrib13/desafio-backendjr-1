/*
  Warnings:

  - You are about to alter the column `cep` on the `address` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(8)`.
  - You are about to alter the column `tipo_sanguineo` on the `characteristics` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(3)`.
  - You are about to alter the column `cpf` on the `clients` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(11)`.
  - You are about to alter the column `telefone_fixo` on the `contact` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(12)`.
  - You are about to alter the column `celular` on the `contact` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(12)`.

*/
-- AlterTable
ALTER TABLE `address` MODIFY `cep` VARCHAR(8) NOT NULL;

-- AlterTable
ALTER TABLE `characteristics` MODIFY `tipo_sanguineo` VARCHAR(3) NOT NULL;

-- AlterTable
ALTER TABLE `clients` MODIFY `cpf` VARCHAR(11) NOT NULL;

-- AlterTable
ALTER TABLE `contact` MODIFY `telefone_fixo` VARCHAR(12) NOT NULL,
    MODIFY `celular` VARCHAR(12) NOT NULL;
