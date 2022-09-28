import { EmployeeEducation } from './employee-education';

export interface EmployeeAdd {
  id: number;
  fName: string;
  lName: string;
  email: string;
  phone: string;
  department: string;
  designation: string;
  education: EmployeeEducation[];
}
