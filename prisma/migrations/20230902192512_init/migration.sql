-- CreateTable
CREATE TABLE "Mae" (
    "RG" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "data" TEXT,
    "endereco" TEXT,
    "telefone" TEXT
);

-- CreateTable
CREATE TABLE "Medico" (
    "crm" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT,
    "endereco" TEXT,
    "especialidade" TEXT
);

-- CreateTable
CREATE TABLE "Bebe" (
    "certidao_nascimento" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "data" TEXT,
    "altura" REAL,
    "peso" REAL,
    CONSTRAINT "Bebe_certidao_nascimento_fkey" FOREIGN KEY ("certidao_nascimento") REFERENCES "Medico" ("crm") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bebe_certidao_nascimento_fkey" FOREIGN KEY ("certidao_nascimento") REFERENCES "Mae" ("RG") ON DELETE RESTRICT ON UPDATE CASCADE
);
