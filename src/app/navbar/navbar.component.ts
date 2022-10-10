import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { getCookie } from '../services/cookieFunction';
import { addToken, getToken } from '../Stores/Actions/token.action';
import { TokenState } from '../Stores/Reducers/token.reducer';
import { tokenSelector } from '../Stores/Selectors/token.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements DoCheck,OnInit {
  loginBtnDisable = true;

  constructor(private fb: FormBuilder,private store:Store<TokenState>) {}
  token$=this.store.pipe(select(tokenSelector) as any);
  ngOnInit(): void {
    this.store.dispatch(getToken())
    this.token$.subscribe(res=>console.log(res as string[]))
  }

  ngDoCheck(): void {
    getCookie('token')
      ? (this.loginBtnDisable = false)
      : (this.loginBtnDisable = true);
  }
}
