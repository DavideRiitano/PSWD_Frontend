import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ordine } from '../models/ordine.model';
import { ProdottoOrdine } from '../models/prodottoOrdine.model';
import { Bolla } from '../models/bolla.model';
import { environment } from 'src/environments/environments';
import { Utente } from '../models/utente.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class OrdiniService {

  private uri: string = environment.serverUrl+"/orders";
  postId: any;

  constructor(private http: HttpClient) { }

  getOrdiniUtente(): Observable<Ordine[]> {
    return this.http.get<Ordine[]>(this.uri);
  }//getOrdiniUtente

  getOrdiniOfUtente(utente: Utente): Observable<Ordine[]> {
    return this.http.get<Ordine[]>(this.uri+"/showAll-utente");
  }//getOrdiniOfUtente

  getOrdini(): Observable<Ordine[]> {
    return this.http.get<Ordine[]>(this.uri+"/showAll");
  }//getOrdine

  getProdottiOrdinati(idOrdine: number): Observable<ProdottoOrdine[]> {
    return this.http.get<ProdottoOrdine[]>(this.uri+"/ordered/"+idOrdine, httpOptions);
  }//getProdottiOrdinati

  getBolla(idOrdine: number): Observable<Bolla> {
    return this.http.get<Bolla>(this.uri+"/bolla/"+idOrdine, httpOptions);
  }//getBolla

  removeOrdine(idOrdine: number) {
    this.http.delete<any>(this.uri+"/remove/"+idOrdine).subscribe(data => {
      this.postId = data;
    });
  }//removeOrdine

  setSpedito(idOrdine: number) {
    this.http.post<any>(this.uri+""+idOrdine, null).subscribe(data => {
      this.postId = data;
    });
  }//setSpedito

}//OrdiniService
