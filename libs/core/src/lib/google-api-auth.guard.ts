import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleApiAuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const isSignedIn = typeof gapi !== 'undefined' && gapi.auth2.getAuthInstance().isSignedIn.get();
    if (!isSignedIn) {
      this.router.navigate(['/auth/login']);
    }

    return isSignedIn;
  }
}
