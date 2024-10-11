import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { InputFieldComponent } from './input-component/input-component.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { OpcoesMenuLateralComponent } from './opcoes-menu-lateral/opcoes-menu-lateral.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [ButtonComponent, InputFieldComponent, MenuLateralComponent, OpcoesMenuLateralComponent, SelectComponent],
  imports: [CommonModule,RouterModule,],
  exports: [ButtonComponent, InputFieldComponent,MenuLateralComponent,SelectComponent]
})
export class SharedComponentModule {}
