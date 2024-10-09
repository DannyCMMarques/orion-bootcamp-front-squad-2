import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmProfessoresComponent } from './pages/adm-professores/adm-professores.component';

const routes: Routes = [{
  path:"adm-professores", component:AdmProfessoresComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
