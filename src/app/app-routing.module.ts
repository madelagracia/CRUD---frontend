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
import { DetalhesComponent as DetalheCurso } from './view/curso/detalhes/detalhes.component';
import { EditarComponent as EditarCurso} from './view/curso/editar/editar.component';
import { ListarComponent as ListarCurso } from './view/curso/listar/listar.component';
import { NovoComponent as NovoCurso } from './view/curso/novo/novo.component';
import { ExcluirComponent as ExcluirCurso } from './view/curso/excluir/excluir.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'matricula', component: MatriculaComponent },
  {
    path: 'curso', component: CursoComponent,
    children: [
      { path: '', component: ListarCurso },
      {
        path: 'detalhesCurso',
        children: [
          { path: ':id', component: DetalheCurso }
        ]
      },
      {
        path: 'editarCurso',
        children: [
          { path: ':id', component: EditarCurso }
        ]
      },
      {
        path: 'deletarCurso',
        children: [
          { path: ':id', component: ExcluirCurso }
        ]
      },
      { path: 'novoCurso', component: NovoCurso }
    ]
  },
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
