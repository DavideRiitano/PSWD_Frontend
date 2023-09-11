import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Carrello } from 'src/app/models/carrello.model';
import { ProdottoCarrello } from 'src/app/models/prodottoCarrello.model';
import { CarrelloService } from 'src/app/services/carrello.service';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {

  carrello!: Carrello;
  prodotti!: ProdottoCarrello[]
  datiCaricati: boolean = false;

  constructor(private carrelloService: CarrelloService, private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.carrelloService.getProdottiCarrello().subscribe((data) => {
      this.prodotti = data;
      this.carrello = new Carrello(this.prodotti);
      this.datiCaricati = true;
    });
  }//ngOnInit

  refresh() {
    this.datiCaricati = false;

    this.carrelloService.getProdottiCarrello().subscribe((data) => {
      this.prodotti = data.map(x => x);
      this.carrello = new Carrello(this.prodotti);
      this.datiCaricati = true;
    });
  }//refresh

  getProdottiCarrello(): ProdottoCarrello[] {
    return this.carrello.prodotti
  }//getProdottiCarrello

  svuotaCarrello() {
    this.carrelloService.emptyCarrello();
    this.datiCaricati = false;
    this.snackBar.open("Carrello svuotato!", "", {duration: 3*1000});
    this.refresh();
  }//svuotaCarrello

  rimuoviProdotto(toRemove: ProdottoCarrello) {
    this.carrelloService.deleteProdotto(toRemove);
    this.snackBar.open("Prodotto rimosso!", "", {duration: 3*1000});
    this.refresh();
  }//rimuoviProdotto

  ordina() {
    this.router.navigate(["shop/user/ordina"]);
  }//ordina

  isCarrelloVuoto(): boolean {
    return this.prodotti.length === 0;
  }//isCarrelloVuoto

}//CarrelloComponent
