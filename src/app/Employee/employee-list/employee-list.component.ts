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
export class EmployeeListComponent implements OnInit {
  

constructor(private empService: EmployeeServiceService) {}



employeeList: IEmployee[] = [];
 employeeList2:IEmployee[];

 employeePerPage:number=5;
 SelectPage:number=1;
 pageIndex:number=(this.SelectPage-1)*this.employeePerPage;






 ngOnInit(): void {
   this.empService.getAllEmployee()
   .subscribe((data)=>{
     this.employeeList=data;
     this.employeeList2=this.employeeList.slice(this.pageIndex,this.employeePerPage);
   })
 }
 get pageNumbers():number[]{
   return Array((this.employeeList.length)/this.employeePerPage).fill(0).map((x,i)=>i+1);
 }

 employeePerPageChange(e:Event){
   const newPageSize=(e.target as HTMLInputElement).value;
   this.employeePerPage=Number(newPageSize);
   this.changePage(1) //defaultPage will be 1
 }
 changePage(page:number){
   this.SelectPage=page
   this.SliceEmployee();
 }



 SliceEmployee(){
   this.pageIndex=(this.SelectPage-1)*this.employeePerPage;
   let endIndex=this.pageIndex+this.employeePerPage;
   this.employeeList2=this.employeeList.slice(this.pageIndex,endIndex);
 }

 PrePage(){
   this.SelectPage=this.SelectPage-1;
   this.changePage(this.SelectPage)
 }
 NextPage(){
   this.SelectPage=this.SelectPage+1;
   this.changePage(this.SelectPage)
 }
}
