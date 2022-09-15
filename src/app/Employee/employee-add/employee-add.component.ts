import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Dropdown } from 'src/app/models/Dropdown';
import { EducationType } from 'src/app/models/education-type';

import { EmployeeInputTypeForm } from 'src/app/models/EmployeeInputTypeForm';
import { UtilityData } from 'src/app/Utility/utility-data';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  addEmployeeForm: FormGroup;
  submited: boolean = false;
  Departments: Dropdown[] = UtilityData.GetDept();

  Designations: Dropdown[] = UtilityData.Positation();

  degrees: Dropdown[] = [
    { Id: 1, Name: 'SSC' },
    { Id: 1, Name: 'BSC' }
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addEmployeeForm = this.fb.group<EmployeeInputTypeForm>({
      FName: new FormControl(null, [Validators.required]),
      LName: new FormControl(null, Validators.required),
      Email: new FormControl(null, [Validators.required, Validators.email]),
      Phone: new FormControl(null, [Validators.required, Validators.maxLength(11)]),
      Department: new FormControl(1, [Validators.required]),
      Designation: new FormControl(1, Validators.required),
      Education: new FormArray([
        this.fb.group({
          degree: new FormControl<string|null>('SSC'),
          Scores: new FormControl<number|null>(3.88),
          passingYear: new FormControl<number|null>(2020)
        })
      ]),
      SelectEdu: new FormArray([
        this.fb.group({
          mixed: new FormControl()
        })
      ])
    })
  }

  onSubmit() {
    this.submited = true;
    if (this.addEmployeeForm.valid) {
      console.log(this.addEmployeeForm.value)
      this.submited = false;
    } else {
      console.log("Frorm is not valid")
    }
  }

  addEdu() {
    let eduArray = this.addEmployeeForm.get('Education') as FormArray;
    let newEdu = this.fb.group({
      degree: '',
      Scores: 1,
      passingYear: 2020
    })
    eduArray.push(newEdu)
  }
  
  Remove(i: number) {
    let eduArray = this.addEmployeeForm.get('Education') as FormArray;
    eduArray.removeAt(i);
  }
  // addEdu(){
  //   let eduArray=this.addEmployeeForm.get('SelectEdu') as FormArray;
  //   let newEdu=this.fb.group({
  //     mixed: this.addEmployeeForm.get('Education') as FormArray 
  //   })
  //   console.log(newEdu.value)
  //   eduArray.push(newEdu)
  // }


}
