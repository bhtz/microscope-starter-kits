import { Routes } from '@angular/router';
import { AuthSignoutCallbackComponent } from './components/auth-signout-callback/auth-signout-callback.component';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';

export const authRoutes: Routes = [
    {
      path: 'callback',
      component: AuthCallbackComponent
    },
    {
      path: 'signout-callback',
      component: AuthSignoutCallbackComponent
    }
  ];
