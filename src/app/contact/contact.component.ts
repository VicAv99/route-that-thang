import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../core/contacts/contacts.service';
import { Observable } from 'rxjs';
import { Contact } from '../core/models/contact';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifyService } from '../core/notify/notify.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  contact: Contact;
  contacts$: Observable<Contact[]>;

  constructor(
    private contactsService: ContactsService,
    private formBuilder: FormBuilder,
    private notifyService: NotifyService
  ) {}

  ngOnInit() {
    this.getContacts();
    this.initForm();
  }

  getContacts() {
    this.contacts$ = this.contactsService.all$();
  }

  selectContact(contact: Contact) {
    this.contact = contact;
    this.form.patchValue(contact);
  }

  saveContact(contact: Contact) {
    contact.id ? this.updateContact(contact) : this.createContact(contact);
  }

  createContact(contact: Contact) {
    this.contactsService.create(contact)
      .subscribe((res: Contact) => {
        const message = `${res.name} has been Created!`;

        this.reset();
        this.getContacts();
        this.notifyService.notify(message, `${res.email}`);
    });
  }

  updateContact(contact: Contact) {
    this.contactsService.update(contact)
      .subscribe((res: Contact) => {
        const message = `${res.name} has been updated!`;

        this.reset();
        this.getContacts();
        this.notifyService.notify(message, 'Thank you!');
    });
  }

  removeContact(contactId: string) {
    this.contactsService.delete(contactId)
      .subscribe(res => {
        this.reset();
        this.getContacts();
        this.notifyService.notify('Contact removed...');
    });
  }

  reset() {
    this.form.reset();
    this.contact = {} as any;
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      name: ['', Validators.compose([Validators.required])],
      phoneNumber: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      address: ['', Validators.compose([Validators.required])]
    });
  }
}
