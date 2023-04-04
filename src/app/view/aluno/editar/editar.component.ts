import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../aluno';
import { AlunoService} from '../aluno.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id!: number;
  aluno!: Aluno;

  constructor(private route: ActivatedRoute,private router: Router,
    private alunoService: AlunoService) { }

  ngOnInit() {
    this.alunoService.getAluno(this.route.snapshot.params['id']).subscribe((aluno) => {
      this.aluno = aluno;

    });
  
    
    this.alunoService.getAluno(this.id)
      .subscribe(data => {
        console.log(data)
        this.aluno = data;
      }, error => console.log(error));
  }

  updateAluno() {
    this.alunoService.updateAluno(this.id, this.aluno)
      .subscribe(data => {
        console.log(data);
        this.aluno = this.aluno;
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateAluno();    
  }

  gotoList() {
    this.router.navigate(['/aluno']);
  }
}


