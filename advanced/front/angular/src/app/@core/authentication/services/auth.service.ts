import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserManager, User, WebStorageStateStore, SignoutResponse } from 'oidc-client';

@Injectable({providedIn: 'root'})
export class AuthService {

  public user: User;
  private userManager: UserManager;

  constructor() {
    this.userManager = new UserManager({
      authority: environment.authority,
      client_id: environment.clientId,
      redirect_uri: environment.redirectUri,
      response_type: environment.responseType,
      scope: environment.scope,
      loadUserInfo : environment.loadUserInfo,
      filterProtocolClaims: environment.filterProtocolClaims,
      userStore: new WebStorageStateStore({ store: window.localStorage })
    });
  }

  signinRedirect(returnUrl: string): Promise<void> {
    return this.userManager.signinRedirect({ data: { returnUrl } });
  }

  async completeAuthentication() {
    this.user = await this.userManager.signinRedirectCallback();
    return this.user.state; // return url
  }

  isAuthenticated(): boolean {
    return this.user != null && !this.user.expired;
  }

  getClaims(): any {
    return this.user ? this.user.profile : null;
  }

  userIsInAnyRoles(authorizedRole: string[]) {
    let authorised = false;
    const claims = this.getClaims();
    if (claims && claims.role) {
      if (typeof claims.role === 'string') {
        authorised = authorizedRole.some(ar => ar === claims.role);
      } else {
        authorised = authorizedRole.some(ar => claims.role.includes(ar));
      }
    }
    return authorised;
  }

  getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  signout() : Promise<void>{
    return this.userManager.signoutRedirect();
  }

  signoutRedirectCallback(): Promise<void | SignoutResponse> {
    return this.userManager.signoutRedirectCallback()
      .catch((error) => {
        console.error('error while signout callback', error);
      });
  }

}