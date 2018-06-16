import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Cookie } from 'ng2-cookies';

@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(private app: AppService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    if(this.app.checkLoggedIn()){
      const token = JSON.parse(Cookie.get('access_token'));
      if (token.roles[0] == expectedRole) {
        return true;
      }
      else{
        this.router.navigate(['/exception']);
        return false;
      }
    }
    else{
      this.router.navigate(['/exception']);
      return false;
    }
  }
}
