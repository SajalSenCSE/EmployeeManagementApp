import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IEmployee } from 'src/app/models/IEmployee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit, AfterViewInit {
  constructor(private empService: EmployeeServiceService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<IEmployee>;

  employeeList: IEmployee[];

  ngOnInit(): void {
    this.empService.getAllEmployee().subscribe((res) => {
      this.employeeList = res;
      this.dataSource = new MatTableDataSource<IEmployee>(res);
      console.log(this.employeeList);
    });
  }
  ngAfterViewInit() {}
}
