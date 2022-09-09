import { Pipe, PipeTransform } from '@angular/core';
import { IEmployee } from '../models/IEmployee';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: IEmployee[], filterString: string, propName: string): any{
    let temp=filterString.toLowerCase();
    const resultArray:IEmployee[] = [];
    if (value){
    if (value.length === 0 || filterString === '' || propName === '') {
      return value;
    }
    for (const item of value) {
      if (item.FName.toLowerCase().startsWith(temp)) {
        resultArray.push(item);
      }
    }
    return resultArray;
    
    
  }

  }
}
