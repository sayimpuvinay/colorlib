import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';



@NgModule({
  declarations: [
    LoginComponentComponent,
    HomeComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModulesModule { }
