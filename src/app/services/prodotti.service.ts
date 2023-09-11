import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Prodotto } from '../models/prodotto.model';
import { environment } from 'src/environments/environments';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  prodotti!: Prodotto[];
  private uri: string = environment.serverUrl+"/products";
  postId: any;

  constructor(private http: HttpClient) { }

  getProdotti(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(this.uri, httpOptions);
  }//getProdotti

  getProdotto(idProdotto: number): Observable<Prodotto> {
    return this.http.get<Prodotto>(this.uri+"/"+idProdotto);
  }//getProdotto

  addProdotto(prodotto: Prodotto) {
    this.http.post<any>(this.uri+"/add", prodotto, httpOptions).subscribe(data => {
      this.postId = data;
    })
  }//addProdotto

  deleteProdotto(idProdotto: number): Observable<any> {
    return this.http.delete<any>(this.uri+"/delete/"+idProdotto);
  }//deleteProdotto

  updateProdotto(prodotto: Prodotto) {
    this.http.post<Prodotto>(this.uri+"/update", prodotto).subscribe(data => {
      this.postId = data;
    })
  }//updateProdotto

  updateQuantitaP(idProdotto: number) {
    this.http.post<Prodotto>(this.uri+"/quantp/"+idProdotto, httpOptions).subscribe(data => {
      this.postId = data;
    })
  }//updateQuantitaP

  updateQuantitaM(idProdotto: number) {
    this.http.post<Prodotto>(this.uri+"/quantm/"+idProdotto, httpOptions).subscribe(data => {
      this.postId = data;
    })
  }//updateQuantitaM

}//ProdottiService
