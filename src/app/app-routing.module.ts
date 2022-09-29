import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGard } from './Gard/auth.guard';
import { UnAuthGuard } from './Gard/un-auth.guard';
import { HomeComponent } from './home/home.component';
import { LeadListComponent } from './lead-list/lead-list.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
const routes: Routes = [
  { path: 'login', canActivate:[UnAuthGuard], component: UserLoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGard], component: HomeComponent },
  { path: 'lead', canActivate: [AuthGard], component: LeadListComponent },
  {
    path: 'employee',
    canActivate: [AuthGard],
    loadChildren: () =>
      import('./Employee/employee.module').then((m) => m.EmployeeModule),
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
