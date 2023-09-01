export default class Medico {
    private crm: number;
    private nome: string;
    private telefone: string;
    private especialidade: string;

    constructor (nome: string, crm: number, telefone: string, especialidade: string){
        this.crm = crm;
        this.nome = nome;
        this.telefone = telefone;
        this.especialidade = especialidade;
    }
  }