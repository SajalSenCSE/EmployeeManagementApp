import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee } from 'src/app/models/add-employee-demo';

import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  fName: string = '';
  sortDirection: string = 'asce';
  preBtnDisable: boolean = false;
  nextBtnDisable: boolean = true;
  sortingParams: string = 'Id';
  employeeList: Employee[] = [];
  employeeList2: Employee[] = [];
  employeePerPage: number = 5;
  selectPage: number = 1;
  searchingString: string = '';
  pageIndex: number = (this.selectPage - 1) * this.employeePerPage;

  constructor(
    private empService: EmployeeServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeList = this.empService.getAllEmployee();
    this.employeeList2 = this.employeeList.slice(
      this.pageIndex,
      this.employeePerPage
    );
  }

  selectPagePageChange(selectPagePage: number) {
    this.selectPage = selectPagePage;
    this.sliceEmployee();
  }
  employeePageChange(empPerP: number) {
    this.employeePerPage = empPerP;
    this.pageIndex = (this.selectPage - 1) * this.employeePerPage;
    this.ngOnInit();
  }

  search() {
    if (this.fName != '') {
      this.employeeList = this.employeeList.filter((res) => {
        return (
          res.fName.toLocaleLowerCase().match(this.fName.toLocaleLowerCase()) ||
          res.lName.toLocaleLowerCase().match(this.fName.toLocaleLowerCase())
        );
      });
      this.searchPagination();
    } else {
      this.ngOnInit();
    }
  }

  searchPagination() {
    this.pageIndex = 0;
    this.selectPage = 1;
    this.employeeList2 = this.employeeList.slice(
      this.pageIndex,
      this.employeePerPage
    );
  }

  sliceEmployee() {
    this.pageIndex = (this.selectPage - 1) * this.employeePerPage;
    let endIndex = this.pageIndex + this.employeePerPage;
    this.employeeList2 = this.employeeList.slice(this.pageIndex, endIndex);
  }

  getByName(value: string) {
    this.sortingParams = value;
    this.onSortDirection();
  }

  onSortDirection() {
    if (this.sortDirection == 'asce') {
      this.sortDirection = 'desc';
    } else {
      this.sortDirection = 'asce';
    }
  }
  onDelete(id: number) {
    this.empService.RemoveEmployee(id);
    this.ngOnInit();
  }
}
