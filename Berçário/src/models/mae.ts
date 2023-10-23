export default class Mae {
    private cpf: number;
    private nome: string;
    private data_nascimento: string;
    private endereco: string;
    private telefone: string;

    constructor (cpf: number, nome: string, data_nascimento: string, endereco: string, telefone: string) {
        this.cpf = cpf;
        this.nome = nome;
        this.data_nascimento = data_nascimento;
        this.endereco = endereco;
        this.telefone = telefone;
    }

    public getCpf(): number {
        return this.cpf;
    }
    public setCpf(value: number) {
        this.cpf = value;
    }

    public getNome(): string {
        return this.nome;
    }
    public setNome(value: string) {
        this.nome = value;
    }

    public getData_nascimento(): string {
        return this.data_nascimento;
    }
    public setData_nascimento(value: string) {
        this.data_nascimento = value;
    }

    public getEndereco(): string {
        return this.endereco;
    }
    public setEndereco(value: string) {
        this.endereco = value;
    }

    public getTelefone(): string {
        return this.telefone;
    }
    public setTelefone(value: string) {
        this.telefone = value;
    }
  }