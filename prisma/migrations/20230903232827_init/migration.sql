/*
  Warnings:

  - The primary key for the `Bebe` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cpfBebe` on the `Bebe` table. All the data in the column will be lost.
  - You are about to drop the column `data_nascimento` on the `Bebe` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Bebe` table. All the data in the column will be lost.
  - The primary key for the `Mae` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cpfMae` on the `Mae` table. All the data in the column will be lost.
  - You are about to drop the column `data_nascimento` on the `Mae` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Mae` table. All the data in the column will be lost.
  - The primary key for the `Medico` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `crm` on the `Medico` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `certidao_nascimento` to the `Bebe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `RG` to the `Mae` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Mae` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bebe" (
    "certidao_nascimento" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "data" TEXT,
    "altura" REAL,
    "peso" REAL,
    CONSTRAINT "Bebe_certidao_nascimento_fkey" FOREIGN KEY ("certidao_nascimento") REFERENCES "Medico" ("crm") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bebe_certidao_nascimento_fkey" FOREIGN KEY ("certidao_nascimento") REFERENCES "Mae" ("RG") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Bebe" ("altura", "peso") SELECT "altura", "peso" FROM "Bebe";
DROP TABLE "Bebe";
ALTER TABLE "new_Bebe" RENAME TO "Bebe";
CREATE TABLE "new_Mae" (
    "RG" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "data" TEXT,
    "endereco" TEXT,
    "telefone" TEXT
);
INSERT INTO "new_Mae" ("endereco", "telefone") SELECT "endereco", "telefone" FROM "Mae";
DROP TABLE "Mae";
ALTER TABLE "new_Mae" RENAME TO "Mae";
CREATE TABLE "new_Medico" (
    "crm" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT,
    "telefone" TEXT,
    "especialidade" TEXT
);
INSERT INTO "new_Medico" ("crm", "especialidade", "nome") SELECT "crm", "especialidade", "nome" FROM "Medico";
DROP TABLE "Medico";
ALTER TABLE "new_Medico" RENAME TO "Medico";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
