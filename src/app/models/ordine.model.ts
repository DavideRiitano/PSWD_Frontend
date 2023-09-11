import { Utente } from "./utente.model";
import { Spedizione } from "./spedizione.model";
import { Pagamento } from "./pagamento.model";
import { ProdottoOrdine } from "./prodottoOrdine.model"

export class Ordine {

  id!: number;
  data!: Date;
  totale!: number;
  utente!: Utente;
  spedizione!: Spedizione;
  pagamento!: Pagamento;
  prodottoOrdine!: ProdottoOrdine[];
  spedito!: boolean;

  constructor() {}

  getId(): number { return this.id; }
  setId(id: number): void { this.id = id; }

  getData(): Date { return this.data; }
  setData(data: Date): void { this.data = data; }

  getTotale(): number { return this.totale; }
  setTotale(totale: number): void { this.totale = totale; }

  getUtente(): Utente { return this.utente; }
  steUtente(utente: Utente): void { this.utente = utente; }

  getSpedizione(): Spedizione { return this.spedizione; }
  setSpedizione(spedizione: Spedizione): void { this.spedizione = spedizione; }

  getPagamento(): Pagamento { return this.pagamento; }
  setPagamento(pagamento: Pagamento): void { this.pagamento = pagamento; }

  getProdottoOrdine(): ProdottoOrdine[] { return this.prodottoOrdine; }
  setProdottoOrdine(prodottoOrdine: ProdottoOrdine[]): void { this.prodottoOrdine = prodottoOrdine; }

  isSpedito(): boolean { return this.spedito; }
  setSpedito(spedito: boolean) { this.spedito = spedito; }

}//Ordine
