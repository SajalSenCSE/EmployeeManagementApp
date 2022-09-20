import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './Employee/employee-add/employee-add.component';
import { EmployeeDetailsComponent } from './Employee/employee-details/employee-details.component';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './Employee/employee-update/employee-update.component';
import { LeadListComponent } from './lead-list/lead-list.component';

const routes: Routes = [
  { path: 'emplist', component: EmployeeListComponent },
  { path: 'empdetails', component: EmployeeDetailsComponent },
  { path: 'add', component: EmployeeAddComponent },
  { path: 'leadist', component: LeadListComponent },
  { path: 'add/:id', component: EmployeeAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
