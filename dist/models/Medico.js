"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Medico {
    constructor(nome, crm, telefone, endereco, especialidade) {
        this.crm = crm;
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
        this.especialidade = especialidade;
    }
}
exports.default = Medico;
