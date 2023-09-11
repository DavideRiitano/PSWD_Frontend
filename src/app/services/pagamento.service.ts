import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagamento } from '../models/pagamento.model';
import { environment } from 'src/environments/environments';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PagamentoService {

  private uri: string = environment.serverUrl+"/payments";
  postId: any;

  constructor(private http: HttpClient) { }

  getPagamento(idOrdine: number): Observable<Pagamento> {
    return this.http.get<Pagamento>(this.uri+"/"+idOrdine);
  }//getPagamento

  updatePagamento(pagamento: Pagamento) {
    this.http.post<any>(this.uri+"/update", pagamento).subscribe(data => {
      this.postId = data;
    });
  }//updatePagamento

}//PagamentoService
