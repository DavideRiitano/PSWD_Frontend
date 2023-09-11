import { Ordine } from "./ordine.model";
import { Spedizione } from "./spedizione.model";
import { Utente } from "./utente.model";

export class Bolla {

  ordine!: Ordine;
  spedizione!: Spedizione;
  utente!: Utente;

  constructor () {}

  getOrdine():Ordine { return this.ordine; }
  setOrdine(ordine: Ordine): void { this.ordine = ordine; }

  getSpedizione(): Spedizione { return this.spedizione; }
  setSpedizione(spedizione: Spedizione): void { this.spedizione = spedizione; }

  getUtente(): Utente { return this.utente; }
  setUtente(uetnte: Utente): void { this.utente = this.utente; }

}//Bolla
