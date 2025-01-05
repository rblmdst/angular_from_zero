import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const authGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  const isConnected = authService.isConnected();
  if (isConnected) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
