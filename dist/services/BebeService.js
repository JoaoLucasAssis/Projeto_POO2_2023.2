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
class BebeService {
    constructor() { }
    static getInstance() {
        if (BebeService.instance === null)
            BebeService.instance = new BebeService();
        return BebeService.instance;
    }
    insert(bebe) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.bebe.create({
                    /*
                    Essa parte está dando um erro, onde o Prisma espera que o campo mae seja
                    do tipo undefined ou um objeto que corresponda ao tipo BebeCreateInput,
                    mas você está passando um objeto que não está de acordo com essa expectativa
                    */
                    data: {
                        certidao_nascimento: bebe.certidao_nascimento,
                        name: bebe.nome,
                        data: bebe.data,
                        altura: bebe.altura,
                        peso: bebe.peso,
                        // mae: {
                        //     connect: {
                        //         RG: bebe.mae.RG,
                        //         name: bebe.mae.nome,
                        //         data: bebe.mae.data_nascimento,
                        //         endereco: bebe.mae.endereco,
                        //         telefone: bebe.mae.telefone,
                        //     }
                        // },
                        // medico: {
                        //     connect: {
                        //         crm: bebe.medico.crm,
                        //         nome: bebe.medico.nome,
                        //         telefone: bebe.medico.telefone,
                        //         especialidade: bebe.medico.especialidade,
                        //     }
                        // },
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
                const bebes = yield prisma.bebe.findMany();
                console.log(bebes);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    update(bebe) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.bebe.update({
                    where: { certidao_nascimento: bebe.certidao_nascimento },
                    data: {
                        name: bebe.nome,
                        data: bebe.data,
                        altura: bebe.altura,
                        peso: bebe.peso,
                    }
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    delete(bebe) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.bebe.delete({
                    where: { certidao_nascimento: bebe.certidao_nascimento },
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
BebeService.instance = null;
exports.default = BebeService;
