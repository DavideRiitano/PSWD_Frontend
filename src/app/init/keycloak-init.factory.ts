import { KeycloakService } from "keycloak-angular";
import { environment } from "src/environments/environments";

export function initializeKeycloak(keycloak: KeycloakService) {


  return() =>
  keycloak.init({
    config: {
      url: environment.keycloak.issuer,
      realm: environment.keycloak.realm,
      clientId: environment.keycloak.clientId
    },
    initOptions:  {
      checkLoginIframe: true,
      checkLoginIframeInterval: 25,
      flow: "implicit"
    },
    loadUserProfileAtStartUp: true
  });

}//initializeKeycloak
