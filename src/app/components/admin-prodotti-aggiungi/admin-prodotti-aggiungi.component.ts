import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Prodotto } from 'src/app/models/prodotto.model';
import { ProdottiService } from 'src/app/services/prodotti.service';

@Component({
  selector: 'app-admin-prodotti-aggiungi',
  templateUrl: './admin-prodotti-aggiungi.component.html',
  styleUrls: ['./admin-prodotti-aggiungi.component.css']
})
export class AdminProdottiAggiungiComponent implements OnInit {

  formDati: FormGroup;

  constructor(private prodottiService: ProdottiService, private snackBar: MatSnackBar) {
    this.formDati = new FormGroup({
      nome: new FormControl(),
      marca: new FormControl(),
      categoria: new FormControl(),
      prezzo: new FormControl(),
      quantita: new FormControl(),
      descrizione: new FormControl()
    });
  }//constructor

  ngOnInit() {
  }

  addProdotto() {
    let toAdd: Prodotto = new Prodotto();

    toAdd.setNome(this.formDati.value.nome);
    toAdd.setMarca(this.formDati.value.marca);
    toAdd.setCategoria(this.formDati.value.categoria);
    toAdd.setPrezzo(this.formDati.value.prezzo);
    toAdd.setQuantita(this.formDati.value.quantita);
    toAdd.setDescrizione(this.formDati.value.descrizione);

    this.prodottiService.addProdotto(toAdd);

    this.snackBar.open("Prodotto aggiunto!", "", {duration: 3*1000});
  }//addProdotto

}//AdminProdottiAggiungiComponent
