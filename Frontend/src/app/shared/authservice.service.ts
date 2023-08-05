import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
export enum UserRole {
  Admin = 'admin',
  TrainingHead = 'traininghead',
  // Add more roles if needed
}

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private tokenKey = 'accessToken'; // Key for storing the token in local storage
  constructor() { }



  // Save the token to local storage
  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Get the token from local storage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Remove the token from local storage (on logout)
  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // Check if the user is logged in based on the token's existence and validity
  isLoggedIn(): boolean {
    const token = this.getToken();
    // Add your token validation logic here
    return !!token;
  }
}

  