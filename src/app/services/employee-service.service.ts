import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IEmployee } from '../models/IEmployee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  constructor(private http: HttpClient) { }

  getAllEmployee(): Observable<IEmployee[]> {
    return this.http
      .get('data/Employee.json')
      .pipe(map((data) => data as IEmployee[]));
  }
}
