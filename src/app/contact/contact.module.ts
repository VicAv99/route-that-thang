import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactViewComponent } from './contact-view/contact-view.component';

@NgModule({
  declarations: [ContactComponent, ContactListComponent, ContactDetailsComponent, ContactViewComponent],
  imports: [
    CommonModule
  ]
})
export class ContactModule { }
