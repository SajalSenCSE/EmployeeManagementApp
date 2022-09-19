import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { EducationType } from "./education-type";

export interface EmployeeInputTypeForm {
    FName: FormControl<string|null>
    LName: FormControl<string|null>,
    Email: FormControl<string|null>,
    Phone: FormControl<string|null>,
    Department: FormControl<string|null>,
    Designation: FormControl<string|null>,
    Education:FormArray<FormGroup<EducationType>>;  
}




