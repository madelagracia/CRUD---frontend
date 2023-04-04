import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  id!: number;
  aluno!: Aluno;

  constructor(private route: ActivatedRoute, private router: Router,
    private alunoService: AlunoService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id'])
    this.alunoService.getAluno(this.route.snapshot.params['id'])
    .subscribe((aluno) => {
      this.aluno = aluno;
    });
  }

}


