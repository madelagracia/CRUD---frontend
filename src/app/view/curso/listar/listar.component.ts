import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  displayedColumns: string[] = ['id', 'descricao','ementa', 'acoes'];
  cursos!: Curso[];
  

  constructor(private cursoService: CursoService, private router: Router) { }

  ngOnInit(): void {
    this.getCursoList();
  }

  getCursoList(): void {
    this.cursoService.getCursoList()
    .subscribe(cursos => this.cursos = cursos)
  }

  deleteCurso(id: number) {
    this.cursoService.deleteCurso(id)
      .subscribe(
        data => {
          console.log(data);
          this.getCursoList();
        },
        error => console.log(error));
  }

  getCurso(id: number){
    this.router.navigate(['detalhesCurso', id]);
  }                       

  updateCurso(id: number){
    this.router.navigate(['editarCurso', id]);
  }

}
