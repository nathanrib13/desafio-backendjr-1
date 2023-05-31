-- CreateTable
CREATE TABLE `Clients` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `idade` INTEGER NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `rg` VARCHAR(191) NOT NULL,
    `data_nasc` VARCHAR(191) NOT NULL,
    `sexo` VARCHAR(191) NOT NULL,
    `signo` VARCHAR(191) NOT NULL,
    `mae` VARCHAR(191) NOT NULL,
    `pai` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(191) NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,
    `telefone_fixo` VARCHAR(191) NOT NULL,
    `celular` VARCHAR(191) NOT NULL,
    `altura` DOUBLE NOT NULL,
    `peso` INTEGER NOT NULL,
    `tipo_sanguineo` VARCHAR(191) NOT NULL,
    `cor` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
