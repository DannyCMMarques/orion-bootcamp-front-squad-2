import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'src/shared/services/auth-guard.guard';
import { LoginComponent } from './login/login.component';
import { PageExibirCadastrosComponent } from './page-exibir-cadastros/page-exibir-cadastros.component';
import { PagesCadatrarComponent } from './pages-cadatrar/pages-cadatrar.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';

const routes: Routes = [
  { path: '', redirectTo: '/tela-inicial', pathMatch: 'full' },
  { path: 'tela-inicial', component: TelaInicialComponent },
  { path: 'login', component: LoginComponent },
  {path: 'tela-principal', component: TelaPrincipalComponent},
  {
    path: 'cadastrados/:type',
    component: PageExibirCadastrosComponent,
    canActivate: [authGuard],
  },
  {
    path: 'cadastrar/:type',
    component: PagesCadatrarComponent,
    canActivate: [authGuard],
  },
  {
    path: 'tela-principal',
    component: TelaPrincipalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
