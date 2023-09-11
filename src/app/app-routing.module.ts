import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrdiniComponent } from './components/admin-ordini/admin-ordini.component';
import { AdminProdottiAggiungiComponent } from './components/admin-prodotti-aggiungi/admin-prodotti-aggiungi.component';
import { AdminProdottiTuttiComponent } from './components/admin-prodotti-tutti/admin-prodotti-tutti.component';
import { AdminProdottiComponent } from './components/admin-prodotti/admin-prodotti.component';
import { AdminUtentiComponent } from './components/admin-utenti/admin-utenti.component';
import { AdminComponent } from './components/admin/admin.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserComponent } from './components/user/user.component';
import { OrdineComponent } from './components/ordine/ordine.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { PreviewComponent } from './components/preview/preview.component';
import { ProfileManagerComponent } from './components/profile-manager/profile-manager.component';
import { AboutComponent } from './components/about/about.component';
import { AuthGuard } from './guard/auth.guard';

/*
const routes: Routes = [
  {path: 'preview', component: PreviewComponent},
  {path: 'shop', component: ToolbarComponent, children: [
    {path: 'home', component: HomepageComponent, canActivate: [AuthGuard], data:{roles:['admin', 'user']}},
    {path: 'about', component: AboutComponent, canActivate: [AuthGuard], data:{roles:['admin', 'user']}},
    {path: 'categorie', component: CategoriaComponent, canActivate: [AuthGuard], data:{roles:['admin', 'user']}},
    {path: 'cart' ,component: CarrelloComponent, canActivate: [AuthGuard], data:{roles:['admin', 'user']}},
    {path: 'signin', component: RegistrazioneComponent, canActivate: [AuthGuard], data:{roles:['admin', 'user']}},
    {path: 'manager', component: ProfileManagerComponent, canActivate: [AuthGuard], data:{roles:['admin', 'user']}},
    {path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data:{roles:['client_admin']}, children: [
      {path: 'ordini', component: AdminOrdiniComponent},
      {path: 'users', component: AdminUtentiComponent},
      {path: 'prodotti', component: AdminProdottiComponent, children: [
        {path: 'tutti', component: AdminProdottiTuttiComponent},
        {path: 'aggiungi', component: AdminProdottiAggiungiComponent}
      ]}
    ]},
    {path: 'user', children: [
      {path: 'profilo', component: UserComponent, canActivate: [AuthGuard], data:{roles:['client_user']}},
      {path: 'update', component: UserUpdateComponent, canActivate: [AuthGuard], data:{roles:['client_user']}},
      {path: 'ordina', component: OrdineComponent, canActivate: [AuthGuard], data:{roles:['client_user']}}
    ]}
  ]},
  {path: 'not-found', component: NotFoundComponent},
  {path: '', redirectTo: 'preview', pathMatch: 'full'},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'},
  {path: 'access-denied', component: AccessDeniedComponent}
];
*/

const routes: Routes = [
  {path: 'preview', component: PreviewComponent},
  {path: 'shop', component: ToolbarComponent, children: [
    {path: 'home', component: HomepageComponent, canActivate: [AuthGuard]},
    {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
    {path: 'categorie', component: CategoriaComponent, canActivate: [AuthGuard]},
    {path: 'cart' ,component: CarrelloComponent, canActivate: [AuthGuard]},
    {path: 'signin', component: RegistrazioneComponent, canActivate: [AuthGuard]},
    {path: 'manager', component: ProfileManagerComponent, canActivate: [AuthGuard]},
    {path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
      {path: 'ordini', component: AdminOrdiniComponent},
      {path: 'users', component: AdminUtentiComponent},
      {path: 'prodotti', component: AdminProdottiComponent, children: [
        {path: 'tutti', component: AdminProdottiTuttiComponent},
        {path: 'aggiungi', component: AdminProdottiAggiungiComponent}
      ]}
    ]},
    {path: 'user', children: [
      {path: 'profilo', component: UserComponent, canActivate: [AuthGuard]},
      {path: 'update', component: UserUpdateComponent, canActivate: [AuthGuard]},
      {path: 'ordina', component: OrdineComponent, canActivate: [AuthGuard]}
    ]}
  ]},
  {path: 'not-found', component: NotFoundComponent},
  {path: '', redirectTo: 'preview', pathMatch: 'full'},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'},
  {path: 'access-denied', component: AccessDeniedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
