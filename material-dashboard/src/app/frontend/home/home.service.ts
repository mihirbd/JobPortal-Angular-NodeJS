import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  createUrl = "http://localhost:3000/hirer";

  urlforjobPost = "http://localhost:3000/job_post";

  blogurl = "http://localhost:3000/blog_post"

  constructor(private http: HttpClient) { }


  //get data from hirer
  getUser(): Observable<any> {
    return this.http.get(`${this.createUrl}`);
  }

  //insert data for regform
  InsertUser(data: any): Observable<any> {
    return this.http.post(`${this.createUrl}`, data);
  }



  //get data from Job_post
  getjobPost(): Observable<any> {
    return this.http.get(`${this.urlforjobPost}`);
  }

  //get data from Job_post
  getjobPostByID(id: any): Observable<any> {
    let ids = id;
    return this.http.get(`${this.urlforjobPost}/${ids}`);
  }

  //insert data for Job_post
  InsertjobPost(data: any): Observable<any> {
    return this.http.post(`${this.urlforjobPost}`, data);
  }



  // work for blog post

  //get data from hirer
  getblog(): Observable<any> {
    return this.http.get(`${this.createUrl}`);
  }

  
  //insert data for regform
  Insertblog(data: any): Observable<any> {
    return this.http.post(`${this.blogurl}`, data);
  }










}
