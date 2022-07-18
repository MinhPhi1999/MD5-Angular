import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tour} from '../model/tour';

@Injectable({
  providedIn: 'root'
})
export class TuorService {
  API = 'http://localhost:3000/tuors';
  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<Tour[]> {
    // @ts-ignore
    return this.httpClient.get<Tour[]>(this.API);
  }
  findById(id: any): Observable<Tour> {
    // @ts-ignore
    return this.httpClient.get<Tour>(this.API + `/${id}`);
  }
  save(tour: Tour): Observable<any> {
    // @ts-ignore
    return this.httpClient.post(this.API, tour);
  }
}
