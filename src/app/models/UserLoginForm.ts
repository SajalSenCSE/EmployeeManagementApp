import { FormControl } from '@angular/forms';

export interface UserLoginForm {
  userName: FormControl<string | null>;
  passWord: FormControl<string | null>;
}
