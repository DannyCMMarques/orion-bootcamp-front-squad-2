import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmAlunosComponent } from './adm-alunos/adm-alunos.component';
import { AdmProfessoresComponent } from './adm-professores/adm-professores.component';
import { AdmTurmasComponent } from './adm-turmas/adm-turmas.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{
  path: 'professores-cadastrados', component: AdmProfessoresComponent, //canActivate: [authGuard],
   data: {
    roles: ['Administrador']
  }
},
{
  path: 'alunos-cadastrados', component: AdmAlunosComponent, //canActivate: [authGuard],
  data: {
    roles: ['Professor']
  }
},
{
  path: 'turmas-cadastradas', component: AdmTurmasComponent, //canActivate: [authGuard],
  data: {
    roles: ['Administrador', 'Professor']
  }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
