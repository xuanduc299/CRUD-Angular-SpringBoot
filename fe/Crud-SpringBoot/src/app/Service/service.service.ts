import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Personal } from '../Model/Personal';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/api/personal';


  getPersonal(): Observable<Personal[]> {
    // return this.http.get<Personal[]>(this.Url);
    return this.http.get<Personal[]>(`${this.Url}`);
  }

  CreatePersonal(personal: Personal): Observable<Object> {
    return this.http.post<Personal[]>(this.Url, personal);
    // return this.http.post(`${this.Url}`, Personal);
  }
  getPersonalId(id: any) {
    return this.http.get<Personal>(this.Url + "/" + id);
  }
  updatePersonal(personal: Personal) {
    return this.http.put<Personal>(this.Url, personal);
  }

  deletePersonal(personal: Personal) {
    return this.http.delete<Personal[]>(this.Url + "/" + personal.id);
  }

  // deletePersonal(id: any): Observable<any> {
  //   return this.http.delete(`${this.Url}/${id}`);
  // }
  // deletePersonal(id: number): Observable<Object> {
  //   return this.http.delete(`${this.Url}/${id}`);
  // }




}
