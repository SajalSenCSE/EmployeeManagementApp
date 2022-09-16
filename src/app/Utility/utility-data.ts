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

      static PassingYear:string[]=['1992','1993','1994','1995','1996','1997','1998','1999'
        ,'2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010',
        '2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022'];

    public static GetDept(): Dropdown[] {
        return UtilityData.Departments;
    }

    public static Positation(): Dropdown[] {
        return UtilityData.Designations;
    }
    public static GetDegres(): Dropdown[]{
        return UtilityData.Degrees;
    }
    public static GetYear():string[]{
        return UtilityData.PassingYear;
    }
}
