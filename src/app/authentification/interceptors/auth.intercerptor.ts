import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  const authSer = inject(AuthenticationService);
  const token = authSer.getAuthToken();
  if (!token) {
    return next(req);
  }

  const finalRequest = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`),
  });
  return next(finalRequest);
}
