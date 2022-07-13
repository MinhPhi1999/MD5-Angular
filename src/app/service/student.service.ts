import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Student} from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  API = 'http://localhost:8081/api/students';

  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<Student[]> {
    // @ts-ignore
    return this.httpClient.get<Student[]>(this.API);
  }
  save(student: Student): Observable<any> {
    // @ts-ignore
    return this.httpClient.post(this.API, student);
  }
}
