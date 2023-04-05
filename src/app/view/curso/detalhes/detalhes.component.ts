import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  id!: number;
  curso!: Curso;

  constructor(private route: ActivatedRoute, private router: Router,
    private cursoService: CursoService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id'])
    this.cursoService.getCurso(this.route.snapshot.params['id'])
    .subscribe((curso) => {
      this.curso = curso;
    });
  }

}
