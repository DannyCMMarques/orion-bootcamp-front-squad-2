import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { SharedComponentModule } from './../../../shared/components/shared-component.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularToastifyModule,
    SharedComponentModule
  ],
  providers: [ToastService],
})
export class LoginModule {}
