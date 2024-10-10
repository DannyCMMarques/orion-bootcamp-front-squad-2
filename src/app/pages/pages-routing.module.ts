import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from 'src/shared/services/auth-guard.guard';
import { LoginComponent } from './login/login.component';
import { PageExibirCadastrosComponent } from './page-exibir-cadastros/page-exibir-cadastros.component';
import { PagesCadatrarComponent } from './pages-cadatrar/pages-cadatrar.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{
  path: 'cadastrados/:type', component: PageExibirCadastrosComponent, canActivate: [authGuard],
},
{
  path: 'cadastrar/:type', component: PagesCadatrarComponent,canActivate:[authGuard]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
