import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contact } from '../models/contact';
import { CoreModule } from '../core.module';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const BASE_URL = environment.apiUrl;
const model = 'contacts';

@Injectable({
  providedIn: CoreModule
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  all$ = (): Observable<Contact[]> => this.http.get<Contact[]>(this.getUrl());

  getContact = (contactId: string) => this.http.get(this.getUrlById(contactId));

  create = (contact: Contact) => this.http.post(this.getUrl(), contact);

  update = (contact: Contact) => this.http.patch(this.getUrlById(contact.id), contact);

  delete = (contactId: string) => this.http.delete(this.getUrlById(contactId));

  private getUrl() {
    return `${BASE_URL}/${model}`;
  }

  private getUrlById(clientId: string) {
    return `${this.getUrl()}/${clientId}`;
  }
}
