import Mae from "./mae";
import Medico from "./medico";

export default class Bebe {
  public certidao_nascimento: number;
  public nome: string;
  public data: string;
  public peso: number;
  public altura: number;
  public medico: Medico;
  public mae: Mae;

  constructor (certidao_nascimento: number, nome: string, data: string, peso: number, altura: number, medico: Medico, mae: Mae){
      this.certidao_nascimento = certidao_nascimento;
      this.nome = nome;
      this.data = data;
      this.peso = peso;
      this.altura = altura;
      this.medico = medico;
      this.mae = mae;
  }
}