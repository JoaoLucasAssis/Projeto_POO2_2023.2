import Mae from "./mae";
import Medico from "./medico";

export default class Bebe {
  public cpf: number;
  public nome: string;
  public data: string;
  public peso: number;
  public altura: number;
  public medico: Medico;
  public mae: Mae;

  constructor(cpf: number, nome: string, data: string, peso: number, altura: number, medico: Medico, mae: Mae) {
    this.cpf = cpf;
    this.nome = nome;
    this.data = data;
    this.peso = peso;
    this.altura = altura;
    this.medico = medico;
    this.mae = mae;
  }
}

