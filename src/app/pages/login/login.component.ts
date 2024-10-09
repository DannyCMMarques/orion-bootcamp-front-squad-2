import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastService } from 'angular-toastify';
import { MESSAGES } from 'src/utils/messages/messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  message = MESSAGES;

  formulario: any = this.formBuilder.group({
    password: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
  });

  showError = false;

  constructor(
    private formBuilder: FormBuilder,
    private _toastService: ToastService
  ) {}

  addInfoToast() {
    this._toastService.error('Ocorreu um erro');
  }

  submit() {
    this.formulario.markAllAsTouched();
    if (this.formulario.valid) {
      this.reset();
    }
  }

  reset() {
    this.formulario.reset();
  }
}
