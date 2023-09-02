/*
  Warnings:

  - The primary key for the `Bebe` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Mae` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Medico` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bebe" (
    "cpfBebe" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "data_nascimento" TEXT NOT NULL,
    "altura" REAL,
    "peso" REAL,
    CONSTRAINT "Bebe_cpfBebe_fkey" FOREIGN KEY ("cpfBebe") REFERENCES "Medico" ("crm") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bebe_cpfBebe_fkey" FOREIGN KEY ("cpfBebe") REFERENCES "Mae" ("cpfMae") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Bebe" ("altura", "cpfBebe", "data_nascimento", "nome", "peso") SELECT "altura", "cpfBebe", "data_nascimento", "nome", "peso" FROM "Bebe";
DROP TABLE "Bebe";
ALTER TABLE "new_Bebe" RENAME TO "Bebe";
CREATE TABLE "new_Mae" (
    "cpfMae" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "data_nascimento" TEXT,
    "endereco" TEXT,
    "telefone" TEXT
);
INSERT INTO "new_Mae" ("cpfMae", "data_nascimento", "endereco", "nome", "telefone") SELECT "cpfMae", "data_nascimento", "endereco", "nome", "telefone" FROM "Mae";
DROP TABLE "Mae";
ALTER TABLE "new_Mae" RENAME TO "Mae";
CREATE TABLE "new_Medico" (
    "crm" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "endereco" TEXT,
    "especialidade" TEXT NOT NULL
);
INSERT INTO "new_Medico" ("crm", "endereco", "especialidade", "nome") SELECT "crm", "endereco", "especialidade", "nome" FROM "Medico";
DROP TABLE "Medico";
ALTER TABLE "new_Medico" RENAME TO "Medico";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
