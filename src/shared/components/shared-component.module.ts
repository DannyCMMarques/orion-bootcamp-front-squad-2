import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { InputFieldComponent } from './input-component/input-component.component';

@NgModule({
  declarations: [ButtonComponent, InputFieldComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, InputFieldComponent]
})
export class SharedComponentModule {}
