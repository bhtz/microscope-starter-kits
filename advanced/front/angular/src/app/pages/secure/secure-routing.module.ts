import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureComponent } from './components/secure/secure.component';
import { AuthGuard } from 'src/app/@core/authentication/services/authGuard';


const routes: Routes = [
  {
    path: 'secure',
    component: SecureComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'secure',
    pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecureRoutingModule { }
