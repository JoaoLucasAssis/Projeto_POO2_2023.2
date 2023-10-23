# Berçário

Sistema que manuseia dados de um berçário.

A estrutura das classes foram baseadas no diagrama de classes abaixo

![diagrama-de-classes](https://github.com/JoaoLucasAssis/Projeto_POO2_2023.2/blob/main/Captura%20de%20tela%202023-08-28%20085009.png)

## Instalação do typescript e prisma

### Iniciando o node

```node
npm init -y
```

### Instalar o typescript

```node
npm install typescript ts-node @types/node --save-dev
```

### Inicializar e configurar o typescript

```node
npx tsc --init
```

### Instalar o Prisma CLI

```node
npm install prisma --save-dev
```

### Inicializar o Prisma

```node
npx prisma init --datasource-provider sqlite
```

### Use o Prisma Migrate para criar o banco de dados

```node
npx prisma migrate dev --name init
```