import { ProdottoCarrello } from "./prodottoCarrello.model";

export class Carrello {

  prodotti!: ProdottoCarrello[];
  totale!: number;
  totArticoli: number = 0;

  constructor(prodotti: ProdottoCarrello[]) {
    this.prodotti = prodotti;
    for(let prodotto of prodotti) {
      this.totale += prodotto.getProdotto().getPrezzo()*prodotto.getQuantita();
      this.totArticoli += prodotto.getQuantita();
    }//for
  }//costruttore

  getProdotti(): ProdottoCarrello[] { return this.prodotti; }
  setProdotti(prodotti: ProdottoCarrello[]): void { this.prodotti = prodotti; }

  getTotale(): number { return this.totale; }
  setTotale(totale: number): void { this.totale = totale;}

  getTotArticoli(): number { return this.totArticoli; }
  setTotArticoli(totArticoli: number): void { this.totArticoli = totArticoli;}

}//Carrello
