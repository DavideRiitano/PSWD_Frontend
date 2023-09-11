import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Components imports
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { UserComponent } from './components/user/user.component';
import { AdminOrdiniComponent } from './components/admin-ordini/admin-ordini.component';
import { AdminProdottiComponent } from './components/admin-prodotti/admin-prodotti.component';
import { AdminUtentiComponent } from './components/admin-utenti/admin-utenti.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { AdminProdottiTuttiComponent } from './components/admin-prodotti-tutti/admin-prodotti-tutti.component';
import { AdminProdottiAggiungiComponent } from './components/admin-prodotti-aggiungi/admin-prodotti-aggiungi.component';
import { OrdineComponent } from './components/ordine/ordine.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { PreviewComponent } from './components/preview/preview.component';
import { ProfileManagerComponent } from './components/profile-manager/profile-manager.component';

//Angular Materials imports
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatBadgeModule } from '@angular/material/badge';

//Services imports
import { CarrelloService } from './services/carrello.service';
import { CercaService } from './services/cerca.service';
import { OrdiniService } from './services/ordini.service';
import { PagamentoService } from './services/pagamento.service';
import { ProdottiService } from './services/prodotti.service';
import { ShopService } from './services/shop.service';
import { SpedizioneService } from './services/spedizione.service';
import { UtentiService } from './services/utenti.service';
import { RegistrazioneService } from './services/registrazione.service';

import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './init/keycloak-init.factory';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomepageComponent,
    AboutComponent,
    CarrelloComponent,
    NotFoundComponent,
    CategoriaComponent,
    AdminComponent,
    AdminOrdiniComponent,
    AdminProdottiComponent,
    AdminUtentiComponent,
    UserComponent,
    UserUpdateComponent,
    RegistrazioneComponent,
    AdminProdottiTuttiComponent,
    AdminProdottiAggiungiComponent,
    OrdineComponent,
    AccessDeniedComponent,
    PreviewComponent,
    ProfileManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    MatListModule,
    MatStepperModule,
    MatBadgeModule,
    MatInputModule,
    KeycloakAngularModule
  ],
  providers: [
    CarrelloService,
    CercaService,
    OrdiniService,
    PagamentoService,
    ProdottiService,
    ShopService,
    SpedizioneService,
    UtentiService,
    RegistrazioneService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
