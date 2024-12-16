// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isAuthenticated(): boolean {
    // You can use localStorage, sessionStorage, or cookies to store the authentication state
    // For example, checking for a JWT token in localStorage:
    return !!localStorage.getItem('authToken'); // Replace with your own logic
  }

  // Additional methods for login, logout, etc.
}
