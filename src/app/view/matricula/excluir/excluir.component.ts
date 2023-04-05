import { Component, OnInit } from '@angular/core';
import { Matricula } from '../matricula';
import { Router, ActivatedRoute } from '@angular/router';
import { MatriculaService } from '../matricula.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {
  matricula!: Matricula;

  constructor(
    private matriculaService: MatriculaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.matriculaService.getMatricula(this.route.snapshot.params['id']).subscribe((matricula) => {
      this.matricula = matricula;
    });
  }

  deleteMatricula(): void {
    this.matriculaService.deleteMatricula(this.matricula.id).subscribe(() => {
      this.matriculaService.showMessage("Matricula excluida com sucesso!");
      this.router.navigate(["/matricula"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/matricula"]);
  }
}
