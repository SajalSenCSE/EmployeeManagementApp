import { EducationType } from './education-type';
import { EmployeeAdd } from './employee-add';
import { EmployeeEducation } from './employee-education';

export class AddEmployeeDemo implements EmployeeAdd {
  id: number;
  fName: string;
  lName: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  education: EmployeeEducation[];
}