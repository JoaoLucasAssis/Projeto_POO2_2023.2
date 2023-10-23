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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class MedicoService {
    constructor() { }
    static getInstance() {
        if (MedicoService.instance === null)
            MedicoService.instance = new MedicoService();
        return MedicoService.instance;
    }
    insert(medico) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.medico.create({
                    data: {
                        crm: medico.getCrm(),
                        nome: medico.getNome(),
                        telefone: medico.getTelefone(),
                        especialidade: medico.getEspecialidade(),
                    }
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    retrieveAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const medicos = yield prisma.medico.findMany();
                console.log(medicos);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    update(medico) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.medico.update({
                    where: { crm: medico.getCrm() },
                    data: {
                        nome: medico.getNome(),
                        telefone: medico.getTelefone(),
                        especialidade: medico.getEspecialidade(),
                    }
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    delete(medico) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.medico.delete({
                    where: { crm: medico.getCrm() },
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
MedicoService.instance = null;
exports.default = MedicoService;
