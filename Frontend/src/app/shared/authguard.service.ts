// import { Injectable } from '@angular/core';
// import { AuthserviceService,UserRole } from './authservice.service';
// import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthguardService {

//   constructor(private authService:AuthserviceService,private router:Router) { }

//   loggedIn(): boolean {
//     const token = localStorage.getItem('token');
//     const userRole = localStorage.getItem('userRole');

//     // Check if a valid token and user role are present
//     if (token && (userRole === 'admin' || userRole === 'trainer head')) {
//       return true;
//     }

//     // If not logged in or not authorized, show an alert and return false
//     alert('Access Denied');
//     return false;
//   }
// }
// import { Injectable } from '@angular/core';
// import { AuthserviceService, UserRole } from './authservice.service';
// import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthguardService { private userRole!: UserRole;

//   constructor(private authService: AuthserviceService, private router: Router) { }

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     const token = localStorage.getItem('token');
//     const userRole = localStorage.getItem('userRole');

//     // Check if a valid token and user role are present
//     if (token && userRole) {
//       const allowedRoles = route.data['allowedRoles'] as UserRole[];
//       if (!allowedRoles || allowedRoles.includes(userRole as UserRole)) {
//         return true; // User's role is allowed, grant access
//       } else {
//         // If not authorized, show an alert and redirect to unauthorized page or handle as needed
//         alert('Access Denied');
//         this.router.navigate(['/unauthorized']);
//         return false;
//       }
//     } else {
//       // If not logged in, redirect to login page
//       this.router.navigate(['/login']);
//       return false;
//     }
//   }
// }

import { Injectable } from '@angular/core';
import { AuthserviceService, UserRole } from './authservice.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
  private userRole!: UserRole;

  constructor(private authService: AuthserviceService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('userRole');

    // Check if a valid token and user role are present
    if (token && userRole) {
      const allowedRoles = route.data['allowedRoles'] as UserRole[];
      if (!allowedRoles || allowedRoles.includes(userRole as UserRole)) {
        return true; // User's role is allowed, grant access
      } else {
        // If not authorized, show an alert and redirect to unauthorized page or handle as needed
        alert('Access Denied');
        this.router.navigate(['/unauthorized']);
        return false;
      }
    } else {
      // If not logged in, redirect to login page
      this.router.navigate(['./login']);
      return false;
    }
  }
}
