import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit  {

  categorie!: string[];
  datiCaricati: boolean  = false;

  constructor(private shopService: ShopService, private snackBar: MatSnackBar) {
  }//constructor

  ngOnInit(): void {
    this.shopService.getCategorie().subscribe((data) => {
      this.categorie = data.map(x => x);
      this.datiCaricati = true;
    });
  }//ngOnInit

}//CategoriaComponent
