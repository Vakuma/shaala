import { AuthenticationService } from './authentication.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authServer: AuthenticationService,
    private router: Router) { }

  canActivate() {
    // Checkin if the user is logged in or not if not he will be redirected to the login page.
    if (this.authServer.isLoggedIn()) { return true; }

     this.router.navigate(['/login']);
     return false;
    }

}
