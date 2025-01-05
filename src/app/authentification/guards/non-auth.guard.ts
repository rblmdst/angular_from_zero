import { CanMatchFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { inject } from '@angular/core';

export const nonAuthGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  const isConnected = authService.isConnected();
  if (!isConnected) {
    return true;
  }
  router.navigate(['/']);
  return false;
};
