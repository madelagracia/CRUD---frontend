import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../aluno';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id!: number;
  aluno!: Aluno;

  constructor(private route: ActivatedRoute, private router: Router,
    private alunoService: AlunoService) { }

  ngOnInit() {
    this.alunoService.getAluno(this.route.snapshot.params['id']).subscribe((aluno) => {
      this.aluno = aluno;
    });
  }

  updateAluno(id:number, aluno:Aluno) {
    this.alunoService.updateAluno(id, aluno)
    .subscribe((response) => {
      this.router.navigate(['/aluno'])
    })
    
  }

  onSubmit() {
    this.updateAluno(this.aluno.id, this.aluno);
  }

  gotoList() {
    this.router.navigate(['/aluno']);
  }
}


