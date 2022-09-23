import { FormControl } from '@angular/forms';

export interface EducationTypeForm {
  degree: FormControl<string | null>;
  scores: FormControl<number | null>;
  passingYear: FormControl<string | null>;
}
