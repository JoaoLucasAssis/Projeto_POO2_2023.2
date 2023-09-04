export default class Medico {
    public crm: number;
    public nome: string;
    public telefone: string;
    public especialidade: string;

    constructor (nome: string, crm: number, telefone: string, especialidade: string){
        this.crm = crm;
        this.nome = nome;
        this.telefone = telefone;
        this.especialidade = especialidade;
    }
  }