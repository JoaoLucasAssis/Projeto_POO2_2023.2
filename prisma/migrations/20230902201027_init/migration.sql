/*
  Warnings:

  - The primary key for the `Mae` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `RG` on the `Mae` table. All the data in the column will be lost.
  - The primary key for the `Bebe` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `certidao_nascimento` on the `Bebe` table. All the data in the column will be lost.
  - Added the required column `cpfMae` to the `Mae` table without a default value. This is not possible if the table is not empty.
  - Made the column `especialidade` on table `Medico` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nome` on table `Medico` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `cpfBebe` to the `Bebe` table without a default value. This is not possible if the table is not empty.
  - Made the column `data_nascimento` on table `Bebe` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nome` on table `Bebe` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Mae" (
    "cpfMae" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "data_nascimento" TEXT,
    "endereco" TEXT,
    "telefone" TEXT
);
INSERT INTO "new_Mae" ("data_nascimento", "endereco", "nome", "telefone") SELECT "data_nascimento", "endereco", "nome", "telefone" FROM "Mae";
DROP TABLE "Mae";
ALTER TABLE "new_Mae" RENAME TO "Mae";
CREATE TABLE "new_Medico" (
    "crm" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "endereco" TEXT,
    "especialidade" TEXT NOT NULL
);
INSERT INTO "new_Medico" ("crm", "endereco", "especialidade", "nome") SELECT "crm", "endereco", "especialidade", "nome" FROM "Medico";
DROP TABLE "Medico";
ALTER TABLE "new_Medico" RENAME TO "Medico";
CREATE TABLE "new_Bebe" (
    "cpfBebe" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "data_nascimento" TEXT NOT NULL,
    "altura" REAL,
    "peso" REAL,
    CONSTRAINT "Bebe_cpfBebe_fkey" FOREIGN KEY ("cpfBebe") REFERENCES "Medico" ("crm") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bebe_cpfBebe_fkey" FOREIGN KEY ("cpfBebe") REFERENCES "Mae" ("cpfMae") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Bebe" ("altura", "data_nascimento", "nome", "peso") SELECT "altura", "data_nascimento", "nome", "peso" FROM "Bebe";
DROP TABLE "Bebe";
ALTER TABLE "new_Bebe" RENAME TO "Bebe";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
