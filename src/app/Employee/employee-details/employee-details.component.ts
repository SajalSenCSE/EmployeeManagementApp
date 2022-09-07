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

  ngOnInit(): void {}

  displayedColumns: string[] = [
    'Id',
    'FName',
    'LName',
    'Address',
    'Age',
    'Salary',
    'Position',
    'joiningAge',
  ];
  dataSource = new MatTableDataSource<IEmployee>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface IEmployee {
  Id: number;
  FName: string;
  LName: string;
  Address: string;
  Age: number;
  Salary: number;
  Position: string;
  joiningAge: number;
}

const ELEMENT_DATA: IEmployee[] = [
  {
    Id: 1,
    FName: 'Sajal1',
    LName: 'Sen',
    Address: 'Dhaka -x,road y',
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
    Age: 20,
    Salary: 45000,
    Position: 'Web Developer',
    joiningAge: 4,
  },
];
