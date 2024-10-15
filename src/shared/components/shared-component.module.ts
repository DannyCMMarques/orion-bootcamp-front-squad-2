import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonTelaInicialComponent } from './button-tela-inicial/button-tela-inicial.component';
import { ButtonComponent } from './button/button.component';
import { ContentTelaComponent } from './content-tela/content-tela.component';
import { FormularioEstudanteComponent } from './formulario-estudante/formulario-estudante.component';
import { ImagemTelaComponent } from './imagem-tela/imagem-tela.component';
import { InputFieldComponent } from './input-component/input-component.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { OpcoesMenuLateralComponent } from './opcoes-menu-lateral/opcoes-menu-lateral.component';
import { SelectComponent } from './select/select.component';

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
    FormularioEstudanteComponent
  ],
  imports: [CommonModule, RouterModule,ReactiveFormsModule],
  exports: [
    ButtonComponent,
    InputFieldComponent,
    MenuLateralComponent,
    ImagemTelaComponent,
    ContentTelaComponent,
    ButtonTelaInicialComponent,
    SelectComponent,
    FormularioEstudanteComponent

  ],
})
export class SharedComponentModule {}
