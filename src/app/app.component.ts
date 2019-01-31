import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Route That Thang!';
  links: any[] = [
    { path: '/login', label: 'Login' },
    { path: '/contacts', label: 'Contacts' }
  ];
}
