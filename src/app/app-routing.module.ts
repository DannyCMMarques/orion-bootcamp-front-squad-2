import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import { LoginProfessorComponent } from './pages/login-professor/login-professor.component';
import { LoginResponsavelComponent } from './pages/login-responsavel/login-responsavel.component';

const routes: Routes = [
  { path: 'tela-inicial', component: TelaInicialComponent },
  { path: 'login-professor', component: LoginProfessorComponent },
  { path: 'login-responsavel', component: LoginResponsavelComponent },
  // { path: 'login-administrador', component: "LoginAdministradorComponent" },
  { path: '**', redirectTo: 'tela-inicial' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
