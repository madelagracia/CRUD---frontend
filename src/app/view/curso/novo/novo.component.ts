import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  curso: Curso = {
    descricao: '',
    ementa: '',
    id: 0
  }

  constructor(private cursoService: CursoService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createCurso(): void {
    this.cursoService.createCurso(this.curso).subscribe(() => {
      this.cursoService.showMessage('Curso criado!')
      this.router.navigate(['/curso'])
    })

  }

  cancel(): void {
    this.router.navigate(['/curso'])
  }
}

