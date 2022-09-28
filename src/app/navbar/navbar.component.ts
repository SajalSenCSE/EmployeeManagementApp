import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  homeBtnDisable: boolean = false;
  empBtnDisable: boolean = false;
  leadBtnDisable: boolean = false;

  constructor(private fb: FormBuilder, private cookie: CookieService) {}

  ngOnInit(): void {
    this.buttonEnable();
  }

  buttonEnable() {
    if (this.cookie.get('Token')) {
      this.homeBtnDisable = true;
      this.empBtnDisable = true;
      this.leadBtnDisable = true;
    }
  }
}
