import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Matricula } from './matricula';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  private baseUrl = 'http://localhost:8080/api/matricula';

  constructor(private snackBar: MatSnackBar,private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  getMatricula(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/findById/${id}`);
  }

  createMatricula(matricula: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create/`, matricula);
  }

  deleteMatricula(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  getMatriculaList() {
    return this.http.get<Matricula[]>(`${this.baseUrl}/findAll`);
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}