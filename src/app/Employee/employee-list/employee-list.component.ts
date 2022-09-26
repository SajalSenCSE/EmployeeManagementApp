import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { Employee } from 'src/app/models/add-employee-demo';
import { EmployeeAdd } from 'src/app/models/employee-add';
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
  employeeList2: EmployeeAdd[] = [];
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

  indexPageChange(activePageNumber: any) {
    this.pageIndex = activePageNumber;
    console.log(this.pageIndex);
  }
  employeePageChange(empPerP: number) {
    this.employeePerPage = empPerP;
    console.log(this.employeePerPage);
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
    // this.preAndNex(this.selectPage);
    this.employeeList2 = this.employeeList.slice(
      this.pageIndex,
      this.employeePerPage
    );
  }
  selectLeatestPage() {}
  sliceEmployee() {
    this.pageIndex = (this.selectPage - 1) * this.employeePerPage;
    let endIndex = this.pageIndex + this.employeePerPage;
    this.employeeList2 = this.employeeList.slice(this.pageIndex, endIndex);
  }

  activePage: number = 0;

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
