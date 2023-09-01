import Mae from "./mae";
import Medico from "./medico";

export default class Bebe {
  private certidao_nascimento: number;
  private nome: string;
  private data: Date;
  private peso: number;
  private altura: number;
  private medico: Medico;
  private mae: Mae;

  constructor (certidao_nascimento: number, nome: string, data: Date, peso: number, altura: number, medico: Medico, mae: Mae){
      this.certidao_nascimento = certidao_nascimento;
      this.nome = nome;
      this.data = data;
      this.peso = peso;
      this.altura = altura;
      this.medico = medico;
      this.mae = mae;
  }
}

