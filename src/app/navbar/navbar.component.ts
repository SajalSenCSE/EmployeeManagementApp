import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from '../services/cookie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  loginBtnDisable: boolean = true;

  constructor(private fb: FormBuilder, private cookie: CookieService) {}

  ngOnInit(): void {
    this.cookie.getCookie('token')
      ? (this.loginBtnDisable = false)
      : (this.loginBtnDisable = true);
  }
}
