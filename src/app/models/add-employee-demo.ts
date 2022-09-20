import { EmployeeAdd } from "./employee-add";

export class AddEmployeeDemo implements EmployeeAdd {
    Id: number;
    fName: string;
    lName: string;
    email: string;
    phone: string;
    department: string;
    designation: string;
    education: {
        degree: string ,
        scores: number ,
        passingYear: string
    };
}
