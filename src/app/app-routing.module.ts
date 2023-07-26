import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponentComponent } from './login-modules/home-component/home-component.component';
import { LoginComponent } from './login-modules/login-component/login-component.component';
const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: '', component: LoginComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }