import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { SharedComponentModule } from 'src/shared/components/shared-component.module';
import { LoginComponent } from './login/login.component';
import { PageExibirCadastrosComponent } from './page-exibir-cadastros/page-exibir-cadastros.component';
import { PagesCadatrarComponent } from './pages-cadatrar/pages-cadatrar.component';

@NgModule({
  declarations: [LoginComponent, PageExibirCadastrosComponent, PagesCadatrarComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularToastifyModule,
    SharedComponentModule
  ],
  providers: [ToastService],
})
export class PagesModule {}
