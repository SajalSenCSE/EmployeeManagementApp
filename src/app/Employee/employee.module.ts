import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { RouterModule, Routes } from '@angular/router';
import { AgePipe } from '../pipes/age.pipe';
import { FilterPipe } from '../pipes/filter.pipe';
import { SortPipe } from '../pipes/sort.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorComponent } from '../paginator/paginator.component';

const empRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: EmployeeListComponent },
      { path: 'add', component: EmployeeAddComponent },
      { path: 'edit/:id', component: EmployeeAddComponent },
    ],
  },
];

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeAddComponent,
    PaginatorComponent,
    AgePipe,
    SortPipe,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(empRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [PaginatorComponent],
})
export class EmployeeModule {
  constructor() {
    console.log('Emp Module');
  }
}
