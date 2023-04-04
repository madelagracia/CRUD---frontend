import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private baseUrl = 'http://localhost:8080/api/aluno';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
    
    showMessage(msg: string, isError: boolean = false): void {
      this.snackBar.open(msg, "X", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
        panelClass: isError ? ["msg-error"] : ["msg-success"],
      });
    }

  getAluno(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/findById/${id}`);
  }

  createAluno(aluno: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/`, aluno);
  }

  updateAluno(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }

  deleteAluno(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  getAlunoList() {
    return this.http.get<Aluno[]>(`${this.baseUrl}/findAll`);
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

}