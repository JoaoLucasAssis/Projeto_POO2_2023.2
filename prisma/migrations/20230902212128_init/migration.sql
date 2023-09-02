/*
  Warnings:

  - You are about to drop the column `endereco` on the `Medico` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Medico" (
    "crm" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "especialidade" TEXT
);
INSERT INTO "new_Medico" ("crm", "especialidade", "nome") SELECT "crm", "especialidade", "nome" FROM "Medico";
DROP TABLE "Medico";
ALTER TABLE "new_Medico" RENAME TO "Medico";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
