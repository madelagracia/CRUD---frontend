import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatriculaComponent } from './view/matricula/matricula.component';
import { AlunoComponent } from './view/aluno/aluno.component';
import { CursoComponent } from './view/curso/curso.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'matricula', component: MatriculaComponent },
  { path: 'curso', component: CursoComponent },
  { path: 'aluno', component: AlunoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
