import { FormControl } from "@angular/forms";

export interface EducationType {
    degree:FormControl<string|null>,
    Scores:FormControl<number|null>,
    passingYear:FormControl<number|null>

}
