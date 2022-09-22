import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/add-employee-demo';
import { Dropdown } from 'src/app/models/Dropdown';
import { EducationType } from 'src/app/models/education-type';
import { EmployeeAdd } from 'src/app/models/employee-add';
import { EmployeeEducation } from 'src/app/models/employee-education';

import { EmployeeInputTypeForm } from 'src/app/models/EmployeeInputTypeForm';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { UtilityData } from 'src/app/Utility/utility-data';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
})
export class EmployeeAddComponent implements OnInit {
  employeeForm: FormGroup<EmployeeInputTypeForm>;
  departments: Dropdown[] = UtilityData.GetDept();
  passingYears: string[] = UtilityData.GetYear();
  designations: Dropdown[] = UtilityData.Positation();
  degrees: Dropdown[] = UtilityData.GetDegres();
  count: number = 0;
  btnDisaabaleForEducation: boolean = false;
  newEmployee: Employee = new Employee();
  temp: number = 0;

  constructor(
    private fb: FormBuilder,
    private empService: EmployeeServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createAddEmployeeForm();
    let id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      let employee = this.empService.getCurrentEmployee(id);
      this.employeeForm.patchValue(employee);
      this.employeeForm.controls.education.clear();
      this.addEdu(employee.education);
    }
  }

  createAddEmployeeForm() {
    this.employeeForm = this.fb.group<EmployeeInputTypeForm>({
      id: new FormControl(null),
      fName: new FormControl('', [Validators.required]),
      lName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('(?:\\+88|88)?(01[3-9]\\d{8})'),
      ]),
      department: new FormControl('Account', [Validators.required]),
      designation: new FormControl('Developer', Validators.required),
      education: new FormArray([
        this.fb.group({
          degree: new FormControl('SSC'),
          scores: new FormControl<number | null>(null, [
            Validators.required,
            Validators.min(1),
            Validators.max(5),
          ]),
          passingYear: new FormControl('2020', [
            Validators.required,
            Validators.max(2023),
          ]),
        }),
      ]),
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      if (this.employeeForm.controls.id.value)
        this.updateEmployee(this.employeeForm.controls.id.value);
      else this.insertEmployee();
      this.router.navigate(['emplist']);
    }
  }

  updateEmployee(id: number) {
    let empArr = this.empService.getAllEmployee();
    let idexOf = empArr.findIndex(
      (x) => x.id == this.employeeForm.controls.id.value
    );
    this.newEmployee = this.employeeForm.value as Employee;
    empArr[idexOf] = this.newEmployee;
    localStorage.setItem('newEmp', JSON.stringify(empArr));
  }

  addEdu(arrObj?: EmployeeEducation[]) {
    this.btnDisaabaleForEducation = true;
    const currentYear = new Date().getFullYear();
    if (this.employeeForm.controls.education.valid) {
      let eduArray = this.employeeForm.get('education') as FormArray;
      if (!arrObj) {
        arrObj = [{ degree: 'SSC', scores: null, passingYear: '2020' }];
        this.temp = 1;
      }
      arrObj?.forEach((value?) => {
        let newEdu = this.fb.group<EducationType>({
          degree: new FormControl(value.degree, [Validators.required]),
          scores: new FormControl(value.scores, [
            Validators.required,
            Validators.min(1),
            Validators.max(5),
          ]),
          passingYear: new FormControl(value.passingYear, [
            Validators.required,
            Validators.max(2030),
          ]),
        });
        eduArray.push(newEdu);
        this.count = this.temp == 0 ? this.temp + 1 : this.count + 1;
        this.btnDisaabaleForEducation = false;
      });
    }
  }

  Remove(i: number) {
    let eduArray = this.employeeForm.get('education') as FormArray;
    eduArray.removeAt(i);
    this.count = this.count - 1;
  }

  insertEmployee() {
    this.employeeForm.controls.id.setValue(
      Number(this.empService.getAllEmployee().length + 1)
    );
    this.newEmployee = this.employeeForm.value as Employee;
    this.empService.addEmployee(this.newEmployee);
  }
  degreeChange(value: any, values: any) {
    // console.log(value.degree);
    let check: string = value.degree;
    console.log(check);
    console.log(this.employeeForm.controls.education.value);
    let x = this.employeeForm.controls.education.value.find(
      (x) => x.degree == check
    );
    let conX = x?.degree;
    console.log(conX);
  }
}
