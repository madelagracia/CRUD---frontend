import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatriculaComponent } from './view/matricula/matricula.component';
import { AlunoComponent } from './view/aluno/aluno.component';
import { CursoComponent } from './view/curso/curso.component';
import { DetalhesComponent } from './view/aluno/detalhes/detalhes.component';
import { EditarComponent } from './view/aluno/editar/editar.component';
import { ListarComponent } from './view/aluno/listar/listar.component';
import { NovoComponent } from './view/aluno/novo/novo.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'matricula', component: MatriculaComponent },
  { path: 'curso', component: CursoComponent },
  { path: 'aluno', component: AlunoComponent },
  { path: 'aluno', component: AlunoComponent },
  { path: 'detalhesAluno', component: DetalhesComponent },
  { path: 'editarAluno', component: EditarComponent },
  { path: 'listarAluno', component: ListarComponent },
  { path: 'novoAluno', component: NovoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
