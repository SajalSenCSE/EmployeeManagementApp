import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Dropdown } from 'src/app/models/Dropdown';

import { EmployeeInputTypeForm } from 'src/app/models/EmployeeInputTypeForm';
import { UtilityData } from 'src/app/Utility/utility-data';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  addEmployeeForm: FormGroup;
  submited:boolean=false;
  Departments: Dropdown[] = UtilityData.GetDept();

  Designations: Dropdown[] = UtilityData.Positation();

  degrees:Dropdown[]=[
    {Id:1,Name:'SSC'},
    {Id:1,Name:'BSC'}
  ]
  
  constructor(private fb:FormBuilder) { }
  
  ngOnInit(): void {
    this.addEmployeeForm =this.fb.group<EmployeeInputTypeForm>({
      FName: new FormControl(null,[Validators.required]),
      LName: new FormControl(null, Validators.required),
      Email: new FormControl(null, [Validators.required, Validators.email]),
      Phone: new FormControl(null, [Validators.required, Validators.maxLength(11)]),
      Department: new FormControl(1, [Validators.required]),
      Designation: new FormControl(1, Validators.required),
      Education:new FormArray([
        this.fb.group({
         degree:new FormControl(''),
         Scores:new FormControl(''),
         passingYear:new FormControl('')
        })
     ])
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

  get Edu():FormArray{
    return this.addEmployeeForm.get('Education') as FormArray;
  }
  
}
