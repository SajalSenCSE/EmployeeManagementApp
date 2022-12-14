import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/add-employee-demo';
import { Dropdown } from 'src/app/models/Dropdown';
import { EducationTypeForm } from 'src/app/models/education-type';
import { EmployeeEducation } from 'src/app/models/employee-education';
import { EmployeeInputTypeForm } from 'src/app/models/EmployeeInputTypeForm';
import { EmployeeServiceService } from 'src/app/services/employee-service';
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
  duplicaketDegrees: any[] = [];

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
      this.bindingFormArray(employee.education);
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
          degree: new FormControl('', Validators.required),
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
      this.employeeForm.controls.id.value
        ? this.updateEmployee(this.employeeForm.controls.id.value)
        : this.insertEmployee();

      this.router.navigate(['employee']);
    }
  }

  updateEmployee(id: number) {
    let empArr = this.empService.getAllEmployee();
    let indexOf = empArr.findIndex(
      (x) => x.id == this.employeeForm.controls.id.value
    );
    this.newEmployee = this.employeeForm.value as Employee;
    empArr[indexOf] = this.newEmployee;
    localStorage.setItem('newEmp', JSON.stringify(empArr));
  }

  addEdu(arrObj?: EmployeeEducation) {
    this.btnDisaabaleForEducation = true;
    const currentYear = new Date().getFullYear();
    if (this.employeeForm.controls.education.valid) {
      let eduArray = this.employeeForm.get('education') as FormArray;
      let newEdu = this.fb.group<EducationTypeForm>({
        degree: new FormControl(arrObj?.degree ? arrObj.degree : '', [
          Validators.required,
        ]),
        scores: new FormControl(arrObj?.scores ? arrObj.scores : null, [
          Validators.required,
          Validators.min(1),
          Validators.max(5),
        ]),
        passingYear: new FormControl(
          arrObj?.passingYear ? arrObj.passingYear : '',
          [Validators.required, Validators.max(currentYear)]
        ),
      });
      eduArray.push(newEdu);
      this.count = this.count + 1;
      this.btnDisaabaleForEducation = false;
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

  onChange(controlValue: Event, i: number) {
    let check = (controlValue.target as HTMLInputElement).value;
    let x = this.employeeForm.controls.education.value.filter(
      (res) => res.degree == check
    );
    if (x.length > 1)
      this.employeeForm.controls.education
        .at(i)
        .controls.degree.setValidators([this.customValidator]);
    else {
      this.employeeForm.controls.education
        .at(i)
        .controls.degree.patchValue(check);
      this.employeeForm.controls.education
        .at(i)
        .controls.degree.clearValidators();
    }
    this.employeeForm.controls.education
      .at(i)
      .controls.degree.updateValueAndValidity();
  }

  customValidator(): Validators {
    return { notValid: true };
  }

  bindingFormArray(arrObj?: EmployeeEducation[]) {
    let eduArray = this.employeeForm.get('education') as FormArray;
    arrObj?.forEach((value?) => {
      this.addEdu(value);
    });
    this.count =
      this.temp == 0
        ? this.temp + ((arrObj?.length as number) - 1)
        : this.count + 1;
    this.btnDisaabaleForEducation = false;
  }
}
