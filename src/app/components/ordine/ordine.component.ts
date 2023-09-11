import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ordine } from 'src/app/models/ordine.model';
import { Pagamento } from 'src/app/models/pagamento.model';
import { Spedizione } from 'src/app/models/spedizione.model';
import { CarrelloService } from 'src/app/services/carrello.service';

@Component({
  selector: 'app-ordine',
  templateUrl: './ordine.component.html',
  styleUrls: ['./ordine.component.css']
})
export class OrdineComponent implements OnInit {

  spedizioneForm: FormGroup;
  pagamentoForm: FormGroup;

  constructor(private carrelloService: CarrelloService, private snackBar: MatSnackBar) {
    this.spedizioneForm = new FormGroup({
      indirizzo: new FormControl(),
      comune: new FormControl(),
      cap: new FormControl(),
      note: new FormControl()
    });

    this.pagamentoForm = new FormGroup({
      nome: new FormControl(),
      cognome: new FormControl(),
      numCarta: new FormControl(),
      exp: new FormControl(),
      ccv: new FormControl()
    });
  }//constructor

  ngOnInit() {
  }

  registraOrdine() {
    let spedizione: Spedizione = new Spedizione();
    let pagamento: Pagamento = new Pagamento();

    spedizione.setIndirizzo(this.spedizioneForm.value.indirizzo);
    spedizione.setComune(this.spedizioneForm.value.comune);
    spedizione.setCap(this.spedizioneForm.value.cap);
    spedizione.setNote(this.spedizioneForm.value.note);

    pagamento.setNome(this.pagamentoForm.value.nome);
    pagamento.setCognome(this.pagamentoForm.value.cognome);
    pagamento.setNumCarta(this.pagamentoForm.value.numCarta);
    pagamento.setExp(this.pagamentoForm.value.exp);
    pagamento.setCvv(this.pagamentoForm.value.ccv);

    let ordine: Ordine = new Ordine();
    ordine.setSpedizione(spedizione);
    ordine.setPagamento(pagamento);
    ordine.setSpedito(false);

    this.carrelloService.registraOrdine(ordine);

    this.snackBar.open("Ordine effettuato!", "", {duration: 3*1000});
  }//registraOrdine

}//OrdineComponent
