// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { UserRole } from './user-role.enum';

// @Injectable({
//   providedIn: 'root',
// })
// export class LoginService {
//   private apiUrl = 'http://localhost:3000/login'; // Replace with your backend API URL

//   constructor(private http: HttpClient) {}

//   // Method to handle the login request
//   login(email: string, password: string): Observable<any> {
//     const loginData = { email, password };
//     return this.http.post<any>(this.apiUrl, loginData);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRole } from './user-role.enum';
export interface LoginResponse {
  token: string;
  role: UserRole; // User's role (e.g., 'admin', 'traininghead', 'placementofficer')
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/login'; // Replace with your backend API URL
  private secretKey = 'mainproject';
  constructor(private http: HttpClient) {}

  // Interface to define the response from the login API
  

  // Method to handle the login request
  login(email: string, password: string): Observable<LoginResponse> {
    const loginData = { email, password };
    return this.http.post<LoginResponse>(this.apiUrl, loginData);
  }
}
