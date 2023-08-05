
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('userRole');

    if (token && userRole) {
      // Add the token to the "Authorization" header
      const tokenizedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      // For placement officer, you may add additional headers or modify the request as needed
      if (userRole === 'placement officer') {
        // Example: Add an "X-Role" header
        tokenizedRequest.headers.append('X-Role', 'placement officer');
      }

      return next.handle(tokenizedRequest);
    }

    // If no token or user role, proceed with the original request
    return next.handle(req);
  }
}
