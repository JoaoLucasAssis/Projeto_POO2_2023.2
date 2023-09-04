import { PrismaClient } from "@prisma/client";
import Bebe from "../models/bebe";

const prisma = new PrismaClient();

class BebeService {
    private static instance: BebeService | null = null;

    private constructor() { }

    static getInstance(): BebeService {
        if (BebeService.instance === null)
            BebeService.instance = new BebeService();
        return BebeService.instance;
    }

    async insert(bebe: Bebe) {
        try {
            await prisma.bebe.create({
                data: {
                    certidao_nascimento: bebe.getCertidao_nascimento(),
                    nome: bebe.getNome(),
                    data_nascimento: bebe.getData_nascimento(),
                    altura: bebe.getAltura(),
                    peso: bebe.getPeso(),
                    maeCpf: bebe.getMae().getCpf(),
                    medicoCrm: bebe.getMedico().getCrm(),
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async retrieveAll() {
        try {
            const bebes = await prisma.bebe.findMany();
            console.log(bebes);
        } catch (error) {
            console.log(error);
        }
    }

    async update(bebe: Bebe) {
        try {
            await prisma.bebe.update({
                where: { certidao_nascimento: bebe.getCertidao_nascimento() },
                data: {
                    nome: bebe.getNome(),
                    data_nascimento: bebe.getData_nascimento(),
                    altura: bebe.getAltura(),
                    peso: bebe.getPeso(),
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async delete(bebe: Bebe) {
        try {
            await prisma.bebe.delete({
                where: { certidao_nascimento: bebe.getCertidao_nascimento() },
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export default BebeService;
