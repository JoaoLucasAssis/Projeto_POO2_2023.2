export default class Medico {
    private crm: number;
    private nome: string;
    private telefone: string;
    private especialidade: string;

    constructor (crm: number, nome: string, telefone: string, especialidade: string){
        this.crm = crm;
        this.nome = nome;
        this.telefone = telefone;
        this.especialidade = especialidade;
    }

    public getNome(): string {
        return this.nome;
    }
    public setNome(value: string) {
        this.nome = value;
    }

    public getCrm(): number {
        return this.crm;
    }
    public setCrm(value: number) {
        this.crm = value;
    }

    public getTelefone(): string {
        return this.telefone;
    }
    public setTelefone(value: string) {
        this.telefone = value;
    }

    public getEspecialidade(): string {
        return this.especialidade;
    }
    public setEspecialidade(value: string) {
        this.especialidade = value;
    }
  }