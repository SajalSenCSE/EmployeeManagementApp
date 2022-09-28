import { Component, OnInit } from '@angular/core';
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
  navManuDisable: boolean = false;
  loginLogOutButton: boolean = false;

  constructor(
    private fb: FormBuilder,
    private cookie: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginLogOutButton = !this.loginLogOutButton;
    this.buttonEnable();
  }

  buttonEnable() {
    if (this.cookie.getCookie('token')) this.navManuDisable = true;
  }
  onLogOut() {
    this.loginLogOutButton = !this.loginLogOutButton;
    this.cookie.deleteCookie('token');
    this.router.navigate(['login']);
  }
}
