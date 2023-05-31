-- CreateTable
CREATE TABLE `Clients` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `idade` INTEGER NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `rg` VARCHAR(191) NOT NULL,
    `data_nasc` VARCHAR(191) NOT NULL,
    `mae` VARCHAR(191) NOT NULL,
    `pai` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Clients_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Address` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cep` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(191) NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,
    `clientId` INTEGER NOT NULL,

    UNIQUE INDEX `Address_clientId_key`(`clientId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contact` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `telefone_fixo` VARCHAR(191) NOT NULL,
    `celular` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `clientId` INTEGER NOT NULL,

    UNIQUE INDEX `Contact_telefone_fixo_key`(`telefone_fixo`),
    UNIQUE INDEX `Contact_celular_key`(`celular`),
    UNIQUE INDEX `Contact_email_key`(`email`),
    UNIQUE INDEX `Contact_clientId_key`(`clientId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Characteristics` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `altura` DOUBLE NOT NULL,
    `peso` INTEGER NOT NULL,
    `tipo_sanguineo` VARCHAR(191) NOT NULL,
    `cor` VARCHAR(191) NOT NULL,
    `sexo` VARCHAR(191) NOT NULL,
    `signo` VARCHAR(191) NOT NULL,
    `clientId` INTEGER NOT NULL,

    UNIQUE INDEX `Characteristics_clientId_key`(`clientId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Address` ADD CONSTRAINT `Address_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contact` ADD CONSTRAINT `Contact_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Characteristics` ADD CONSTRAINT `Characteristics_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Clients`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
