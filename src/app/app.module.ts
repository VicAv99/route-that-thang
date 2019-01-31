import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { LoginModule } from './login/login.module';
import { ContactModule } from './contact/contact.module';
import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    ContactModule,
    RoutingModule // Needs to stay last
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
