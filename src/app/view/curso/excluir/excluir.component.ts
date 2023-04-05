import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {
  curso!: Curso;

  constructor(
    private cursoService: CursoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cursoService.getCurso(this.route.snapshot.params['id']).subscribe((curso) => {
      this.curso = curso;
    });
  }

  deleteCurso(): void {
    this.cursoService.deleteCurso(this.curso.id).subscribe(() => {
      this.cursoService.showMessage("Curso excluido com sucesso!");
      this.router.navigate(["/curso"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/curso"]);
  }
}
