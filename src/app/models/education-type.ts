import { FormControl } from '@angular/forms';

export interface EducationType {
  degree: FormControl<string | null>;
  scores: FormControl<number | null>;
  passingYear: FormControl<string | null>;
}
