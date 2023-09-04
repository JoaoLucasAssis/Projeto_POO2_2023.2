export default class Mae {
    public RG: number;
    public nome: string;
    public data_nascimento: string;
    public endereco: string;
    public telefone: string;

    constructor (RG: number, nome: string, data_nascimento: string, endereco: string, telefone: string) {
        this.RG = RG;
        this.nome = nome;
        this.data_nascimento = data_nascimento;
        this.endereco = endereco;
        this.telefone = telefone;
    }
  }