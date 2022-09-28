import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { UserLoginOutput } from '../models/user-login-output';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  url: string = 'http://devapiv3.qsmart.ie/api/account/sign-in';

  userLogIn(user: User): Observable<UserLoginOutput> {
    return this.http.post<UserLoginOutput>(this.url, user);
  }
}
