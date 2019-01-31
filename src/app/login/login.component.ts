import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../core/auth/auth.service';
import { NotifyService } from '../core/notify/notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  verifiedUser = { username: 'username', password: 'password' };

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private notifyService: NotifyService
  ) { }

  ngOnInit() {
    this.initForm();
    localStorage.setItem('verified', '');
  }

  login() {
    const { username, password } = this.form.value;
    const verifiedUser = this.verifiedUser.username === username &&
      this.verifiedUser.password === password;

    if (this.form.valid && verifiedUser ) {
      this.router.navigateByUrl('/contacts');
      this.authService.setToken(username);
      this.notifyService.notify(`Welcome ${username}!`, 'woohoo!');
    }
  }

  validateField(control: string, directive: NgForm) {
    return this.form.get(control).invalid && directive.submitted;
  }

  private initForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

}
