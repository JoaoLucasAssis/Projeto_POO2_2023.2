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

                /* 
                Essa parte está dando um erro, onde o Prisma espera que o campo mae seja 
                do tipo undefined ou um objeto que corresponda ao tipo BebeCreateInput, 
                mas você está passando um objeto que não está de acordo com essa expectativa
                */

                data: {} //Quando o problema for resolvido essa linha pode ser removida

                /*data: {
                    certidao_nascimento: bebe.cpf,
                    name: bebe.nome,
                    data: bebe.data,
                    altura: bebe.altura,
                    peso: bebe.peso,
                    mae: {
                        connect: {
                            RG: bebe.mae.cpf,
                            name: bebe.mae.nome,
                            data: bebe.mae.data_nascimento,
                            endereco: bebe.mae.endereco,
                            telefone: bebe.mae.telefone,
                        }
                    },
                    medico: {
                        connect: {
                            crm: bebe.medico.crm,
                            nome: bebe.medico.nome,
                            endereco: bebe.medico.endereco,
                            especialidade: bebe.medico.especialidade,
                        }
                    },
                }*/
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
                where: { certidao_nascimento: bebe.cpf },
                data: {
                    name: bebe.nome,
                    data: bebe.data,
                    altura: bebe.altura,
                    peso: bebe.peso,
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async delete(bebe: Bebe) {
        try {
            await prisma.bebe.delete({
                where: { certidao_nascimento: bebe.cpf },
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export default BebeService;
