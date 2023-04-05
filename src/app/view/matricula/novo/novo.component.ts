import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Matricula } from '../matricula';
import { MatriculaService } from '../matricula.service';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  matricula: Matricula = {
    id_curso: 0,
    id_aluno: 0,
    id: 0
  }

  constructor(private matriculaService: MatriculaService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createMatricula(): void {
    this.matriculaService.createMatricula(this.matricula).subscribe(() => {
      this.matriculaService.showMessage('Matricula criada!')
      this.router.navigate(['/matricula'])
    })

  }

  cancel(): void {
    this.router.navigate(['/matricula'])
  }
}
