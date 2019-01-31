import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/auth/auth.service';

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

  constructor(private router: Router, public authService: AuthService) {
    authService.setToken();
  }

  routeToLogin() {
    this.router.navigateByUrl('/login');
    this.authService.setToken();
  }
}
