"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mae {
    constructor(cpf, nome, data_nascimento, endereco, telefone) {
        this.cpf = cpf;
        this.nome = nome;
        this.data_nascimento = data_nascimento;
        this.endereco = endereco;
        this.telefone = telefone;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(value) {
        this.cpf = value;
    }
    getNome() {
        return this.nome;
    }
    setNome(value) {
        this.nome = value;
    }
    getData_nascimento() {
        return this.data_nascimento;
    }
    setData_nascimento(value) {
        this.data_nascimento = value;
    }
    getEndereco() {
        return this.endereco;
    }
    setEndereco(value) {
        this.endereco = value;
    }
    getTelefone() {
        return this.telefone;
    }
    setTelefone(value) {
        this.telefone = value;
    }
}
exports.default = Mae;
