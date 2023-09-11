import { Ordine } from "./ordine.model";

export class Spedizione {

  ordine!: Ordine;
  indirizzo!: string;
  comune!: string;
  cap!: number;
  note!: string;

  constructor() {}

  getOrdine(): Ordine { return this.ordine; }
  setOrdine(ordine: Ordine): void { this.ordine = ordine; }

  getIndirizzo(): string { return this.indirizzo; }
  setIndirizzo(indirizzo: string): void { this.indirizzo = indirizzo; }

  getComune(): string { return this.comune; }
  setComune(comune: string): void { this.comune = comune; }

  getCap(): number { return this.cap; }
  setCap(cap: number): void { this.cap = cap; }

  getNote(): string { return this.note; }
  setNote(note: string): void { this.note = note; }

}//Spedizione
