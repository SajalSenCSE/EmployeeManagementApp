import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddEmployeeDemo } from 'src/app/models/add-employee-demo';
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
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  employeeForm: FormGroup<EmployeeInputTypeForm>;
  departments: Dropdown[] = UtilityData.GetDept();
  passingYears: string[] = UtilityData.GetYear();
  designations: Dropdown[] = UtilityData.Positation();
  degrees: Dropdown[] = UtilityData.GetDegres();
  count: number = 0;
  btnDisaabaleForEducation: boolean = false;
  newEmployee: EmployeeAdd = new AddEmployeeDemo();
  editMode:boolean=false;
  id:number;

  constructor(private fb: FormBuilder,
    private empService: EmployeeServiceService,
    private activatedRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    if (id != null) {
      this.editMode=true;
      this.updatedEmployeeBinding(id)
    } else {
      this.createAddEmployeeForm()
    }
  }

  createAddEmployeeForm(obj?: EmployeeAdd) {
    this.employeeForm = this.fb.group<EmployeeInputTypeForm>({
      id:new FormControl(null),
      fName: new FormControl('', [Validators.required]),
      lName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern("(?:\\+88|88)?(01[3-9]\\d{8})")]),
      department: new FormControl('Account', [Validators.required]),
      designation: new FormControl('Developer', Validators.required),
      education: new FormArray([
        this.fb.group({
          degree: new FormControl('SSC'),
          scores: new FormControl<number |null>(null, [Validators.required, Validators.min(1), Validators.max(5)]),
          passingYear: new FormControl('2020', [Validators.required, Validators.max(2023)])
        })
      ])
    })
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      if(this.editMode==true){
        let empArr=this.empService.getAllEmployee2();
        let idexOf=empArr.findIndex(x=>x.Id==this.id);
        this.mapEditEmployee()
        empArr[idexOf]=this.newEmployee; 
       localStorage.setItem('newEmp',JSON.stringify(empArr))
        this.router.navigate(['emplist']);
      }else{
        console.log(this.employeeForm.value)
        console.log('test on submit')
        this.mapNewEmployee();
        this.empService.addEmployee(this.newEmployee);
        this.employeeForm.reset();
        this.router.navigate(['emplist']);
      }
    } else {
      console.log("Frorm is not valid")
    }
  }

  addEdu() {
    this.btnDisaabaleForEducation = true
    const currentYear = new Date().getFullYear()
    if (this.employeeForm.controls.education.valid) {
      let eduArray = this.employeeForm.get('education') as FormArray;
      let newEdu = this.fb.group<EducationType>({
        degree: new FormControl('SSC', Validators.required),
        scores: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(5)]),
        passingYear: new FormControl('2020', [Validators.required, Validators.max(currentYear)])
      })
      eduArray.push(newEdu);
      this.count = this.count + 1;
      this.btnDisaabaleForEducation = false
    }
  }

  Remove(i: number) {
    let eduArray = this.employeeForm.get('education') as FormArray;
    eduArray.removeAt(i);
    this.count = this.count - 1;
  }

  mapNewEmployee() {
    this.newEmployee.Id = Number(this.empService.newEmpId())
    this.newEmployee.fName = this.employeeForm.controls.fName.value as string
    this.newEmployee.lName = this.employeeForm.controls.lName.value as string
    this.newEmployee.email = this.employeeForm.controls.email.value as string
    this.newEmployee.phone = this.employeeForm.controls.phone.value as string
    this.newEmployee.department = this.employeeForm.controls.department.value as string
    this.newEmployee.designation = this.employeeForm.controls.designation.value as string
    this.newEmployee.education = this.employeeForm.controls.education.value as EmployeeEducation[] 
  }

  mapEditEmployee() {
    this.newEmployee.Id = this.employeeForm.controls.id.value as number
    this.newEmployee.fName = this.employeeForm.controls.fName.value as string
    this.newEmployee.lName = this.employeeForm.controls.lName.value as string
    this.newEmployee.email = this.employeeForm.controls.email.value as string
    this.newEmployee.phone = this.employeeForm.controls.phone.value as string
    this.newEmployee.department = this.employeeForm.controls.department.value as string
    this.newEmployee.designation = this.employeeForm.controls.designation.value as string
    this.newEmployee.education = this.employeeForm.controls.education.value as EmployeeEducation[]
  }

  updatedEmployeeBinding(id: number) {
    this.id=id;
    let updatedEmployee = this.empService.getCurrentEmployee(id);
    let educations = updatedEmployee.education
    this.employeeForm = this.fb.group<EmployeeInputTypeForm>({
      id:new FormControl(updatedEmployee.Id ),
      fName: new FormControl(updatedEmployee.fName as string, [Validators.required]),
      lName: new FormControl(updatedEmployee.lName as string, Validators.required),
      email: new FormControl(updatedEmployee.email as string, [Validators.required, Validators.email]),
      phone: new FormControl(updatedEmployee.phone as string, [Validators.required, Validators.pattern("(?:\\+88|88)?(01[3-9]\\d{8})")]),
      department: new FormControl(updatedEmployee.department as string, [Validators.required]),
      designation: new FormControl(updatedEmployee.designation as string, Validators.required),
      education: new FormArray<FormGroup<EducationType>>([]),
    })
    this.bindingFormArray(educations);
  }

  bindingFormArray(arrObj: EmployeeEducation[]) {
    let eduArray = this.employeeForm.get('education') as FormArray;
    for (let i = 0; i < arrObj.length; i++) {
      let newEdu = this.fb.group<EducationType>({
        degree: new FormControl(arrObj[i].degree, Validators.required),
        scores: new FormControl(arrObj[i].scores, [Validators.required, Validators.min(1), Validators.max(5)]),
        passingYear: new FormControl(arrObj[i].passingYear, [Validators.required, Validators.max(2030)])
      })
      eduArray.push(newEdu);
    }
  }
}
