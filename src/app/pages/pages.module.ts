import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { SharedComponentModule } from 'src/shared/components/shared-component.module';
import { LoginComponent } from './login/login.component';
import { PageExibirCadastrosComponent } from './page-exibir-cadastros/page-exibir-cadastros.component';
import { PagesCadatrarComponent } from './pages-cadatrar/pages-cadatrar.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaResponsavelComponent } from './tela-responsavel/tela-responsavel.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Necessário para animações
import { MatMenuModule } from '@angular/material/menu'; // Para o menu
import { MatIconModule } from '@angular/material/icon'; // Para os ícones
import { MatButtonModule } from '@angular/material/button'; // Para o botão

@NgModule({
  declarations: [
    LoginComponent,
    PageExibirCadastrosComponent,
    PagesCadatrarComponent,
    TelaInicialComponent,
    TelaResponsavelComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularToastifyModule,
    SharedComponentModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  providers: [ToastService],
})
export class PagesModule {}
