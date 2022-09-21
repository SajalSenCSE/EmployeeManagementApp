import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/add-employee-demo';
import { IEmployee } from '../models/IEmployee';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Employee[], filterString: string, propName: string): any {
    let temp = filterString.toLowerCase();
    const resultArray: Employee[] = [];
    if (value) {
      if (value.length === 0 || filterString === '' || propName === '') {
        return value;
      }
      for (const item of value) {
        if (item.fName.toLowerCase().startsWith(temp)) {
          resultArray.push(item);
        }
      }
      return resultArray;
    }
  }
}
