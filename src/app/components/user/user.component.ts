import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ordine } from 'src/app/models/ordine.model';
import { ProdottoOrdine } from 'src/app/models/prodottoOrdine.model';
import { Utente } from 'src/app/models/utente.model';
import { OrdiniService } from 'src/app/services/ordini.service';
import { UtentiService } from 'src/app/services/utenti.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  utente!: Utente;
  utenteCaricato: boolean = false;
  ordini: Ordine[];
  datiCaricati: boolean = false;
  mostraProdotti: boolean = false;
  prodotti: Map<Ordine, ProdottoOrdine[]>;

  constructor(private utenteService: UtentiService, private ordineService: OrdiniService, private router: Router) {
    this.prodotti = new Map<Ordine, ProdottoOrdine[]>
    this.ordini = new Array<Ordine>;
  }//constructor

  ngOnInit() {
    this.utenteService.getUtente().subscribe((data) => {
      this.utente = data;
      this.utenteCaricato = true;
    });

    this.ordineService.getOrdiniUtente().subscribe((data) => {
      this.ordini = data;
    });

    if(!this.isOrdiniVuoto())
      for(let ordine of this.ordini) {
        this.ordineService.getProdottiOrdinati(ordine.id).subscribe((data) => {
          this.prodotti.set(ordine, data);
        });
      }//for

    console.log(this.utente)

    this.datiCaricati = true;
  }//ngOnInit

  showProducts(): boolean {
    return this.mostraProdotti;
  }//showProducts

  mostraNascondi() {
    this.mostraProdotti = !this.mostraProdotti;
  }//mostraNascondi

  isOrdiniVuoto(): boolean {
    return this.ordini.length === 0;
  }//isOrdiniVuoto

  naviga() {
    const navigationDetails: string[] = ["shop/user/update"];
    this.router.navigate(navigationDetails);
  }//naviga

}//UserComponent
