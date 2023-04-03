import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';
import { alunoService } from '../aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  aluno: Aluno = {
    nome: '',
    
  }

  constructor(private alunoService: alunoService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createAluno(): void {
    this.alunoService.createAluno(this.aluno).subscribe(() => {
      this.alunoService.showMessage('Aluno criado!')
      this.router.navigate(['/aluno'])
    })

  }

  cancel(): void {
    this.router.navigate(['/aluno'])
  }
}


