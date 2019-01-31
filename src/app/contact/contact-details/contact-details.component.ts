import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Contact } from 'src/app/core/models/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {
  selectedContact: Contact;
  @Input() group: FormGroup;
  @Input() set contact(value: Contact) {
    this.selectedContact = value;
  }
  @Output() submitted = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  submit(directive: NgForm) {
    if (this.group.valid) {
      this.submitted.emit(this.group.value);
      directive.resetForm();
    }
  }

  cancel() {
    this.cancelled.emit();
  }

  validateField(control: string, directive: NgForm) {
    return this.group.get(control).invalid && directive.submitted;
  }
}
