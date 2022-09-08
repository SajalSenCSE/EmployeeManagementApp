import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ): unknown {
    // if(value==''){
    //   console.log(value)
    // }
    // console.log(value);

    if(value==''){
      return ' zz';
    }
    let currentYear:any=new Date().getFullYear();
    let dob:any=new Date(value).getUTCFullYear();
    let age=currentYear-dob;
    console.log(age);
    return age;
  }

}
