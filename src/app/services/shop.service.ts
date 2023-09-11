import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Prodotto } from '../models/prodotto.model';
import { Spedizione } from '../models/spedizione.model';
import { Carrello } from '../models/carrello.model';
import { ProdottoCarrello } from '../models/prodottoCarrello.model';
import { UtentiService } from './utenti.service';
import { environment } from 'src/environments/environments';
import { Utente } from '../models/utente.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ShopService {

  private uri: string = environment.serverUrl+"/shop";
  postId: any;

  constructor(private http: HttpClient, private utenteService: UtentiService) { }

  getProdotti(): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(this.uri);
  }//getProdotti

  registraOrdine(spedizione: Spedizione) {
    this.http.post<any>(this.uri+"/orderreg", spedizione, httpOptions).subscribe(data => {
      this.postId = data;
    });
  }//registraOrdine

  getCategorie(): Observable<string[]> {
    return this.http.get<string[]>(this.uri+"/categorie");
  }//getCategorie

  getCategoria(categoria: string): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(this.uri+"/categoria/"+categoria);
  }//getCategoria

  getCarrello(): Observable<Carrello> {
    return this.http.get<Carrello>(this.uri+"/cart");
  }//getCarrello

  setCarrello(carrello: Carrello) {
    this.http.post<any>(this.uri+"/setcart", carrello).subscribe(data => {
      this.postId = data;
    })
  }//setCarrello

  addToCarrello(prodotto: Prodotto, quant: number) {
    let prodottoCarrello: ProdottoCarrello = new ProdottoCarrello;

    //prodottoCarrello.setId(0);
    prodottoCarrello.setProdotto(prodotto);
    prodottoCarrello.setQuantita(quant);

    this.http.post<ProdottoCarrello>(this.uri+"/addtocart", prodottoCarrello, httpOptions).subscribe(data => {
      this.postId = data;
    });
  }//addToCarrello

}//ShopService
