import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { KeycloakLoginOptions } from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {

  constructor(
    protected override readonly router: Router,
    protected readonly keycloak: KeycloakService
  ) {
    super(router, keycloak);
  }

  public async isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {

    if (!this.authenticated) {
      await this.keycloak.login({
        redirectUri: window.location.origin + state.url
      });
    }

    return this.authenticated;

    /*
    const requireRoles = route.data['roles'];

    if(!(requireRoles instanceof Array) || requireRoles.length === 0)
      return true;

    if(requireRoles.every((role) => this.roles.includes(role))) {
      return true;
    }
    else {
      this.router.navigate(['access-denied']);
      return false;
    }
  */

  }//isAccessAllowed

}//AuthGuard
