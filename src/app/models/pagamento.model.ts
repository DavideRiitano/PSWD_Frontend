import { Ordine } from "./ordine.model";

export class Pagamento {

  ordine!: Ordine;
  nome!: string;
  cognome!: string;
  numCarta!: number;
  exp!: Date;
  cvv!: number;

  constructor() {}

  getOrdine(): Ordine { return this.ordine; }
  setOrdine(ordine: Ordine): void { this.ordine = ordine; }

  getNome(): string { return this.nome; }
  setNome(nome: string): void { this.nome = nome; }

  getCognome(): string { return this.cognome; }
  setCognome(cognome: string): void { this.cognome = cognome; }

  getNumCarta(): number { return this.numCarta; }
  setNumCarta(numCarta: number): void { this.numCarta = numCarta; }

  getExp(): Date { return this.exp; }
  setExp(exp: Date): void { this.exp = exp; }

  getCvv(): number { return this.cvv; }
  setCvv(cvv: number): void { this.cvv = cvv; }

}//Pagamento
