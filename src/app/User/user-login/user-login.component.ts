import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserLoginForm } from 'src/app/models/UserLoginForm';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup<UserLoginForm>;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.logInFormCreate();
  }

  logInFormCreate() {
    this.loginForm = this.fb.group<UserLoginForm>({
      userName: new FormControl('', Validators.required),
      passWord: new FormControl('', Validators.required),
    });
  }
}
