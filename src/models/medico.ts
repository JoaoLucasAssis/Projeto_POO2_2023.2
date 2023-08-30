export default class Medico {
    private nome: string;
    private crm: string;
    private endereco: string;
    private especialidade: string;

    constructor (nome: string, crm: string, endereco: string, especialidade: string){
        this.nome = nome;
        this.crm = crm;
        this.endereco = endereco;
        this.especialidade = especialidade;
    }
  }