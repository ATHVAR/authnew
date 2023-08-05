import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './components/sidenav/home.component';
import { NavbarComponent } from './pages/landingpage/navbar.component';
import { ViewuserComponent } from './pages/users/viewuser/viewuser.component';
import { AdduserComponent } from './pages/users/adduser/adduser.component';
import { ViewstudentsComponent } from './pages/students/viewstudents/viewstudents.component';
import { AddstudentsComponent } from './pages/students/addstudents/addstudents.component';
import { ErrorComponent } from './pages/error/error.component';
import { ChangepassComponent } from './pages/addnotification/changepass.component';
import { EditUserComponent } from './pages/users/edituser/edituser.component';
import { EditstudentComponent } from './pages/students/editstudent/editstudent.component';
import { CsvComponent } from './pages/csv/csv.component';
import { FooterComponent } from './components/footer/footer.component';
import { ViewmessageComponent } from './pages/viewmessage/viewmessage.component';
import { HomedataComponent } from './pages/homedata/homedata.component';
import { AuthguardService } from './shared/authguard.service';
import { UserRole } from './shared/user-role.enum';

// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: '', component: NavbarComponent },
//   { path: 'home', component: HomeComponent },

//   { path: 'viewuser', component: ViewuserComponent },
//   { path: 'adduser', component: AdduserComponent },
//   { path: 'edituser/:id', component: EditUserComponent },

//   { path: 'viewstuds', component: ViewstudentsComponent },
//   { path: 'addstuds', component: AddstudentsComponent },
//   { path: 'editstuds/:id', component: EditstudentComponent }, // Add ':id' parameter for student ID
 
//   { path: 'passchange', component: ChangepassComponent },
//   { path: 'csv', component: CsvComponent },
//   { path: 'homecomp', component: HomedataComponent },
 
//   { path: '**', component: ErrorComponent },

  

//   // Other routes for your application
// ];
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: NavbarComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthguardService], data: { allowedRoles: [UserRole.Admin, UserRole.TrainingHead] } },

  { path: 'viewuser', component: ViewuserComponent, canActivate: [AuthguardService], data: { allowedRoles: [UserRole.Admin] } },
  { path: 'adduser', component: AdduserComponent, canActivate: [AuthguardService], data: { allowedRoles: [UserRole.Admin] } },
  { path: 'edituser/:id', component: EditUserComponent, canActivate: [AuthguardService], data: { allowedRoles: [UserRole.Admin] } },

  { path: 'viewstuds', component: ViewstudentsComponent, canActivate: [AuthguardService], data: { allowedRoles: [UserRole.Admin, UserRole.TrainingHead] } },
  { path: 'addstuds', component: AddstudentsComponent, canActivate: [AuthguardService], data: { allowedRoles: [UserRole.Admin, UserRole.TrainingHead] } },
  { path: 'editstuds/:id', component: EditstudentComponent, canActivate: [AuthguardService], data: { allowedRoles: [UserRole.Admin, UserRole.TrainingHead] } }, // Add ':id' parameter for student ID

  { path: 'passchange', component: ChangepassComponent, canActivate: [AuthguardService], data: { allowedRoles: [UserRole.Admin] } },
  { path: 'csv', component: CsvComponent, canActivate: [AuthguardService], data: { allowedRoles: [UserRole.Admin] } },
  { path: 'homecomp', component: HomedataComponent, canActivate: [AuthguardService], data: { allowedRoles: [UserRole.Admin, UserRole.TrainingHead] } },

  { path: '**', component: ErrorComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
