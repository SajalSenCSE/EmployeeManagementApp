import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { EducationType } from "./education-type";

export interface EmployeeInputTypeForm {
    id:FormControl<number|null>
    fName: FormControl<string|null>
    lName: FormControl<string|null>,
    email: FormControl<string|null>,
    phone: FormControl<string|null>,
    department: FormControl<string|null>,
    designation: FormControl<string|null>,
    education:FormArray<FormGroup<EducationType>>;  
}




