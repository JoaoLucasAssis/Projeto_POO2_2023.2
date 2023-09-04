import { PrismaClient } from "@prisma/client";
import Mae from "../models/mae";

const prisma = new PrismaClient();

class MaeService {
    private static instance: MaeService | null = null;

    private constructor() { }

    static getInstance(): MaeService {
        if (MaeService.instance === null)
            MaeService.instance = new MaeService();
        return MaeService.instance;
    }

    async insert(mae: Mae) {
        try {
            await prisma.mae.create({
                data: {
                    cpf: mae.getCpf(),
                    nome: mae.getNome(),
                    data_nascimento: mae.getData_nascimento(),
                    endereco: mae.getEndereco(),
                    telefone: mae.getTelefone(),
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async retrieveAll() {
        try {
            const maes = await prisma.mae.findMany();
            console.log(maes);
        } catch (error) {
            console.log(error);
        }
    }

    async update(mae: Mae) {
        try {
            await prisma.mae.update({
                where: { cpf: mae.getCpf() },
                data: {
                    nome: mae.getNome(),
                    data_nascimento: mae.getData_nascimento(),
                    endereco: mae.getEndereco(),
                    telefone: mae.getTelefone(),
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async delete(mae: Mae) {
        try {
            await prisma.mae.delete({
                where: { cpf: mae.getCpf() },
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export default MaeService;
