import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Employee } from '../models/add-employee-demo';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  currrentIndex = 0;

  constructor(private http: HttpClient) {}

  getAllEmployee() {
    let empArray: Employee[] = [];
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
    currentEmp = empArray.find((x) => x.id == id) as Employee;
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
  RemoveEmployee(id: number) {
    let empArr = this.getAllEmployee();
    const filtered = empArr.filter((item) => item.id !== id);
    localStorage.setItem('newEmp', JSON.stringify(filtered));
  }
}
