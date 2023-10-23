import Mae from "./mae";
import Medico from "./medico";

export default class Bebe {
  private certidao_nascimento: number;
  private nome: string;
  private data_nascimento: string;
  private peso: number;
  private altura: number;
  private medico: Medico;
  private mae: Mae;

  constructor (certidao_nascimento: number, nome: string, data_nascimento: string, peso: number, altura: number, medico: Medico, mae: Mae){
      this.certidao_nascimento = certidao_nascimento;
      this.nome = nome;
      this.data_nascimento = data_nascimento;
      this.peso = peso;
      this.altura = altura;
      this.medico = medico;
      this.mae = mae;
  }

  public getCertidao_nascimento(): number {
    return this.certidao_nascimento;
  }
  public setCertidao_nascimento(value: number) {
    this.certidao_nascimento = value;
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

  public getPeso(): number {
    return this.peso;
  }
  public setPeso(value: number) {
    this.peso = value;
  }

  public getAltura(): number {
    return this.altura;
  }
  public setAltura(value: number) {
    this.altura = value;
  }

  public getMae(): Mae {
    return this.mae;
  }
  public setmae(value: Mae) {
    this.mae = value;
  }

  public getMedico(): Medico {
    return this.medico;
  }
  public setMedico(value: Medico) {
    this.medico = value;
  }
}