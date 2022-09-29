import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, Observable } from 'rxjs';
import { GetDataOutPut } from '../models/GetDataOutPut';

import { LeadOutPut } from '../models/LeadOutPut';
import { getCookie } from './function';

@Injectable({
  providedIn: 'root',
})
export class LeadService {
  constructor(private http: HttpClient) {}

  getAllLead(
    ItemsPerPage: number,
    PageNo: number
  ): Observable<GetDataOutPut<LeadOutPut>> {
    const url2: string =
      'https://apiv3.qsmart.ie/api/lead?AssignedUserId=2&SelectedStageId=1&' +
      'ItemsPerPage=' +
      ItemsPerPage +
      '&PageNo=' +
      PageNo;
    let token = getCookie('token');
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.http.get<GetDataOutPut<LeadOutPut>>(url2, httpOptions);
  }
}
