"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bebe {
    constructor(certidao_nascimento, nome, data_nascimento, peso, altura, medico, mae) {
        this.certidao_nascimento = certidao_nascimento;
        this.nome = nome;
        this.data_nascimento = data_nascimento;
        this.peso = peso;
        this.altura = altura;
        this.medico = medico;
        this.mae = mae;
    }
    getCertidao_nascimento() {
        return this.certidao_nascimento;
    }
    setCertidao_nascimento(value) {
        this.certidao_nascimento = value;
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
    getPeso() {
        return this.peso;
    }
    setPeso(value) {
        this.peso = value;
    }
    getAltura() {
        return this.altura;
    }
    setAltura(value) {
        this.altura = value;
    }
    getMae() {
        return this.mae;
    }
    setmae(value) {
        this.mae = value;
    }
    getMedico() {
        return this.medico;
    }
    setMedico(value) {
        this.medico = value;
    }
}
exports.default = Bebe;
