import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    HomeModule
  ],
  declarations: [
    PagesComponent
  ]
})
export class PagesModule { }
