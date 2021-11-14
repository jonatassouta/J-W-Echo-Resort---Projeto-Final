import { Injectable } from '@angular/core';
import { CanActivate,  ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginAuthService } from '../shared/login-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

//este guard nao permite o usuario accessar a area do admin pela url

  constructor(private authService: LoginAuthService, private router: Router ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {

    if (this.authService.adminEstaAutenticado()){
      return true;
    }

    this.router.navigate(['/login']);

    return false;
  }

}
