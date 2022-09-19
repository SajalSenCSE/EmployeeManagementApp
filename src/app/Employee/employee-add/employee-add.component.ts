import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddEmployeeDemo } from 'src/app/models/add-employee-demo';
import { Dropdown } from 'src/app/models/Dropdown';
import { EducationType } from 'src/app/models/education-type';
import { EmployeeAdd } from 'src/app/models/employee-add';

import { EmployeeInputTypeForm } from 'src/app/models/EmployeeInputTypeForm';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
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
  newEmployee:EmployeeAdd=new AddEmployeeDemo();

  constructor(private fb: FormBuilder,private empService:EmployeeServiceService) { }

  ngOnInit(): void {
    const currentYear=new Date().getFullYear()
    this.addEmployeeForm = this.fb.group<EmployeeInputTypeForm>({
      FName: new FormControl('', [Validators.required]),
      LName: new FormControl('', Validators.required),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Phone: new FormControl('', [Validators.required, Validators.pattern("(?:\\+88|88)?(01[3-9]\\d{8})")]),
      Department: new FormControl('', [Validators.required]),
      Designation: new FormControl('', Validators.required),
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
      this.mapNewEmployee();
      this.empService.addEmployee(this.newEmployee);
      this.addEmployeeForm.reset();
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

  mapNewEmployee(){
    this.newEmployee.Id=Number(this.empService.newEmpId())
    this.newEmployee.fName = this.addEmployeeForm.controls.FName.value as string
    this.newEmployee.lName=this.addEmployeeForm.controls.LName.value as string
    this.newEmployee.email=this.addEmployeeForm.controls.Email.value as string
    this.newEmployee.phone=this.addEmployeeForm.controls.Phone.value as string
    this.newEmployee.department=this.addEmployeeForm.controls.Department.value as string
    this.newEmployee.designation=this.addEmployeeForm.controls.Designation.value as string
    this.newEmployee.Education=this.addEmployeeForm.controls.Education.value
 }
}
