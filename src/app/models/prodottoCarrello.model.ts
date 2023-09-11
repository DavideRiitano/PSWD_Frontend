import { Prodotto } from "./prodotto.model";
import { Utente } from "./utente.model";

export class ProdottoCarrello {

  id!: number;
  quantita!: number;
  utente!: Utente;
  prodotto!: Prodotto;

  constructor() {}

  getId(): number { return this.id; }
  setId(id: number): void { this.id = id; }

  getQuantita(): number { return this.quantita; }
  setQuantita(quantita: number): void { this.quantita = quantita; }

  getUtente(): Utente { return this.utente; }
  setUtente(utente: Utente): void { this.utente = utente; }

  getProdotto(): Prodotto { return this.prodotto; }
  setProdotto(prodotto: Prodotto): void { this.prodotto = prodotto; }

}//ProdottoCarrello
