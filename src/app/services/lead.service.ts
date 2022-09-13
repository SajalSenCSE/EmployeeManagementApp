
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GetDataOutPut } from '../models/GetDataOutPut';

import { LeadOutPut } from '../models/LeadOutPut';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  constructor(private http:HttpClient) { }

  getAllLead(ItemsPerPage:number,PageNo:number):Observable<GetDataOutPut<LeadOutPut>>{
    //const url:string='https://apiv3.qsmart.ie/api/lead?AssignedUserId=2&SelectedStageId=1&ItemsPerPage=20&PageNo=2';
    const url2:string='https://apiv3.qsmart.ie/api/lead?AssignedUserId=2&SelectedStageId=1&'+'ItemsPerPage='+ItemsPerPage+'&PageNo='+PageNo;
    const httpOptions={
      headers:new HttpHeaders({
        Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZXZ1c2VyIiwiZmlyc3ROYW1lIjoiRGV2IiwidXNlcmlkIjoiMiIsImp0aSI6IjVjMTRlZDljLTA1ZmEtNDJhNS05MDU0LWI5NzMyZDJiOWNjZiIsIlRlbXBsYXRlSWQiOiIwIiwiSXBBZGRyZXNzIjoiNTguMTQ3LjE3Mi40MiIsIkxvZ2luSWQiOiIzOTYiLCJleHAiOjE2NjMzMzE3NDYsImlzcyI6IlFzbWFydEFQSSIsImF1ZCI6IlFzbWFydFVzZXIifQ.xoaOZ-21FbsKyZWeYKYF_ZEqUR-Uvn3p0oGDWntX7nc'
      })
    };
    return this.http.get<GetDataOutPut<LeadOutPut>>(url2,httpOptions)
  }
}

  

