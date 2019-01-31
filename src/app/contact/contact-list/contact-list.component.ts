import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/core/models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  @Input() contacts: Contact[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() navigateToContact = new EventEmitter();

  constructor() { }

  select(contact: Contact) {
    this.selected.emit(contact);
  }

  remove(contactId: string) {
    this.deleted.emit(contactId);
  }

  viewContactDetails(contactId: any) {
    this.navigateToContact.emit(contactId);
  }
}
