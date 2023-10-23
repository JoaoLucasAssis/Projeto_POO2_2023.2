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
                    where: { certidao_nascimento: bebe.getCertidao_nascimento() },
                    data: {
                        nome: bebe.getNome(),
                        data_nascimento: bebe.getData_nascimento(),
                        altura: bebe.getAltura(),
                        peso: bebe.getPeso(),
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
                    where: {
                        certidao_nascimento: bebe.getCertidao_nascimento(),
                        maeCpf: bebe.getMae().getCpf(),
                        medicoCrm: bebe.getMedico().getCrm(),
                    },
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
