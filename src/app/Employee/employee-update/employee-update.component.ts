import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Dropdown } from 'src/app/models/Dropdown';
import { EducationType } from 'src/app/models/education-type';
import { EmployeeAdd } from 'src/app/models/employee-add';
import { EmployeeInputTypeForm } from 'src/app/models/EmployeeInputTypeForm';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';
import { UtilityData } from 'src/app/Utility/utility-data';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  updateEmployeeForm: FormGroup<EmployeeInputTypeForm>;
  departments: Dropdown[] = UtilityData.GetDept();
  passingYears: string[] = UtilityData.GetYear();
  designations: Dropdown[] = UtilityData.Positation();
  degrees: Dropdown[] = UtilityData.GetDegres();
  btnDisaabaleForEducation: boolean = false;
  count: number = 0;

  constructor(private fb:FormBuilder,
              private empService:EmployeeServiceService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.activatedRoute.snapshot.params['id'];
    let currentEmp =this.empService.getCurrentEmployee(id)
    console.log(currentEmp)
    const currentYear=new Date().getFullYear()
    this.updateEmployeeForm = this.fb.group<EmployeeInputTypeForm>({
      FName: new FormControl(currentEmp.fName as string, [Validators.required]),
      LName: new FormControl(currentEmp?.lName as string, Validators.required),
      Email: new FormControl(currentEmp?.email as string, [Validators.required, Validators.email]),
      Phone: new FormControl(currentEmp?.phone as string, [Validators.required, Validators.pattern("(?:\\+88|88)?(01[3-9]\\d{8})")]),
      Department: new FormControl(currentEmp?.department , [Validators.required]),
      Designation: new FormControl(currentEmp?.designation as string, Validators.required),
      Education: new FormArray([
        this.fb.group({
          degree: new FormControl('SSC'),
          scores: new FormControl<number | null>(2.22, [Validators.required, Validators.min(1), Validators.max(5)]),
          passingYear: new FormControl('2020', [Validators.required])
        })
         //this.initBranchTiming(currentEmp.Education )
      ])
    })
  }
  initBranchTiming(obj:any):any{
    this.btnDisaabaleForEducation = true
    if(obj.length==0){
      
      return this.fb.group<EducationType>({
        degree: new FormControl(null),
        scores: new FormControl<number | null>(2.22, [Validators.required, Validators.min(1), Validators.max(5)]),
        passingYear: new FormControl('2022', [Validators.required])
      })
    }else{
      let eduArray = this.updateEmployeeForm.get('Education') as FormArray;
      for(let i=0;i<obj.length;i++){
      console.log("Test")
      let newEdu = this.fb.group<EducationType>({
        degree: new FormControl(obj[i].degree, Validators.required),
        scores: new FormControl(obj[i].scores, [Validators.required, Validators.min(1), Validators.max(5)]),
        passingYear: new FormControl(obj[i].passingYear, [Validators.required,Validators.max(2030)])
      })
      eduArray.push(newEdu);
    }
    return eduArray as FormArray;
    }
  }
  addEdu() {
    this.btnDisaabaleForEducation = true
    const currentYear=new Date().getFullYear()
    if (this.updateEmployeeForm.controls.Education.valid) {
      let eduArray = this.updateEmployeeForm.get('Education') as FormArray;
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
    let eduArray = this.updateEmployeeForm.get('Education') as FormArray;
    eduArray.removeAt(i);
    this.count = this.count - 1;
  }

}
