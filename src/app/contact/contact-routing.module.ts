import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { ContactViewComponent } from './contact-view/contact-view.component';

const routes: Route[] = [
  {
    path: 'contacts', component: ContactComponent, children: [
      { path: ':id', component: ContactViewComponent }
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
