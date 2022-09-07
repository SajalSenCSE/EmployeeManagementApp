import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './Employee/employee-details/employee-details.component';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';

const routes: Routes = [
  { path: 'emplist', component: EmployeeListComponent },
  { path: 'empdetails', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
