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
  addEmployeeForm: FormGroup<EmployeeInputTypeForm>;
  Departments: Dropdown[] = UtilityData.GetDept();
  addBtnDisable: boolean = true;

  Designations: Dropdown[] = UtilityData.Positation();

  degrees: Dropdown[] = UtilityData.GetDegres();
Scores: any;

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
          degree: new FormControl('SSC'),
          Scores: new FormControl<number | null>(null, Validators.required),
          passingYear: new FormControl<number | null>(null, Validators.required)
        })
      ])
    })
  }

  onSubmit() {
    if (this.addEmployeeForm.valid) {
      console.log(this.addEmployeeForm.value)
    } else {
      console.log("Frorm is not valid")
    }
  }

  c:number=0;
  btnDisaabaleEdu:boolean=false;
  addEdu() {
    this.btnDisaabaleEdu=true
    if(this.addEmployeeForm.controls.Education.valid){
      let eduArray = this.addEmployeeForm.get('Education') as FormArray;
      let newEdu = this.fb.group<EducationType>({
        degree: new FormControl('SSC',Validators.required),
        Scores: new FormControl(null,Validators.required),
        passingYear: new FormControl(null,Validators.required)

      })
      eduArray.push(newEdu);
      this.c=this.c+1;
      this.btnDisaabaleEdu=false
    }
  }

  Remove(i: number) {
    let eduArray = this.addEmployeeForm.get('Education') as FormArray;
    eduArray.removeAt(i);
    this.c=this.c-1;
  }
}
