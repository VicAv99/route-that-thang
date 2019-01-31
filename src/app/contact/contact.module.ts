import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [
    ContactComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ContactViewComponent
  ],
  imports: [
    ContactRoutingModule
  ],
})
export class ContactModule { }
