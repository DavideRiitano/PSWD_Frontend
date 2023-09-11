import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-manager',
  templateUrl: './profile-manager.component.html',
  styleUrls: ['./profile-manager.component.css']
})
export class ProfileManagerComponent {

  constructor(private router: Router) { }

  naviga(ruolo: string) {
    this.router.navigate(["shop/"+ruolo])
  }//naviga

}//ProfileManagerComponent
