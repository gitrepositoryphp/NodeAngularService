import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8082/api/v1/empoyees/getallemployees";

  // private baseURL1="http://localhost:8082/api/v1/empoyees/getemployeebyid";
  // private baseURL2= "http://localhost:8082/api/v1/empoyees/save";

  constructor(private httpClient: HttpClient) { }

  createEmployee(employee: any): Observable<any>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeesList(): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}`);
  }

  getEmployeeById(id: number): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: any): Observable<any>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<any>{
 return  this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}
