export default class Mae {
    public cpf: number;
    public nome: string;
    public data_nascimento: string;
    public endereco: string;
    public telefone: string;

    constructor (cpf: number, nome: string, data_nascimento: string, endereco: string, telefone: string) {
        this.cpf = cpf;
        this.nome = nome;
        this.data_nascimento = data_nascimento;
        this.endereco = endereco;
        this.telefone = telefone;
    }
  }