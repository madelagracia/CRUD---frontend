import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {
  aluno!: Aluno;

  constructor(
    private alunoService: AlunoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.alunoService.getAluno(this.route.snapshot.params['id']).subscribe((aluno) => {
      this.aluno = aluno;
    });
  }

  deleteProduct(): void {
    this.alunoService.deleteAluno(this.aluno.id).subscribe(() => {
      this.alunoService.showMessage("Aluno excluido com sucesso!");
      this.router.navigate(["/aluno"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/aluno"]);
  }
}

