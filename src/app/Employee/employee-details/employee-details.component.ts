import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  constructor() {}
 

  ngOnInit(): void {
    let pageIndex=(this.selextedPage-1)*this.empPerpage;
    this.empList2=this.empList.slice(pageIndex,this.empPerpage);

  }


 
  empList: IEmployee [] = [
    {
      Id: 1,
      FName: 'Sajal1',
      LName: 'Sen',
      Address: 'Dhaka -x,road y',
      DoB:'',
      Age: 27,
      Salary: 25000,
      Position: 'Developer',
      joiningAge: 2,
    },
    {
      Id: 2,
      FName: 'Sajal 2',
      LName: 'Sen',
      Address: 'Dhaka -a,road a',
      DoB:'6/15/2001',
      Age: 27,
      Salary: 26000,
      Position: 'Developer',
      joiningAge: 2,
    },
    {
      Id: 3,
      FName: 'Sajal--3',
      LName: 'Sen-3',
      Address: 'Dhaka -b,road c',
      DoB:'6/15/1995',
      Age: 28,
      Salary: 55000,
      Position: 'Developer -junior',
      joiningAge: 1,
    },
    {
      Id: 4,
      FName: 'Sajal--5',
      LName: 'Sen-5',
      Address: 'Dhaka -c,road v',
      DoB:'6/15/1999',
      Age: 28,
      Salary: 28000,
      Position: 'Developer',
      joiningAge: 4,
    },
  
    {
      Id: 5,
      FName: 'Sajal-5',
      LName: 'Sen--5',
      Address: 'Dhaka -d,road d',
      DoB:'6/15/2002',
      Age: 27,
      Salary: 55000,
      Position: 'Developer',
      joiningAge: 6,
    },
    {
      Id: 6,
      FName: 'Sajal 6',
      LName: 'Sen--6',
      Address: 'Dhaka -d,road f',
      DoB:'6/15/2000',
      Age: 28,
      Salary: 36000,
      Position: 'Developer',
      joiningAge: 4,
    },
    {
      Id: 7,
      FName: 'Sajal--7',
      LName: 'Sen-7',
      Address: 'Dhaka -f,road f',
      DoB:'6/15/1999',
      Age: 28,
      Salary: 35000,
      Position: 'Developer -junior',
      joiningAge: 3,
    },
    {
      Id: 8,
      FName: 'Sajal--8',
      LName: 'Sen-8',
      Address: 'Dhaka -d,road f',
      DoB:'6/15/1998',
      Age: 20,
      Salary: 20000,
      Position: ' junior Developer',
      joiningAge: 1,
    },
    {
      Id: 9,
      FName: 'Sajal--9',
      LName: 'Sen-9',
      Address: 'Dhaka -g,road g',
      DoB:'6/15/2000',
      Age: 29,
      Salary: 35000,
      Position: 'Developer -junior',
      joiningAge: 4,
    },
    {
      Id: 10,
      FName: 'Sajal--10',
      LName: 'Sen-10',
      Address: 'Dhaka -j,road j',
      DoB:'6/15/1998',
      Age: 20,
      Salary: 45000,
      Position: 'Web Developer',
      joiningAge: 4,
    },
  
    {
      Id: 11,
      FName: 'Sajal--11',
      LName: 'Sen--11',
      Address: 'Dhaka -11,road 11',
      DoB:'6/15/2000',
      Age: 26,
      Salary: 30000,
      Position: 'Web Developer',
      joiningAge: 4,
    },
    {
      Id: 12,
      FName: 'Sajal 12',
      LName: 'Sen  12',
      Address: 'Dhaka -12,road 12',
      DoB:'6/15/1995',
      Age: 24,
      Salary: 24000,
      Position: ' junior Developer',
      joiningAge: 2,
    },
    {
      Id: 13,
      FName: 'Sajal--13',
      LName: 'Sen-13',
      Address: 'Dhaka -13b,road 13c',
      DoB:'6/15/1990',
      Age: 29,
      Salary: 55000,
      Position: 'Developer',
      joiningAge: 3,
    },
    {
      Id: 14,
      FName: 'Sajal--14',
      LName: 'Sen-14',
      Address: 'Dhaka -14c,road 14v',
      DoB:'6/15/2001',
      Age: 27,
      Salary: 28000,
      Position: 'Developer',
      joiningAge: 3,
    },
  
    {
      Id: 15,
      FName: 'Sajal-15',
      LName: 'Sen--15',
      Address: 'Dhaka -d,road d',
      DoB:'6/15/1990',
      Age: 27,
      Salary: 55000,
      Position: 'Developer',
      joiningAge: 6,
    },
    {
      Id: 16,
      FName: 'Sajal 16',
      LName: 'Sen--16',
      Address: 'Dhaka -16d,road 16f',
      DoB:'6/15/2000',
      Age: 28,
      Salary: 36000,
      Position: 'Developer',
      joiningAge: 4,
    },
    {
      Id: 17,
      FName: 'Sajal--17',
      LName: 'Sen-17',
      Address: 'Dhaka -17f,road 17f',
      DoB:'6/15/1997',
      Age: 28,
      Salary: 35000,
      Position: 'Developer',
      joiningAge: 3,
    },
    {
      Id: 18,
      FName: 'Sajal--18',
      LName: 'Sen-18',
      Address: 'Dhaka -18d,road 18f',
      DoB:'6/15/2005',
      Age: 20,
      Salary: 20000,
      Position: ' junior Developer',
      joiningAge: 1,
    },
    {
      Id: 19,
      FName: 'Sajal--19',
      LName: 'Sen-9',
      Address: 'Dhaka -19g,road 19g',
      DoB:'6/15/2006',
      Age: 29,
      Salary: 35000,
      Position: 'Developer -junior',
      joiningAge: 3,
    },
    {
      Id: 20,
      FName: 'Sajal--20',
      LName: 'Sen-20',
      Address: 'Dhaka -20j,road 20j',
      DoB:'6/15/1999',
      Age: 20,
      Salary: 45000,
      Position: 'Web Developer',
      joiningAge: 4,
    },
  
    {
      Id: 21,
      FName: 'Sajal 21',
      LName: 'Sen',
      Address: 'Dhaka -21x,road 21y',
      DoB:'6/15/1998',
      Age: 27,
      Salary: 25000,
      Position: 'Developer',
      joiningAge: 2,
    },
    {
      Id: 22,
      FName: 'Sajal 22',
      LName: 'Sen 22',
      Address: 'Dhaka -22a,road 22a',
      DoB:'6/15/2000',
      Age: 27,
      Salary: 26000,
      Position: 'Developer',
      joiningAge: 2,
    },
    {
      Id: 23,
      FName: 'Sajal--23',
      LName: 'Sen-23',
      Address: 'Dhaka -23b,road 23c',
      DoB:'6/15/1998',
      Age: 28,
      Salary: 55000,
      Position: 'Developer -junior',
      joiningAge: 1,
    },
    {
      Id: 24,
      FName: 'Sajal--24',
      LName: 'Sen-24',
      Address: 'Dhaka -24c,road 24v',
      DoB:'6/15/2010',
      Age: 28,
      Salary: 28000,
      Position: 'Developer',
      joiningAge: 4,
    },
  
    {
      Id: 25,
      FName: 'Sajal-25',
      LName: 'Sen--25',
      Address: 'Dhaka -25d,road 25d',
      DoB:'6/15/1996',
      Age: 27,
      Salary: 55000,
      Position: 'Developer',
      joiningAge: 6,
    },
    {
      Id: 26,
      FName: 'Sajal 26',
      LName: 'Sen--6',
      Address: 'Dhaka -26d,road 26f',
      DoB:'6/15/2003',
      Age: 28,
      Salary: 36000,
      Position: 'Developer',
      joiningAge: 4,
    },
    {
      Id: 27,
      FName: 'Sajal--27',
      LName: 'Sen-27',
      Address: 'Dhaka -27f,road 27f',
      DoB:'6/15/2005',
      Age: 28,
      Salary: 35000,
      Position: 'Developer -junior',
      joiningAge: 3,
    },
    {
      Id: 28,
      FName: 'Sajal--28',
      LName: 'Sen-8',
      Address: 'Dhaka -28d,road 28f',
      DoB:'6/15/1996',
      Age: 20,
      Salary: 20000,
      Position: ' junior Developer',
      joiningAge: 1,
    },
    {
      Id: 29,
      FName: 'Sajal--29',
      LName: 'Sen-29',
      Address: 'Dhaka -29g,road 29g',
      DoB:'6/15/2013',
      Age: 29,
      Salary: 35000,
      Position: 'Developer -junior',
      joiningAge: 4,
    },
    {
      Id: 30,
      FName: 'Sajal--30',
      LName: 'Sen-30',
      Address: 'Dhaka -j,road j',
      DoB:'6/15/1995',
      Age: 20,
      Salary: 45000,
      Position: 'Web Developer',
      joiningAge: 4,
    },
  ];


  btnDisable:boolean=false;
  empList2: IEmployee [];
  empPerpage:number=5;
  selextedPage:number=1;

  changePazeSixe(event:Event){
  const newSize=(event.target as HTMLInputElement).value;
  this.empPerpage=Number(newSize);
  this.changePage(1);
}
get pageNumbers():number[]{
  return Array(Math.ceil(this.empList.length / this.empPerpage))
  .fill(0).map((x,i)=>i+1);
}
changePage(page:any){
  this.selextedPage=page
  this.sliceEmp()

}
sliceEmp(){
  let pageIndex=(this.selextedPage-1)*this.empPerpage;
  let endIndex=(this.selextedPage-1)*this.empPerpage+this.empPerpage;
  this.empList2=this.empList.slice(pageIndex,endIndex)
}



Pre(){
  this.selextedPage=this.selextedPage-1;
  this.sliceEmp();
  
}
Next(){
  this.selextedPage=this.selextedPage+1;
  this.sliceEmp();

}
 

 
}

export interface IEmployee {
  Id: number;
  FName: string;
  LName: string;
  Address: string;
  DoB:string;
  Age: number;
  Salary: number;
  Position: string;
  joiningAge: number;
}

 
