import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserLoginOutput } from 'src/app/models/user-login-output';
import { UserLoginForm } from 'src/app/models/UserLoginForm';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';
import { CookieService } from 'src/app/services/cookie.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup<UserLoginForm>;
  user = new User();
  loginOutput: UserLoginOutput;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private coockies: CookieService,
    private alertyfy: AlertifyService
  ) {}

  ngOnInit(): void {
    this.logInFormCreate();
  }

  logInFormCreate() {
    this.loginForm = this.fb.group<UserLoginForm>({
      userName: new FormControl('', [Validators.required, Validators.email]),
      passWord: new FormControl('', Validators.required),
    });
  }

  onUserLogin() {
    if (this.loginForm.valid) {
      this.user = this.loginForm.value as User;
      this.user.templateId = 2;
      this.authService.userLogIn(this.user).subscribe(
        (res) => {
          this.loginOutput = res as UserLoginOutput;
          this.coockies.setCookie({
            name: 'token',
            value: this.loginOutput.token,
            session: false,
          });
          this.alertyfy.success('Congratulations');
          this.router.navigate(['employee']);
        },
        (error: HttpErrorResponse) => this.alertyfy.error(error.error.message)
      );
    }
  }
}
