import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { alunoService } from './aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  submitted: boolean | undefined;
  aluno: any;
  AlunoService: any;


  constructor(private alunoService: alunoService,
    private router: Router) { }
    
    ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

 
}
