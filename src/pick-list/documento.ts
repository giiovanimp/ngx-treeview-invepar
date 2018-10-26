export class Documento {
  nome: string;
  cor: string;
  nomeTag: string;

  public constructor(nome: string, cor: string, nomeTag: string) {
    this.nome = nome,
      this.cor = cor;
    this.nomeTag = nomeTag;
  }
}
