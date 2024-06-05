import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces';

export const isAuthentcatedGuard: CanActivateFn = (route, state) => {


  //const url = state.url;
  //localStorage.setItem('path', url);

  const authService = inject(AuthService);
  const router= inject(Router);

  if(authService.authStatus() === AuthStatus.authenticated){
    return true
  }


  if(authService.authStatus() === AuthStatus.checking){
    return false
  }

  router.navigateByUrl('/auth/login')
  return false;
};
