import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { NewUserComponent } from './Components/new-user/new-user.component';
import { SetupUserComponent } from './Components/setup-user/setup-user.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'signup',
  component: NewUserComponent
},
{
  path: 'setupuser',
  component: SetupUserComponent
},
{
  path: 'home',
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
