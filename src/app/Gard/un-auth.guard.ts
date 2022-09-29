import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Observable } from 'rxjs';
import { CookieService } from '../services/cookie.service';

@Injectable({
  providedIn: 'root',
})
export class UnAuthGuard implements CanActivate {
  constructor(private cookies: CookieService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.cookies.getCookie('token')) {
      this.router.navigate(['employee']);
      return false;
    } else return true;
  }
}