import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { ButtonComponentModule } from 'src/shared/components/button/button.module';
import { InputComponentModule } from 'src/shared/components/input-component/input-component.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    InputComponentModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonComponentModule,
     AngularToastifyModule,
  ],
  providers: [ToastService]
})
export class LoginModule {}
