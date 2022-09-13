import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any,): unknown {
    let dob2: any = new Date(value);

    if (dob2 == 'Invalid Date') {
      return ' --- ';
    }
    if (value == '') {
      return ' -- ';
    }
    let currentYear: any = new Date().getFullYear();
    let dob: any = new Date(value).getUTCFullYear();
    let age = currentYear - dob;
    return age;
  }

}
