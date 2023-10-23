"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
// Importa as classes dos modelos
const medico_1 = __importDefault(require("./models/medico"));
const mae_1 = __importDefault(require("./models/mae"));
const bebe_1 = __importDefault(require("./models/bebe"));
// Importa as classes de serviço de cada modelo
const MedicoService_1 = __importDefault(require("./services/MedicoService"));
const MaeService_1 = __importDefault(require("./services/MaeService"));
const BebeService_1 = __importDefault(require("./services/BebeService"));
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Instancia objetos para cada classe de serviço
        const medicoService = MedicoService_1.default.getInstance();
        const maeService = MaeService_1.default.getInstance();
        const bebeService = BebeService_1.default.getInstance();
        const medico = new medico_1.default(10, 'Joao', '123456789', 'Obstetra');
        const mae = new mae_1.default(20, 'Paula', '1969-01-01', 'Rua Projetada', '123456789');
        const bebe = new bebe_1.default(30, 'Matheus', '2023-08-28', 3.56, 55, medico, mae);
        try {
            /*
            Insere os objetos nas suas respectivas
            tabelas usando os métodos de cada classe
            de serviço correspondente
            */
            yield medicoService.insert(medico);
            yield maeService.insert(mae);
            yield bebeService.insert(bebe);
            /*
            Retorna no console as linhas inseridas
            de cada tabela em formato json
            */
            yield medicoService.retrieveAll();
            yield maeService.retrieveAll();
            yield bebeService.retrieveAll();
            yield bebeService.delete(bebe);
            yield medicoService.delete(medico);
            yield maeService.delete(mae);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            yield prisma.$disconnect();
        }
    });
}
main();
