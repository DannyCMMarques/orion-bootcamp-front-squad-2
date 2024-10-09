import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaInicialComponent } from './pages/tela-inicial/tela-inicial.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'tela-inicial', component: TelaInicialComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'tela-inicial' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
