import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaPrincipalComponent } from './pages/tela-principal/tela-principal.component';

const routes: Routes = [{
  path: 'tela-principal', component: TelaPrincipalComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
