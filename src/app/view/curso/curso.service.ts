import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class cursoService {

  private baseUrl = 'http://localhost:8080/curso';

  constructor(private http: HttpClient) { }

  getCurso(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCurso(curso: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, curso);
  }

  updateCurso(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCurso(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCursoList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}