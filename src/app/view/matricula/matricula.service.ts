import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class matriculaService {

  private baseUrl = 'http://localhost:8080/matricula';

  constructor(private http: HttpClient) { }

  createMatricula(matricula: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, matricula);
  }

  deleteMatricula(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}