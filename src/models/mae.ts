export default class Mae {
    private RG: number;
    private nome: string;
    private data_nascimento: Date;
    private endereco: string;
    private telefone: string;

    constructor (RG: number, nome: string, data_nascimento: Date, endereco: string, telefone: string) {
        this.RG = RG;
        this.nome = nome;
        this.data_nascimento = data_nascimento;
        this.endereco = endereco;
        this.telefone = telefone;
    }
  }