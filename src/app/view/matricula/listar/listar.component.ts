import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Matricula } from '../matricula';
import { MatriculaService } from '../matricula.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  displayedColumns: string[] = ['id', 'id_curso', 'id_aluno','acoes'];
  matricula!: Matricula[];
  

  constructor(private matriculaService: MatriculaService, private router: Router) { }

  ngOnInit(): void {
    this.getMatriculaList();
  }

  getMatriculaList(): void {
    this.matriculaService.getMatriculaList()
    .subscribe(matricula => this.matricula = matricula)
  }

  deleteMatricula(id: number) {
    this.matriculaService.deleteMatricula(id)
      .subscribe(
        data => {
          console.log(data);
          this.getMatriculaList();
        },
        error => console.log(error));
  }

  getMatricula(id: number){
    this.router.navigate(['detalhesMatricula', id]);
  }                  
}
