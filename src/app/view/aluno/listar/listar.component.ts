import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'acoes'];
  alunos!: Aluno[];
  

  constructor(private alunoService: AlunoService, private router: Router) { }

  ngOnInit(): void {
    this.getAlunoList();
  }

  getAlunoList(): void {
    this.alunoService.getAlunoList()
    .subscribe(alunos => this.alunos = alunos)
  }

  deleteAluno(id: number) {
    this.alunoService.deleteAluno(id)
      .subscribe(
        data => {
          console.log(data);
          this.getAlunoList();
        },
        error => console.log(error));
  }

  getAluno(id: number){
    this.router.navigate(['detalhesAluno', id]);
  }                       

  updateAluno(id: number){
    this.router.navigate(['editarAluno', id]);
  }

}
