import { PrismaClient } from "@prisma/client";
import Medico from "../models/medico";

const prisma = new PrismaClient();

class MedicoService {
    private static instance: MedicoService | null = null;

    private constructor() { }

    static getInstance(): MedicoService {
        if (MedicoService.instance === null)
            MedicoService.instance = new MedicoService();
        return MedicoService.instance;
    }

    async insert(medico: Medico) {
        try {
            const newMedico = await prisma.medico.create({
                data: {
                    crm: medico.crm,
                    nome: medico.nome,
                    endereco: medico.endereco,
                    especialidade: medico.especialidade,
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async retrieveAll() {
        try {
            const medicos = await prisma.medico.findMany();
            console.log(medicos);
        } catch (error) {
            console.log(error);
        }
    }

    async update(medico: Medico) {
        try {
            const updateMedico = await prisma.medico.update({
                where: { crm: medico.crm },
                data: {
                    nome: medico.nome,
                    endereco: medico.endereco,
                    especialidade: medico.especialidade,
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async delete(medico: Medico) {
        try {
            const deleteMedico = await prisma.medico.delete({
                where: { crm: medico.crm },
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export default MedicoService;
