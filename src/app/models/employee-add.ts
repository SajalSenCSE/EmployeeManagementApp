import { EducationType } from "./education-type";
import { EmployeeEducation } from "./employee-education";

export interface EmployeeAdd {
    Id:number;
    fName:string;
    lName:string;
    email:string;
    phone:string;
    department:string;
    designation:string;
    education:EmployeeEducation[];
}
