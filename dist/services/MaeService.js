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
class MaeService {
    constructor() { }
    static getInstance() {
        if (MaeService.instance === null)
            MaeService.instance = new MaeService();
        return MaeService.instance;
    }
    insert(mae) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.mae.create({
                    data: {
                        RG: mae.RG,
                        name: mae.nome,
                        data: mae.data_nascimento,
                        endereco: mae.endereco,
                        telefone: mae.telefone,
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
                const maes = yield prisma.mae.findMany();
                console.log(maes);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    update(mae) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.mae.update({
                    where: { RG: mae.RG },
                    data: {
                        name: mae.nome,
                        data: mae.data_nascimento,
                        endereco: mae.endereco,
                        telefone: mae.telefone,
                    }
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    delete(mae) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.mae.delete({
                    where: { RG: mae.RG },
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
MaeService.instance = null;
exports.default = MaeService;
