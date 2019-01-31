import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ContactRoutingModule
  ],
  declarations: [
    ContactComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ContactViewComponent
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
