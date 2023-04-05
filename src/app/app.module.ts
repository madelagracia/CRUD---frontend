
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { CursoComponent } from './view/curso/curso.component';
import { MatriculaComponent } from './view/matricula/matricula.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './template/footer/footer.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AlunoComponent } from './view/aluno/aluno.component';
import { NavComponent } from './template/nav/nav.component';
import { NovoComponent } from './view/aluno/novo/novo.component';
import { ExcluirComponent } from './view/aluno/excluir/excluir.component';
import { DetalhesComponent } from './view/aluno/detalhes/detalhes.component';
import { ListarComponent } from './view/aluno/listar/listar.component';
import { EditarComponent } from './view/aluno/editar/editar.component';
import { DetalhesComponent as DetalheCurso } from './view/curso/detalhes/detalhes.component';
import { EditarComponent as EditarCurso } from './view/curso/editar/editar.component';
import { ListarComponent as ListarCurso } from './view/curso/listar/listar.component';
import { NovoComponent as NovoCurso } from './view/curso/novo/novo.component';
import { ExcluirComponent as ExcluirCurso} from './view/curso/excluir/excluir.component';


@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    AlunoComponent,
    MatriculaComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    NovoComponent,
    ExcluirComponent,
    DetalhesComponent,
    ListarComponent,
    EditarComponent,
    NovoCurso,
    ExcluirCurso,
    DetalheCurso,
    ListarCurso,
    EditarCurso,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
