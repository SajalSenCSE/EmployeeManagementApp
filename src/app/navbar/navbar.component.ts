import { Component, DoCheck } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { getCookie } from '../services/cookieFunction';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements DoCheck {
  loginBtnDisable = true;

  constructor(private fb: FormBuilder) {}
  ngDoCheck(): void {
    getCookie('token')
      ? (this.loginBtnDisable = false)
      : (this.loginBtnDisable = true);
  }
}
