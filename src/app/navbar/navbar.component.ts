import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CookieService } from '../services/cookie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements DoCheck {
  loginBtnDisable: boolean = true;

  constructor(private fb: FormBuilder, private cookie: CookieService) {}
  ngDoCheck(): void {
    this.cookie.getCookie('token')
      ? (this.loginBtnDisable = false)
      : (this.loginBtnDisable = true);
  }
}
