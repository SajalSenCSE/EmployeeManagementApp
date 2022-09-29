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
import { getCookie } from '../services/function';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements DoCheck {
  loginBtnDisable: boolean = true;

  constructor(private fb: FormBuilder) {}
  ngDoCheck(): void {
    getCookie('token')
      ? (this.loginBtnDisable = false)
      : (this.loginBtnDisable = true);
  }
}
