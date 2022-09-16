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
  departments: Dropdown[] = UtilityData.GetDept();
  passingYears: string[] = UtilityData.GetYear();
  designations: Dropdown[] = UtilityData.Positation();
  degrees: Dropdown[] = UtilityData.GetDegres();
  count: number = 0;
  btnDisaabaleForEducation: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const currentYear=new Date().getFullYear()
    this.addEmployeeForm = this.fb.group<EmployeeInputTypeForm>({
      FName: new FormControl(null, [Validators.required]),
      LName: new FormControl(null, Validators.required),
      Email: new FormControl(null, [Validators.required, Validators.email]),
      Phone: new FormControl(null, [Validators.required, Validators.pattern("(?:\\+88|88)?(01[3-9]\\d{8})")]),
      Department: new FormControl(1, [Validators.required]),
      Designation: new FormControl(1, Validators.required),
      Education: new FormArray([
        this.fb.group({
          degree: new FormControl('SSC'),
          scores: new FormControl<number | null>(null, [Validators.required, Validators.min(1), Validators.max(5)]),
          passingYear: new FormControl('2020', [Validators.required,Validators.max(currentYear)])
        })
      ])
    })
  }

  onSubmit() {
    if (this.addEmployeeForm.valid) {
      console.log(this.addEmployeeForm.value)
      this.addEmployeeForm.reset()
    } else {
      console.log("Frorm is not valid")
    }
  }

  addEdu() {
    this.btnDisaabaleForEducation = true
    const currentYear=new Date().getFullYear()
    if (this.addEmployeeForm.controls.Education.valid) {
      let eduArray = this.addEmployeeForm.get('Education') as FormArray;
      let newEdu = this.fb.group<EducationType>({
        degree: new FormControl('SSC', Validators.required),
        scores: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(5)]),
        passingYear: new FormControl('2020', [Validators.required,Validators.max(currentYear)])
      })
      eduArray.push(newEdu);
      this.count = this.count + 1;
      this.btnDisaabaleForEducation = false
    }
  }

  Remove(i: number) {
    let eduArray = this.addEmployeeForm.get('Education') as FormArray;
    eduArray.removeAt(i);
    this.count = this.count - 1;
  } 
}
