import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { UtentiService } from './utenti.service';
import { Utente } from '../models/utente.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RegistrazioneService {

  private url: string = ""

  constructor(private http: HttpClient, private utenteService: UtentiService) { }

  registra(formDati: FormGroup): Observable<any> {
    let datiRegistrazione = {
      "username": formDati.value.username,
      "email": formDati.value.email,
      "enable": true,
      "firstName": formDati.value.nome,
      "lastName": formDati.value.cognome,
      "credentials": [{
        "type": "password",
        "value": formDati.value.password
      }]
    }//dati

    let newUtente: Utente = new Utente;
    newUtente.setUsername(datiRegistrazione.username),
    newUtente.setEmail(datiRegistrazione.email),
    newUtente.setNome(datiRegistrazione.firstName),
    newUtente.setCognome(datiRegistrazione.lastName)

    this.utenteService.addUtente(newUtente);

    return this.http.post<any>(this.url, datiRegistrazione, httpOptions);
  }//registra

}//RegistrazioneService
