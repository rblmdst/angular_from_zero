import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { LoginData, RegisteredUser, User } from '../models/user.model';

const AUTH_BASE_URL = 'http://localhost:3000/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private http = inject(HttpClient);

  private _isConnected = signal(!!this.getAuthToken());
  isConnected = this._isConnected.asReadonly();

  constructor() {}

  register(user: User) {
    return this.http.post<RegisteredUser>(`${AUTH_BASE_URL}/register`, user);
  }

  login(data: LoginData) {
    return this.http.post<{ token: string }>(`${AUTH_BASE_URL}/login`, data);
  }

  logOut() {
    localStorage.removeItem('token');
    this._isConnected.set(false);
  }

  saveAuthToken(token: string) {
    localStorage.setItem('token', token);
    this._isConnected.set(true);
  }
  getAuthToken() {
    return localStorage.getItem('token');
  }
}
