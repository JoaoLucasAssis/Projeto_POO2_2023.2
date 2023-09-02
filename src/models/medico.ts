export default class Medico {
    public crm: number;
    public nome: string;
    public telefone: string;
    public endereco: string;
    public especialidade: string;

    constructor (nome: string, crm: number, telefone: string, endereco: string, especialidade: string){
        this.crm = crm;
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
        this.especialidade = especialidade;
    }
  }