import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { ignoreElements, Observable } from 'rxjs';
import { getCookie } from '../services/cookieFunction';

@Injectable({
  providedIn: 'root',
})
export class AuthGard implements CanActivate {
  /**
   *
   */
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (getCookie('token')) return true;
    else {
      this.router.navigate(['']);
      return false;
    }
  }
}
