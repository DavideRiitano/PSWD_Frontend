import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Utente } from 'src/app/models/utente.model';
import { UtentiService } from 'src/app/services/utenti.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  utente!: Utente;
  datiCaricati: boolean = false;
  formDati: FormGroup;

  constructor(private utenteService: UtentiService, private snackBar: MatSnackBar) {
    this.formDati = new FormGroup({
      username: new FormControl(),
      nome: new FormControl(),
      cognome: new FormControl(),
      email: new FormControl()
    });
  }//constructor

  ngOnInit() {
    this.utenteService.getUtente().subscribe((data) => {
      this.utente = data;
      this.datiCaricati = true;
    })
  }//ngOnInit

  salva() {
    let toUpdate: Utente = new Utente();

    toUpdate.setId(this.utente.id);
    toUpdate.setUsername(this.formDati.value.username);
    toUpdate.setNome(this.formDati.value.nome);
    toUpdate.setCognome(this.formDati.value.cognome);
    toUpdate.setEmail(this.formDati.value.email);

    this.utenteService.updateUtente(toUpdate);

    this.snackBar.open("Informazioni aggiornate!", "", {duration: 3*1000});
  }//modifica

}//UserUpdateComponent
