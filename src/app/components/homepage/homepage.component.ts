import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Prodotto } from 'src/app/models/prodotto.model';
import { ProdottiService } from 'src/app/services/prodotti.service';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  prodotti: Prodotto[]; //Array dei prodotti scaricati dal server.
  datiCaricati: boolean = false; //Booleano per indicare se sono già stati scaricati dal server.
  prodottiContatori: Map<Prodotto, number>

  //costruttore che inizializza l'array e richiama il servizio che provvede a comunicare col server
  constructor(private prodottiService: ProdottiService, private shopService: ShopService, private snackBar: MatSnackBar) {
    this.prodotti = new Array<Prodotto>();
    this.prodottiContatori = new Map<Prodotto, number>();
  }//costruttore

  ngOnInit() {
    //all'inizializzazione della component, si sfrutta in servizio per scaricare tutti i prodotti
    //e mapparli uno ad uno nell'array
    this.prodottiService.getProdotti().subscribe((data) => {
      this.prodotti = data.map(x => x);

      for(let prodotto of this.prodotti)
        this.prodottiContatori.set(prodotto, 0);

      this.datiCaricati = true;
    });
  }//ngOnInit

  isDisponibile(quantita: number): boolean {
    return quantita > 0;
  }//isDisponibile

  aggiungiAlCarrello(prodotto: Prodotto) {
    this.prodottiContatori.set(prodotto, (this.prodottiContatori.get(prodotto) as number)+1);

    this.shopService.addToCarrello(prodotto, this.prodottiContatori.get(prodotto) as number);
    this.snackBar.open("Prodotto aggiunto!", "" ,{duration: 3*1000});
  }//aggiungiAlCarrello

}//HomepageComponent
