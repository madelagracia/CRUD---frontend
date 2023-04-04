import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatriculaComponent } from './view/matricula/matricula.component';
import { AlunoComponent } from './view/aluno/aluno.component';
import { CursoComponent } from './view/curso/curso.component';
import { DetalhesComponent } from './view/aluno/detalhes/detalhes.component';
import { EditarComponent } from './view/aluno/editar/editar.component';
import { ListarComponent } from './view/aluno/listar/listar.component';
import { NovoComponent } from './view/aluno/novo/novo.component';
import { ExcluirComponent } from './view/aluno/excluir/excluir.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'matricula', component: MatriculaComponent },
  { path: 'curso', component: CursoComponent },
  {
    path: 'aluno', component: AlunoComponent,
    children: [
      { path: '', component: ListarComponent },
      {
        path: 'detalhesAluno',
        children: [
          { path: ':id', component: DetalhesComponent }
        ]
      },
      {
        path: 'editarAluno',
        children: [
          { path: ':id', component: EditarComponent }
        ]
      },
      {
        path: 'deletarAluno',
        children: [
          { path: ':id', component: ExcluirComponent }
        ]
      },
      { path: 'novoAluno', component: NovoComponent }
    ]
  }
]




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
