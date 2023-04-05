import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id!: number;
  curso!: Curso;

  constructor(private route: ActivatedRoute, private router: Router,
    private cursoService: CursoService) { }

  ngOnInit() {
    this.cursoService.getCurso(this.route.snapshot.params['id']).subscribe((curso) => {
      this.curso = curso;
    });
  }

  updateCurso(id:number, curso:Curso) {
    this.cursoService.updateCurso(id, curso)
    .subscribe((response) => {
      this.router.navigate(['/curso'])
    })
    
  }

  onSubmit() {
    this.updateCurso(this.curso.id, this.curso);
  }

  gotoList() {
    this.router.navigate(['/curso']);
  }
}
