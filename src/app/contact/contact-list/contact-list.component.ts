import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/core/models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  @Input() contacts: Contact[];
}
