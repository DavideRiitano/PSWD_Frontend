import { Injectable } from '@angular/core';
import { ProdottiService } from './prodotti.service';
import { Prodotto } from '../models/prodotto.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CercaService {

  prodotti!: Prodotto[];
  private uri: string = environment.serverUrl+"/cerca";

  constructor(private http: HttpClient) { }

  cerca(toSearch: Prodotto): Observable<Prodotto[]> {
    return this.http.post<Prodotto[]>(this.uri, toSearch);
  }//cerca

}//CercaService
