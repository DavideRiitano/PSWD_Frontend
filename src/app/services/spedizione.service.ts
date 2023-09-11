import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Spedizione } from '../models/spedizione.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SpedizioneService {

  private uri: string = environment.serverUrl+"/shipments";
  postId: any;

  constructor(private http: HttpClient) { }

  getSpedizione(idOrdine: number): Observable<Spedizione> {
    return this.http.get<Spedizione>(this.uri+"/"+idOrdine);
  }//getSpedizione

  updateSpedizione(pagamento: Spedizione) {
    this.http.post<any>(this.uri+"/update", pagamento).subscribe(data => {
      this.postId = data;
    });
  }//updateSpedizione

}//SpedizioneService
