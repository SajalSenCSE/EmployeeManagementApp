import { FormControl } from "@angular/forms";

export interface EmployeeInputTypeForm {
    FName:  FormControl<string|null>
    LName: FormControl<string|null>,
    Email: FormControl<string|null>,
    Phone: FormControl<string|null>,
    Department: FormControl<number|null>,
    Designation: FormControl<number|null>,
}


