import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class NotifyService {

  constructor(private snack: MatSnackBar) { }

  notify(message: string, action = '') {
    this.snack.open(message, action, {
      duration: 3000
    });
  }
}
