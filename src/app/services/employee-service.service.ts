import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IEmployee } from '../models/IEmployee';
import { AddEmployeeDemo } from '../models/add-employee-demo';
import { EmployeeAdd } from '../models/employee-add';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  currrentIndex=0;
  constructor(private http: HttpClient) { }

  // getAllEmployee(): Observable<IEmployee[]> {
  //   return this.http
  //     .get('data/Employee.json')
  //     .pipe(map((data) => data as IEmployee[]));
  // }
  getAllEmployee2() {
    let empArray:EmployeeAdd[]=[];

    if(localStorage.getItem('newEmp')){
      empArray=JSON.parse(localStorage.getItem('newEmp') as string);
      console.log(empArray)
      return empArray;
    }else{
      return empArray;
    }  
  }
  getCurrentEmployee(id:number) { 
    let currentEmp:EmployeeAdd;
    let empArray:Array<EmployeeAdd>=[];
    empArray=JSON.parse(localStorage.getItem('newEmp') as string);
    currentEmp=empArray.find(x=>x.Id==id) as EmployeeAdd;
    this.currrentIndex=empArray.findIndex(x=>x.Id==id);
    return currentEmp;
  }


  addEmployee(employee:AddEmployeeDemo){
    let newEmployee=[employee];
    if(localStorage.getItem('newEmp')){
      newEmployee=[employee, ...JSON.parse(localStorage.getItem('newEmp') as string)];
    }
    localStorage.setItem('newEmp',JSON.stringify(newEmployee))
  }
  newEmpId(){
    let Id;
    if(localStorage.getItem('Id')){
      localStorage.setItem('Id',String(Number(localStorage.getItem('Id'))+1))
      return localStorage.getItem('Id');
    }else{
      localStorage.setItem('Id','1')
      return 1;
    }   
  }



}
