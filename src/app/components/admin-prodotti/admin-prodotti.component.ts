import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-prodotti',
  templateUrl: './admin-prodotti.component.html',
  styleUrls: ['./admin-prodotti.component.css']
})
export class AdminProdottiComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  naviga(path: string) {
    const navigationDetails = "shop/admin/prodotti";
    this.router.navigate([navigationDetails+"/"+path]);
  }//naviga

}//AdminProdottiComponent
