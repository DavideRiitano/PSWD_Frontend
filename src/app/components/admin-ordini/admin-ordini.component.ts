import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ordine } from 'src/app/models/ordine.model';
import { ProdottoOrdine } from 'src/app/models/prodottoOrdine.model';
import { OrdiniService } from 'src/app/services/ordini.service';

@Component({
  selector: 'app-admin-ordini',
  templateUrl: './admin-ordini.component.html',
  styleUrls: ['./admin-ordini.component.css']
})
export class AdminOrdiniComponent implements OnInit {

  mostraProdotti: boolean = false;
  datiCaricati: boolean = false;
  ordini: Ordine[];
  prodotti: Map<Ordine, ProdottoOrdine[]>;

  constructor(private ordiniService: OrdiniService, private snackBar: MatSnackBar) {
    this.prodotti = new Map<Ordine, ProdottoOrdine[]>
    this.ordini = new Array<Ordine>;
  }

  ngOnInit() {
    this.ordiniService.getOrdini().subscribe((data) => {
      this.ordini = data;
    })

    for(let ordine of this.ordini) {
      this.ordiniService.getProdottiOrdinati(ordine.id).subscribe((data) => {
        this.prodotti.set(ordine, data);
      });
    }//for

    this.datiCaricati = true;
  }//ngOnInit

  showProducts(): boolean {
    return this.mostraProdotti;
  }//showProducts

  mostraNascondi() {
    this.mostraProdotti = !this.mostraProdotti;
  }//mostraNascondi

  segnaSpedito(idOrdine: number) {
    this.ordiniService.setSpedito(idOrdine);
    this.snackBar.open("Ordine spedito!", "", {duration: 3*1000});
  }//segnaSpedito

}//AdminOrdiniComponent
