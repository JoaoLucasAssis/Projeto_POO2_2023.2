"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Medico {
    constructor(crm, nome, telefone, especialidade) {
        this.crm = crm;
        this.nome = nome;
        this.telefone = telefone;
        this.especialidade = especialidade;
    }
    getNome() {
        return this.nome;
    }
    setNome(value) {
        this.nome = value;
    }
    getCrm() {
        return this.crm;
    }
    setCrm(value) {
        this.crm = value;
    }
    getTelefone() {
        return this.telefone;
    }
    setTelefone(value) {
        this.telefone = value;
    }
    getEspecialidade() {
        return this.especialidade;
    }
    setEspecialidade(value) {
        this.especialidade = value;
    }
}
exports.default = Medico;
