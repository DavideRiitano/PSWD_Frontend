import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdottoCarrello } from '../models/prodottoCarrello.model';
import { Carrello } from '../models/carrello.model';
import { environment } from 'src/environments/environments';
import { Ordine } from '../models/ordine.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  private uri: string = environment.serverUrl+"/cart";
  postId: any;

  constructor(private http: HttpClient) { }

  getProdottiCarrello(): Observable<ProdottoCarrello[]> {
    return this.http.get<ProdottoCarrello[]>(this.uri)
  }//getProdottiCarrello

  deleteProdotto(prodottoCarrello: ProdottoCarrello): Observable<any> {
    return this.http.post<any>(this.uri+"/remove", prodottoCarrello)
  }//deleteProdotto

  emptyCarrello(): Observable<any> {
    return this.http.get<any>(this.uri+"/empty");
  }//emptyCarrello

  registraOrdine(ordine: Ordine) {
    this.http.post<any>(this.uri+"/orderreg", ordine, httpOptions).subscribe(data => {
      this.postId = data;
    });
  }//registraOrdine

}//CarrelloService
