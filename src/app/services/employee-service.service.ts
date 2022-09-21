import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IEmployee } from '../models/IEmployee';
import { Employee } from '../models/add-employee-demo';
import { EmployeeAdd } from '../models/employee-add';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  currrentIndex = 0;

  constructor(private http: HttpClient) {}

  getAllEmployee() {
    let empArray: EmployeeAdd[] = [];
    if (localStorage.getItem('newEmp')) {
      empArray = JSON.parse(localStorage.getItem('newEmp') as string);
      return empArray;
    } else {
      return empArray;
    }
  }
  getCurrentEmployee(id: number) {
    let currentEmp: Employee;
    let empArray: Array<Employee> = [];
    empArray = JSON.parse(localStorage.getItem('newEmp') as string);
    currentEmp = empArray.find((x) => x.id == id) as EmployeeAdd;
    this.currrentIndex = empArray.findIndex((x) => x.id == id);
    return currentEmp;
  }

  addEmployee(employee: Employee) {
    let newEmployee = [employee];
    if (localStorage.getItem('newEmp')) {
      newEmployee = [
        employee,
        ...JSON.parse(localStorage.getItem('newEmp') as string),
      ];
    }
    localStorage.setItem('newEmp', JSON.stringify(newEmployee));
  }
}
