import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { ButtonTelaInicialComponent } from './button-tela-inicial/button-tela-inicial.component';
import { ButtonComponent } from './button/button.component';
import { ContentTelaComponent } from './content-tela/content-tela.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormularioEstudanteComponent } from './formulario-estudante/formulario-estudante.component';
import { FormularioTurmasComponent } from './formulario-turmas/formulario-turmas.component';
import { ImagemTelaComponent } from './imagem-tela/imagem-tela.component';
import { InputFieldComponent } from './input-component/input-component.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { OpcoesMenuLateralComponent } from './opcoes-menu-lateral/opcoes-menu-lateral.component';
import { SelectComponent } from './select/select.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon'; // Para os ícones

@NgModule({
  declarations: [
    ButtonComponent,
    InputFieldComponent,
    MenuLateralComponent,
    OpcoesMenuLateralComponent,
    ImagemTelaComponent,
    ContentTelaComponent,
    ButtonTelaInicialComponent,
    SelectComponent,
    FormularioEstudanteComponent,
    DialogComponent,
    FormularioTurmasComponent,
    ProgressBarComponent
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, AngularToastifyModule,MatSnackBarModule,
    MatProgressBarModule,
    MatIconModule
  ],
  exports: [
    ButtonComponent,
    InputFieldComponent,
    MenuLateralComponent,
    ImagemTelaComponent,
    ContentTelaComponent,
    ButtonTelaInicialComponent,
    SelectComponent,
    FormularioEstudanteComponent,
    DialogComponent,
    FormularioTurmasComponent,
    ProgressBarComponent

  ],
  providers:[
    ToastService
  ]
})
export class SharedComponentModule{}
