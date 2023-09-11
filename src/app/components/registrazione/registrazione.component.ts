import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrazioneService } from 'src/app/services/registrazione.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  formDati: FormGroup;
  hide: boolean = true;

  constructor(private registrazioneService: RegistrazioneService) {
    this.formDati = new FormGroup({
      username: new FormControl(Validators.required),
      nome: new FormControl(Validators.required),
      cognome: new FormControl(Validators.required),
      email: new FormControl(Validators.required, Validators.email),
      password: new FormControl(Validators.required)
    });
  }//constructor

  ngOnInit() {
  }

  registraUser() {
    this.registrazioneService.registra(this.formDati);
  }//registraUser

}//RegistrazioneComponent
