import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService) {

  }

  canActivate(routeSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if ( this.authService.isAuthenticated()) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    const returnUrl = state.url;
    this.authService.signinRedirect(returnUrl);
    return false;

  }
}
