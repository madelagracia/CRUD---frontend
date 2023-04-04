import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  submitted: boolean | undefined;
  aluno: any;
  AlunoService: any;

    
    ngOnInit(): void {
  }
}
