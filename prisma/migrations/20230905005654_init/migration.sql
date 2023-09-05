-- CreateTable
CREATE TABLE "Medico" (
    "crm" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT,
    "telefone" TEXT,
    "especialidade" TEXT
);

-- CreateTable
CREATE TABLE "Mae" (
    "cpf" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "data_nascimento" TEXT,
    "endereco" TEXT,
    "telefone" TEXT
);

-- CreateTable
CREATE TABLE "Bebe" (
    "certidao_nascimento" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "data_nascimento" TEXT,
    "altura" REAL,
    "peso" REAL,
    "medicoCrm" INTEGER NOT NULL,
    "maeCpf" INTEGER NOT NULL,
    CONSTRAINT "Bebe_medicoCrm_fkey" FOREIGN KEY ("medicoCrm") REFERENCES "Medico" ("crm") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Bebe_maeCpf_fkey" FOREIGN KEY ("maeCpf") REFERENCES "Mae" ("cpf") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Medico_nome_key" ON "Medico"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Mae_nome_key" ON "Mae"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Bebe_medicoCrm_key" ON "Bebe"("medicoCrm");

-- CreateIndex
CREATE UNIQUE INDEX "Bebe_maeCpf_key" ON "Bebe"("maeCpf");
