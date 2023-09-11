import { Component, OnInit } from '@angular/core';
import { Ordine } from 'src/app/models/ordine.model';
import { Utente } from 'src/app/models/utente.model';
import { OrdiniService } from 'src/app/services/ordini.service';
import { UtentiService } from 'src/app/services/utenti.service';

@Component({
  selector: 'app-admin-utenti',
  templateUrl: './admin-utenti.component.html',
  styleUrls: ['./admin-utenti.component.css']
})
export class AdminUtentiComponent implements OnInit {

  utenti: Utente[];
  datiCaricati: boolean = false;
  ordini: Map<Utente, Ordine[]>;
  showOrdini: boolean = false;

  constructor(private utentiService: UtentiService, private ordiniService: OrdiniService) {
    this.ordini = new Map<Utente, Ordine[]>();
    this.utenti = new Array<Utente>;
  }//constructor

  ngOnInit() {
    this.utentiService.getUtenti().subscribe((data) => {
      this.utenti = data;
    });

    for(let utente of this.utenti)
      this.ordiniService.getOrdiniOfUtente(utente).subscribe((data) => {
        this.ordini.set(utente, data);
      })

    this.datiCaricati = true;
  }//ngOnInit

  mostraOrdini() {
    this.showOrdini = !this.showOrdini;
  }//mostraOrdini

}//AdminUtentiComponent
