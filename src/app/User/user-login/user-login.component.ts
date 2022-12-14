import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/User';
import { UserLoginForm } from 'src/app/models/UserLoginForm';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';
import { getCookie, setCookie } from 'src/app/services/cookieFunction';
import { addToken } from 'src/app/Stores/Actions/token.action';
import { TokenState } from 'src/app/Stores/Reducers/token.reducer';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup<UserLoginForm>;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertyfy: AlertifyService,
    private store:Store<TokenState>
  ) {}

  ngOnInit(): void {
    !getCookie('token')
      ? this.router.navigate(['login'])
      : this.router.navigate(['home']);
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
      this.authService
        .userLogIn({ ...(this.loginForm.value as User), templateId: 2 })
        .subscribe({
          next: (res) => {
            setCookie({
              name: 'token',
              value: res.token,
              session: false,
            });
            this.store.dispatch(addToken({token:res.token}))
            this.alertyfy.success('Congratulations');
            this.router.navigate(['home']);
          },
          error: (error: HttpErrorResponse) =>
            this.alertyfy.error(error.error.message),
        });
    }
  }
}
