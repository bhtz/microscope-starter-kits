
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'auth', loadChildren: () => import('./@core/core.module').then(m => m.CoreModule) },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
