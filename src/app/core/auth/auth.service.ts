import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class AuthService {

  constructor() { }

  setToken(value = '') {
    localStorage.setItem('verified', value);
  }

  getToken(): string {
    return localStorage.getItem('verified');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();

    return !!token;
  }
}
