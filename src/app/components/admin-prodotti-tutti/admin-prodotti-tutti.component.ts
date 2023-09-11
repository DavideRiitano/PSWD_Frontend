import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Prodotto } from 'src/app/models/prodotto.model';
import { ProdottiService } from 'src/app/services/prodotti.service';

@Component({
  selector: 'app-admin-prodotti-tutti',
  templateUrl: './admin-prodotti-tutti.component.html',
  styleUrls: ['./admin-prodotti-tutti.component.css']
})
export class AdminProdottiTuttiComponent implements OnInit {

  prodotti!: Prodotto[];
  datiCaricati: boolean = false;
  quantita!: number;
  formModifica: FormGroup;
  modificaFlag: boolean = false;

  constructor(private prodottiService: ProdottiService, private snackBar: MatSnackBar) {
    this.formModifica = new FormGroup({
      nome: new FormControl(),
      marca: new FormControl(),
      categoria: new FormControl(),
      prezzo: new FormControl(),
      quantita: new FormControl(),
      descrizione: new FormControl()
    });
  }//constructor

  ngOnInit() {
    this.prodottiService.getProdotti().subscribe((data) => {
      this.prodotti = data;
      this.datiCaricati = true;
    })
  }//ngOnInit

  refresh() {
    this.datiCaricati = false;
    for(let i=0; i<this.prodotti.length; i++)
      this.prodotti.pop();

    this.prodottiService.getProdotti().subscribe((data) => {
      this.prodotti = data;
      this.datiCaricati = true;
    });
  }//refresh

  elimina(idProdotto: number) {
    this.prodottiService.deleteProdotto(idProdotto);
    this.snackBar.open("Prodotto eliminato!", "", {duration: 3*1000});
    this.refresh();
  }//elimina

  updateQuantPiu1(idProdotto: number) {
    this.prodottiService.updateQuantitaP(idProdotto);
    this.snackBar.open("Quantità aggiornata!", "", {duration: 3*1000});
    this.refresh();
  }//updateQuantPiu1

  updateQuantMeno1(idProdotto: number) {
    this.prodottiService.updateQuantitaM(idProdotto);
    this.snackBar.open("Quantità aggiornata!", "", {duration: 3*1000});
    this.refresh();
  }//updateQuantMeno1

  mostraFormModifica() {
    this.modificaFlag = !this.modificaFlag;
  }//mostraFormModifica

  updateProdotto(idProdotto: number) {
    let toUpdate: Prodotto = new Prodotto();

    toUpdate.setId(idProdotto);
    toUpdate.setNome(this.formModifica.value.nome);
    toUpdate.setMarca(this.formModifica.value.marca);
    toUpdate.setCategoria(this.formModifica.value.categoria);
    toUpdate.setPrezzo(this.formModifica.value.prezzo);
    toUpdate.setQuantita(this.formModifica.value.quantita);
    toUpdate.setDescrizione(this.formModifica.value.descrizione);

    this.prodottiService.updateProdotto(toUpdate);
    this.mostraFormModifica();
    this.snackBar.open("Prodotto aggiornato!", "", {duration: 3*1000});
    this.refresh();
  }//updateProdotto

}//AdminProdottiTuttiComponent
