import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './components/secure/secure.component';
import { SecureRoutingModule } from './secure-routing.module';



@NgModule({
  declarations: [SecureComponent],
  imports: [
    CommonModule,
    SecureRoutingModule
  ]
})
export class SecureModule { }
