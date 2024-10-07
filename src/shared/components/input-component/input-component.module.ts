import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputFieldComponent } from './input-component.component';

@NgModule({
  declarations: [InputFieldComponent],
  imports: [CommonModule],
  exports: [InputFieldComponent]
})
export class InputComponentModule {}
