import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { filter, map } from 'rxjs';
import { IEmployee } from 'src/app/models/IEmployee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  

  fName:string='';
  sortDirection:string='asce';
  preBtnDisable:boolean=false;
  nextBtnDisable:boolean=true;
  sortingParams:string='Id';
  employeeList: IEmployee[] = [];
  employeeList2:IEmployee[]=[];
  employeePerPage:number=5;
  selectPage:number=1;
  searchingString:string='';
  pageIndex:number=(this.selectPage-1)*this.employeePerPage;

  constructor(private empService: EmployeeServiceService) {}

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
    this.selectPage=page
    this.sliceEmployee();
    this.preAndNex(page);
  }
  sliceEmployee(){
   this.pageIndex=(this.selectPage-1)*this.employeePerPage;
   let endIndex=this.pageIndex+this.employeePerPage;
   this.employeeList2=this.employeeList.slice(this.pageIndex,endIndex);
  }
  prePage(){
    this.selectPage=this.selectPage-1;
    this.changePage(this.selectPage)
    this.preAndNex(this.selectPage);
  }
  nextPage(){
   this.selectPage=this.selectPage+1;
   this.changePage(this.selectPage)
   this.preAndNex(this.selectPage);
  }
  preAndNex(selectPage:number){
    let tempForPre=selectPage;
    let tempForNex=this.pageNumbers.length
    if(tempForPre!=1){
      this.preBtnDisable=true;
    }
    if(this.selectPage>=tempForNex){
      this.nextBtnDisable=false;
    }
  }
  getByName(value:string){
    this.sortingParams=value;
    this.onSortDirection();   
  }
  onSortDirection(){
    if(this.sortDirection=='asce'){
      this.sortDirection='desc'
    }
    else{
      this.sortDirection='asce'
    }
  }
}
