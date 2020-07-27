import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as _ from 'lodash';
import { AuthService } from './auth.service';



@Injectable()
export class AuthRoleGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {

  }

  canActivate(routeSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // if is not authenticated, redirect to login
    if (!this.authService.isAuthenticated()) {
      const returnUrl = state.url;
      this.authService.signinRedirect(returnUrl);
      return false;
    }

    const authorizedRoles = routeSnapshot.data['authorizedRole'] || [];

    // useless ??
    if (authorizedRoles.length === 0) {
      return true;
    }


    if (this.authService.userIsInAnyRoles(authorizedRoles)) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
