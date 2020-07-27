import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/components/home/home.component';


const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [{
        path: 'home',
        component: HomeComponent,
    }, {
        path: 'secure',
        loadChildren: () => import('./secure/secure.module').then(m => m.SecureModule),
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    }, {
        path: '**',
        component: HomeComponent,
    }],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
}
