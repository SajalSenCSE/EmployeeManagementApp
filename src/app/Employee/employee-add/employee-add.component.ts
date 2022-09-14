import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Dropdown } from 'src/app/models/dropdown';
import { EmployeeInput } from 'src/app/models/EmployeeInput';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  addEmployeeForm: FormGroup;
  submited:boolean=false;
  Departments: Dropdown[] = [
    {
      "Id": 1,
      "Name": 'Seles'
    },
    {
      "Id": 2,
      "Name": 'Account'
    },
    {
      "Id": 3,
      "Name": 'Marketing'
    },
    {
      "Id": 4,
      "Name": 'Developer'
    }
  ]

  Designations: Dropdown[] = [
    {
      "Id": 1,
      "Name": 'Senior Developer'
    },
    {
      "Id": 2,
      "Name": 'Developer'
    },
    {
      "Id": 3,
      "Name": 'Junior Developer'
    },
    {
      "Id": 4,
      "Name": 'Team Leader'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.addEmployeeForm = new FormGroup({
      FName: new FormControl(null, Validators.required),
      LName: new FormControl(null, Validators.required),
      Email: new FormControl('sajal@gmail.com', [Validators.required, Validators.email]),
      Phone: new FormControl(null, [Validators.required, Validators.maxLength(11)]),
      Department: new FormControl(1, [Validators.required]),
      Designation: new FormControl(1, Validators.required)
    })
  }

  onSubmit() {
    this.submited=true;
    if (this.addEmployeeForm.valid) {
      console.log(this.addEmployeeForm.value.FName)
      console.log(this.addEmployeeForm.value.LName)
      console.log(this.addEmployeeForm.value.Email)
      console.log(this.addEmployeeForm.value.Phone)
      console.log(this.addEmployeeForm.value.Department)
      console.log(this.addEmployeeForm.value.Designation)
      this.submited=false;
    } else {
      
      console.log("Frorm is not valid")
    }
  }

  get FName(){
    return this.addEmployeeForm.get('FName') as FormControl;
  }
  get LName(){
    return this.addEmployeeForm.get('LName') as FormControl;
  }
  get Phone(){
    return this.addEmployeeForm.get('Phone') as FormControl;
  }
  get Email(){
    return this.addEmployeeForm.get('Email') as FormControl;
  }
  get Department(){
    return this.addEmployeeForm.get('Department') as FormControl;
  }
  get Designation(){
    return this.addEmployeeForm.get('Designation') as FormControl;
  }
}
