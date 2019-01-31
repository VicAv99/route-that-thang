import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Route That Thang!';
  authenticated = false;
  links: any[] = [
    { path: '/login', label: 'Login' },
    { path: '/contacts', label: 'Contacts' }
  ];
  constructor(private router: Router) {
    this.authenticated = !!localStorage.getItem('verified');
  }

  routeToLogin() {
    this.router.navigateByUrl('/login');
  }
}
