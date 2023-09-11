import { HttpClient, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utente } from '../models/utente.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UtentiService {

  utenti!: Utente[];
  private uri: string = environment.serverUrl+"/users";
  postId: any;

  constructor(private http: HttpClient) { }

  getUtente(): Observable<Utente> {
    return this.http.get<Utente>(this.uri+"/get");
  }//getUtente

  getUtenti() : Observable<Utente[]> {
    return this.http.get<Utente[]>(this.uri);
  }//getUtenti

  addUtente(newUtente : Utente) {
    this.http.post<any>(this.uri + '/add', newUtente, httpOptions).subscribe(data => {
      this.postId = data;
   });
  }//addUtente

  deleteUtente(idUtente: number) {
    this.http.delete<any>(this.uri +'/delete/'+ idUtente).subscribe(data => {
      this.postId = data;
    });
  }//deleteUtente

  updateUtente(utente: Utente) {
    this.http.post<any>(this.uri +"/update", utente, httpOptions).subscribe(data => {
      this.postId = data;
    });
  }//updateUtente

}//UtentiService
