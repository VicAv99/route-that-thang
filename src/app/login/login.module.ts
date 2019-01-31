import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { Route, RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';

const routes: Route[] = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class LoginModule { }
