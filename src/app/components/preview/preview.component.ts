import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prodotto } from 'src/app/models/prodotto.model';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  prodotti: Prodotto[];
  datiCaricati: boolean = false;

  constructor(private shopService: ShopService, private router: Router) {
    this.prodotti = new Array<Prodotto>();
  }//constructor

  ngOnInit() {
    this.shopService.getProdotti().subscribe((data) => {
      this.prodotti = data.map(x => x);
      this.datiCaricati = true;
    });
  }//ngOnInit

  vaiAlloShop() {
    this.router.navigate(['shop/home']);
  }//vaiAlloShop

}//PreviewComponent
