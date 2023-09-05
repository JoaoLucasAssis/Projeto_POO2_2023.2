import { PrismaClient } from '@prisma/client'

// Importa as classes dos modelos
import Medico from "./models/medico"
import Mae from "./models/mae"
import Bebe from "./models/bebe"

// Importa as classes de serviço de cada modelo
import MedicoService from './services/MedicoService'
import MaeService from './services/MaeService'
import BebeService from './services/BebeService'

const prisma = new PrismaClient()

async function main() {

    // Instancia objetos para cada classe de serviço
    const medicoService = MedicoService.getInstance();
    const maeService = MaeService.getInstance();
    const bebeService = BebeService.getInstance();

    const medico = new Medico(10, 'Joao', '123456789', 'Obstetra');
    const mae = new Mae(20, 'Paula', '1969-01-01', 'Rua Projetada', '123456789');
    const bebe = new Bebe(30, 'Matheus', '2023-08-28', 3.56, 55, medico, mae);

    try {

        /*
        Insere os objetos nas suas respectivas 
        tabelas usando os métodos de cada classe 
        de serviço correspondente
        */
        await medicoService.insert(medico);
        await maeService.insert(mae);
        await bebeService.insert(bebe);

        /*
        Retorna no console as linhas inseridas 
        de cada tabela em formato json
        */
        await medicoService.retrieveAll();
        await maeService.retrieveAll();
        await bebeService.retrieveAll();

        await bebeService.delete(bebe);
        await medicoService.delete(medico);
        await maeService.delete(mae);

    } catch (error) {
        console.error(error)
    } finally {
        await prisma.$disconnect()
    }
}

main();