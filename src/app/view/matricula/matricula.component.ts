import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit {
  submitted: boolean | undefined;
  matricula: any;
  MatriculaService: any;

    
    ngOnInit(): void {
  }
}
