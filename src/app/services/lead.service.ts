import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILead } from '../models/ilead';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  constructor(private http:HttpClient) { }

  url:string='https://apiv3.qsmart.ie/api/lead?AssignedUserId=2&SelectedStageId=1&ItemsPerPage=20&PageNo=1';
  token:string='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkZXZ1c2VyIiwiZmlyc3ROYW1lIjoiRGV2IiwidXNlcmlkIjoiMiIsImp0aSI6IjVjMTRlZDljLTA1ZmEtNDJhNS05MDU0LWI5NzMyZDJiOWNjZiIsIlRlbXBsYXRlSWQiOiIwIiwiSXBBZGRyZXNzIjoiNTguMTQ3LjE3Mi40MiIsIkxvZ2luSWQiOiIzOTYiLCJleHAiOjE2NjMzMzE3NDYsImlzcyI6IlFzbWFydEFQSSIsImF1ZCI6IlFzbWFydFVzZXIifQ.xoaOZ-21FbsKyZWeYKYF_ZEqUR-Uvn3p0oGDWntX7nc';
  getAll():Observable<ILead[]>{
    let httpOptions={
      headers:new HttpHeaders({
        Authorization:'Bearer '+this.token
      })
    };
    return this.http.get<ILead[]>(this.url,httpOptions);
  }
  
}
