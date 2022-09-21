import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
  employeeList2: Employee[] = [];
  employeePerPage: number = 5;
  selectPage: number = 1;
  searchingString: string = '';
  pageIndex: number = (this.selectPage - 1) * this.employeePerPage;

  constructor(private empService: EmployeeServiceService) {}

  ngOnInit(): void {
    this.employeeList = this.empService.getAllEmployee();
    this.employeeList2 = this.employeeList.slice(
      this.pageIndex,
      this.employeePerPage
    );
  }

  search() {
    if (this.fName != '') {
      this.employeeList = this.employeeList.filter((res) => {
        return (
          res.fName.toLocaleLowerCase().match(this.fName.toLocaleLowerCase()) ||
          res.fName.toLocaleLowerCase().match(this.fName.toLocaleLowerCase())
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
    this.preAndNex(this.selectPage);
    this.employeeList2 = this.employeeList.slice(
      this.pageIndex,
      this.employeePerPage
    );
  }

  get pageNumbers(): number[] {
    if (this.fName == '') {
      return Array(Math.ceil(this.employeeList.length / this.employeePerPage))
        .fill(0)
        .map((x, i) => i + 1);
    } else {
      return Array(Math.ceil(this.employeeList.length / this.employeePerPage))
        .fill(0)
        .map((x, i) => i + 1);
    }
  }

  employeePerPageChange(e: Event) {
    const newPageSize = (e.target as HTMLInputElement).value;
    this.employeePerPage = Number(newPageSize);
    this.changePage(1); //defaultPage will be 1
  }

  changePage(page: number) {
    this.selectPage = page;
    this.sliceEmployee();
    this.preAndNex(page);
  }

  sliceEmployee() {
    this.pageIndex = (this.selectPage - 1) * this.employeePerPage;
    let endIndex = this.pageIndex + this.employeePerPage;
    this.employeeList2 = this.employeeList.slice(this.pageIndex, endIndex);
  }

  prePage() {
    this.selectPage = this.selectPage - 1;
    this.changePage(this.selectPage);
    this.preAndNex(this.selectPage);
  }

  nextPage() {
    this.selectPage = this.selectPage + 1;
    this.changePage(this.selectPage);
    this.preAndNex(this.selectPage);
  }

  preAndNex(selectPage: number) {
    let tempForPre = selectPage;
    let tempForNex = this.pageNumbers.length;
    if (tempForPre > 1) {
      this.preBtnDisable = true;
    } else {
      this.preBtnDisable = false;
    }
    if (selectPage >= tempForNex) {
      this.nextBtnDisable = false;
    } else {
      console.log(this.selectPage);
      this.nextBtnDisable = true;
    }
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
}
