import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  apiUrl = "http://localhost:3000/users/";
  constructor(private http: HttpClient) { }

  //get data
  getAllUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  //insert data
  CreateUser(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data);
  }




}
