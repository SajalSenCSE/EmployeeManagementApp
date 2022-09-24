import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './Employee/employee-add/employee-add.component';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { LeadListComponent } from './lead-list/lead-list.component';

const routes: Routes = [
  { path: 'emplist', component: EmployeeListComponent },
  { path: 'add', component: EmployeeAddComponent },
  { path: 'leadist', component: LeadListComponent },
  { path: 'edit/:id', component: EmployeeAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
