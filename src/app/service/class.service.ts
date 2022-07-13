import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Class} from '../model/class';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  Api = 'http://localhost:8081/api/classes';
  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<Class[]> {
    return this.httpClient.get<Class[]>(this.Api);
  }
}
