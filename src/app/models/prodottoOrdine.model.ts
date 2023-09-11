import { Ordine } from "./ordine.model";
import { Prodotto } from "./prodotto.model";

export class ProdottoOrdine {

  id!: number;
  quantita!: number;
  ordine!: Ordine;
  prodotto!: Prodotto;

  constructor() {}

  getId(): number { return this.id; }
  setId(id: number): void { this.id = id; }

  getQuantita(): number { return this.quantita; }
  setQuantita(quantita: number): void { this.quantita = quantita; }

  getOrdine(): Ordine { return this.ordine; }
  setOrdine(ordine: Ordine): void { this.ordine = ordine; }

  getProdotto(): Prodotto { return this.prodotto; }
  setProdotto(prodotto: Prodotto): void { this.prodotto = prodotto; }

}//ProdottoOrdine
