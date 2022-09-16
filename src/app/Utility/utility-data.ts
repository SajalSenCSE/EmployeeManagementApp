import { Dropdown } from "../models/Dropdown";

export class UtilityData {
    static Departments: Dropdown[] = [
        {
            "Id": 1,
            "Name": 'Seles'
        },
        {
            "Id": 2,
            "Name": 'Account'
        },
        {
            "Id": 3,
            "Name": 'Marketing'
        },
        {
            "Id": 4,
            "Name": 'Developer'
        }
    ]

    static Designations: Dropdown[] = [
        {
            "Id": 1,
            "Name": 'Senior Developer'
        },
        {
            "Id": 2,
            "Name": 'Developer'
        },
        {
            "Id": 3,
            "Name": 'Junior Developer'
        },
        {
            "Id": 4,
            "Name": 'Team Leader'
        }
    ]
    static Degrees:Dropdown[]=[
        { Id: 1, Name: 'SSC' },
        { Id: 2, Name: 'HSC' },
        { Id: 3, Name: 'BSC' }
      ]

    public static GetDept(): Dropdown[] {
        return UtilityData.Departments;
    }

    public static Positation(): Dropdown[] {
        return UtilityData.Designations;
    }
    public static GetDegres(): Dropdown[]{
        return UtilityData.Degrees;
    }
}
