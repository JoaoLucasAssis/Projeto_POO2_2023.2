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
                    RG: mae.RG,
                    name: mae.nome,
                    data: mae.data_nascimento,
                    endereco: mae.endereco,
                    telefone: mae.telefone,
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
                where: { RG: mae.RG },
                data: {
                    name: mae.nome,
                    data: mae.data_nascimento,
                    endereco: mae.endereco,
                    telefone: mae.telefone,
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async delete(mae: Mae) {
        try {
            await prisma.mae.delete({
                where: { RG: mae.RG },
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export default MaeService;
