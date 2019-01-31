import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactsService } from 'src/app/core/contacts/contacts.service';
import { Contact } from 'src/app/core/models/contact';
import { Observable } from 'rxjs';
import { NotifyService } from 'src/app/core/notify/notify.service';
import * as faker from 'faker';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.scss']
})
export class ContactViewComponent implements OnInit {
  contact$: Observable<Contact>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService,
    private notifyService: NotifyService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param['id'];

      this.contact$ = this.contactsService.getContact(id);
    });
  }

  goBack() {
    this.router.navigateByUrl('/contacts');
  }

  randomNotify() {
    const random = faker.random.words();
    const date: Date = faker.date.recent();

    this.notifyService.notify(random, date.toDateString());
  }

}
