import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { AuthGuardService } from '../core/auth/auth-guard.service';

const routes: Route[] = [
  {
    path: 'contacts', component: ContactComponent, canActivate: [AuthGuardService], children: [
      { path: ':id', component: ContactViewComponent, canActivate: [AuthGuardService] }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
