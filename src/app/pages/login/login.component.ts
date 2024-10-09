import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { LoginCadastroService } from 'src/shared/services/login-cadastro.service';
import { setAuthToken } from 'src/utils/helpers/helpers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public userRole='Administrador'
  public isAutorizaded = false;
  public formulario = this.formBuilder.group({
  password: [null, [Validators.required]],
    email: [null, [Validators.required]],
  });
  public showError = false;
  errorvalidacao =
    this.formulario.get('password')?.invalid &&
    this.formulario.get('password')?.touched;
  constructor(
    private formBuilder: FormBuilder,
    private _toastService: ToastService,
    private loginCadastroService: LoginCadastroService,
    private router: Router
  ) {}

  private addInfoToast() {
    this._toastService.error('Ocorreu um erro');
  }

 public submit() {
    this.formulario.markAllAsTouched();

    if (this.formulario.valid) {
      this.loginCadastroService
        .loginAdministradores(this.formulario.value)
        .subscribe({
          next: (response) => {
            if (response && response.body.access_token) { //  TODO:Mudar quando tiver a api
              setAuthToken(
                response.body.access_token//  TODO:Mudar quando tiver a api
              );
              localStorage.setItem('role', this.userRole);
              this.isAutorizaded = true;
              this.showError = false;
              this.router.navigate(['/']); //TODO:mudar quando tiver a rota da pagina principaç
            }
          },
          error: (error) => {
            if (error.status === 401) { //  TODO:Mudar quando tiver a api
              this.isAutorizaded = false;
              this.showError = true;
              console.error('Unauthorized access - 401');
            } else {
              console.error('Unexpected error:', error);
              this.addInfoToast();
            }
          },
        });

      this.reset();
    }
  }

 private reset() {
    this.formulario.reset();
  }
}
